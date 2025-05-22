import React, { useState } from "react";
import * as S from "./styles";
import { format, setMonth } from "date-fns";
import { ptBR } from "date-fns/locale";
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";

function Navbar() {
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex);
  const [activeTab, setActiveTab] = useState("events");

  const monthNames = Array.from({ length: 12 - currentMonthIndex }, (_, i) =>
    format(setMonth(new Date(), currentMonthIndex + i), "MMMM", { locale: ptBR })
  );

  const handleChange = (value) => {
    setSelectedMonth(value);
  };

  return (
    <nav>
      <S.NavbarContainer>
        <S.NavLinks>
          <S.LinkItem
            onClick={() => setActiveTab("events")}
            $active={activeTab === "events"}
          >
            Eventos
          </S.LinkItem>

          <S.LinkItem
            onClick={() => setActiveTab("services")}
            $active={activeTab === "services"}
          >
            Serviços
          </S.LinkItem>

          <S.LinkItem
            onClick={() => setActiveTab("establishments")}
            $active={activeTab === "establishments"}
          >
            Estabelecimentos
          </S.LinkItem>
        </S.NavLinks>

        <S.SelectRoot value={selectedMonth} onValueChange={handleChange}>
          <S.SelectTrigger aria-label="Mês">
            <Select.Value
              children={
                format(setMonth(new Date(), Number(selectedMonth)), "MMMM", { locale: ptBR })
                  .replace(/^./, (c) => c.toUpperCase())
              }
            />
            <S.SelectIcon>
              <ChevronDownIcon />
            </S.SelectIcon>
          </S.SelectTrigger>

          <S.SelectContent>
            <S.SelectViewport>
              {monthNames.map((month, index) => {
                const value = (currentMonthIndex + index).toString();
                return (
                  <S.SelectItem key={value} value={value}>
                    <Select.ItemText>
                      {month.charAt(0).toUpperCase() + month.slice(1)}
                    </Select.ItemText>
                    <S.SelectItemIndicator>
                      <CheckIcon />
                    </S.SelectItemIndicator>
                  </S.SelectItem>
                );
              })}
            </S.SelectViewport>
          </S.SelectContent>
        </S.SelectRoot>
      </S.NavbarContainer>
    </nav>
  );
}

export default Navbar;
