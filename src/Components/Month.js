import React from "react";
import Roundy from "roundy";
import "../index.css";

class Month extends React.Component {
  player = null;
  videoNode = null;
  state = {
    value: 5,
    month: new Date().getMonth() + 1,
    completedRound: false,
    zero: 0,
  };
  handleChange = (value) => {
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
          this.setState({ value, month: month > 1 ? month - 1 : 1 });
        } else if (diff === 1) {
          this.setState({
            value,
            month: month < maxMonth ? month + 1 : maxMonth,
          });
        } else if (diff <= -1) {
          this.setState({
            value,
            month: month > 1 ? maxMonth : month - 1,
          });
        } else {
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
      <div className="text-center shadow-lg rounded py-5 bg-light mx-3">
        <div className="monthvalue text-center" id="month">
          <p className="m-0">
            {month >= 10 ? `${month}` : `${this.state.zero}${month}`}
          </p>
          <h1 className="m-0">{"Month"}</h1>
        </div>

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
          radius={115}
          strokeWidth={25}
          thumbSize={20}
          allowClick
        ></Roundy>
      </div>
    );
  }
}

export default Month;
