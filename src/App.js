
import './App.css';
import Home from  './pages/Home'
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Checkout from './pages/Checkout';
function App() { 
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/checkout' element={<Checkout/>}/>
      
    </Routes>
    
    
    </BrowserRouter>
    

   
    </div>
  );
}

export default App;
