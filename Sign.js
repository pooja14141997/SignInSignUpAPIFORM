import axios from 'axios';
import React, { useState } from 'react';
import './App.css';



const Sign = () => {
  const signInData = { email: '', password: '', fcmToken: 'DemoToken' };
  const signUpData = {  first_name: '', last_name: '',email: '', password: '',gender:'',country_code:'',phone_number:'',platform:'',provider:'',role:'' };
 
  const [signInInput, setSignInInput] = useState(signInData);
  const [signUpInput, setSignUpInput] = useState(signUpData);
  const [isSignIn, setIsSignIn] = useState(true);
  

  const handleSignInData = (e) => {
    setSignInInput({ ...signInInput, [e.target.name]: e.target.value });
  };

  const handleSignUpData = (e) => {
    setSignUpInput({ ...signUpInput, [e.target.name]: e.target.value });
  };

  const handleSignInSubmit = (e) => {
    e.preventDefault();
    axios.post('https://reileadsapi.exerboost.in/api/sign-in', signInInput)
      .then((response) => {
        console.log(response);
        // Handle successful sign-in
      })
      .catch((error) => {
        console.error('Sign-in error:', error);
        // Handle sign-in error
      });
  };

  const handleSignUpSubmit = (e) => {
    e.preventDefault();
    axios.post('https://reileadsapi.exerboost.in/api/sign-up', signUpInput)
      .then((response) => {
        console.log(response);
        // Handle successful sign-up
      })
      .catch((error) => {
        console.error('Sign-up error:', error);
        // Handle sign-up error
      });
  };


  const toggleSignInUp = () => {
    setIsSignIn(!isSignIn);
  };
  

  return (
    <div className='container'>
      <div className='header'>
        <div className='text'>{isSignIn ? 'Sign In' : 'Sign Up'}</div>
        <div className='underline'></div>
      </div>

      <div className='inputs'>
        {isSignIn ? (
          <>
            <div className='input'>
              <input type='text' name='email' value={signInInput.email} onChange={handleSignInData} placeholder='Enter Email' />
            </div>
            <div className='input'>
              <input type='password' name='password' value={signInInput.password} onChange={handleSignInData} placeholder='Enter Password' />
            </div>
          </>
        ) : (
          <>
            <div className='input'>
              <input type='text' name='first_name' value={signUpInput.first_name} onChange={handleSignUpData} placeholder='First Name' />
            </div>
            <div className='input'>
              <input type='text' name='last_name' value={signUpInput.last_name} onChange={handleSignUpData} placeholder='Last Name' />
            </div>
            <div className='input'>
              <input type='text' name='email' value={signUpInput.email} onChange={handleSignUpData} placeholder='Enter Email' />
            </div>
           
            <div className='input'>
           <select id='gender' name='gender'value={signUpInput.gender} onChange={handleSignUpData} placeholder='Enter Gender'>
           <option value="male">Male</option>
           <option value="female">Female</option>
           </select>
           </div>
  
           <div className='input'>
           <input type='number' name='country_code' value={signUpInput.country_code} onChange={handleSignUpData}></input><br></br>
           </div>
           <div className='input'>
          <input type='number' name='phone_number' value={signUpInput.phone_number} onChange={handleSignUpData}></input><br></br>
         </div>
         <div className='input'>
         <select id='platform' name='platform' value={signUpInput.platform} onChange={handleSignUpData} placeholder='Enter Platfrom'>
         <option value="ios">ios</option>
         <option value="android">android</option>
         </select>
         </div>
         <div className='input'>
         <input type='text' name='provider' value={signUpInput.provider} onChange={handleSignUpData} placeholder='Enter Provider'></input><br></br>
         </div>
         <div className='input'>
        <select id='role' name='role'value={signUpInput.role} placeholder='Enter Role' onChange={handleSignUpData} >
        <option value="student">student</option>
        <option value="landlord">landlord</option>
        </select>
         </div>
         <div className='input'>
         <input type='password' name='password' value={signUpInput.password} onChange={handleSignUpData} placeholder='Enter Password' />
          </div>
          </>  
        )}
       </div>

      
      <div className='submit-container'>
      <button onClick={isSignIn ? handleSignInSubmit : handleSignUpSubmit} className='submit'>{isSignIn ? 'Sign In' : 'Sign Up'}</button>
        <div className='toggle' onClick={toggleSignInUp}>{isSignIn ? 'Sign Up' : 'Sign In'}</div>
      </div>
      </div>
  );
};

export default Sign;
