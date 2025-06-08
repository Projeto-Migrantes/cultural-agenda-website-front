import styled from "styled-components";
export const Container = styled.button`
  width: 100%;
  height: 50px;
  border-radius: 99999px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:active {
    opacity: 0.8;
  }

  background-color: ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return theme.Colors.Orange_400;
      case "secondary":
        return "transparent";
    }
  }};
  border: 1px solid;

  border-color: ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return theme.Colors.Orange_400;
      case "secondary":
        return theme.Colors.Blue_500;
    }
  }};
`;
export const Title = styled.span`
  font-size: ${({ theme }) => theme.Font_Size.LG}px;
  color: ${({ variant, theme }) => {
    switch (variant) {
      case "primary":
        return theme.Colors.White;
      case "secondary":
        return theme.Colors.Blue_500;
    }
  }};

  font-family: ${({ theme }) => theme.Font_Family.Bold};
  font-weight: ${({ theme }) => theme.Font_Weight.Bold};
  text-align: center;
`;
