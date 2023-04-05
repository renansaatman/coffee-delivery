import { ActionsBar, CardContainer, 
        Counter, 
        CounterBtn, 
        IconButton, 
        Image, 
        Price, 
        PriceContent, 
        Subtitle, 
        Tag, 
        Tags, 
        TextContent, 
        Title, 
        Value
} from "./styles";

import Expresso from '../../assets/expresso.svg'
import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";

export function CoffeeCard() {
  return (
    <CardContainer>
      <Image src={Expresso} alt="" />

      <Tags>
        <Tag>Tradicional</Tag>
      </Tags>
      
      <TextContent>
        <Title>Expresso Tradicional</Title>
        <Subtitle>O tradicional café feito com água quente e grãos moídos</Subtitle>
      </TextContent>

      <PriceContent>
        <Price>R$ <strong>9,90</strong></Price>
        <ActionsBar>
          <Counter>
            <CounterBtn>
              <Minus size={14} weight="bold" />
            </CounterBtn>
            <Value>1</Value>
            <CounterBtn>
              <Plus size={14} weight="bold" />
            </CounterBtn>
          </Counter>
          <IconButton>
            <ShoppingCartSimple size={22} weight="fill" />
          </IconButton>
        </ActionsBar>
      </PriceContent>
    </CardContainer>
  )
}