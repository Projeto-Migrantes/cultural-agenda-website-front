import * as S from "./styles";

export function CheckBox ({children, isChecked, handleOnChange}){
    return(
        <S.Label>
            <S.Input type="checkbox" name="" checked={isChecked} onChange={handleOnChange}/>
            <S.Text>{children}</S.Text>
        </S.Label>
    )
}