import React from "react";

function Features() {
  return (
    <>
      <section>
        <div className="container">
          <div className="center">
            <h2 className="subheads">Features</h2>
            <p className="color3">Key Highlights of Our Extension</p>
          </div>

          <div className="features">
            <div className="allft">
              <div className="ft">
                <div>
                  <img
                    className="icon"
                    src="images/Iconplaceholder.png"
                    alt=""
                  />
                </div>
                <div className="tt">
                  <h3 className="h33s color2">Simple Screen Recording</h3>
                  <p className="color3 ft-text">
                    Effortless screen recording for everyone. Record with ease,
                    no tech expertise required.
                  </p>
                </div>
              </div>
              <div className="ft">
                <div>
                  <img
                    className="icon"
                    src="images/Iconplaceholder-1.png"
                    alt=""
                  />
                </div>
                <div className="tt">
                  <h3 className="h33s color2">Easy-to-Share URL</h3>
                  <p className="color3 ft-text">
                    Share your recordings instantly with a single link. No
                    attachments, no downloads.
                  </p>
                </div>
              </div>
              <div className="ft">
                <div>
                  <img
                    className="icon"
                    src="images/Iconplaceholder-2.png"
                    alt=""
                  />
                </div>
                <div className="tt">
                  <h3 className="h33s color2">Revisit Recordings</h3>
                  <p className="color3 ft-text">
                    Access and review your past content effortlessly. Your
                    recordings, always at your fingertips.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <img
                className="featureimg"
                src="images/Video Repository.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Features;
