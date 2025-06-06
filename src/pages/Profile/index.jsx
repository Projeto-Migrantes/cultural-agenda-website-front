import { Header } from "@components/Header";
import Input from "@components/Input";
import * as S from "./styles.js";

function Profile() {
  return (
    <>
      <Header />
      <S.Container>
        <S.Title>Página 2 de Profile</S.Title>
        <div style={{ paddingTop: "20px", maxWidth: "400px", width: "100%" }}>
          <Input
            label="Nome"
            placeholder="Digite seu nome"
            required
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </S.Container>
    </>
  );
}

export default Profile;