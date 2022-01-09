
import './App.css';
import Register from './pages/Register'
import Home from  './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Checkout from './pages/Checkout';
import Login from './pages/Login';
function App() { 
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
    </Routes>
    
    
    </BrowserRouter>
    

   
    </div>
  );
}

export default App;
