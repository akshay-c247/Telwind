import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
// import Nav from './components/Nav';
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import Service from './components/Service';


function App() {
  return (
    <div className="App">
     {/* <Nav/> */}
    <BrowserRouter>
    <Routes>
    <Route exact path='/' element={<Home/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/services' element={<Service/>}/>
    <Route exact path='/about' element={<About/>}/>
   </Routes>
   </BrowserRouter>
    </div>
  );
}

export default App;

