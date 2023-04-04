import React from "react";
import Roundy from "roundy";
import "../index.css";
class DateComp extends React.Component {
  state = {
    value: 5,
    date: new Date().getDate(),
    completedRound: false,
    zero: 0,
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
    }
  };
  render() {
    const { value } = this.state;
    return (
      <div className="text-center shadow-lg bg-light rounded-3 py-5 mx-3">
        <div className="Value text-center">
          <p className="m-0">
            {this.state.date >= 10
              ? `${this.state.date}`
              : `${this.state.zero}${this.state.date}`}
          </p>
          <h1 className="m-0">{"Date"}</h1>
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
export default DateComp;
