import styled from 'styled-components'

export const Header = styled.header`
  padding: 2rem;
  max-width: 100%;
  display: flex;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.Blue_500};
`;

export const HeaderImages = styled.div`
    display: flex;
    gap: 32.4px;

    img {
        max-width: 30%;
    }

  @media (max-width: 768px) {
    align-items: center;
    justify-content: center;
  }
`