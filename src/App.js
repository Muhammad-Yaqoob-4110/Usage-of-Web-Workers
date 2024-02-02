import './App.css';
import Navbar from './components/navbar';
import WithWebWorkers from './components/with-web-worker';
import WithOutWebWorkers from './components/without-web-worker';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    < BrowserRouter >
      <Navbar />
      <Routes>
        <Route path="/with-webworker" element={<WithWebWorkers />} />
        <Route path="/without-webworker" element={<WithOutWebWorkers />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
