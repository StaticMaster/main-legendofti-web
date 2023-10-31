import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from '../src/Homepage/Homepage';
import Socials from './Socials/Socials';
import About from './About/About';

function App() {
  return (
    <div className="App">
      <BrowserRouter basename='/'>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/socials' element={<Socials/>}/>
      <Route path='/about' element={<About/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
