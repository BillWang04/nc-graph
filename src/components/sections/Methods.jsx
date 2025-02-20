import React from 'react';

const Methods = () => {
  return (
    <section id="methods" className="py-20 px-6 bg-dark-deep bg-opacity-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent">
            Methods
          </span> & Approach
        </h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {/* Model Architectures */}
          <div className="bg-dark bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-8 border border-gray-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Model Architectures</h3>
            
            <p className="text-gray-300 mb-4">
              We analyze a variety of graph learning models including GAT, GIN, and Graph Transformers, comparing their neural collapse characteristics.
            </p>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Graph Attention Network (GAT)</strong> - Uses attention mechanisms to weigh neighbor importance
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Graph Isomorphism Network (GIN)</strong> - Maximizes expressiveness for graph isomorphism tasks
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Graph Transformer</strong> - Extends transformer architecture to graph-structured data
                </span>
              </li>
            </ul>
          </div>
          
          {/* Neural Collapse Metrics */}
          <div className="bg-dark bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-8 border border-gray-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Neural Collapse Metrics</h3>
            
            <p className="text-gray-300 mb-4">
              We track several metrics related to the Neural Collapse phenomenon, measuring both within-class variability and between-class separation.
            </p>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Within-class covariance matrix (Σ<sub>W</sub>)</strong> - Measures the average spread of features within each class
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Between-class covariance matrix (Σ<sub>B</sub>)</strong> - Captures the separation between different class centers
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">NC<sub>1</sub> metrics</strong> - Trace ratio metrics derived from these covariance matrices
                </span>
              </li>
            </ul>
          </div>
          
          {/* Experimental Setup */}
          <div className="bg-dark bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-8 border border-gray-800 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
            <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-red-600 rounded-full flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z" />
              </svg>
            </div>
            
            <h3 className="text-xl font-semibold mb-3">Experimental Setup</h3>
            
            <p className="text-gray-300 mb-4">
              Our experiments use stochastic block model (SBM) graphs and real-world datasets to evaluate collapse characteristics across different architectures.
            </p>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Stochastic Block Model graphs</strong> - Synthetic graphs with controlled community structure
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Training methodology</strong> - Multiple runs with different seeds to ensure statistical significance
                </span>
              </li>
              
              <li className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-red-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="w-2 h-2 bg-red-500 rounded-full"></span>
                </span>
                <span>
                  <strong className="text-white">Metric tracking</strong> - Collecting collapse metrics across all training epochs
                </span>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Code Implementation */}
        <div className="mt-16 bg-dark bg-opacity-70 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-4 text-center">Implementation Details</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-primary">Code Framework</h4>
              <p className="text-gray-300 mb-3">
                Our implementation builds upon the code from "A Neural Collapse Perspective on Feature Evolution in Graph Neural Networks," extending it with transformer architectures.
              </p>
              <p className="text-gray-300">
                We've implemented various graph transformer variants and developed custom metrics to track neural collapse phenomena during training.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-secondary">Training Process</h4>
              <p className="text-gray-300 mb-3">
                We train each model until convergence and continue training well past the point of zero training error to observe the terminal phase behavior.
              </p>
              <p className="text-gray-300">
                For each architecture, we track both standard performance metrics and the neural collapse metrics throughout the entire training process.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;