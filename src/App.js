import './App.css'; 
import Home from './pages/Home/Home';
import {Route, Routes} from 'react-router-dom';
import Grocery from './pages/grocery/Grocery';
import Electronics from './pages/Electronics/Electronics';

function App() {
  return (
    <div className="App">
       <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/grocery' element={<Grocery/>}/>
        <Route path='/electronic' element={<Electronics/>} />          
       </Routes>
    </div>
  );
}

export default App;
