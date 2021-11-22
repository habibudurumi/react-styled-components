/** @format */

import styled from "styled-components";

export const Flex = styled.div`
  display: flex;
  align-items: center;
  text-align: center;

  h1 {
    color: darkblue;
  }

  & > div,
  & > ul {
    flex: 1;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    text-align: center;
    font-size: 1rem;
  }
`;
