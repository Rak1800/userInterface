
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Nav from './components/Nav';

function App() {
  return (
    <div className="App">
      
      <BrowserRouter >
      <Nav />
      <Routes>
      <Route path='/register' element={<Register/>} />
      <Route path='/login' element={<Login />} />
     
      
        
      </Routes>
      <Routes>
      <Route path='/' element={<Dashboard />} />
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
