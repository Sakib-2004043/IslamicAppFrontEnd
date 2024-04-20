import { useState } from "react";
import { useNavigate } from "react-router-dom";

import registrationService from "../services/registrationService";
import salatService from "../services/salatService";


function RegistrationPage() {

  const navigate=useNavigate();

  const [userNameMessage,setUserNameMessage] = useState("");
  const [gmailMessage,setGmailMessage] = useState("");
  const [passwordMessage,setPasswordMessage] = useState("");
  const [confirmPasswordMessage,setConfirmPasswordMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const validUserName = async(userName) =>{
    try {
      const response = await registrationService.checkUser({userName});
      console.log(response.data);
      return response.data.success;
    } 
    catch (error) {
      console.log("Error Occured : ",error.message);
      throw(error);
    }
  }

  const handleCreateUser = async(event) => {

    const userName = document.getElementById('userName').value;
    const gmail = document.getElementById('gmail').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    if(password !== confirmPassword){
      setConfirmPasswordMessage("Confirmed Password Doesn't Match");
    }
    else if (!userName){
      setUserNameMessage("Enter User-Name");
    }
    else if (!gmail){
      setGmailMessage("Enter Gmail");
    }
    else if (!password){
      setPasswordMessage("Enter Password");
    }
    else if (!confirmPassword){
      setConfirmPasswordMessage("Enter User-Name");
    }
    else if(await validUserName(userName) === false){
      setUserNameMessage("This User-Name Has Taken.");
    }
    else{
      try {
        await registrationService.createJikir({userName});
      } 
      catch (error) {
        console.log("Error Occured : ",error.message);
        throw(error);
      }
      
      try {
        await salatService.createSalat({userName});
      } 
      catch (error) {
        console.log("Error Occured : ",error.message);
        throw(error);
      }
      
      const formData = {userName,gmail,password}
      try {
        await registrationService.createUser(formData);
        setSuccessMessage("Registration Successfull.");
        setTimeout(() => {
          navigate('/logIn');
        }, 1000);
      } 
      catch (error) {
        console.log("Error Occured : ",error.message);
        throw(error);
      }   
    }
  }

  const resetMessage = () => {
    setUserNameMessage("");
    setGmailMessage("");
    setPasswordMessage("");
    setConfirmPasswordMessage("");
  }
  

  return (
    <div className="mainDiv" >
      <h1>Registration Page</h1>
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
        <span>Gmail</span><br />
        <input className="user-input" 
                type="text"
                placeholder="Enter Gmail...."
                id="gmail"
                onClick={resetMessage}
        /> 
        <nav className="alert">{gmailMessage}</nav>
        <br />

        <span>Password</span><br />
        <input className="user-input" 
                type="password"
                placeholder="Enter Password...."
                id="password"
                onClick={resetMessage}
        /> 
        <nav className="alert">{passwordMessage}</nav>
        <br />

        <span>Confirm Password</span><br />
        <input className="user-input" 
                type="password"
                placeholder="Re-Enter Password...."
                id="confirmPassword"
                onClick={resetMessage}
        /> 
        <nav className="alert">{confirmPasswordMessage}</nav>
        <br />

        <p className="button-container">
          <button className="register-button" 
                  type="Submit"
                  onClick={handleCreateUser}
          >Register
          </button>
        </p>
        <p>{successMessage}</p>
        <p>
          Already Have An Account ? 
          <u style={{cursor:'pointer'}}
             onClick={() => navigate('/logIn')}
            >..Log In..
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

  )
}

export default RegistrationPage;
