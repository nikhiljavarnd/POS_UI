import React, { PureComponent } from "react";
import Header from "../common/header";

class Layout extends PureComponent {
  render() {
    return (
      <React.Fragment>
        <Header />
        <div>{this.props.children}</div>
      </React.Fragment>
    );
  }
}

export default Layout;
