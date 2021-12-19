import React from 'react';
import { Link } from 'react-router-dom';



const Greeting = ({ currentUser, logout }) => {
  const sessionLinks = () => (
    <nav className="login-signup">
      <Link to="/login">Log in</Link>
      &nbsp;
      <button className="sign-up-button"><Link to="/signup">Sign up</Link></button>
    </nav>
  );
  const personalGreeting = () => (
    <hgroup className="header-group">
      <Link to={'/orders'}>
        <i className="fa fa-shopping-cart" id="cart" />
      </Link>
      <h2 className="header-name"><img src="/images/icons/user.png"/></h2>
      <Link to="/"><button className="logout-header-button" onClick={logout}>Log Out</button></Link>
    </hgroup>
  );

  return currentUser ? personalGreeting() : sessionLinks();
};


export default Greeting;