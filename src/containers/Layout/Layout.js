import React, { Component } from "react";
import classes from "./Layout.scss";

class Layout extends Component {
  render() {
    return (
      <div className={classes.container}>
        <main>{this.props.children}</main>
      </div>
    );
  }
}

export default Layout;
