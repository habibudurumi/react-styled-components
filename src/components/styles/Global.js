/** @format */

import { createGlobalStyle } from "styled-components";
const GlobalStyles = createGlobalStyle`
*{
    box-sizing: border-box;
}

body{
    background: ${({ theme }) => theme.color.body};
    font-family: Roboto;
    font-size: 1.3rem;
    color: hsl(192,100%,9%);
    margin: 0;
}

p {
    opacity: .9;
    line-height: 1.5;
    color: navyblue;
    text-align: center;
}

img {
    max-width: 100%;
}
`;

export default GlobalStyles;
