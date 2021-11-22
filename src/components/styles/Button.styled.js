/** @format */

import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: 2px solid darkblue;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 10px 50px;
  letter-spacing: 1px;
  background: ${({ bg }) => bg || "#fff"};
  color: ${({ color }) => color};

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
    background: darkblue;
    color: #fff;
  }
`;
