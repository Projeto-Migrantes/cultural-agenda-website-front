import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1`
  color: ${({ theme }) => theme.Colors.White};
  font-size: ${({ theme }) => theme.Font_Size.XXL}px;
  font-weight: ${({ theme }) => theme.Font_Family.Bold};
`;


export const StyledUserIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.Colors.Black} !important;
`;