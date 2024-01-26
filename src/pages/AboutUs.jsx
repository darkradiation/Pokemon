import React from "react";
import SocialMediaButtonsContainer from "../components/SocialMediaButtonsContainer";

const AboutUs = () => {
  return (
    <>
      <div className="about-container">
        <div className="content">
          <h1>Vishal Kumar Shaw</h1>
          <h3>I am still learning ...</h3>
          <SocialMediaButtonsContainer />
        </div>
        <div className="image-container">
          {/* Add your image source */}
          <img
            src="https://preview.redd.it/lwrhsnubpvrb1.png?width=1024&format=png&auto=webp&s=5221a29644c2684f644c1e9306a85f91048df728"
            alt="Your Name"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
