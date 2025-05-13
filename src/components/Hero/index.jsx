import * as S from "./styles";
import banner from "../../assets/banner.png";
import redeIcon from "../../assets/redeIcon.png";
import cmsIcon from "../../assets/cmsIcon.png";
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <S.HeroContainer>
      <S.LoginBox as={Link} to="/login">
        <S.TextLogin>Login / Cadastre-se</S.TextLogin>
        <S.ProfileIcon />
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
