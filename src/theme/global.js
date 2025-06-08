import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: ${({ theme }) => theme.Font_Family.Regular};
    font-weight: ${({ theme }) => theme.Font_Weight.Regular};
    margin: 0;
    padding: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${({ theme }) => theme.Font_Family.Bold};
    font-weight: ${({ theme }) => theme.Font_Weight.Bold};
  }

  strong, b {
    font-weight: ${({ theme }) => theme.Font_Weight.ExtraBold};
  }
`;

export default GlobalStyle;
