import { useState } from "react";
import { Header } from "@components/Header/index.jsx";
import * as S from "./styles.js";
import { TitleComponent } from "@components/TitleComponent/index.jsx";
import { CheckBox } from "@components/Checkbox/index.jsx";

function Profile() {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckboxChange(){
    setIsChecked(!isChecked);
  }


  return (
    <>
      <Header />
      <S.Container>
        <TitleComponent
          title="Página 2 de Profile"
          description={
            <>
              Aqui você pode ver e editar suas informações pessoais. <br />
              Use os campos abaixo para atualizar seu perfil.
            </>
          }
        />
      </S.Container>
      <CheckBox isChecked={isChecked} handleOnChange={handleCheckboxChange}>Aceito o <strong>Termo de Uso</strong> e <strong>Política de Privacidade</strong></CheckBox>
    </>
  );
}

export default Profile;