import { Routes, Route} from "react-router-dom";
import Join from "./resources/Join";
import PhotoGallery from "./resources/PhotoGallery";
import HSChange from "./resources/HSChange";
import Suggestions from "./resources/Suggestions";
import Home from "./Home";
import Navbar from "./Navbar"
import BigLittle from "./about/BigLittle"
import Board from "./about/Board"
import Fams from "./about/Fams"
import MissionValues from "./about/MissionValues"
import CKCalendar from "./calendar/CKCalendar"
import Login from "./Login"
import './App.css';

function App() {
  return (
    <div className = "app">
        <Navbar/>
          <div className ="body">
           <Routes>
              <Route path="/" element={<Home/>}></Route>
              <Route path="/join" element={<Join />}></Route>
              <Route path="/gallery" element={<PhotoGallery />}></Route>
              <Route path="/happy_sad_change" element={<HSChange />}></Route>
              <Route path="/suggestions" element={<Suggestions />}></Route>
              <Route path="/big_little" element={<BigLittle />}></Route>
              <Route path="/board" element={<Board />}></Route>
              <Route path="/fams" element={<Fams />}></Route>
              <Route path="/mission_values" element={<MissionValues />}></Route>
              <Route path="/calendar" element={<CKCalendar/>}></Route>
              <Route path="/login" element={<Login/>}></Route>
            </Routes>
          </div>
      </div>
  );
}

export default App;
