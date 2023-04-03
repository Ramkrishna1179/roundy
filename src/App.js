import React, { useState } from "react";
import AudioPlayer from "./audioPlayer";
import Month from './audioPlayer/Month';
import Year from './audioPlayer/Year'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  // const [audioPlayerSources, setAudioPlayerSources] = useState([]);

  return (
    <div className="container-fliud">
    <div className="row">
     <div className="col-4">
     <AudioPlayer />
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

