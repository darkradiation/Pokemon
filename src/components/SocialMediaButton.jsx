import React from "react";

function SocialMediaButton({ children, address, icon }) {
  return (
    <div className="social-media-button">
      <a href={address} target="_blank" rel="noopener noreferrer">
        <img src={icon} alt="" />
        <div className="social-media-button-title">{children}</div>
      </a>
    </div>
  );
}

export default SocialMediaButton;
