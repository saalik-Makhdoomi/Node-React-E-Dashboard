import './App.css';
import Nav from './components/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PriavteComponent from './components/PrivateComponent';

function App() {
  return (
    <div className="App">
      <BrowserRouter> 
       <Nav />
          <Routes>
            
        <Route element={<PriavteComponent />}>
      <Route path='/' element={<h1>Product Component</h1>} />
      <Route path='/add' element={<h1>AddProduct Component</h1>} />
      <Route path='/update' element={<h1>Update Product Component</h1>} />
      <Route path='/logout' element={<h1>Logout Product Component</h1>} />
      <Route path='/profile' element={<h1>Profile Component</h1>} />
      </Route>

      <Route path='/signup' element={<SignUp />} />
           </Routes>
      </BrowserRouter>
      <Footer />
    

    </div>
  );
}

export default App;
