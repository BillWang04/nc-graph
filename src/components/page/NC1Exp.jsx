import React from 'react';
import NC1 from '../visualization/NC1';
import Header from '../layout/Header';
import Footer from '../layout/Footer';

const NC1ExplanationPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-dark-deep to-dark text-light">
        <Header/>
      
      <div className="container mx-auto px-4 py-20">
        
        
        <NC1 />
{/*         
        <div className="mt-16 bg-dark-light bg-opacity-30 p-8 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-bold mb-4">NC₁ in Graph Neural Networks</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-3 text-primary">Message-Passing Neural Networks</h3>
              <p className="text-gray-300 mb-3">
                In our research, we observed that traditional message-passing neural networks (MPNNs) like GCN and GIN 
                exhibit stronger within-class variability collapse compared to Graph Transformers.
              </p>
              <p className="text-gray-300">
                This suggests that the local aggregation mechanism in MPNNs tends to produce more homogeneous 
                class representations, potentially at the cost of capturing intra-class variations.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-3 text-secondary">Graph Transformers</h3>
              <p className="text-gray-300 mb-3">
                Graph Transformers show a different collapse pattern, with less pronounced within-class 
                variability collapse but still maintaining good between-class separation.
              </p>
              <p className="text-gray-300">
                The global attention mechanism in Graph Transformers appears to preserve more of the feature 
                diversity within classes while still achieving effective class discrimination.
              </p>
            </div>
          </div>
          
        </div> */}
        
        <div className="mt-8 text-center">
          <a 
            href="/nc-graph" 
            className="inline-block px-6 py-3 bg-primary hover:bg-primary-dark text-white font-medium rounded-lg transition duration-300"
          >
            Home
          </a>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default NC1ExplanationPage;