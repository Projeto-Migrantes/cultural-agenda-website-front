import React, { useState } from "react";
import * as S from "./styles";
import { format, setMonth } from "date-fns";
import { ptBR, se } from "date-fns/locale";
import { ChevronDownIcon, ChevronUpIcon, CheckIcon } from "@radix-ui/react-icons";
import * as Select from "@radix-ui/react-select";



function Navbar() {
  const currentDate = new Date();
  const currentMonthIndex = currentDate.getMonth();
  const [selectedMonth, setSelectedMonth] = useState(currentMonthIndex);
  console.log(selectedMonth);
  
  const monthNames = Array.from({ length: 12 - currentMonthIndex }, (_, i) =>
    format(setMonth(new Date(), currentMonthIndex + i), "MMMM", { locale: ptBR })
  );

  const handleChange = (value) => {
    // value ++ ;
    console.log(value)
    setSelectedMonth(value)
  };

  return (
    <nav>
      <S.NavbarContainer>
        <S.NavLinks>
          <S.LinkItem $event={true}>Eventos</S.LinkItem>
          <S.LinkItem>Serviços</S.LinkItem>
          <S.LinkItem>Estabelecimentos</S.LinkItem>
        </S.NavLinks>

        <S.DateItem>
          <S.SelectRoot value={selectedMonth} onValueChange={handleChange}>
            <S.SelectTrigger aria-label="Mês">
              <Select.Value
                children={
                  format(setMonth(new Date(), Number(selectedMonth)), "MMMM", { locale: ptBR })
                    .charAt(0)
                    .toUpperCase() +
                  format(setMonth(new Date(), Number(selectedMonth)), "MMMM", { locale: ptBR }).slice(1)
                }
              />
              <S.SelectIcon>
                <ChevronDownIcon />
              </S.SelectIcon>
            </S.SelectTrigger>

            <S.SelectContent>
              <S.SelectScrollButton>
                <ChevronUpIcon />
              </S.SelectScrollButton>

              <S.SelectViewport>
                {monthNames.map((month, index) => {
                  const value = (currentMonthIndex + index);
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

              <S.SelectScrollButton>
                <ChevronDownIcon />
              </S.SelectScrollButton>
            </S.SelectContent>
          </S.SelectRoot>
        </S.DateItem>
      </S.NavbarContainer>
    </nav>
  );
}

export default Navbar;
