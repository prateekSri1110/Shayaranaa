import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './component/about';
import Api from './component/api';
import Bstrip from './component/Bstrip';
import Contact from './component/contact';
import Navbar from './component/navbar';
import Profile from './component/profile';
import Splash from './component/splash';
import Upload from './component/upload';

function App() {
  return (
    <div className='container-fluid p-0'>
      <Splash />
      <Navbar />
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/home" element={<Api />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
      <Bstrip />
    </div>
  );
}

export default App;
