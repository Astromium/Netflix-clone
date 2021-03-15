import React, { useState } from "react";
import "./LoginScreen.css";
import SIgnUpScreen from "./SIgnUpScreen";

function LoginScreen() {
  const [signIn, setSignIn] = useState(false);
  return (
    <div className="login">
      <div className="login__background">
        <img
          className="login__logo"
          src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
          alt="img"
        />
        <button className="login__button" onClick={() => setSignIn(true)}>
          Sign in
        </button>
      </div>
      <div className="login__gradient" />
      {!signIn ? (
        <div className="login__body">
          <>
            <h1>Unlimited films, TV programmes and more.</h1>
            <h2>Watch anywhere, Cancel at any time</h2>
            <h3>
              Ready to watch ? Enter your email to create or restart your
              membership
            </h3>
            <div className="login__input">
              <form>
                <input type="email" placeholder="Email Address" />
                <button
                  onClick={() => setSignIn(true)}
                  className="login__getStarted"
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        </div>
      ) : (
        <SIgnUpScreen />
      )}
    </div>
  );
}

export default LoginScreen;
