import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <nav>
            <img className="logo" src="images/frameblue.png" alt="" />

            <div>
              <ul className="nav_menu">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
                </li>
                <li>
                  <Link to="/sign-up">Sign Up</Link>
                </li>

                <li>
                  <Link to="/dashboard">Video Dashboard</Link>
                </li>
                <li>
                  <Link to="/newvideo/:id">Video Dashboard</Link>
                </li>

                <li>
                  <Link>Features</Link>
                </li>
                <li>
                  <Link>How it works</Link>
                </li>
              </ul>
            </div>

            <h5 className="color1">Get Started</h5>
          </nav>
        </div>
      </header>
    </>
  );
}
export default Header;
