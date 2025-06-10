import { Header } from "@components/Header";
import Input from "@components/Input";
import * as S from "./styles.js";
import { BiTrash } from "react-icons/bi";
import { TitleComponent } from "@components/TitleComponent/index.jsx";
import { Button } from "@components/Button/index.jsx";

const UserIcon = () => <S.StyledUserIcon icon={faUser} />;

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

        <div style={{ paddingTop: "20px", maxWidth: "400px", width: "100%" }}>
          <Input
            label="Nome"
            placeholder="Digite seu nome"
            icon={<BiTrash className="trashIcon" />}
            required
            onChange={(e) => console.log(e.target.value)}
          />
        </div>
      </S.Container>
    </>
  );
}

export default Profile;