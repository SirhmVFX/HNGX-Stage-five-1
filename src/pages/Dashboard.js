import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";

function Dashboard() {
  return (
    <>
      <section>
        <div className="container">
          <div className="authnav">
            <img className="logo" src="images/Frame 1000002580.png" alt="" />
            <div className="user">
              <FaUserCircle />
              <h5>Fullstack Mechanic</h5>
              <AiOutlineDown />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="dashbordheader">
            <div>
              <h2 className="subheads">Hello, Fullstack Mechanic</h2>
              <p className="color3">Here are your recorded videos</p>
            </div>

            <div>
              <input
                className="search"
                type="text"
                placeholder="Search for a particular video"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="line"></div>

      <section>
        <div className="container">
          <div>
            <p className="color3">Recent Files</p>
          </div>
        </div>
      </section>

      <div className="line"></div>

      <section>
        <div className="container">
          <div>
            <p className="color3">Files from last week</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Dashboard;
