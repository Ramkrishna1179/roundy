import React from "react";
import Roundy from "roundy";
import "../index.css";
class Year extends React.Component {
  state = {
    value: 5,
    year: new Date().getFullYear(),
    completedRound: false,
  };
  handleChange = (value) => {
    console.log(`Changed value ${value}`);
    if (value % 100 === 0 || value % 99 === 0) {
      if (!this.completedRound) {
        const { value: prevValue, year } = this.state;
        const diff = value - prevValue;
        if (value === 100 && prevValue === 1) {
          this.setState({ value, year: year - 1 });
        } else if (diff === 1) {
          this.setState({ value, year: year + 1 });
        } else if (diff <= -1) {
          this.setState({ value, year: year - 1 });
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
    const { value, year } = this.state;
    return (
      <div className="text-center  shadow-lg rounded py-5 bg-light  mx-3">
      <div className="Value text-center">
      <p className="m-0">{year}</p>
      <h1 className="m-0">{"Year"}</h1>
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
export default Year;
