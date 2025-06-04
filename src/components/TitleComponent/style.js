import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;
  text-align: center;
`;

export const TitleText = styled.h1`
  font-size: ${({ theme }) => theme.Font_Size.XL}px;
  font-weight: ${({ theme }) => theme.Font_Weight.Bold};
  color: ${({ theme }) => theme.Colors.Blue_500};
  margin-bottom: 1rem;
`;

export const Description = styled.p`
  font-size: ${({ theme }) => theme.Font_Size.MD}px;
  color: ${({ theme }) => theme.Colors.Black};
  max-width: 800px;
  margin: 0 auto;
`;