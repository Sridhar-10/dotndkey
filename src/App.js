import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import Login from './pages/Login';
import Bodycare from './pages/Bodycare';
import Nutrition from './pages/Nutrition';
import Product from './pages/Product';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import Final from './pages/Final';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <br/>
      <br/>
      <Routes>
        <Route path="home" element={<Home/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="bodycare" element={<Bodycare/>}/>
        <Route path="nutrition" element={<Nutrition/>}/>
        <Route path="product" element={<Product/>}/>
        <Route path="shipping" element={<Shipping/>}/>
        <Route path="payment" element={<Payment/>}/>
        <Route path="final" element={<Final/>}/>
      </Routes>
      <Footer/>
    </div>


    
  );
}

export default App;
