import styled from "styled-components";
import { CgProfile } from "react-icons/cg";

export const HeroContainer = styled.div`
  width: 100vw;
  overflow: hidden;
  background-color: ${({ theme }) => theme.Colors.Gray_500};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
    height: 100vh;
  }
`;

export const TextSection = styled.div`
  display: flex;
  align-items: center;
  height: 619px;
  position: relative;

  @media (max-width: 768px) {
    width: 100%;
    height: auto;
  }
`;

export const IconsSection = styled.div`
  position: absolute;
  top: 0;
  width: 352px;
  height: 126px;

  display: flex;
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
  width: 560px;
  height: 560px;
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
    width: 100%;
    height: 356px;
    padding: 24px;

    border-radius: 0 0 50% 50%;

    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;

export const ImageSection = styled.div`
  flex: 1;
  height: 619px;
  position: relative;

  img {
    width: 100%;
    height: 90%;
    object-fit: contain;
    display: block;
    transform: translateX(244px);
    margin-top: 12vh;
    transition: transform 0.2s ease-in-out, margin-top 0.2s ease-in-out;
  }

  @media (min-width: 769px) and (max-width: 1360px) {
    img {
      margin-top: 24vh;
      width: 100%;
    }
  }

  @media (max-width: 768px) {
    height: auto;

    img {
      width: 100%;
      margin-top: 4vh;
      transform: scale(3.1) translateX(20px);
    }
  }
`;

export const LoginBox = styled.button`
  all: unset;
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  width: 200px;
  height: 80px;

  font-size: ${({ theme }) => theme.Font_Size.MD}px;
  color: ${({ theme }) => theme.Colors.White};
  background-color: ${({ theme }) => theme.Colors.Orange_500};
  font-weight: ${({ theme }) => theme.Font_Weight.Bold};

  border-top-left-radius: 40% 100%;
  border-bottom-left-radius: 40% 100%;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
  z-index: 10;

  @media (max-width: 425px) {
    width: 40px;
    height: 40px;
    top: 40px;

    border-top-left-radius: 60% 80%;
    border-bottom-left-radius: 60% 80%;

    justify-content: flex-end;
  }

  @media  (min-width: 425px) and (max-width: 768px) {
    width: 80px;
    height: 80px;
    top: 40px;

    border-top-left-radius: 60% 80%;
    border-bottom-left-radius: 60% 80%;

    justify-content: flex-end;
  }
`;

export const ProfileIcon = styled(CgProfile)`
  width: 30px;
  height: 30px;

  @media  (min-width: 425px) and (max-width: 768px) {
    width: 40px;
    height: 40px;
    margin-right:10px;
  }
`;

export const Text = styled.h1`
  font-size: ${({ theme }) => theme.Font_Size.XXL}px;
  color: white;
  line-height: 131%;

  @media (max-width: 768px) {
    font-size: ${({ theme }) => theme.Font_Size.XL}px;
    margin-top: 120px;
  }
`;

export const TextLogin = styled.p`
  @media (max-width: 768px) {
    display: none;
  }
`;
