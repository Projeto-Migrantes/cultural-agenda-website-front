export const HeroContainer = styled.div`
  position: relative;
  top: 0;
  left: 0;

  width: 100vw;
  overflow: hidden;

  background-color: ${({ theme }) => theme.Colors.White};
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    height: 100vh;
  }
`;

export const TextSection = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  height: 619px;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const IconsSection = styled.div`
  position: absolute;
  top: 0;
  right: 10px; /* Corrigido para ter unidade */
  width: 352px;
  height: 126px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 10;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-top: 24px;
  }
`;

export const CircleSection = styled.div`
  width: 636px;
  height: 619px;
  background-color: ${({ theme }) => theme.Colors.Blue_500};
  border-top-right-radius: 46% 50%;
  border-bottom-right-radius: 46% 50%;
  padding: 54px;

  display: flex;
  align-items: center;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 2;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    position: relative;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    padding: 24px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  height: 619px;
  position: relative;

  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    display: block;
    transition: transform 0.2s ease-in-out;
  }

  @media (max-width: 768px) {
    height: auto;
    img {
      width: 100%;
      transform: none;
      margin-top: 0;
    }
  }
`;

export const LoginBox = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 352px;
  height: 126px;

  font-size: ${({ theme }) => theme.Font_Size.MD}px;
  color: white;
  line-height: 131%;

  background-color: ${({ theme }) => theme.Colors.Orange_400};
  padding: 0.75rem 1.5rem;
  font-weight: ${({ theme }) => theme.Font_Weight.Bold};

  border-top-left-radius: 40% 100%;
  border-bottom-left-radius: 40% 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 16px;

  z-index: 10;

  img {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    top: 40px;
    
    border-top-left-radius: 60% 80%;
    border-bottom-left-radius: 60% 80%;

    justify-content: flex-end;

    img {
      width: 36px;
      height: 36px;
    }
  }
`;

export const Text = styled.h1`
  font-size: ${({ theme }) => theme.Font_Size.XXL}px;
  color: white;
  line-height: 131%;

  @media (max-width: 768px) {
    width: 314px;
    font-size: ${({ theme }) => theme.Font_Size.XL}px;
    margin-top: 120px;
  }
`;

export const TextLogin = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;
