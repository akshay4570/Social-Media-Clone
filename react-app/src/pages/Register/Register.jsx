import React from 'react';
import './Register.scss';
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

const Register = () => {
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
                Connect with friends and the world around you on Socials.
              </span>
            </motion.div>
            <motion.div 
              variants={sideVariantsRight}
              initial='hidden'
              animate='visible' 
              className="loginRight">
              <div className="loginBox">
                <input placeholder="Username" className="loginInput" />
                <input placeholder="Email" className="loginInput" />
                <input placeholder="Password" className="loginInput" />
                <input placeholder="Password Again" className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">
                  Log into Account
                </button>
              </div>
            </motion.div>
          </div>
      </div>
    )
}

export default Register;