import React from 'react';
import SBM_NC1 from "../../img/result_img/gcn_nc1.png";
import SBM_NC2 from "../../img/result_img/gin_nc1.png";
import SBM_NC3 from "../../img/result_img/gt_nc1.png";
import CORA_NC1 from "../../img/result_img/cora_vc_final.png";

const Results = () => {
  return (
    <section id="results" className="py-20 px-6">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">
          <span className="bg-gradient-to-r from-secondary to-tertiary bg-clip-text text-transparent">Results</span>
        </h2>
        
        {/* SBM Results */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">Stochastic Block Model (SBM) Results</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* SBM Visualization */}
            <div className="bg-dark bg-opacity-40 rounded-xl p-6 border border-gray-800 backdrop-filter backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-4 text-primary">Neural Collapse Metrics</h4>
              
              <div className="bg-dark-deep bg-opacity-50 rounded-lg p-4 border border-gray-700 flex justify-center grid md:grid-cols-3 gap-4">
                <img 
                  src={SBM_NC1} 
                  alt="Neural Collapse Metrics for GCN on SBMs" 
                  className="max-w-full max-h-80 object-contain"
                />
                <img 
                  src={SBM_NC2} 
                  alt="Neural Collapse Metrics for GCN on SBMs" 
                  className="max-w-full max-h-80 object-contain"
                />
                <img 
                  src={SBM_NC3} 
                  alt="Neural Collapse Metrics for GCN on SBMs" 
                  className="max-w-full max-h-80 object-contain"
                />

              </div>
              
              <div className="mt-4 text-gray-300 text-sm">
                <p>Neural collapse metrics for GCN, GIN, and Graph Transformer respectively on SBMs.</p>
              </div>
            </div>
            
            {/* SBM Key Findings */}
            <div className="bg-dark bg-opacity-40 rounded-xl p-6 border border-gray-800 backdrop-filter backdrop-blur-sm flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-4 text-primary">Key Findings on SBMs</h4>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                  </div>
                  <div className="ml-4">
                    <p>All models showed NC1 (variability collapse) to some degree, consistent with prior work.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                  </div>
                  <div className="ml-4">
                    <p>None of the models exhibited NC2-4 properties, unlike models for Euclidean data.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                  </div>
                  <div className="ml-4">
                    <p>Within-class variability collapse is <strong>stronger</strong> in MPNNs than in Graph Transformers.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                  </div>
                  <div className="ml-4">
                    <p>Both model types achieved high performance with 99%+ train and test accuracy.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* CORA Results */}
        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-white">CORA Citation Network Results</h3>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* CORA Visualization */}
            <div className="bg-dark bg-opacity-40 rounded-xl p-6 border border-gray-800 backdrop-filter backdrop-blur-sm">
              <h4 className="text-xl font-semibold mb-4 text-secondary">Neural Collapse Metrics</h4>
              
              <div className="bg-dark-deep bg-opacity-50 rounded-lg p-4 border border-gray-700 flex justify-center">
                <img 
                  src={CORA_NC1} 
                  alt="Neural Collapse Metrics for GCN and GT measured throughout training on CORA" 
                  className="max-w-full max-h-80 object-contain"
                />
              </div>
              
              <div className="mt-4 text-gray-300 text-sm">
                <p>Neural Collapse Metrics for GCN and Graph Transformer measured throughout training on CORA.</p>
              </div>
            </div>
            
            {/* CORA Key Findings */}
            <div className="bg-dark bg-opacity-40 rounded-xl p-6 border border-gray-800 backdrop-filter backdrop-blur-sm flex flex-col justify-center">
              <h4 className="text-xl font-semibold mb-4 text-secondary">Key Findings on CORA</h4>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                  </div>
                  <div className="ml-4">
                    <p>No models exhibited even NC1 on the CORA dataset.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                  </div>
                  <div className="ml-4">
                    <p>Between-class variability increased significantly without a corresponding decrease in within-class variability.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                  </div>
                  <div className="ml-4">
                    <p>This suggests class separation occurs without collapse to class means.</p>
                  </div>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1">
                    {/* <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg> */}
                  </div>
                  <div className="ml-4">
                    <p>GCNs reached ~75% accuracy, while Graph Transformers peaked at ~60% accuracy.</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Discussion */}
        <div className="bg-dark bg-opacity-60 backdrop-filter backdrop-blur-sm rounded-xl p-8 border border-gray-800">
          <h3 className="text-2xl font-semibold mb-6 text-center">Discussion</h3>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h4 className="text-xl font-semibold mb-4 text-tertiary">Key Observations</h4>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-6 h-6 rounded-full bg-tertiary/30 flex items-center justify-center">
                      <span className="text-tertiary font-semibold">1</span>
                    </div>
                  </div>
                  <p>Resistance to collapse appears inherent to graph domains compared to image classification.</p>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-6 h-6 rounded-full bg-tertiary/30 flex items-center justify-center">
                      <span className="text-tertiary font-semibold">2</span>
                    </div>
                  </div>
                  <p>Graph learning typically has fewer training examples than vision tasks.</p>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-6 h-6 rounded-full bg-tertiary/30 flex items-center justify-center">
                      <span className="text-tertiary font-semibold">3</span>
                    </div>
                  </div>
                  <p>The definition of Terminal Phase of Training (TPT) may need adjustment for geometric domains.</p>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4 text-primary">Implications</h4>
              
              <ul className="space-y-4 text-gray-300">
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                      <span className="text-primary font-semibold">A</span>
                    </div>
                  </div>
                  <p>Neural collapse behavior is architecture-dependent, with MPNNs showing stronger collapse than transformers.</p>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                      <span className="text-primary font-semibold">B</span>
                    </div>
                  </div>
                  <p>Graph structure fundamentally constrains complete collapse, regardless of the model's expressivity.</p>
                </li>
                
                <li className="flex items-start">
                  <div className="flex-shrink-0 mt-1 mr-3">
                    <div className="w-6 h-6 rounded-full bg-primary/30 flex items-center justify-center">
                      <span className="text-primary font-semibold">C</span>
                    </div>
                  </div>
                  <p>Semi-supervised learning on graphs shows different collapse patterns than fully supervised classification.</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Current Status
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
                Implemented and evaluated GCN, GIN, and Graph Transformer models
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Analyzed NC metrics on both SBM and CORA datasets
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Observed different collapse patterns between MPNNs and transformers
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-green-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Identified potential reasons for resistance to collapse in graphs
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-yellow-400 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Developing theoretical framework to explain observed phenomena (in progress)
              </li>
            </ul>
          </div>
          
          <div className="bg-dark bg-opacity-30 rounded-xl p-6 border border-gray-800">
            <h3 className="text-xl font-semibold mb-4 flex items-center">
              <svg className="w-5 h-5 mr-2 text-secondary" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zm7-10a1 1 0 01.707.293l.707.707L15 3.414 16.586 5 17.293 5.707a1 1 0 010 1.414l-.707.707L15 9.414 13.414 11l-.707.707a1 1 0 01-1.414 0L10.586 11 9 9.414 7.707 8.707a1 1 0 010-1.414L8.414 7 10 5.414l.707-.707A1 1 0 0112 4z" clipRule="evenodd" />
              </svg>
              Future Work
            </h3>
            
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Experiment with additional real-world graph datasets beyond CORA
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Investigate the impact of graph size and density on collapse behavior
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Test alternative positional encodings with graph transformers
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Develop a comprehensive theory of neural collapse in geometric domains
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 mr-2 text-gray-500 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Explore practical applications of these findings for graph model selection
              </li>
            </ul>
          </div>
        </div> */}
        
      </div>
    </section>
  );
};

export default Results;