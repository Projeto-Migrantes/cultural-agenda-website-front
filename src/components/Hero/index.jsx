import * as S from "./styles";
import banner from "../../assets/488936fa97305befcf9a684834bf9ab94ff95226.png";
import LoginIcon from "../../assets/UserCircle.png"
import redeIcon from "../../assets/Group 187.png"
import cmsIcon from "../../assets/Group 190.png"

function Hero() {
  return (
    <S.HeroContainer>
      <S.LoginBox to="/login">
          <S.TextLogin>Login/Cadastre-se</S.TextLogin>
          <img src={LoginIcon} alt="login" />
      </S.LoginBox>
      <S.TextSection>
        <S.CircleSection>
          <S.IconsSection>
            <img src={redeIcon} alt="login" />
            <img src={cmsIcon} alt="login" />
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
