import React from 'react';
import SignIn from '../../components/sign-in/sign-in';
import SignUp from '../../components/sign-up/sign-up'
import './signIn-and-signUp.scss';

const SignInAndSignUp=()=>(
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignUp;