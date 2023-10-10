import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Homepage from '../src/Homepage/Homepage';
import Socials from './Socials/Socials';
// import MainPage from './MainPage/MainPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<Homepage/>}/>
      <Route path='/socials' element={<Socials/>}/>
      {/* <Route path='/main' element={<MainPage/>}/> */}
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
