import React from 'react';
import NeuralCollapse3D from '../visualization/NeuralCollapse3D';

const Overview = () => {
  return (
    <section id="overview" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          Project <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Overview</span>
        </h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold mb-4">What is Neural Collapse?</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Neural collapse is a phenomenon identified by Papyan et al. that occurs during the terminal phase of training in deep neural networks. It describes how features within each class converge to their means and how these class means arrange themselves into a simplex equiangular tight frame (ETF).
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Expanding to Graph Learning</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Recent work by Kothapalli et al. demonstrated that traditional Graph Neural Networks (GNNs) exhibit a lesser degree of collapse compared to standard neural networks. This behavior is fundamentally constrained by graph topology.
            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Contribution</h3>
            <p className="text-gray-300 leading-relaxed">
              Our work extends this understanding to graph transformers, providing the first systematic investigation of neural collapse phenomena in these architectures. We analyze how self-attention mechanisms influence feature collapse compared to traditional message-passing GNNs.
            </p>
          </div>
          
          <div className="card p-6 h-full flex items-center justify-center bg-dark-light bg-opacity-10 backdrop-filter backdrop-blur-sm border border-gray-800 rounded-xl">
            <NeuralCollapse3D />
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20">
          <h3 className="text-2xl font-semibold mb-6 text-center">Key Research Questions</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="flex space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="text-primary font-semibold">1</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Attention Mechanisms</h4>
                <p className="text-gray-300">
                  How do attention mechanisms in graph transformers affect neural collapse compared to traditional message-passing approaches?
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-secondary/30 flex items-center justify-center">
                  <span className="text-secondary font-semibold">2</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Expressivity Impact</h4>
                <p className="text-gray-300">
                  Does the enhanced expressivity of graph transformers lead to different collapse characteristics during training?
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-tertiary/30 flex items-center justify-center">
                  <span className="text-tertiary font-semibold">3</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Theoretical Framework</h4>
                <p className="text-gray-300">
                  Can we develop a theoretical framework connecting transformer attention structures to the conditions required for complete collapse?
                </p>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="text-primary font-semibold">4</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Architecture Comparison</h4>
                <p className="text-gray-300">
                  How do different graph architectures compare in terms of neural collapse metrics across diverse graph structures?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Overview;