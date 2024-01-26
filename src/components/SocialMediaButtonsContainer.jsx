import React from "react";
import SocialMediaButton from "./SocialMediaButton";

function SocialMediaButtonsContainer() {
  return (
    <div className="social-media">
      <SocialMediaButton
        address="https://example.com/github"
        icon="https://cdn4.iconfinder.com/data/icons/social-media-2231/512/71-github_social-64.png"
      >
        GitHub
      </SocialMediaButton>
      <SocialMediaButton
        address="https://example.com/twitter"
        icon="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Twitter5_svg-128.png"
      >
        Twitter
      </SocialMediaButton>
      <SocialMediaButton
        address="https://example.com/instagram"
        icon="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Instagram_svg-128.png"
      >
        Instagram
      </SocialMediaButton>
      <SocialMediaButton
        address="https://example.com/linkedin"
        icon="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Linkedin2_svg-128.png"
      >
        LinkedIn
      </SocialMediaButton>

      {/* <SocialMediaButton
        address="https://example.com/youtube"
        icon="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Youtube3_svg-128.png"
      >
        YouTube
      </SocialMediaButton> */}
      <SocialMediaButton
        address="https://example.com/facebook"
        icon="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Facebook_svg-128.png"
      >
        Facebook
      </SocialMediaButton>
      {/* <SocialMediaButton
        address="https://example.com/reddit"
        icon="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Reddit2_svg-128.png"
      >
        Reddit
      </SocialMediaButton> */}
      <SocialMediaButton
        address="https://example.com/whatsapp"
        icon="https://cdn1.iconfinder.com/data/icons/social-media-rounded-corners/512/Rounded_Whatsapp_svg-128.png"
      >
        WhatsApp
      </SocialMediaButton>
      <SocialMediaButton
        address="https://example.com/telegram"
        icon="https://cdn2.iconfinder.com/data/icons/social-media-solid-2/32/Telegram-64.png"
      >
        Telegram
      </SocialMediaButton>
    </div>
  );
}

export default SocialMediaButtonsContainer;
