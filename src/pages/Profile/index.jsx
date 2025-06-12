import { Header } from "@components/Header";
import Input from "@components/Input";
import * as S from "./styles.js";
import { BiTrash } from "react-icons/bi";
import { TitleComponent } from "@components/TitleComponent/index.jsx";
import { Button } from "@components/Button/index.jsx";
import SectionDivider from "@components/SectionDivider/index.jsx";

const UserIcon = () => <S.StyledUserIcon icon={faUser} />;
import { CheckBox } from "@components/Checkbox/index.jsx";

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

        <SectionDivider
          title="Minha Seção"
          actionLabel="Adicionar"
          onAction={() => alert("Ação clicada!")}
        />

        <SectionDivider
          title="Minha Seção"
          
          onAction={() => alert("Excluir clicado!")}
        />
      </S.Container>
      <CheckBox>Aceito o <strong>Termo de Uso</strong> e <strong>Política de Privacidade</strong></CheckBox>
    </>
  );
}

export default Profile;
