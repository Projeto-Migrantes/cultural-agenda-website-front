import styled from "styled-components";

export const Label = styled.label`
  margin-left: 20px;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const Input = styled.input`
    display: none;
`

export const Text = styled.span`
  font-weight: ${({ theme }) => theme.Font_Weight.Bold};
  font-size: 1.12rem;
  color: ${({ theme }) => theme.Colors.Blue_500};
  position: relative;
  padding-left: 35px;

  &::before {
    box-sizing: border-box;
    border: 2px solid ${({ theme }) => theme.Colors.Blue_500};
    border-radius: 8px;
    width: 25px;
    height: 25px;
    position: absolute;
    left: 0;
    content: "";
  }

  ${Input}:checked + & {
    &::before {
      display: flex;
      justify-content: center;
      align-items: center;
      background-color: ${({ theme }) => theme.Colors.Blue_500};
      color: ${({ theme }) => theme.Colors.White};
      content: "✔";
    }
  }
`;
