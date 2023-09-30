import React from "react";
import Lottie from "react-lottie";
import * as constructionAnime from "../assets/Lottie/construct4.json";

export default function Animation() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: constructionAnime,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid ",
    },
  };

  return (
    <div>
      <div className="box">
        <div>
          <div className="text-box">
            <h1>Site Under construction !</h1>
            <p>Check back later !</p>
          </div>

          <div>
            <p style={{ textAlign: "" }}>
              {" "}
              Until then Subscribe to our wait list
            </p>
            <div className="input-field">
              <input
                className="form-input"
                type="email"
                required
                placeholder="Email Address"
              />
              <button className="mybutton">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="animation">
          <Lottie options={defaultOptions} height={650} width={900} />
        </div>
      </div>
    </div>
  );
}
