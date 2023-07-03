import { Container, LeftCoffeeContent, Image, Title, Counter, CounterBtn, Value, Buttons, RemoveBtn, PriceTag, Group, Divider } from "./styles";

import { coffees } from '../../coffees'
import { Minus, Plus, Trash } from "@phosphor-icons/react";

export function CoffeeCartCard() {
  return (
    <>
      <Container>
        <LeftCoffeeContent>
          <Image src={coffees[0].image} />
          <Group>
            <Title>Expresso Tradicional</Title>
            <Buttons>
              <Counter>
                <CounterBtn>
                  <Minus size={14} weight="bold" />
                </CounterBtn>
                <Value>1</Value>
                <CounterBtn>
                  <Plus size={14} weight="bold" />
                </CounterBtn>
              </Counter>

              <RemoveBtn>
                <Trash size={16} />
                <span>REMOVER</span>
              </RemoveBtn>
            </Buttons>
          </Group>
        </LeftCoffeeContent>
        
        <PriceTag>R$ 9,90</PriceTag>
      </Container>

      <Divider></Divider>
    </>
  )
}