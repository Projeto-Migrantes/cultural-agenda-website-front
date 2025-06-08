import styled from 'styled-components';

export const FooterContainer = styled.footer`
  background-color:${({ theme }) => theme.Colors.Blue_500};
  width: 100%;
  text-align: center;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
`;

export const FooterContent = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100%; 
  gap: 32px;
  flex-wrap: wrap;
  padding: 40px 0 40px 0 ;
  max-width: 1200px; 
  margin-bottom: 0; 
`;

export const GloboImage = styled.img`
  height: auto;
  width: auto;
  max-width: 300px; 
`;

export const CsmImage = styled.img`
  width: auto;
  height: auto;
  max-width: 200px; 
`;

export const CopyrightText = styled.p`
  background-color:${({ theme }) => theme.Colors.Blue_900};
  width: 100%;
  align-items: center; 
  height:auto;
  font-size: ${({ theme }) => theme.Font_Size.XS}px;
  color: ${({ theme }) => theme.Colors.White};
  padding: 20px 0 20px 0; 
  margin: 0;
`;