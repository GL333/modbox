import React from 'react';
import{Link} from 'react-router-dom';
import {connect} from 'react-redux';
import * as actions from '../../actions/authAction';


const Header = (props)=>{
  return (
      <header>
        <h1><Link to="/">Moodbox</Link></h1>
        <nav>
          {props.user &&
          [<Link key='1' to='/account'>{props.user.firstname}</Link>,
            <Link key='2' to='/login' onClick={props.logout}>
              Logout
            </Link>
          ]}
          {!props.user && [
            <Link key="1" to='/register'>Register</Link>,
            <Link key="2" to='/login'>Login</Link>,
          ]}
          </nav>
      </header>
  );
};


const mapStateToProps =(state)=>{
  return {
    user:state.auth.user,
    isAuth:state.auth.isAuth,

  }
};


export default connect(mapStateToProps,actions) (Header)