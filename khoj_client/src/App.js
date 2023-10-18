import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkerReg from './pages/WorkerReg';
import Auth from './pages/Auth';
import Footer from './components/Footer';
import List from './pages/List';
import Signup from './components/Signup';


function App() {


  return (
    <div className="App">
     

<BrowserRouter>

<Navbar/>

<Routes>
     <Route path="/" element={<Home/>}/>
     <Route path="/worker-reg" element={<WorkerReg/>}/>
     <Route path="/auth" element={<Auth/>}/>  
     <Route path="/list" element={<List/>}/>
     <Route path='/signup' element={<Signup/>}></Route>
     </Routes>
     <Footer/>
     </BrowserRouter>
    </div>
  );
}

export default App;
