import React from 'react';

import './sign-in-up.styles.scss';

import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

const SigninSignup = () => {
  return (
    <div className="sign-in-up--container">
      <SignIn />
      <SignUp />
    </div>
  );
};

export default SigninSignup;
