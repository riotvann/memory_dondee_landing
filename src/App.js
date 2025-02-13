import logo from './logo.svg';
import banner from './assets/feature_playstore.png';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Privacy from './pages/Privacy';

function App() {
  return (
    
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path="/" element={
          <img className='Image' src={banner} alt="logo" />
          } />
          <Route path="/privacy" element={<Privacy />} />
            {/* <Route path="*" element={<App />} /> */}
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
