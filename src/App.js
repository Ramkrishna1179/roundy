import React from "react";
// import AudioPlayer from "./audioPlayer";
import DateComp from "./Components/Date";
import Month from './Components/Month';
import Year from './Components/Year'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  // const [audioPlayerSources, setAudioPlayerSources] = useState([]);

  return (
    <div className="container">
    <div className="row mt-5">
     <div className="col-4">
     <DateComp />
     </div>
     <div className="col-4">
     <Month />
     </div>
     <div className="col-4">
     <Year />
     </div>
    </div>
   
    
    </div>
    )
}

