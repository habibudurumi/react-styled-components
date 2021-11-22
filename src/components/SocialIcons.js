/** @format */
import { SocialIconsStyle } from "./styles/SocialIcons.styled";
import { FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";
export default function SocialIcons() {
  return (
    <SocialIconsStyle>
      <li>
        <a href='https://twitter.com'>
          <FaTwitter />
        </a>
      </li>
      <li>
        <a href='https://facebook.com'>
          <FaFacebook />
        </a>
      </li>
      <li>
        <a href='https://instagram.com'>
          <FaInstagram />
        </a>
      </li>
    </SocialIconsStyle>
  );
}
