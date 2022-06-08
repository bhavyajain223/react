import React from "react";

class DigitalClockClass extends React.Component {
  constructor() {
    super();
    this.state = {
      time: new Date().toLocaleString(),
    };
  }
  componentDidMount() {
    this.updateDate();
  }

  updateDate = () => {
    setInterval((intervalId) => {
      this.setState({
        time: new Date().toLocaleString(),
      });
    }, 1000);
  };

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }
  render() {
    return (
      <>
        <div className="digital-clock-wrap">
          <div className="label">Digital Clock Class Component: </div>
          <div className="dateTime">{this.state.time}</div>
        </div>
      </>
    );
  }
}

export default DigitalClockClass;
