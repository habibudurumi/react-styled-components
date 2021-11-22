/** @format */

import styled from "styled-components";

export const SocialIconsStyle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  li {
    list-style-type: none;
  }

  a {
    border: 1px solid #fff;
    border-radius: 50%;
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 10px;
    height: 40px;
    width: 40px;
    text-decoration: none;

    &:hover {
      background: #fff;
      color: darkblue;
    }
  }
`;
