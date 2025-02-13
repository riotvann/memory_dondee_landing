import banner from './assets/feature_playstore.png';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router';
import Privacy from './pages/Privacy';

function App() {
  return (
    <div className="App">

    
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<img src={banner} className="Banner" alt="logo" />} />
        
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
