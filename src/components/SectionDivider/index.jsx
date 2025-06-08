import React from "react";
import * as S from "./styles";

function SectionDivider({ title, actionLabel, onAction }) {
    return (
        <S.DividerContainer>
            <S.Title>{title}</S.Title>
            <S.Line />
            {actionLabel && <S.ActionLink onClick={onAction}>{actionLabel}</S.ActionLink>}
        </S.DividerContainer>
    )
}

export default SectionDivider;