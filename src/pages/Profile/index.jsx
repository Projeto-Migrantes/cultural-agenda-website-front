import { Header } from "@components/Header/index.jsx";
import * as S from "./styles.js";
import { Titulo } from "@components/Title";

function Profile() {
  return (
    <>
      <Header />
      <S.Container>
        <Titulo
          titulo="Página 2 de Profile"
          descricao={
            <>
              Aqui você pode ver e editar suas informações pessoais. <br />
              Use os campos abaixo para atualizar seu perfil.
            </>
          }
        />
      </S.Container>
    </>
  );
}

export default Profile;