import styled from 'styled-components';
import globo from '../../assets/globo.svg';
import csm from '../../assets/csm.svg';

const FooterContainer = styled.footer`
  background-color: #12387E;
  width: 100%;
  padding: 40px 0 0 0;
  text-align: center;
  display: flex; 
  flex-direction: column; 
  align-items: center; 
`;

const FooterContent = styled.div`
  display: flex;
  justify-content: center; 
  align-items: center; 
  width: 100vw; 
  max-width: 1200px; 
  margin-bottom: 0; 
`;

const GloboImage = styled.img`
  height: auto;
  width: auto;
  max-height: 80px; 
  max-width: 250px; 
  margin-right: 30px; 
`;

const CsmImage = styled.img`
  width: auto;
  height: auto;
  max-width: 278px; 
  max-height: 80px; 
  margin-bottom: 10px;
`;

const CopyrightText = styled.p`
  background-color: #0B2453;
  width: 100%;
  align-items: center; 
  height:auto;
  font-size: 12px;
  color: #FFFFFF;
  padding: 12px 0 20px 0; 
`;

function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <GloboImage src={globo} alt="Logotipo do globo" />
        <CsmImage src={csm} alt="Imagem da logo" />
      </FooterContent>
      <CopyrightText>© 2025 Agenda Cultural. Todos direitos reservados</CopyrightText>
    </FooterContainer>
  );
}

export default Footer;