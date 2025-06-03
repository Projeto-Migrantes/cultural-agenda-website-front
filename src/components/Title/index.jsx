import * as S from './style';

export function Titulo({ titulo, descricao }) {
  return (
    <S.Container>
      <S.TituloText>{titulo}</S.TituloText>
      <S.Descricao>{descricao}</S.Descricao>
    </S.Container>
  );
}