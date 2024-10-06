import React, { useContext } from "react";
import { Fade } from "react-reveal";
import "./Greeting.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";
import { illustration, greeting } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import handAnimation from "../../assets/lottie/hand.json";  // Import the hand Lottie animation

// Import your image
import myPicture from "../../assets/images/myPicture.jpg";

export default function Greeting() {
  const { isDark } = useContext(StyleContext);

  if (!greeting.displayGreeting) {
    return null;
  }

  return (
    <Fade bottom duration={1000} distance="40px">
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          {/* Left side (Picture) */}
          <div className="greeting-image-div">
            <img
              alt="Your Name"
              src={myPicture}
              className="greeting-image"
            />
          </div>

          {/* Right side (Text) */}
          <div className="greeting-text-div">
            <div>
              <h1
                className={isDark ? "dark-mode greeting-text" : "greeting-text"}
              >
                {greeting.title}
                {illustration.animated ? (
                  <span className="wave-emoji">
                    <DisplayLottie animationData={handAnimation} />
                  </span>
                ) : (
                  <span className="wave-emoji">👋</span>
                )}
              </h1>
              <p
                className={
                  isDark
                    ? "dark-mode greeting-text-p"
                    : "greeting-text-p subTitle"
                }
              >
                {greeting.subTitle}
              </p>
              <SocialMedia />
              <div className="button-greeting-div">
                {greeting.resumeLink && (
                  <a
                    href={require("./resume.pdf")}
                    download="Resume.pdf"
                    className="download-link-button"
                  >
                    <Button text="Download my resume" />
                  </a>
                )}
                <Button text="Contact me" href="#contact" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}
