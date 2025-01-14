import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Signup from './components/Signup';
import PrivateComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      <Nav/>
      <Routes>
        
        <Route element = {<PrivateComponent/>}>
        <Route path="/" element={<h1>Product Listing Component</h1>}/>
        <Route path="/add" element={<h1>Add Product </h1>}/>
        <Route path="/update" element={<h1>Update Product </h1>}/>
        <Route path="/logout" element={<h1>Logout Product </h1>}/>
        <Route path="/profile" element={<h1>Profile Component</h1>}/>
        </Route>
        
        <Route path="/signup" element={<Signup/>}/>
        
      </Routes>
      </BrowserRouter>
      <Footer/>
    </div>
  );
}

export default App;
