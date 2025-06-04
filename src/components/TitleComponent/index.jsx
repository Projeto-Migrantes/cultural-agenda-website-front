import * as S from './style';

export function TitleComponent({ title, description }) {
  return (
    <S.Container>
      <S.TitleText>{title}</S.TitleText>
      <S.Description>{description}</S.Description>
    </S.Container>
  );
}