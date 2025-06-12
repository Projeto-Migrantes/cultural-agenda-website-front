import styled from "styled-components";

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 100%;
`;

export const InputLabel = styled.label`
  font-family: ${({ theme }) => theme.Font_Family.Bold};
  font-size: ${({ theme }) => theme.Font_Size.LG}px;
  font-weight: ${({ theme }) => theme.Font_Weight.Bold};
  color: ${({ theme, error }) =>
    error ? theme.Colors.Red_500 : theme.Colors.Blue_500};
  margin-bottom: -10px;
  padding-left: 20px;

  span {
    color: ${({ theme }) => theme.Colors.Red_500};
    margin-left: 2px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  border: 2px solid
    ${({ theme, error, disabled }) => {
      if (error) return theme.Colors.Red_500;
      if (disabled) return theme.Colors.Gray_500;
      return theme.Colors.Blue_500;
    }};
  border-radius: 25px;
  background-color: ${({ theme, disabled }) =>
    disabled ? "#EFEFEF" : "transparent"};
  transition: all 0.2s ease;

  &:hover {
    border-color: ${({ theme, error, disabled }) => {
      if (error) return theme.Colors.Red_500;
      if (disabled) return theme.Colors.Gray_300;
      return theme.Colors.Blue_500;
    }};
  }

  &:focus-within {
    border-color: ${({ theme, error }) =>
      error ? theme.Colors.Red_500 : theme.Colors.Blue_500};
    box-shadow: 0 0 0 3px
      ${({ theme, error }) =>
        error ? `${theme.Colors.Red_500}20` : `${theme.Colors.Blue_500}20`};
  }
`;

export const StyledIcon = styled.div`
  width: 20px;
  height: 20px;
  color: ${({ theme }) => theme.Colors.Gray_500};
`;

export const InputIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  color: ${({ theme }) => theme.Colors.Orange_500};
  pointer-events: none;
`;

export const StyledInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  padding: 16px 16px 16px ${({ hasIcon }) => (hasIcon ? "0" : "16px")};
  font-size: ${({ theme }) => theme.Font_Size.MD}px;
  color: ${({ theme }) => "#454444"};
  background: transparent;
  border-radius: 12px;

  &::placeholder {
    color: ${({ theme }) => theme.Colors.Gray_700};
    font-size: ${({ theme }) => theme.Font_Size.SM}px;
  }

  &:disabled {
    cursor: not-allowed;
    color: ${({ theme }) => theme.Colors.Gray_500};
  }

  &:focus {
    outline: none;
  }
`;

export const ErrorMessage = styled.span`
  font-size: ${({ theme }) => theme.Font_Size.XS}px;
  color: ${({ theme }) => theme.Colors.Red_500};
  font-weight: ${({ theme }) => theme.Font_Weight.Bold};
  margin-left: 20px;
`;
