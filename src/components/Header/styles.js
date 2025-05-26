import styled from 'styled-components'

export const Header = styled.header`
  box-sizing: border-box;
  width: 100vw;
  padding: 2.5rem;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.Blue_500};
`;

export const HeaderImages = styled.div`
    display: flex;
    gap: 32.4px;

    img{
        max-width: 50%;
    }
`