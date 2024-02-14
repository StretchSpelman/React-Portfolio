import envelopeIcon from "../assets/4745721_bubble_connection_email_envelope_letter_icon.svg";
import githubIcon from "../assets/764894_github_media_social_square_icon.svg";
import linkedinIcon from "../assets/5282542_linkedin_network_social network_linkedin logo_icon.svg";
import instagramIcon from "../assets/5282544_camera_instagram_social media_social network_instagram logo_icon.svg";
import Icon from "./UI/Icon";

export default function Footer() {
  const priority = {
    zIndex: 99,
  };
  const images = [
    { image: envelopeIcon, link: "mailto:codingspelman@gmail.com" },
    { image: githubIcon, link: "https://github.com/StretchSpelman" },
    { image: linkedinIcon, link: "https://www.linkedin.com/in/stretch-spelman-b254b92b4/" },
    { image: instagramIcon, link: "https://www.instagram.com/codingspelman/" },
  ];

  return <Icon images={images} />;
}