import React, { useState } from "react";
import GoogleLogin from "react-google-login";
import "./loginform.css"

const LoginForm = () => {



    return (
        <div className="cover">
            <h1>Login</h1>
            <input type="text" placeholder="username" />
            <input type="password" placeholder="password" />

            <div className="login-btn" >Login</div>

            <p className="text">Or login using</p>

            <div className="alt-login">
                <div className="facebook"></div>
                <div className="google">

                </div>
            </div>

            <div >
                <h3>Login Failed</h3>
                <p>Username or password incorrect</p>
            </div>

        </div>
    )
}

export default LoginForm