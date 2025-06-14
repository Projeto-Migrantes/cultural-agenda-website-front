import styled from "styled-components";

export const Button = styled.button`
  border: 1px solid ${({ theme }) => theme.Colors.Red_500};
  border-radius: 56px;
  width: 50%;
  max-width: 252px;
  padding: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;

  font-family: ${({ theme }) => theme.Font_Family.Bold};
  font-weight: ${({ theme }) => theme.Font_Weight.Bold};
  font-size: 1.25rem;
  color: ${({ theme }) => theme.Colors.Red_400};

  transition: background-color 0.3s ease, color 0.3s ease;
  cursor: pointer;

  .trashIcon {
    font-size: 28px;
  }

  &:hover {
    background-color: ${({ theme }) => theme.Colors.Red_400};
    color: ${({ theme }) => theme.Colors.White};
  }

  @media (max-width: 550px) {
    gap: 2.5rem;
  }

  @media (max-width: 320px) {
    gap: 1.5rem;
  }
`;
