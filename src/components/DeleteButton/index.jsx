import * as S from "./styles";
import { BiTrash } from "react-icons/bi";

export function DeleteButton({ onDelete, label = "Deletar" }) {
  return (
    <S.Button type="button" onClick={onDelete}>
      {label}
      <BiTrash className="trashIcon" />
    </S.Button>
  );
}
