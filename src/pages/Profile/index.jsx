import { Header } from "@components/Header";
import Input from "@components/Input";
import * as S from "./styles.js";
import { Button } from "@components/Button/index.jsx";
import { DeleteButton } from "@components/DeleteButton/index.jsx";

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
      <DeleteButton/>
    </>
  );
}

export default Profile;
