import './App.css';
import  {Login} from './components/Login/Login';
import { Home } from './components/Home/Home';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {useState} from 'react'

function App() {

  const [token, setToken] = useState()

  if(!token) {
    return <Login setToken={setToken} />
  } 
  return (
   <>
    
   <BrowserRouter>
   <Routes>
     <Route path='/' element={<Home></Home>}/>
   </Routes>
   
   </BrowserRouter>
   </>
  );
}

export default App;
