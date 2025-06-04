import * as S from "./styles";
import { BiTrash } from "react-icons/bi";

export function DeleteButton({ onDelete }){
    return(
        <S.Button type="button" onClick={onDelete}> Deletar
            <BiTrash className="trashIcon"/>
        </S.Button>
    );
}

