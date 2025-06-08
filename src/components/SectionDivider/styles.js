import styled from "styled-components";

export const DividerContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
  padding: 0.5rem 0;
  flex-wrap: wrap;
`;

export const Title = styled.h2`
  font-size: 1.3rem;
  font-weight: ${({ theme }) => theme.Font_Weight.Bold};
  color: ${({ theme }) => theme.Colors.Blue_900};
  margin: 0;
  white-space: nowrap;
  font-family: ${({ theme }) => theme.Font_Family.Regular};
`;

export const Line = styled.hr`
  flex-grow: 1;
  border: none;
  height: 1px;
  background-color: ${({ theme }) => theme.Colors.Blue_900};
  margin: 0 0.7rem;
`;

export const ActionLink = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.Colors.Blue_300};
  font-size: 0.85rem;
  font-weight: ${({ theme }) => theme.Font_Weight.Regular};
  font-family: ${({ theme }) => theme.Font_Family.Regular};
  cursor: pointer;
  white-space: nowrap;
  padding: 0;

  &:hover {
    text-decoration: underline;
  }
`;