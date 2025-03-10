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
              Neural collapse is a phenomenon identified by Papyan et al. that occurs during the terminal phase of training in deep neural networks. It describes how features within each class converge to their means and how these class means arrange themselves into a simplex equiangular tight frame (ETF). During this phase, networks exhibit four key statistical and geometric properties: features within classes converge to their means, class means form an ETF, classifier weights align with these means, and the network's behavior reduces to selecting the nearest class center.

            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Expanding to Graph Learning</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
            Recent work by Kothapalli et al. demonstrated that traditional Graph Neural Networks (GNNs) exhibit a lesser degree of collapse (NC₁) compared to standard neural networks. This behavior is fundamentally constrained by graph topology, with theoretical analysis revealing specific structural conditions necessary for complete collapse. The extent of collapse varies significantly based on graph convolutional layers, network depth, and underlying graph properties.

            </p>
            
            <h3 className="text-2xl font-semibold mb-4">Our Contribution</h3>
            <p className="text-gray-300 leading-relaxed">
            Our work provides the first systematic investigation of neural collapse phenomena in graph transformer architectures. We analyze how self-attention mechanisms influence feature collapse compared to traditional message-passing GNNs. Using stochastic block model graphs and the CORA citation network dataset, we show that graph transformers exhibit similar, but slightly weaker, collapse behavior, demonstrating the inherent resistance to neural collapse posed by common graph learning problems.
            </p>
          </div>
          
          <div className="card p-6 h-full flex items-center justify-center bg-dark-light bg-opacity-10 backdrop-filter backdrop-blur-sm border border-gray-800 rounded-xl">
            <NeuralCollapse3D />
          </div>
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-primary/10 to-secondary/10 p-8 rounded-xl border border-primary/20">
          <h3 className="text-2xl font-semibold mb-6 text-center">Why Neural Collapse Matters</h3>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex space-x-4">
              <div className="flex-shrink-0 mt-1">
                <div className="w-8 h-8 rounded-full bg-primary/30 flex items-center justify-center">
                  <span className="text-primary font-semibold">1</span>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">Generalization</h4>
                <p className="text-gray-300">
                  Overparameterized networks that exhibit neural collapse achieve higher performance on out-of-distribution data and downstream transfer learning tasks.
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
                <h4 className="font-semibold text-lg mb-2">Model Selection</h4>
                <p className="text-gray-300">
                  Understanding which graph neural networks exhibit neural collapse guides the development of more effective architectures with better generalization capabilities.
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
                <h4 className="font-semibold text-lg mb-2">Theoretical Bridge</h4>
                <p className="text-gray-300">
                  Neural collapse connects graph neural networks to broader deep learning theory, establishing whether fundamental principles are universal across data domains.
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