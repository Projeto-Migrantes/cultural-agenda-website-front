import * as S from "./styles";
import redeIcon from "../../assets/redeIcon.png";
import cmsIcon from "../../assets/cmsIcon.png";

export function Header(){
    return (
      <S.Header>
        <S.HeaderImages>
          <img src={redeIcon} alt="Ícone de rede social ('Vivências Do Mundo')." />
          <img src={cmsIcon} alt="Ícone de CMS (Centro De Serviços Ao Migrante)." />
        </S.HeaderImages>
      </S.Header>
    );
}

