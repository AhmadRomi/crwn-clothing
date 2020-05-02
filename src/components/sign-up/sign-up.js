import React, { Component } from 'react';

import FormInput from '../form-input/form-input';
import CustomButton from '../custom-button/custom-button';
import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.scss';

class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            displayName:'',
            email:'',
            password:'',
            confirmPassword:''
         };
    }
    handleSubmit=async(e)=>{
        e.preventDefault();
        const {displayName, email, password, confirmPassword}=this.state;
        if(password!== confirmPassword){
            alert("passwords don't match");
            return;
        }
        try{
            const {user}=await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({ 
                displayName:'',
                email:'',
                password:'',
                confirmPassword:''
             })
        }catch(e){
            console.log("error: ",e.message);
        }
    }
    handleChange=(e)=>{
        const {name, value}=e.target;
        this.setState({[name]:value});
    }
    render() {
        return (
            <div className="sign-up">
                <h2 className="title">I don't have an account</h2>
                <span>sigin up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type="text"
                    name="displayName"
                    value={this.state.displayName}
                    onChange={this.handleChange}
                    label="display name"
                    required
                    />
                    <FormInput
                    type="email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleChange}
                    label="email"
                    required
                    />
                    <FormInput
                    type="password"
                    name="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    label="password"
                    required
                    />
                    <FormInput
                    type="password"
                    name="confirmPassword"
                    value={this.state.confirmPassword}
                    onChange={this.handleChange}
                    label="confirm password"
                    required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        );
    }
}

export default SignUp;