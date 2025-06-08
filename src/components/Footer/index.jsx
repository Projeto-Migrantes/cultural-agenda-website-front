import globo from "../../assets/globo.svg";
import csm from "../../assets/csm.svg";
import {
  CopyrightText,
  CsmImage,
  FooterContainer,
  FooterContent,
  GloboImage,
} from "./styles";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <FooterContainer>
      <FooterContent>
        <GloboImage src={globo} alt="Logotipo do globo" />
        <CsmImage src={csm} alt="Imagem da logo" />
      </FooterContent>
      <CopyrightText>
        © {currentYear} Vivências do Mundo - Todos direitos reservados
      </CopyrightText>
    </FooterContainer>
  );
}

export default Footer;
