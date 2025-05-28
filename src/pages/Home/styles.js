import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  
  display: flex;
  flex-direction: column;
  /* background-color: ${({ theme }) => theme.Colors.Blue_500}; */
`;

export const Title = styled.h1`
  font-weight: ${({ theme }) => theme.Font_Weight.Bold};
  font-size: ${({ theme }) => theme.Font_Size.XXL}px;
  color: ${({ theme }) => theme.Colors.White};
`;
