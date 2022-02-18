import { Component } from "react";
//import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import "./css/navbar.css";
import "./css/main.css";

class AccountDetailsView extends Component {
  render() {
    return (
      <div>

      </div>
    );
  }
}

function mapStateToProps({ currentUser = null }) {
  return {
    currentUser
  };
}

export default connect(mapStateToProps)(AccountDetailsView);
