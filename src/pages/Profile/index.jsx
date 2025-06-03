import { Header } from "@components/Header/index.jsx";
import * as S from "./styles.js";
import { DeleteButton } from "@components/DeleteButton/index.jsx";

function Profile() {
  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Página 2 de Profile </S.Title>
      </S.Container>
      <DeleteButton/>
    </>
  );
}

export default Profile;
