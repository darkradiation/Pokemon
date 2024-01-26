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
            // src="https://preview.redd.it/lwrhsnubpvrb1.png?width=1024&format=png&auto=webp&s=5221a29644c2684f644c1e9306a85f91048df728"
            // src="https://media3.giphy.com/media/Vflt8F8tEZs3LTdYR4/giphy.gif?cid=6c09b9527zwcl58i6ltfst2f4q6pmknjzfzfek7sjdbey9nz&ep=v1_stickers_related&rid=giphy.gif&ct=s"
            // src="https://media1.giphy.com/media/FkHWucD3p2Row4SOVR/giphy.gif?cid=ecf05e47j0s6f8befmef2v2fjbqebegjimccg4sqi0r1swpc&ep=v1_gifs_related&rid=giphy.gif&ct=s"
            // src="https://clipart-library.com/images/8cEbXkpLi.gif"
            src="https://media.tenor.com/IpAyHtYc--gAAAAi/charizard-flying.gif"
            alt="Your Name"
          />
        </div>
      </div>
    </>
  );
};

export default AboutUs;
