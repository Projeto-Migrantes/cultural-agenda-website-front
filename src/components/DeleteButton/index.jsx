import * as S from "./styles";
import trashIcon from '../../assets/trashIcon.png';

export function DeleteButton({ onDelete }){
    return(
        <S.Button type="button" onClick={onDelete}> Deletar
            <img src={trashIcon} alt="ícone de lixeira"/>
        </S.Button>
    );
}

