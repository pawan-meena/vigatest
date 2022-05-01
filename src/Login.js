import React from "react";
import './App.css';

   function Login() {

        return (
          <div className="grey" id="box">
            <img src = './images/proctor-vision-logo-small.png' alt= 'proctor-logo' className='logo small'/>
            <form id='login' action="">
            <div>
              <label htmlFor="username"></label>
              <input placeholder = 'Username' type='text' name="username" id="username" autoComplete="off"/>
            </div>

            <div>
              <label htmlFor="password"></label>
              <input placeholder = 'Password' type='password' name="password" id="password" autoComplete="off"/>
            </div>
            <br></br>
            <a href='./'>Reset Password from Default/<br></br>Forgot Password</a>
            <br></br>
            <br></br>
            <button className='btn small' type="submit">Login</button>
            <br></br>
            
            </form>
          </div>// --grey end
        );

    }

    export default Login;