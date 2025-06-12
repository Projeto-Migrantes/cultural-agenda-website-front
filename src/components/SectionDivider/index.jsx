import React from "react";
import * as S from "./styles";
import { DeleteButton } from "../DeleteButton/index.jsx";

function SectionDivider({ title, actionLabel, onAction }) {
    return (
        <S.DividerContainer>
            <S.Title>{title}</S.Title>
            <S.Line />
            {actionLabel ? (
                <S.ActionLink onClick={onAction}>{actionLabel}</S.ActionLink>
            ) : (
                <DeleteButton onDelete={onAction} />
            )}
        </S.DividerContainer>
    )
}

export default SectionDivider;