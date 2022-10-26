import Hero from "./components/Hero";
import {BrowserRouter, Routes, Route, link} from 'react-router-dom' 
function App() {
  return (
    <Routes>
    <Route path='/' element={<div>Dashboard</div>}/>  
    <Route path='/landing' element={<Hero/>}/>  
    </Routes>
    );
}

export default App;
