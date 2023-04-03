import React from "react";
import videojs from "video.js";
import "video.js/dist/video-js.css";
import Roundy from "roundy";
import "../index.css";

class Month extends React.Component {
  player = null;
  videoNode = null;
  state = { value: 5, month: new Date().getMonth() + 1, completedRound: false };

  componentDidMount() {
    this.player = videojs(
      this.videoNode,
      this.props,
      function onPlayerReady() {}
    );
  }handleChange = (value) => {
    console.log(`Changed value ${value}`);
    if (value % 100 === 0 || value % 99 === 0) {
        // existing logic for changing the month when the slider is rotated clockwise
    } else if (value - this.state.value === -1) {
        // decrease the month when the slider is rotated counterclockwise
        const { month } = this.state;
        const maxMonth = 12;
        this.setState({
            value,
            month: month > 1 ? month - 1 : maxMonth,
        });
    } else {
        // existing logic for changing the slider value
        this.completedRound = false;
        this.setState({ value });
    }
};


  handleChange = (value) => {
    console.log(`Changed value ${value}`);
    if (value % 100 === 0 || value % 99 === 0) {
      if (!this.completedRound) {
        const { value: prevValue, month } = this.state;
        const maxMonth = 12;
        const diff = value - prevValue;
        if (value === 100 && prevValue === 1) {
          this.setState({ value, month: month > 1 ?month - 1 :  1 });
        } else if (diff === 1) {
          this.setState({
            value,
            month: month < maxMonth ? month + 1 : maxMonth,
          });
        }  else if (diff <= -1) {
  this.setState({
    value,
    month: month > 1 ? maxMonth : month - 1,
  });
}
 else {
          this.setState({ value });
        }
        this.completedRound = true;
      }
    } else {
      this.completedRound = false;
      this.setState({ value });
    }
  };
  

  render() {
    const { value, month } = this.state;
    return (
      <div className="m-5 text-center">
        <p className="text">{month}</p>
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
          <p className="text">{month}</p>
          <audio ref={(node) => (this.videoNode = node)} className="video-js" />
        </div>
      </div>
    );
  }
}

export default Month;
