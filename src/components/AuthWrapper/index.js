import React, { Component } from "react";
import { InternalApp } from "../InternalApp";

class AuthWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: ""
    };
    this.updateUsername = this.updateUsername.bind(this);
  }

  updateUsername(newUsername) {
    this.setState({ username: newUsername });
  }

  render() {
	  console.log("porops: ", this.props);
    return (
      <div className="flex-1">
        <InternalApp authState={this.props.authState} updateUsername={this.updateUsername} onStateChange={this.props.onStateChange} />
      </div>
    );
  }
}

export default AuthWrapper;