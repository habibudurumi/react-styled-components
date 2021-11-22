/** @format */

import styled from "styled-components";

export const CardStyle = styled.div`
  display: flex;
  align-items: center;
  background-color: #fff;
  border-radius: 15px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
  margin: 40px 0;
  padding: 10px 20px;
  flex-direction: ${({ layout }) => layout || "row"};

  h2 {
    color: darkblue;
    padding: 0;
  }

  p {
    color: navyblue;
    padding: 0;
    text-align: justify;
  }

  img {
    width: 80%;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    margin: 0.5rem 1rem;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 1rem;

    img {
      width: 100%;
    }
  }
`;
