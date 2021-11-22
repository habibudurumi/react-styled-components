/** @format */
import SocialIcons from "./SocialIcons";
import { Container } from "./styles/Container.styled";
import { Flex } from "./styles/Flex.styled";
import { FooterStyle } from "./styles/Footer.styled";
export default function Footer() {
  return (
    <FooterStyle>
      <Container>
        <img src='./images/images.png' alt='website-logo' />
        <Flex>
          <ul>
            <li>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Perferendis quis laborum vero sit perspiciatis ea, repellat
              consequatur dicta eaque incidunt.
            </li>
            <li>+2348036988409</li>
            <li>habibubinharuna@gmail.com</li>
          </ul>
          <ul>
            <li>About Us</li>
            <li>What We Do</li>
            <li>FAQ</li>
          </ul>
          <ul>
            <li>Career</li>
            <li>Blog</li>
            <li>Contact us</li>
          </ul>

          <SocialIcons />
        </Flex>
        <p>&copy; 2021 Eathub. All righs reserved</p>
      </Container>
    </FooterStyle>
  );
}
