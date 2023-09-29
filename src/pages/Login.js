import React from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function Login() {
  return (
    <>
      <section>
        <div className="container">
          <div className="authnav">
            <img className="logo" src="images/Frame 1000002580.png" alt="" />
          </div>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="auth">
            <div className="authhead">
              <h2 className="subheads">Log in</h2>
              <p className="color3">
                Join millions of others in sharing successful moves on
                HelpMeOut.
              </p>
              <div className="socialbtn">
                <button className="button2">
                  <FcGoogle />
                  Continue with Google
                </button>
                <button className="button2">
                  <FaFacebook /> Continue with Facebook
                </button>
              </div>
            </div>

            <div>
              <form action="">
                <div className="form-tag">
                  <label htmlFor="Email">Email</label>
                  <input type="text" placeholder="Enter your email address" />
                </div>

                <div className="form-tag">
                  <label htmlFor="Password">Password</label>
                  <input type="password" placeholder="Enter Password" />
                </div>

                <div className="form-tag">
                  <button className="button">Log In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Login;
