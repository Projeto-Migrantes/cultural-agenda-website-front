import styled from "styled-components";
import * as Select from '@radix-ui/react-select';
export const SelectRoot = Select.Root;


export const NavbarContainer = styled.div`
  display: flex;
  margin: -32px 48px 0 48px;
  border-radius: 32px;
  position: fixed;
  z-index: 999999;
  width: calc(100% - 96px);
  height: 64px; /* Altura da navbar */

  justify-content: space-between;
  align-items: center;
   background-color: ${({ theme }) => theme.Colors.Blue_300};
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 16px;  
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  padding: 0 20px;
  cursor: pointer;
  /* &:hover {
    text-decoration: underline;
  } */

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const LinkItem = styled.a`
  color: white;
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 20px;

  font-family: ${({ theme }) => theme.Font_Family.Regular};
  font-size: ${({ theme, $event }) =>
    $event ? `${theme.Font_Size.XL}px` : `${theme.Font_Size.MD}px`};
    
`;

export const DateItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: ${({ theme }) => theme.Colors.Orange_500};
  width: 15%;
  max-width: 200px;
  height: 100%;
  border-radius: 32px;
  cursor: pointer;
`;

export const SelectTrigger = styled(Select.Trigger)`
  all: unset;
  background-color: ${({ theme }) => theme.Colors.Primary};
  color: white;
  padding: 10px 16px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  font-family: ${({ theme }) => theme.Font_Family.Regular};
  font-size: ${({ theme }) => theme.Font_Size.MD}px;
`;

export const SelectContent = styled(Select.Content)`
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.Colors.Orange_500};
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: 4px;
`;

export const SelectItem = styled(Select.Item)`
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.Font_Family.Regular};
  color: black;

  &:hover {
    background-color: #eee;
  }
`;

export const SelectIcon = styled(Select.Icon)`
  display: flex;
  align-items: center;
`;

export const SelectScrollButton = styled(Select.ScrollUpButton)`
  color: #333;
  padding: 4px;
`;

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  float: right;
`;
