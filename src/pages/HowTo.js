import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function HowTo() {
  return (
    <>
      <Header />

      <section>
        <div className="container">
          <div className="hott">
            <h1 className="herotext">How to install Help Me Out</h1>
            <div className="pg">
              <div className="hj">
                <h3 className="tags">1</h3>
                <h3 className="worktext color1">
                  Step 1 - Download Unpacked file
                </h3>
                <p className="color3">
                  Click <Link>HERE</Link> to download the extension unpacked
                  file
                </p>
              </div>
              <div className="hj">
                <h3 className="tags">2</h3>
                <h3 className="worktext color1">Upload the Unpacked File</h3>
                <p className="color3">
                  After download is successful, in your chrom url tab typ the
                  following "chrome://extension", at the top right corner, turn
                  on the developer mode
                </p>

                <p>
                  Now click the "Load Unpacked" button and Navigate to where the
                  Unpacked Files you downloaded are and select them
                </p>
              </div>
              <div className="hj">
                <h3 className="tags">3</h3>
                <h3 className="worktext color1">Pin Extension</h3>
                <p className="color3">
                  For easy access, on your chrome tab, click the extension
                  button, you'll find the "Help me Out" extension listed, click
                  on the pin icon directely next to it
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default HowTo;
