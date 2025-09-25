import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar.jsx';
import Home from './components/Home.jsx';

function App() {
  return (
   
   <BrowserRouter>
       <Navbar/>
   <Routes>
    <Route path='/' element={<Home/>} />
   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
