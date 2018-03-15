import React, { Component } from 'react';
import './HelloWorld.css';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = {greeting: 'Hello'};
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      greeting: 'Hola'
    });
  }
  render() {
    return (
      <div>
        <div className="HelloWorld">{this.state.greeting} {this.props.name}!</div>
        <button onClick={this.handleClick}>Click woah</button>
      </div>
    );
  }
}

export default HelloWorld;
