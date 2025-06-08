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

  background-color: ${({variant, theme}) => {
    switch (variant) {
      case "primary":
        return theme.Colors.Orange_500;
      case "secondary":
        return theme.Colors.White;
    }
  }};
  border: 1px solid;

  border-color: ${({variant, theme}) => {
    switch (variant) {
      case "primary":
        return theme.Colors.Orange_500
      case "secondary":
        return theme.Colors.Blue_500;
    }
  }};
`;
export const Title = styled.span`
  font-size: ${({theme}) => theme.Font_Size.LG}px;
  color: ${({variant, theme}) => {
    switch (variant) {
      case "primary":
        return theme.Colors.White;
      case "secondary":
        return theme.Colors.Blue_500;
    }
  }};

  font-family: ${({variant, theme}) => {
    switch (variant) {
      case "primary":
        return theme.Font_Family.Bold;
      case "secondary":
        return theme.Font_Family.Regular;
    }
  }};
  text-align: center;
`;