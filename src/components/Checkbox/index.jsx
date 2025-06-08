import * as S from "./styles";

export function CheckBox ({children}){
    return(
        <S.Label>
            <S.Input type="checkbox" name="" />
            <S.Text>{children}</S.Text>
        </S.Label>
    )
}