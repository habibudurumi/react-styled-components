/** @format */

import React from "react";
import { HeaderStyle, Nav, Logo, Image } from "./styles/Header.styled";
import { Container } from "./styles/Container.styled";
import { Button } from "./styles/Button.styled";
import { Flex } from "./styles/Flex.styled";
const Header = () => {
  return (
    <HeaderStyle>
      <Container>
        <Nav>
          <Logo src='./images/images.png' alt='website-logo' />
          <Button color='darkblue'>Taste Free</Button>
        </Nav>

        <Flex>
          <div>
            <h1>We are professionals in Local and International Cusines</h1>
            <p>
              At Eathub we make sure that our customers satisfaction is our
              priority, which encourages us to cook more for the community and
              the world at large. Take a date with <strong>EatHub</strong>
            </p>
            <Button bg='#fff' color='darkblue'>
              Get your first food for free
            </Button>
          </div>
          <Image src='./images/hero.jpg' />
        </Flex>
      </Container>
    </HeaderStyle>
  );
};

export default Header;
