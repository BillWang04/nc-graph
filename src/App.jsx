import HomePage from './components/page/Homepage';
import NC1 from './components/page/NC1Exp'
// import ScrollToHashElement from './components/layout/ScrollHashElement';


import { HashRouter, Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        {/* Your main routes */}
        {/* <ScrollToHashElement /> */}
        <Route path="/" element={<HomePage />} />
        <Route path="/nc1-explanation" element={<NC1 />} />
      </Routes>
    </HashRouter>
  );
};

export default App;