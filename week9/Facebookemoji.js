import React from 'react';
import './App.css';
import like7 from './like.png';
import Love from './Love.png';
import happy from './happy.png';

class FacebookEmojiCounter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: 0,
    };

    this.increment = this.increment.bind(this);

    // Set the image based on the 'type' prop
    if (this.props.type === "Love") {
      this.pic = Love;
    } else if (this.props.type === "Like") {
      this.pic = like7;
    } else if (this.props.type === "happy") {
      this.pic = happy;
    } else {
      this.pic = null;
    }
  }

  increment() {
    this.setState((prevState) => ({
      number: prevState.number + 1,
    }));
  }

  render() {
    return (
      <div>
        <h5>
          It is {this.state.number} {this.props.type}.
        </h5>
        <button onClick={this.increment}>
          <img src={this.pic} alt={this.props.type} />
          <b>{this.state.number}</b>
        </button>
      </div>
    );
  }
}

export default FacebookEmojiCounter;
