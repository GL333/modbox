import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../../actions/authAction';

class Login extends React.Component{
  state={
    email:'',
    password:'',
  };
  onInputChange = (e)=>{

    this.setState({[e.target.name]:e.target.value})
  };
  onFormSubmit = (e)=>{
      e.preventDefault();
      // login
    this.props.login(this.state, this.props.history);
  };

    render(){
        return (
        <div className="Register-Login">

          {this.props.auth.message &&
          <div className="message">{this.props.auth.message}</div>
          }
          <form onSubmit={this.onFormSubmit}>
            <input
                autoComplete="new-email"
                name="email"
                value={this.state.email}
                placeholder="Email"
                onChange={this.onInputChange}
                type="email"/>
            <input
                autoComplete="new-password"
                name="password"
                value={this.state.password}
                placeholder="Password"
                onChange={this.onInputChange}
                type="passwor"/>
            {this.props.errors.message &&
            <span className="form-error">{this.props.errors.message}</span>}
            <button>Login</button>
          </form>
        </div>
        );
    }
}


const mapStateToProps = (state)=>{
  return {
    auth:state.auth,
    errors: state.errors,
  }
};

export default connect(mapStateToProps, actions)(Login)