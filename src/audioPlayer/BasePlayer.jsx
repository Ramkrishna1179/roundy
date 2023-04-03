import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Roundy from "roundy";
import '../index.css';
class BasePlayer extends React.Component {
  player = null;
  videoNode = null;
  state = { value: 5, date: new Date().getDate(), completedRound: false };
  componentDidMount() {
    this.player = videojs(
      this.videoNode,
      this.props,
      function onPlayerReady() {}
    );
  };
  handleChange = (value) => {
    console.log(`Changed value ${value}`);
    if (value % 100 === 0 || value % 99 === 0) {
      if (!this.completedRound) {
        const { value: prevValue, date } = this.state;
        const maxDaysInMonth = new Date(
          new Date().getFullYear(),
          new Date().getMonth() + 1,
          0
        ).getDate();
        if (value === 100 && prevValue === 1) {
          this.setState({ value, date: date > 1 ? date - 1 : 1 });
        } else if (value === prevValue + 1) {
          this.setState({
            value,
            date: date < maxDaysInMonth ? date + 1 : maxDaysInMonth,
          });
        } else {
          this.setState({ value });
        }
        this.completedRound = true;
      }
    } else {
      this.completedRound = false;
      this.setState({ value });
    };
  };
  render(){
    const { value } = this.state;
    return(
      <div className="m-5 text-center">
        <p className="text">{this.state.date}</p>
        <Roundy
          value={value}
          min={1}
          max={100}
          sliced={false}
          stepSize={1}
          color="#ec008c"
          bgColor="#E4E4E4"
          onChange={this.handleChange}
          arcSize={360}
          rotationOffset={-90}
          radius={135}
          strokeWidth={35}
          thumbSize={20}
          allowClick
        ></Roundy>
        <div data-vjs-player>
        <p className="text">{this.state.date}</p>
          <audio ref={(node) => (this.videoNode = node)} className="video-js" />
        </div>
      </div>
    );
  }
}
export default BasePlayer;




{
  /* <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjsG8M_uI4pTxRkvmC7ppfejOrrjjc-TUCQfhrvPphrZyRwEah&usqp=CAU"
    alt="hello"
  /> */
}
{
  /* <button onClick={() => console.log(this.player)}>log</button> */
}
{
  /* <button onClick={() => this.player.play()}>Play</button>
<button onClick={() => this.player.pause()}>Pause</button> */
}
//   setInterval(() => {
//     if (this.state.value < 100) {
//       this.setState(pe => ({ value: pe.value + 1 }));
//     }
//   }, 1000);
// }

// componentWillUnmount() {
//   if (this.player) {
//     this.player.dispose();.
//   }

// import React from "react";
// import videojs from "video.js";
// import "video.js/dist/video-js.css";
// import Roundy from "roundy";
// import "../index.css";
// class BasePlayer extends React.Component {
//   player = null;
//   videoNode = null;
//   state = { value: 3 ,date : new Date().getDate()};
//   componentDidMount(){
//       this.player = videojs(
//       this.videoNode,
//       this.props,
//       function onPlayerReady() {}
//     );
//   }
//   handleChange = (value) => {
//     console.log(`Changed value ${value}`);
//     if (value % 100 === 0 ||value % 99 === 0) {
//       if (!this.completedRound) {
//         this.setState((prevState) => ({
//           value,
//           date: prevState.date + 1,
//         }));
//         this.completedRound = true;
//       };
//     }
//     else {
//       this.completedRound = false;
//       this.setState({ value });
//     }
//   };
//   render() {
//     const { value } = this.state;
//     return (
//       <div className="m-5 text-center">
//       <p className="text">{this.state.date}</p>
//       <Roundy
//       value={value}
//       min={1}
//       max={100}
//       sliced={false}
//       stepSize={1}
//       color="#F5859D"
//       bgColor="#E4E4E4"
//       onChange={this.handleChange}
//       arcSize={360}
//       rotationOffset={-90}
//       radius={135}
//       strokeWidth={25}
//       thumbSize={20}
//       allowClick
//       >
//       </Roundy>
//       <div data-vjs-player>
//       <audio ref={(node) => (this.videoNode = node)} className="video-js" />
//       </div>
//       </div>
//       );
//     }
//     }
//     export default BasePlayer;
{
  /* <img
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTjsG8M_uI4pTxRkvmC7ppfejOrrjjc-TUCQfhrvPphrZyRwEah&usqp=CAU"
    alt="hello"
  /> */
}
{
  /* <button onClick={() => console.log(this.player)}>log</button> */
}
{
  /* <button onClick={() => this.player.play()}>Play</button>
<button onClick={() => this.player.pause()}>Pause</button> */
}
//   setInterval(() => {
//     if (this.state.value < 100) {
//       this.setState(pe => ({ value: pe.value + 1 }));
//     }
//   }, 1000);
// }

// componentWillUnmount() {
//   if (this.player) {
//     this.player.dispose();.
//   }
