import React from 'react';

import SBM from "../../img/method_img/SBM_viz.png"

import CORA from "../../img/method_img/CORA_viz.png"

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';



const Methods = () => {
  return (
    <section id="methods" className="py-20 px-6 bg-dark-deep bg-opacity-50">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-tertiary to-secondary bg-clip-text text-transparent">
            Methods
          </span> & Approach
        </h2>
        
        {/* Models & Metrics Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">Models & Metrics</h3>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            {/* Message-Passing Neural Networks */}
            <div className="bg-dark bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h4 className="text-xl font-semibold mb-3 text-primary">Message-Passing Neural Networks</h4>
              <p className="text-gray-300 mb-3">
                At each layer, a node's representation is passed to its neighbors. Graph topology serves as a strong inductive bias, and the expressive power is bounded by the 1-Weisfeiler Lehman test.
              </p>
              <ul className="space-y-2 text-gray-300 mt-4">
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  </span>
                  <span><strong className="text-white">GCN</strong> - Graph Convolutional Network</span>
                </li>
                <li className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-indigo-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
                  </span>
                  <span><strong className="text-white">GIN</strong> - Graph Isomorphism Network</span>
                </li>
              </ul>
            </div>
            
            {/* Graph Transformers */}
            <div className="bg-dark bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-gray-800">
              <h4 className="text-xl font-semibold mb-3 text-secondary">Graph Transformers</h4>
              <p className="text-gray-300 mb-3">
                A standard transformer applied on top of node features, with graph topology encoded and concatenated to those features. Graph topology has a weaker influence on outputs, and nodes can access information from anywhere in the graph.
              </p>
              <div className="mt-4">
                <h5 className="font-semibold text-white mb-2">Laplacian Eigenvector Positional Encoding:</h5>
                <p className="text-gray-300">
                  A node's encoding is its associated value across the first n eigenvectors of the Laplacian Matrix, which reflects graph connectivity.
                </p>
              </div>
            </div>
          </div>
          
         {/* Neural Collapse Metrics */}
          <div className="bg-dark bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-gray-800">
            <h4 className="text-xl font-semibold mb-3 text-tertiary">Neural Collapse Metrics</h4>
            <p className="text-gray-300 mb-4">
              Throughout training, we measure the following Neural Collapse metrics:
            </p>
            <div className="grid md:grid-cols-4 gap-4">
              <div className="flex flex-col">
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  </span>
                  <strong className="text-white">NC₁ := Tr(Σ<sub>W</sub>Σ<sub>B</sub><sup>†</sup>)/K</strong>
                </div>
                <p className="mt-2 text-sm text-gray-300 pl-8">Primary variability collapse metric measuring within-class (Σ<sub>W</sub>) vs between-class (Σ<sub>B</sub>) variation</p>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  </span>
                  <strong className="text-white">ÑC₁ := Tr(Σ<sub>W</sub>)/Tr(Σ<sub>B</sub>)</strong>
                  <a href="/nc-graph/nc1-explanation" className="ml-2 text-xs text-primary hover:text-primary-light underline">
            (Interactive Explanation)
          </a>
                </div>
                <p className="mt-2 text-sm text-gray-300 pl-8">Alternative formulation that is more amenable to theoretical analysis</p>
              </div>
              
              <div className="flex flex-col">
                <div className="flex items-start">
                  <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                    <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                  </span>
                  <strong className="text-white">NC₂ := 1/(K²-K) ∑<sub>k≠k'∈[K]</sub>|cos(μ̄<sub>k</sub>, μ̄<sub>k'</sub>)+1/(K-1)|</strong>
                </div>
                <p className="mt-2 text-sm text-gray-300 pl-8">Measures how close class means are to forming a simplex ETF</p>
              </div>

              <div className="flex flex-col">
              <div className="flex items-start">
                <span className="flex-shrink-0 w-5 h-5 rounded-full bg-pink-500 bg-opacity-20 flex items-center justify-center mr-3 mt-0.5">
                  <span className="w-2 h-2 bg-pink-500 rounded-full"></span>
                </span>
                <strong className="text-white">NC₃ := ||W̃ - M̃||<sub>F</sub></strong>
              </div>
              <p className="mt-2 text-sm text-gray-300 pl-8">Measures alignment between classifier weights and class means</p>
            </div>

              
            </div>
            
            
          </div>
        </div>
        
        {/* Datasets Section */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">Datasets</h3>
          
          {/* Graph Datasets Introduction */}
          <div className="bg-dark bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-6 border border-gray-800 mb-8">
            <h4 className="text-xl font-semibold mb-3 text-primary">Graph Datasets</h4>
            <p className="text-gray-300">
              We worked with two key datasets to investigate neural collapse phenomena across different graph learning architectures.
            </p>
          </div>
          
          {/* Stochastic Block Model */}
          <div className="bg-dark bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800 mb-12">
            <h4 className="text-xl font-semibold p-6 text-primary">Stochastic Block Model (SBM)</h4>
            
            <div className="md:flex">
              {/* Left: Image */}
              <div className="md:w-1/2 bg-gray-900 p-4 flex justify-center items-center">
                <img 
                  src={SBM}
                  alt="SBM Graph Visualization" 
                  className="max-w-full max-h-96 object-contain" 
                />
              </div>
              
              {/* Right: Details */}
              <div className="md:w-1/2 p-6">
                <p className="text-gray-300 mb-4">
                    Synthetic graphs with tunable community structures, providing an ideal, controllable setting for classification.
                </p>
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-white mb-2">Training Setup: Fully-supervised node classification</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>MPNNs: 1000 training, 1000 validation graphs</li>
                    <li>Graph Transformers: 500 training, 500 validation graphs</li>
                    <li>Parameters: N=1000 nodes, C=2 communities, p=0.025, q=0.0017</li>
                    <li>Both models reach 99%+ train and test accuracy</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          {/* CORA Citation Network */}
          <div className="bg-dark bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl overflow-hidden border border-gray-800">
            <h4 className="text-xl font-semibold p-6 text-secondary">CORA Citation Network</h4>
            
            <div className="md:flex">
              {/* Left: Image */}

              <div className="md:w-1/2 p-6">
                <p className="text-gray-300 mb-4">
                  A citation network where nodes represent scientific publications across 7 research fields, and edges represent citations between papers.
                </p>
                <div className="text-sm text-gray-400">
                  <p className="font-semibold text-white mb-2">Training Setup: Semi-supervised node classification</p>
                  <ul className="space-y-2 list-disc list-inside">
                    <li>2708 nodes (papers), 5429 edges (citations)</li>
                    <li>7 classes (research fields)</li>
                    <li>GCNs reached ~75% accuracy</li>
                    <li>Graph Transformers peaked at ~60% accuracy</li>
                  </ul>
                </div>
              </div>
              
              
              {/* Right: Details */}
              
            


              <div className="md:w-1/2 bg-gray-900 p-4 flex justify-center items-center">
                <img 
                  src={CORA}
                  alt="CORA Graph Visualization" 
                  className="max-w-full max-h-96 object-contain" 
                />
              </div>
            </div>
          </div>
        </div>
        
        {/* Experimental Setup */}
        <div className="mt-16 bg-dark bg-opacity-70 rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6 text-center">Experimental Setup</h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-semibold mb-3 text-primary">SBM Generation</h4>
              <p className="text-gray-300">
                We worked with Stochastic Block Models (SBM) to generate synthetic graphs with tunable community structures. These provide an ideal, controllable setting for classification tasks where we can precisely measure neural collapse properties.
              </p>
              <p className="text-gray-300 mt-3">
                Well-separated SBMs are trivial to classify, enabling us to test neural collapse in an ideal setting before applying to real-world data.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-secondary">Training Methodology</h4>
              <p className="text-gray-300">
                For fully-supervised node classification, train/test splitting is done at the graph level. The data consists of three sets: training, validation, and test graphs.
              </p>
              <p className="text-gray-300 mt-3">
                We use a large validation set specifically for neural collapse evaluations to ensure statistical significance of our measurements across different model architectures.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3 text-tertiary">Metrics Tracking</h4>
              <p className="text-gray-300">
                Throughout training, we measure NC₁ and occasionally NC₂-₃ using the metrics shown above. We also track the traces of Σ<sub>W</sub> and Σ<sub>B</sub> separately to see the change in variability of each of these matrices independently.
              </p>
              <p className="text-gray-300 mt-3">
                This allows us to determine whether neural collapse is occurring due to decreasing within-class variation, increasing between-class separation, or both.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methods;