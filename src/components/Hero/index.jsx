import * as S from "./styles";
import banner from "../../assets/488936fa97305befcf9a684834bf9ab94ff95226.png";
import redeIcon from "../../assets/Group 187.png";
import cmsIcon from "../../assets/Group 190.png";
import { Link } from 'react-router-dom';
import { CgProfile } from "react-icons/cg";

function Hero() {
  return (
    <S.HeroContainer>
      <S.LoginBox as={Link} to="/login">
        <S.TextLogin>Login / Cadastre-se</S.TextLogin>
        <CgProfile size={30} />
      </S.LoginBox>
      <S.TextSection>
        <S.CircleSection>
          <S.IconsSection>
            <img src={redeIcon} alt="Ícone de rede social" />
            <img src={cmsIcon} alt="Ícone de CMS" />
          </S.IconsSection>
          <S.Text>Venha Conhecer uma Agenda Cultural Sem Fronteiras</S.Text>
        </S.CircleSection>
      </S.TextSection>
      <S.ImageSection>
        <img src={banner} alt="Banner cultural" />
      </S.ImageSection>
    </S.HeroContainer>
  );
}

export default Hero;
