import React, { Component } from 'react';
import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {signInWithGoogle} from '../../firebase/firebase.utils';
import './sign-in.scss';

class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = { email:'', password:'' };
    }
    handleChange=(e)=>{
        const {name, value}=e.target;
        this.setState({[name]:value})
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.setState({email:"", password:""})
    }
    render() {
        return (
            <div className="sign-in">
                <h1>I already have an account</h1>
                <span>Sign in with email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                    name="email"
                    type="email"
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label="email"
                    required
                    />
                    <FormInput
                    name="password"
                    type="password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    label="password"
                    required
                    />
                    <div className="buttons">
                    <CustomButton type="submit">Sign In</CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign In with google</CustomButton>
                    </div>
                </form>
            </div>
            
        );
    }
}

export default SignIn;