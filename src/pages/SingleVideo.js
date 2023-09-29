import React from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineDown } from "react-icons/ai";
import logo from "./frameblue.png";
function SingleVideo() {
  return (
    <>
      <section>
        <div className="container">
          <div className="authnav">
            <img className="logo" src={logo} alt="" />
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
          <div>
            <p className="color3">
              Home / Recent Videos / <span className="color1">Video Title</span>
            </p>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="video-container">
            <h2>This is the video title</h2>
            <div className="video"></div>

            <div className="send">
              <div className="sendin">
                <input type="email" placeholder="enter email of receiver" />
                <button className="button">Send</button>
              </div>

              <div className="sendin">
                <input type="text" placeholder="video url" />
                <button className="button">Copy Url</button>
              </div>
            </div>

            <div>
              <h4>Share your video</h4>
              <div>
                <button className="button2">Facebook</button>
                <button className="button2">Whatsapp</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <h4>Transcipt</h4>

          <div>
            <h4>0.01</h4>
            <p>
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the
              First step. Open Facebook on your desktop or mobile device and
              locate "Marketplace" in the left-hand menu or at the top of the{" "}
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleVideo;
