import styled from "styled-components";
import * as Select from "@radix-ui/react-select";
export const SelectRoot = Select.Root;

export const NavbarContainer = styled.div`
  display: flex;
  margin: -32px 48px 0 48px;
  border-radius: 9999px;
  position: absolute;
  z-index: 999999;
  width: calc(100% - 96px);
  height: 62px;

  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.Colors.Blue_300};

  @media (max-width: 768px) {
    position: absolute;
    margin: 0;
    height: 100px;
    width: 100%;
    flex-direction: column;
    background-color: transparent;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 16px;
  color: ${({ theme }) => theme.Colors.White};
  font-size: 18px;
  font-weight: bold;
  text-decoration: none;
  padding: 0 20px;
  cursor: pointer;

  background-color: ${({ theme }) => theme.Colors.Blue_300};
  border-radius: 9999px;

  @media (max-width: 768px) {
    gap: 8px;
    overflow-x: auto;
    overflow-y: hidden;
    border-radius: 32px 0 0 32px;
    height: 100px;
    width: 100%;
    padding-left: 16px;
    box-sizing: border-box;
    border-radius: 32px 0 0 32px;
  }

  @media (min-width: 468px) {
    justify-content: center;
  }
`;

export const LinkItem = styled.a`
  color: ${({ theme }) => theme.Colors.White};
  text-decoration: none;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  padding: 0 20px;

  font-family: ${({ theme }) => theme.Font_Family.Regular};
  font-size: ${({ theme, $active }) =>
    $active ? `${theme.Font_Size.XL}px` : `${theme.Font_Size.MD}px`};

  transition: font-size 0.2s ease-in-out;
`;

export const SelectTrigger = styled(Select.Trigger)`
  all: unset;
  background-color: ${({ theme }) => theme.Colors.Orange_500};
  color: ${({ theme }) => theme.Colors.White};
  border-radius: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 15%;
  min-width: 150px;
  height: 100%;
  font-family: ${({ theme }) => theme.Font_Family.Regular};
  font-size: ${({ theme }) => theme.Font_Size.MD}px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectContent = styled(Select.Content)`
  background-color: #fff;
  border-radius: 8px;
  padding: 8px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.Colors.Orange_500};
  font-family: ${({ theme }) => theme.Font_Family.Regular};

  min-width: 100px;
`;

export const SelectViewport = styled(Select.Viewport)`
  padding: 4px;
  width: 150px;
`;

export const SelectItem = styled(Select.Item)`
  padding: 8px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-family: ${({ theme }) => theme.Font_Family.Regular};
  color: ${({ theme }) => theme.Colors.White};
`;

export const SelectIcon = styled(Select.Icon)`
  display: flex;
  align-items: center;
`;

export const SelectItemIndicator = styled(Select.ItemIndicator)`
  float: right;
`;
