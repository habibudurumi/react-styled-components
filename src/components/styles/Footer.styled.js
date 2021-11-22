/** @format */

import styled from "styled-components";
export const FooterStyle = styled.footer`
  background: darkblue;
  color: #fff;
  padding: 60px;
  font-size: 1rem;

  ul {
    list-style-type: none;
  }

  ul li {
    margin-bottom: 20px;
  }
  p {
    text-align: right;
  }

  img {
    width: 70px;
    height: 70px;
    border-radius: 50%;
    margin-left: 50px;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    text-align: center;
    ul {
      padding: 0;
    }
    p {
      text-align: center;
      font-size: 0.7rem;
    }
  }
`;
