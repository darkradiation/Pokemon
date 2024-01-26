import React from "react";

function SocialMediaButton({ children, address, icon }) {
  return (
    <div className="social-media-button">
      <img src={icon} alt="" />
      <a href={address} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    </div>
  );
}

export default SocialMediaButton;
