import React from 'react';
import * as actions from '../../actions/authAction';
import {connect} from 'react-redux';




class Register extends React.Component{

  state={
    email:'',
    firstname:'',
    lastname:'',
    password:'',
    password2:'',
    errors:{},
  };

  onInputChange = (e)=>{

      this.setState({[e.target.name]:e.target.value})
  };

  register= (e)=>{
    e.preventDefault();
    const errors = {};
    if(this.state.password!==this.state.password2){
      errors.password='password doesn\'t match';
      return this.setState({errors})
    }
    this.setState({errors:{}});

    this.props.register(this.state, this.props.history)
  };


    render(){
      const {errors} = this.props;
        return (
        <div className="Register-Login">
          <form onSubmit={this.register}>
            <input
                name="email"
                placeholder="Email"
                value={this.state.email}
                onChange={this.onInputChange}
                type="email"/>
            {errors.email && <span>{errors.email}</span>}
            <input
                name="firstname"
                placeholder="First name"
                value={this.state.firstname}
                onChange={this.onInputChange}
                type="text"/>
            {errors.firstname && <span>{errors.firstname}</span>}
            <input
                name="lastname"
                placeholder="Last name"
                value={this.state.lastname}
                onChange={this.onInputChange}
                type="text"/>
            {errors.lastname && <span>{errors.lastname}</span>}
            <input
                name="password"
                placeholder="Password"
                value={this.state.password}
                onChange={this.onInputChange}
                type="password"/>
            {errors.password && <span>{errors.password}</span>}
            <input
                name="password2"
                placeholder="Confirm Password"
                value={this.state.password2}
                onChange={this.onInputChange}
                type="password"/>
            {this.state.errors.password && <span>{this.state.errors.password}</span>}
            <button>Register</button>

          </form>
        </div>
        );
    }
}

const mapStateToProps = (state)=>{
    return{
      errors:state.errors
    }
};

export default connect(mapStateToProps, actions)(Register)