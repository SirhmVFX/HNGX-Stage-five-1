import React from "react";
import Header from "../components/Header";

function Ready() {
  return (
    <>
      <Header />

      <section>
        <div className="container">
          <div className="ready">
            <div className="red">
              <h2>Your video is ready</h2>

              <div>
                <p className="colo1">Name</p>
                <h3 className="color2">Untitled_Video_20232509 </h3>
              </div>

              <div className="sendin">
                <input type="email" placeholder="enter email of receiver" />
                <button className="button">Send</button>
              </div>

              <div className="sendin">
                <input type="text" placeholder="video url" />
                <button className="button">Copy Url</button>
              </div>

              <div>
                <h4>Share your video</h4>
                <div>
                  <button className="button2">Facebook</button>
                  <button className="button2">Whatsapp</button>
                </div>
              </div>
            </div>
            <div>
              <div className="video"></div>
              <div>
                <h4>Transcipt</h4>

                <div>
                  <h4>0.01</h4>
                  <p>
                    First step. Open Facebook on your desktop or mobile device
                    and locate "Marketplace" in the left-hand menu or at the top
                    of the First step. Open Facebook on your desktop or mobile
                    device and locate "Marketplace" in the left-hand menu or at
                    the top of the{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Ready;
