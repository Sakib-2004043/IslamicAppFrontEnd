import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import registrationService from '../services/registrationService';

const LoginPage = () => {

  const navigate = useNavigate();

  const [userNameMessage,setUserNameMessage] = useState("");
  const [passwordMessage,setPasswordMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");


  const handleLogIn = async() =>{
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('password').value;

    if (!userName){
      setUserNameMessage("Enter User-Name");
    }
    else if (!password){
      setPasswordMessage("Enter Password");
    }
    else{
      try {
        const response = await registrationService.findUser({userName,password});
        if(response.data.success){
          navigate('/',{state:{ userName }});
        }
        else setSuccessMessage("Log In Unsuccessfull.")
      } 
      catch (error) {
        console.log("Error Occured : ",error.message);
        throw(error);  
      }
    }
    
  }

  const resetMessage = () => {
    setUserNameMessage("");
    setPasswordMessage("");
    setSuccessMessage("");
  }
  
  return (
    <div className='mainDiv'>
      <h1>Login Page</h1>
      <div className="registration-box">
        <span>User-Name</span><br />
        <input className="user-input" 
                type="text" required 
                placeholder="Enter Username...."
                id="userName"
                onClick={resetMessage}
        />
        <nav className="alert">{userNameMessage}</nav>
        <br />

        <span>Password</span><br />
        <input className="user-input" 
                type="password"
                placeholder="Enter Password...."
                id="password"
                onClick={resetMessage}
        /> 
        <nav className="alert">{passwordMessage}</nav>
        <a className="forgot-password"><u>Forgot Password</u></a>

        <p className="button-container">
          <button className="register-button"
                  onClick={handleLogIn}
          >Log In
          </button>
        </p>
        {successMessage!==""?<span className="unsuccess-message">{successMessage}</span>:""}
        <p>
          Do Not Have An Account ? 
          <u style={{cursor:'pointer'}}
             onClick={() => navigate('/registration')}
            >..Register..
          </u>
        </p>
        <p>
          You Can Visit Our Site As Guest !!
          <u style={{cursor:'pointer'}}
             onClick={() => navigate('/')}
            >..Visit..
          </u>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
