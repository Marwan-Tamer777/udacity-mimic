import { Component } from "react";
//import { NavLink } from "react-router-dom";
import { connect } from "react-redux";

class SingUpView extends Component {
  render() {
    return <div className="flex flex-col w-1/2 h-1/2 "></div>;
  }
}

function mapStateToProps({ currentUser = null }) {
  return {
    currentUser,
  };
}

export default connect(mapStateToProps)(SingUpView);
