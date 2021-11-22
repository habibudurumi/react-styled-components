/** @format */

import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: ${({ theme }) => theme.color.header};
  padding: 40px 0;
  margin: 0 auto;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
  } ;
`;
export const Logo = styled.img`
  border-radius: 50%;
  border: 1px solid darkblue;
  @media (max-width: ${({ theme }) => theme.mobile}) {
    margin-bottom: 40px;
  }
  width: 100px;
  height: 100px;
`;

export const Image = styled.img`
  width: 375px;
  margin-left: 40px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.9);

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100%:
    height: auto;
    margin: 40px 0 30px;
  }
`;
