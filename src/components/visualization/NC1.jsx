import React, { useState, useEffect, useCallback } from 'react';

const NC1Explanation = () => {
  const [withinClassVar, setWithinClassVar] = useState(0.5); // 0 = low variance, 1 = high variance
  const [betweenClassVar, setBetweenClassVar] = useState(0); // 0 = close centers, 1 = distant centers
  const [showCovariances, setShowCovariances] = useState(true);
  const [selectedClass, setSelectedClass] = useState(null);
  
  // Constants for visualization
  const classes = ['Class A', 'Class B', 'Class C'];
  const colors = ['#FF6B6B', '#FFFF00', '#45B7D1'];
  const pointsPerClass = 10;
  const width = 600;
  const height = 400;
  const padding = 50;
  
  // Generate points for each class
  const generatePoints = useCallback(() => {
    const points = [];
    
    // Global mean in the center of the canvas
    const globalMean = [width/2, height/2];
    
    // Adjust spread of class centers based on betweenClassVar
    const spreadFactor = 50 + 150 * betweenClassVar;
    
    // Class centers are positioned around the global mean
    const baseClassCenter = [
      [globalMean[0] - spreadFactor, globalMean[1] - spreadFactor/2],
      [globalMean[0] + spreadFactor, globalMean[1] - spreadFactor/2],
      [globalMean[0], globalMean[1] + spreadFactor]
    ];
    
    for (let c = 0; c < classes.length; c++) {
      const center = baseClassCenter[c];
      
      // Scale scatter based on withinClassVar
      const scatterFactor = 40 + 100 * withinClassVar;
      
      for (let i = 0; i < pointsPerClass; i++) {
        // Generate points with scatter around center
        const angle = (i / pointsPerClass) * Math.PI * 2;
        const distance = 15 + Math.random() * scatterFactor;
        
        points.push({
          id: `${c}-${i}`,
          x: center[0] + Math.cos(angle) * distance * Math.random(),
          y: center[1] + Math.sin(angle) * distance * Math.random(),
          class: c
        });
      }
    }
    
    return points;
  }, [withinClassVar, betweenClassVar, width, height]);
  
  // Calculate class means and covariances
  const calculateClassStatistics = useCallback((points) => {
    const statistics = [];
    
    for (let c = 0; c < classes.length; c++) {
      const classPoints = points.filter(p => p.class === c);
      
      // Calculate class mean
      const meanX = classPoints.reduce((sum, p) => sum + p.x, 0) / classPoints.length;
      const meanY = classPoints.reduce((sum, p) => sum + p.y, 0) / classPoints.length;
      
      // Calculate covariance matrix
      let covXX = 0, covXY = 0, covYY = 0;
      
      classPoints.forEach(p => {
        const diffX = p.x - meanX;
        const diffY = p.y - meanY;
        
        covXX += diffX * diffX;
        covXY += diffX * diffY;
        covYY += diffY * diffY;
      });
      
      covXX /= classPoints.length;
      covXY /= classPoints.length;
      covYY /= classPoints.length;
      
      // Eigenvalues and eigenvectors for visualization
      const trace = covXX + covYY;
      const det = covXX * covYY - covXY * covXY;
      
      const lambda1 = (trace + Math.sqrt(trace * trace - 4 * det)) / 2;
      const lambda2 = (trace - Math.sqrt(trace * trace - 4 * det)) / 2;
      
      let theta = 0;
      if (covXX !== covYY) {
        theta = 0.5 * Math.atan2(2 * covXY, covXX - covYY);
      }
      
      statistics.push({
        mean: { x: meanX, y: meanY },
        covariance: { xx: covXX, xy: covXY, yy: covYY },
        eigenvalues: [lambda1, lambda2],
        angle: theta,
        trace: covXX + covYY
      });
    }
    
    return statistics;
  }, [classes.length]);
  
  // Calculate global mean and between-class covariance
  const calculateGlobalStatistics = useCallback((points, classStats) => {
    // Global mean
    const meanX = points.reduce((sum, p) => sum + p.x, 0) / points.length;
    const meanY = points.reduce((sum, p) => sum + p.y, 0) / points.length;
    
    // Between-class covariance
    let covXX = 0, covXY = 0, covYY = 0;
    
    classStats.forEach(stat => {
      const diffX = stat.mean.x - meanX;
      const diffY = stat.mean.y - meanY;
      
      covXX += diffX * diffX;
      covXY += diffX * diffY;
      covYY += diffY * diffY;
    });
    
    covXX /= classes.length;
    covXY /= classes.length;
    covYY /= classes.length;
    
    // Eigenvalues and vectors
    const trace = covXX + covYY;
    const det = covXX * covYY - covXY * covXY;
    
    const lambda1 = (trace + Math.sqrt(trace * trace - 4 * det)) / 2;
    const lambda2 = (trace - Math.sqrt(trace * trace - 4 * det)) / 2;
    
    let theta = 0;
    if (covXX !== covYY) {
      theta = 0.5 * Math.atan2(2 * covXY, covXX - covYY);
    }
    
    return {
      mean: { x: meanX, y: meanY },
      covariance: { xx: covXX, xy: covXY, yy: covYY },
      eigenvalues: [lambda1, lambda2],
      angle: theta,
      trace: covXX + covYY
    };
  }, [classes.length]);
  
  // Calculate NC1 metric
  const calculateNC1 = useCallback((classStats, globalStats) => {
    // Average within-class trace
    const avgWithinTrace = classStats.reduce((sum, stat) => sum + stat.trace, 0) / classStats.length;
    
    // Ratio of within-class to between-class variance
    const nc1 = avgWithinTrace / (globalStats.trace || 1);
    return nc1;
  }, []);
  
  // Generate points and calculate statistics
  const [points, setPoints] = useState([]);
  const [classStats, setClassStats] = useState([]);
  const [globalStats, setGlobalStats] = useState(null);
  const [nc1, setNC1] = useState(0);
  
  useEffect(() => {
    const generatedPoints = generatePoints();
    setPoints(generatedPoints);
    
    const stats = calculateClassStatistics(generatedPoints);
    setClassStats(stats);
    
    const global = calculateGlobalStatistics(generatedPoints, stats);
    setGlobalStats(global);
    
    const nc1Value = calculateNC1(stats, global);
    setNC1(nc1Value);
  }, [generatePoints, calculateClassStatistics, calculateGlobalStatistics, calculateNC1, withinClassVar, betweenClassVar]);
  
  // Draw ellipse for covariance visualization
  const renderCovarianceEllipse = (center, eigenvalues, angle, scale = 1) => {
    const a = Math.sqrt(Math.max(0.1, eigenvalues[0])) * scale;
    const b = Math.sqrt(Math.max(0.1, eigenvalues[1])) * scale;
    
    // Ellipse points
    const points = [];
    for (let i = 0; i <= 360; i += 10) {
      const radian = i * Math.PI / 180;
      const x = center.x + a * Math.cos(radian) * Math.cos(angle) - b * Math.sin(radian) * Math.sin(angle);
      const y = center.y + a * Math.cos(radian) * Math.sin(angle) + b * Math.sin(radian) * Math.cos(angle);
      points.push(`${x},${y}`);
    }
    
    return <polygon points={points.join(' ')} fill="none" />;
  };
  
  return (
    <div className="bg-dark bg-opacity-40 p-8 rounded-xl border border-gray-800 backdrop-filter backdrop-blur-sm">
      <h2 className="text-3xl font-bold mb-4">
        <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          Understanding NC1 Neural Collapse Metric
        </span>
      </h2>
      <p className="text-gray-300 mb-8">
        NC1 measures the ratio of within-class variability to between-class separation.
        Lower values indicate stronger NC1 Collapse.
      </p>
      
      <div className="flex flex-wrap gap-6 mb-8">
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-white">Within-Class Variability:</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={withinClassVar}
            onChange={(e) => setWithinClassVar(parseFloat(e.target.value))}
            className="w-64 h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
          />
          <div className="flex justify-between text-sm text-gray-400 w-64 mt-1">
            <span>Tight Clusters</span>
            <span>Spread Out</span>
          </div>
        </div>
        
        <div className="flex flex-col">
          <label className="mb-2 font-medium text-white">Between-Class Separation:</label>
          <input
            type="range"
            min="0"
            max="1"
            step="0.01"
            value={betweenClassVar}
            onChange={(e) => setBetweenClassVar(parseFloat(e.target.value))}
            className="w-64 h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
          />
          <div className="flex justify-between text-sm text-gray-400 w-64 mt-1">
            <span>Close Together</span>
            <span>Far Apart</span>
          </div>
        </div>
        
        <div className="flex items-center">
          <label className="flex items-center gap-2 text-white">
            <input
              type="checkbox"
              checked={showCovariances}
              onChange={() => setShowCovariances(!showCovariances)}
              className="w-4 h-4 rounded bg-gray-700 border-none focus:ring-primary"
            />
            Show Covariance Ellipses
          </label>
        </div>
      </div>
      
      <div className="mb-8 flex flex-col md:flex-row gap-6">
        <div className="bg-dark-deep bg-opacity-70 rounded-lg p-6 border border-gray-700 overflow-auto">
          <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`}>
            {/* Grid lines */}
            {[...Array(11)].map((_, i) => (
              <line 
                key={`grid-v-${i}`}
                x1={i * (width / 10)} 
                y1={0} 
                x2={i * (width / 10)} 
                y2={height} 
                stroke="#334155" 
                strokeWidth="1" 
                opacity="0.3"
              />
            ))}
            {[...Array(8)].map((_, i) => (
              <line 
                key={`grid-h-${i}`}
                x1={0} 
                y1={i * (height / 7)} 
                x2={width} 
                y2={i * (height / 7)} 
                stroke="#334155" 
                strokeWidth="1" 
                opacity="0.3"
              />
            ))}
            
            {/* Class points */}
            {points.map((point) => (
              <circle
                key={point.id}
                cx={point.x}
                cy={point.y}
                r={selectedClass === point.class ? 6 : 4}
                fill={selectedClass !== null && selectedClass !== point.class ? "#4a5568" : colors[point.class]}
                opacity={selectedClass !== null && selectedClass !== point.class ? 0.3 : 0.7}
              />
            ))}
            
            {/* Lines connecting class means */}
            {classStats.map((stat1, i) => 
              classStats.map((stat2, j) => {
                if (i < j) {
                  return (
                    <line
                      key={`line-${i}-${j}`}
                      x1={stat1.mean.x}
                      y1={stat1.mean.y}
                      x2={stat2.mean.x}
                      y2={stat2.mean.y}
                      stroke="#717e95"
                      strokeWidth="1"
                      strokeDasharray="4"
                      opacity="0.5"
                    />
                  );
                }
                return null;
              })
            )}
            
            {/* Class means */}
            {classStats.map((stat, i) => (
              <g key={`class-${i}`} 
                 onClick={() => setSelectedClass(selectedClass === i ? null : i)}
                 style={{cursor: 'pointer'}}>
                <circle
                  cx={stat.mean.x}
                  cy={stat.mean.y}
                  r={10}
                  fill={colors[i]}
                  stroke="#121420"
                  strokeWidth="2"
                />
                
                {showCovariances && (
                  <g stroke={colors[i]} strokeWidth="1.5" opacity="0.7">
                    {renderCovarianceEllipse(stat.mean, stat.eigenvalues, stat.angle, 2)}
                  </g>
                )}
              </g>
            ))}
            
            {/* Global mean */}
            {globalStats && (
              <g>
                <circle
                  cx={globalStats.mean.x}
                  cy={globalStats.mean.y}
                  r={12}
                  fill="#9f7aea"
                  stroke="#121420"
                  strokeWidth="2"
                />
                
                {showCovariances && (
                  <g stroke="#9f7aea" strokeWidth="1.5" opacity="0.5">
                    {renderCovarianceEllipse(globalStats.mean, globalStats.eigenvalues, globalStats.angle, 2)}
                  </g>
                )}
              </g>
            )}
          </svg>
        </div>
        
        <div className="flex flex-col justify-between">
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">
              NC<sub>1</sub> = <span className="text-primary">{nc1.toFixed(3)}</span>
            </h3>
            
            <div className="mb-6">
              <p className="font-medium text-white mb-2">Interpretation:</p>
              {nc1 < 0.3 ? (
                <p className="text-green-400">Strong NC1 - features are well separated by class</p>
              ) : nc1 < 0.7 ? (
                <p className="text-yellow-400">Partial NC1 - some class separation but with overlap</p>
              ) : (
                <p className="text-red-400">Weak or no NC1 - high within-class variance relative to between-class separation</p>
              )}
            </div>
            
            <div className="bg-dark-light bg-opacity-30 p-4 rounded-lg border border-gray-700">
              <h4 className="font-medium mb-2 text-white">NC<sub>1</sub> Formula:</h4>
              <p className="mb-4 text-primary">NC₁(H) = Tr(Σᵂ(H))/Tr(Σᴮ(H))</p>
              
              <p className="text-sm text-gray-300 mb-2">Where:</p>
              <ul className="text-sm text-gray-300 space-y-1 list-disc pl-5">
                <li>Σᵂ(H) = Within-class covariance (variance of features within each class)</li>
                <li>Σᴮ(H) = Between-class covariance (variance of class means)</li>
                <li>Tr() = Matrix trace (sum of diagonal elements)</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6">
            <p className="text-sm text-gray-400">
              Click on any class mean to highlight that class. Adjust the sliders to see how 
              both factors affect the NC1 metric.
            </p>
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-dark-light bg-opacity-20 p-4 rounded-lg border border-gray-700">
          <h3 className="font-medium mb-2 text-primary">Within-Class Covariance</h3>
          <p className="text-sm text-gray-300 mb-4">
            Measures how spread out the features are within each class. During NC1, 
            this value approaches zero as features within each class converge to their mean.
          </p>
          
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
            </div>
            <p className="text-gray-300">Small ellipses = Low within-class variance (features clustered around class mean)</p>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="w-6 h-6 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-red-500"></div>
            </div>
            <p className="text-gray-300">Large ellipses = High within-class variance (features spread out)</p>
          </div>
        </div>
        
        <div className="bg-dark-light bg-opacity-20 p-4 rounded-lg border border-gray-700">
          <h3 className="font-medium mb-2 text-secondary">Between-Class Covariance</h3>
          <p className="text-sm text-gray-300 mb-4">
            Measures separation between class means. During neural collapse, 
            class means form an equiangular tight frame (ETF), maximizing their separation.
          </p>
          
          <div className="flex items-center gap-2">
            <div className="w-24 h-6">
              <svg viewBox="0 0 100 25" width="100%" height="100%">
                <circle cx="30" cy="12" r="5" fill="#FF6B6B" />
                <circle cx="50" cy="12" r="5" fill="#4ECDC4" />
                <circle cx="70" cy="12" r="5" fill="#45B7D1" />
              </svg>
            </div>
            <p className="text-gray-300">Class means close together = Low between-class separation</p>
          </div>
          
          <div className="flex items-center gap-2 mt-2">
            <div className="w-24 h-6">
              <svg viewBox="0 0 100 25" width="100%" height="100%">
                <circle cx="10" cy="12" r="5" fill="#FF6B6B" />
                <circle cx="50" cy="12" r="5" fill="#4ECDC4" />
                <circle cx="90" cy="12" r="5" fill="#45B7D1" />
              </svg>
            </div>
            <p className="text-gray-300">Class means far apart = High between-class separation</p>
          </div>
        </div>
      </div>
      
      <div className="mt-8 bg-gradient-to-r from-primary/10 to-tertiary/10 p-6 rounded-lg border border-primary/20">
        <h3 className="font-medium mb-2 text-white">NC1 in Graph Neural Networks</h3>
        <p className="text-gray-300">
          Unlike standard neural networks, graph neural networks often show only partial neural collapse
          constrained by the graph topology. The separate control of within-class and between-class
          variability helps visualize how different network architectures might behave during training.
        </p>
      </div>
    </div>
  );
};

export default NC1Explanation;