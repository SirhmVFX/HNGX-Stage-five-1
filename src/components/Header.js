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
