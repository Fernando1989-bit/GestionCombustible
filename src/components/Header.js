import React, { Component } from "react";
class Header extends Component {
  state = {};
  render() {
    return (
      <div className="App-header">
        <h1>{this.props.name}</h1>
      </div>
    );
  }
}
 export default Header;