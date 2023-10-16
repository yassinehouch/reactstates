import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
function App() {
  return (

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      person: {
        fullName: 'John Doe',
        bio: 'I am a software developer',
        imgSrc: 'path/to/image.jpg',
        profession: 'Software Developer',
      },
      show: false,
      timeSinceMount: 0,
    };
  }

  toggleShow = () => {
    this.setState((prevState) => ({
      show: !prevState.show,
    }));
  };

  componentDidMount() {
    this.intervalId = setInterval(this.updateTimeSinceMount, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  updateTimeSinceMount = () => {
    this.setState((prevState) => ({
      timeSinceMount: prevState.timeSinceMount + 1,
    }));
  };

  render() {
    const { fullName, bio, imgSrc, profession } = this.state.person;
    const { show, timeSinceMount } = this.state;

    return (
      <div>
        <button onClick={this.toggleShow}>
          Toggle Profile
        </button>

        {show && (
          <div>
            <div>
              <img src={imgSrc} alt={fullName} />
            </div>
            <div>
              <h2>{fullName}</h2>
              <p>{bio}</p>
              <p>{profession}</p>
            </div>
          </div>
        )}

        <p>Time since mount: {timeSinceMount} seconds</p>
      </div>
    );
  }
}


  )
}

export default App;
