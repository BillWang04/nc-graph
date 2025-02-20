import React from 'react';

const Results = () => {
  return (
    <section id="results" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Preliminary <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Results</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Key Findings */}
          <div className="bg-dark bg-opacity-40 rounded-xl p-8 border border-gray-800 backdrop-filter backdrop-blur-sm">
            <h3 className="text-2xl font-semibold mb-6">Key Findings</h3>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">Unique Collapse Patterns</h4>
                  <p className="text-gray-300">
                    Graph transformers show different collapse patterns compared to traditional GNNs, with enhanced ability to separate class features.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">Attention Influence</h4>
                  <p className="text-gray-300">
                    Self-attention mechanisms appear to influence the trajectory and extent of neural collapse, allowing for more flexibility in feature representation.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">Structural Constraints</h4>
                  <p className="text-gray-300">
                    Despite the increased expressivity, graph structure continues to constrain collapse behavior even in transformer architectures.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 mt-1">
                  <svg className="w-6 h-6 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-semibold mb-2">Training Dynamics</h4>
                  <p className="text-gray-300">
                    We observe distinct training dynamics in the terminal phase, with transformer models showing faster convergence to simplex ETF arrangements.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Results Visualization */}
          <div className="flex flex-col h-full">
            <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-8 h-full flex flex-col">
              <h3 className="text-2xl font-semibold mb-6">NC Metrics Comparison</h3>
              
              <div className="relative flex-grow bg-dark-deep bg-opacity-50 rounded-lg p-6 border border-gray-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-center text-white/70 px-8">Interactive visualization of NC<sub>1</sub> metrics will be displayed here in the final project.</p>
                </div>
                
                <div className="opacity-30">
                  {/* Placeholder chart */}
                  <div className="h-64 w-full">
                    <svg viewBox="0 0 400 200" width="100%" height="100%">
                      {/* Axes */}
                      <line x1="50" y1="150" x2="350" y2="150" stroke="white" strokeWidth="2" />
                      <line x1="50" y1="150" x2="50" y2="30" stroke="white" strokeWidth="2" />
                      
                      {/* Labels */}
                      <text x="200" y="180" textAnchor="middle" fill="white">Training Epochs</text>
                      <text x="20" y="90" textAnchor="middle" fill="white" transform="rotate(-90, 20, 90)">NC₁</text>
                      
                      {/* Data Lines */}
                      <path d="M50,120 C100,110 150,80 200,70 S300,40 350,30" stroke="#6366f1" strokeWidth="3" fill="none" />
                      <path d="M50,120 C100,115 150,100 200,95 S300,80 350,75" stroke="#ec4899" strokeWidth="3" fill="none" />
                      <path d="M50,120 C100,118 150,110 200,108 S300,95 350,93" stroke="#8b5cf6" strokeWidth="3" fill="none" />
                      
                      {/* Legend */}
                      <circle cx="50" cy="20" r="5" fill="#6366f1" />
                      <text x="60" y="25" fill="white">Graph Transformer</text>
                      
                      <circle cx="170" cy="20" r="5" fill="#ec4899" />
                      <text x="180" y="25" fill="white">GAT</text>
                      
                      <circle cx="250" cy="20" r="5" fill="#8b5cf6" />
                      <text x="260" y="25" fill="white">GIN</text>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="mt-6 text-gray-300 text-sm">
                <p>The chart compares neural collapse metrics (NC₁) across different graph neural network architectures throughout training.</p>
                <p className="mt-2">Lower values indicate stronger collapse behavior, with graph transformers showing distinctive patterns.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Current Status and Planned Experiments */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div className="bg-dark bg-opacity-30 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              Current Progress
            </h3>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Implemented baseline GNN models (GCN, GAT, GIN)
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Integrated Graph Transformer architectures
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Developed tracking for Neural Collapse metrics
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Initial experiments on SBM graphs (in progress)
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Theoretical analysis of observed phenomena (in progress)
              </li>
            </ul>
          </div>
          
          <div className="bg-dark bg-opacity-30 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15 3.414 16.586 5 17.293 5.707a1 1 0 010 1.414l-.707.707L15 9.414 13.414 11l-.707.707a1 1 0 01-1.414 0L10.586 11 9 9.414 7.707 8.707a1 1 0 010-1.414L8.414 7 10 5.414l.707-.707A1 1 0 0112 4z" clipRule="evenodd" />
              </svg>
              Upcoming Experiments
            </h3>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Extend analysis to real-world graph datasets (Cora, Citeseer)
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Detailed analysis of attention patterns in relation to collapse
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Investigate ETF arrangements across different model architectures
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Develop theoretical understanding of the relationship between attention and collapse
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Comprehensive comparative analysis of all model architectures
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Results;