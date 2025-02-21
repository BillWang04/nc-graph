import React, { useState, useEffect, useMemo, useCallback } from 'react';

const NeuralCollapse3D = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [rotation, setRotation] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [lastMousePos, setLastMousePos] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  
  const numClasses = 3;
  const pointsPerClass = 20;
  const axisLength = 150;
  const gridSize = 30;
  const numGridLines = 10;

  // ETF vertices (target positions)
  const etfVertices = useMemo(() => {
    const radius = 100;
    return [
      [radius * Math.cos(0), radius * Math.sin(0), radius/2],
      [radius * Math.cos(2*Math.PI/3), radius * Math.sin(2*Math.PI/3), radius/2],
      [radius * Math.cos(4*Math.PI/3), radius * Math.sin(4*Math.PI/3), radius/2],
    ];
  }, []);

  // Generate initial random points
  const generateInitialPoints = useCallback(() => {
    const points = [];
    const scatter = 150;
    
    for (let c = 0; c < numClasses; c++) {
      for (let i = 0; i < pointsPerClass; i++) {
        points.push({
          id: `${c}-${i}`,
          x: (Math.random() - 0.5) * scatter * 2,
          y: (Math.random() - 0.5) * scatter * 2,
          z: (Math.random() - 0.5) * scatter * 2,
          class: c
        });
      }
    }
    return points;
  }, [numClasses, pointsPerClass]);

  const [points, setPoints] = useState(generateInitialPoints());

  const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1'];
  const etfColor = '#2ecc71';

  // Animation effect
  useEffect(() => {
    let interval;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsPlaying(false);
            return 100;
          }
          return prev + .7;
        });
      }, 50);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  // Auto-rotation effect
  useEffect(() => {
    let interval;
    if (autoRotate && !isDragging) {
      interval = setInterval(() => {
        setRotation(prev => ({
          x: prev.x + 0.01,
          y: prev.y + 0.005
        }));
      }, 50);
    }
    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  // Calculate current state of points and their means
  const calculateCurrentState = useCallback(() => {
    const t = progress / 100;
    
    // Move points towards their ETF targets
    const currentPoints = points.map(point => {
      const targetVertex = etfVertices[point.class];
      return {
        ...point,
        currentX: point.x * (1 - t) + targetVertex[0] * t,
        currentY: point.y * (1 - t) + targetVertex[1] * t,
        currentZ: point.z * (1 - t) + targetVertex[2] * t
      };
    });

    // Calculate means from current point positions
    const currentMeans = Array(numClasses).fill(0).map((_, c) => {
      const classPoints = currentPoints.filter(p => p.class === c);
      return {
        x: classPoints.reduce((sum, p) => sum + p.currentX, 0) / classPoints.length,
        y: classPoints.reduce((sum, p) => sum + p.currentY, 0) / classPoints.length,
        z: classPoints.reduce((sum, p) => sum + p.currentZ, 0) / classPoints.length
      };
    });

    return { currentPoints, currentMeans };
  }, [progress, points, etfVertices, numClasses]);

  const project3DTo2D = useCallback((x, y, z) => {
    const rotatedX = x * Math.cos(rotation.y) - z * Math.sin(rotation.y);
    const rotatedZ = x * Math.sin(rotation.y) + z * Math.cos(rotation.y);
    const rotatedY = y * Math.cos(rotation.x) - rotatedZ * Math.sin(rotation.x);

    const perspective = 500;
    const scale = perspective / (perspective + rotatedZ);
    
    return {
      x: rotatedX * scale,
      y: rotatedY * scale,
      z: rotatedZ
    };
  }, [rotation]);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setLastMousePos({ x: e.clientX, y: e.clientY });
    setAutoRotate(false);
  };

  const handleMouseMove = (e) => {
    if (isDragging) {
      const deltaX = e.clientX - lastMousePos.x;
      const deltaY = e.clientY - lastMousePos.y;
      
      setRotation(prev => ({
        x: prev.x + deltaY * 0.01,
        y: prev.y + deltaX * 0.01
      }));
      
      setLastMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const renderGrid = () => {
    const gridLines = [];
    for (let i = -numGridLines; i <= numGridLines; i++) {
      const pos = i * gridSize;
      
      // XY grid
      const xStart = project3DTo2D(-axisLength, pos, 0);
      const xEnd = project3DTo2D(axisLength, pos, 0);
      gridLines.push(
        <line key={`xy-x-${i}`}
          x1={xStart.x} y1={xStart.y}
          x2={xEnd.x} y2={xEnd.y}
          stroke="#ddd"
          strokeWidth="0.5"
          opacity="0.2"
        />
      );

      const yStart = project3DTo2D(pos, -axisLength, 0);
      const yEnd = project3DTo2D(pos, axisLength, 0);
      gridLines.push(
        <line key={`xy-y-${i}`}
          x1={yStart.x} y1={yStart.y}
          x2={yEnd.x} y2={yEnd.y}
          stroke="#ddd"
          strokeWidth="0.5"
          opacity="0.2"
        />
      );
    }
    return gridLines;
  };

  const renderAxes = () => {
    const origin = project3DTo2D(0, 0, 0);
    const xEnd = project3DTo2D(axisLength, 0, 0);
    const yEnd = project3DTo2D(0, axisLength, 0);
    const zEnd = project3DTo2D(0, 0, axisLength);

    return (
      <g className="coordinate-axes">
        {renderGrid()}
        
        <line x1={origin.x} y1={origin.y} x2={xEnd.x} y2={xEnd.y}
          stroke="red" strokeWidth="1.5" opacity="0.7"/>
        <text x={xEnd.x + 10} y={xEnd.y} fill="red" className="font-bold">X</text>

        <line x1={origin.x} y1={origin.y} x2={yEnd.x} y2={yEnd.y}
          stroke="green" strokeWidth="1.5" opacity="0.7"/>
        <text x={yEnd.x + 10} y={yEnd.y} fill="green" className="font-bold">Y</text>

        <line x1={origin.x} y1={origin.y} x2={zEnd.x} y2={zEnd.y}
          stroke="blue" strokeWidth="1.5" opacity="0.7"/>
        <text x={zEnd.x + 10} y={zEnd.y} fill="blue" className="font-bold">Z</text>
      </g>
    );
  };

  const { currentPoints, currentMeans } = calculateCurrentState();

  return (
    <div className="p-8 bg-dark bg-opacity-80 rounded-lg shadow-lg">
      <div className="mb-4 text-center">
        <h2 className="text-2xl font-bold mb-2 text-white">Neural Collapse to ETF</h2>
        <p className="text-gray-300 mb-4">
          Watch as points collapse and class means (large dots) emerge toward the ETF (green)
        </p>
      </div>
      
      <div 
        className="relative w-full h-96 border border-gray-700 rounded-lg mb-4 bg-dark-deep"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg width="100%" height="100%" viewBox="-200 -200 400 400">
          {renderAxes()}
          
          {/* Draw ETF target vertices */}
          {etfVertices.map((vertex, i) => {
            const projected = project3DTo2D(vertex[0], vertex[1], vertex[2]);
            return (
              <g key={`etf-${i}`}>
                <circle
                  cx={projected.x}
                  cy={projected.y}
                  r={8}
                  fill={etfColor}
                  opacity={0.9}
                />
                <circle
                  cx={projected.x}
                  cy={projected.y}
                  r={10}
                  fill="none"
                  stroke={etfColor}
                  strokeWidth="1"
                  opacity={0.5}
                />
              </g>
            );
          })}

          {/* Draw lines between ETF vertices */}
          {etfVertices.map((v1, i) => 
            etfVertices.map((v2, j) => {
              if (i < j) {
                const p1 = project3DTo2D(v1[0], v1[1], v1[2]);
                const p2 = project3DTo2D(v2[0], v2[1], v2[2]);
                return (
                  <line
                    key={`etf-edge-${i}-${j}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke={etfColor}
                    strokeWidth="1"
                    opacity="0.3"
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Draw lines between means */}
          {currentMeans.map((mean1, i) => 
            currentMeans.map((mean2, j) => {
              if (i < j) {
                const p1 = project3DTo2D(mean1.x, mean1.y, mean1.z);
                const p2 = project3DTo2D(mean2.x, mean2.y, mean2.z);
                return (
                  <line
                    key={`mean-edge-${i}-${j}`}
                    x1={p1.x}
                    y1={p1.y}
                    x2={p2.x}
                    y2={p2.y}
                    stroke={colors[i]}
                    strokeWidth="2"
                    opacity="0.5"
                  />
                );
              }
              return null;
            })
          )}
          
          {/* Draw points */}
          {currentPoints.map((point) => {
            const projected = project3DTo2D(point.currentX, point.currentY, point.currentZ);
            const size = Math.max(2, 4 * (1 + projected.z / 500));
            
            return (
              <circle
                key={point.id}
                cx={projected.x}
                cy={projected.y}
                r={size}
                fill={colors[point.class]}
                opacity={0.6}
              />
            );
          })}

          {/* Draw class means */}
          {currentMeans.map((mean, i) => {
            const projected = project3DTo2D(mean.x, mean.y, mean.z);
            const meanSize = Math.max(8, 10 * (1 + projected.z / 500));
            
            return (
              <g key={`mean-${i}`}>
                <circle
                  cx={projected.x}
                  cy={projected.y}
                  r={meanSize}
                  fill={colors[i]}
                  opacity={0.9}
                />
                <circle
                  cx={projected.x}
                  cy={projected.y}
                  r={meanSize + 2}
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  opacity={0.7}
                />
              </g>
            );
          })}
        </svg>
      </div>

      <div className="space-y-4">
        <div className="flex items-center justify-center space-x-4 mb-4">
          <button
            className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-full hover:bg-primary-dark transition-all focus:outline-none shadow-lg"
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause' : 'Play'}
          >
            {isPlaying ? (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM7 8a1 1 0 012 0v4a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v4a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
              </svg>
            )}
          </button>
          
          <div className="flex-grow flex items-center space-x-4">
            <input
              type="range"
              min="0"
              max="100"
              value={progress}
              onChange={(e) => setProgress(Number(e.target.value))}
              className="w-full h-2 rounded-lg appearance-none cursor-pointer bg-gray-700"
            />
            {/* <span className="text-sm font-medium text-white min-w-[3rem] text-center">
              {progress}%
            </span> */}
          </div>
        </div>
        
        <div className="flex justify-center space-x-4">
          <button
            className="px-4 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all text-sm"
            onClick={() => {
              setProgress(0);
              setIsPlaying(false);
              setPoints(generateInitialPoints());
            }}
          >
            Reset
          </button>
          <button
            className="px-4 py-2 bg-tertiary text-white rounded hover:bg-purple-700 transition-all text-sm"
            onClick={() => setAutoRotate(!autoRotate)}
          >
            {autoRotate ? 'Stop Rotation' : 'Start Rotation'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default NeuralCollapse3D;