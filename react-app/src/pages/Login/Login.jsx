import React from 'react';
import './Login.scss';
import {motion} from 'framer-motion';

const sideVariantsRight = {
    hidden : {
        x : '+140vw'
    },
    visible : {
        x : 0,
        transition : {
            delay : 0.3,
            duration : 1,
            type : 'spring'
        }
    }
}

const sideVariantsLeft = {
    hidden : {
        x : '-40vw'
    },
    visible : {
        x : 0,
        transition : {
            delay : 0.3,
            duration : 1,
            type : 'spring'
        }
    }
}

const Login = () => {
    return (
        <div className="login">
            <div className="loginWrapper">
                <motion.div 
                    variants={sideVariantsLeft}
                    initial='hidden'
                    animate='visible'
                    className="loginLeft">
                    <h3 className="loginLogo">Socials</h3>
                    <span className="loginDesc">
                        Connect with your friends and the world around you with Socials.
                    </span>
                </motion.div>
                <motion.div
                    variants={sideVariantsRight}
                    initial='hidden'
                    animate='visible' 
                    className="loginRight">
                    <div className="loginBox">
                        <input placeholder='Email' className="loginInput" />
                        <input placeholder='Password' className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <button className="loginRegisterButton">Create a New Account</button>
                        <span className="loginForgot">Forgot Password?</span>
                    </div>
                </motion.div>
            </div>
        </div>
    )
}

export default Login;