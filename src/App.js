import './App.css';
import { Route, Routes } from 'react-router-dom'
import Register from './components/Register';
import Login from './components/Login';
import Dashboard from './components/Dashboard';



function App() {
  return (
    <div className="App">
     <Routes>
        <Route path='/dashboard' element={<Dashboard/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/' element={<Register/>} />
     </Routes>
    </div>
  );
}

export default App;
