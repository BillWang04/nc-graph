import HomePage from './components/page/Homepage';
import NC1 from './components/page/NC1Exp'

import { BrowserRouter, Routes, Route, Router } from 'react-router-dom';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Your main routes */}
        <Route path="/" element={<HomePage />} />
        <Route path="/nc1-explanation" element={<NC1 />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App