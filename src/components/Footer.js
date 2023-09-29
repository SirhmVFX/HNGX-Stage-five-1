import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <footer>
        <div className="container">
          <div className="ft">
            <div>
              <img className="logo" src="images/Framewhite.png" alt="" />
            </div>

            <div className="ft_li">
              <h4>Menu</h4>

              <ul className="nm-li">
                <li>
                  <Link>Home</Link>
                </li>
                <li>Coverter</li>
                <li>
                  <Link>How it Works</Link>
                </li>
              </ul>
            </div>

            <div className="ft_li">
              <h4>About Us</h4>

              <ul className="nm-li">
                <li>About</li>
                <li>Contact Us</li>
                <li>Privacy Policy</li>
              </ul>
            </div>

            <div className="ft_li">
              <h4>Screen Record</h4>

              <ul className="nm-li">
                <li>Browser Window</li>
                <li>Coverter</li>
                <li>
                  <Link>How it Works</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
