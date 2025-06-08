import { Header } from "@components/Header/index.jsx";
import * as S from "./styles.js";
import { TitleComponent } from "@components/TitleComponent/index.jsx";
import { Button } from "@components/Button/index.jsx";

function Profile() {
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
        <Button
          variant="primary"
          title="Editar Perfil"
          onClick={() => alert("Editar Perfil Clicked!")}
        />
        <Button
          variant="secondary"
          title="Editar Perfil 2"
          onClick={() => alert("Editar Perfil Clicked!")}
        />
      </S.Container>
    </>
  );
}

export default Profile;
