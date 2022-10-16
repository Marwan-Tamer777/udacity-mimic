import { Component } from "react";
//import { NavLink } from "react-router-dom";
import { connect } from "react-redux";
import { validateUser } from "../Actions/users";

class SingUpView extends Component {
  nameInput = {};
  emailInput = {};
  passwordInput = {};

  componentDidMount() {
    this.nameInput = document.getElementById("Sign_up_user_name");
    this.emailInput = document.getElementById("Sign_up_email");
    this.passwordInput = document.getElementById("Sign_up_password");
  }

  onSubmit(){
    this.props.dispatch(validateUser(this.nameInput.value,this.emailInput.value))
  }

  render() {
    return (
      <div
        className="flex flex-col content-center justify-center w-screen h-screen 
     backdrop-filter backdrop-blur-lg backdrop-brightness-50 bg-gray-400"
      >
        <div
          id="Sign_up_form"
          className="border-4 rounded-2xl w-1/2 h-1/2 m-auto shadow-xl bg-white flex flex-col justify-start content-start"
        >
          <label>UserName</label>
          <input type="text" placeholder="Enter Username" id="Sign_up_user_name"/>
          <label>Email</label>
          <input type="email" placeholder="Enter Email" id="Sign_up_email" />
          <label>Password</label>
          <input type="password" placeholder="Enter Password" id="Sign_up_password"/>
          <button onClick={()=>(this.onSubmit())}>Submit</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ currentUser = null }) {
  return {
    currentUser,
  };
}

export default connect(mapStateToProps)(SingUpView);
