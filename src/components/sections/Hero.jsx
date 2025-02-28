import React from 'react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 px-6 min-h-screen flex items-center">
      {/* Background gradient elements */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary opacity-20 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary opacity-10 rounded-full filter blur-3xl"></div>
      
      <div className="container mx-auto text-center relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Neural Collapse
          </span>
          <br />
          on Graph Transformers
        </h1>
        
        <p className="text-xl md:text-2xl max-w-3xl mx-auto text-gray-300 mb-10">
          Extending the understanding of neural collapse phenomena to graph transformer architectures and beyond traditional GNNs
        </p>
        
        <div className="flex flex-wrap justify-center gap-4">
          <a 
            href="#overview" 
            className="px-8 py-3 bg-gradient-to-r from-primary to-tertiary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
          >
            Learn More
          </a>
          <a 
            href="https://github.com/spiegel21/graph_transformer_collapse" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-transparent border-2 border-primary text-white font-semibold rounded-lg hover:bg-primary hover:bg-opacity-20 transform hover:-translate-y-1 transition-all duration-300"
          >
            View Code
          </a>
          <a 
            href="https://www.overleaf.com/read/tgmcwdvmkgkc#fe6839" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 bg-gradient-to-r from-secondary to-tertiary text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
            >
            Read Paper
            </a>
        </div>
        
        {/* Scroll indicator */}
        <div className="relative h-10">
            <div className="absolute left-1/2 transform -translate-x-1/2" style={{ top: '120px' }}>
                <svg className="w-10 h-10 text-gray-400 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;