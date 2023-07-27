import { useContext } from "react";
import { Container, LeftCoffeeContent, Image, Title, Counter, CounterBtn, Value, Buttons, RemoveBtn, PriceTag, Group, Divider } from "./styles";
import { Minus, Plus, Trash } from "@phosphor-icons/react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

interface CoffeeCartProps {
  image: string
  title: string
  numberOfItems?: number
  coffeeId: string
  price: number
}

export function CoffeeCartCard({image, title, numberOfItems, coffeeId, price}: CoffeeCartProps) {
  const { plusOneCounter, minusOneCounter, removeFromCart } = useContext(CoffeeContext)

  function handleMinusBtn() {
    minusOneCounter(coffeeId, true)
  }

  function handlePlusBtn() {
    plusOneCounter(coffeeId, true)
  }

  function handleRemoveBtn() {
    removeFromCart(coffeeId)
  }
  
  return (
    <>
      <Container>
        <LeftCoffeeContent>
          <Image src={image} />
          <Group>
            <Title>{title}</Title>
            <Buttons>
              <Counter>
                <CounterBtn onClick={handleMinusBtn}>
                  <Minus size={14} weight="bold" />
                </CounterBtn>
                <Value>{numberOfItems}</Value>
                <CounterBtn onClick={handlePlusBtn}>
                  <Plus size={14} weight="bold" />
                </CounterBtn>
              </Counter>

              <RemoveBtn onClick={handleRemoveBtn}>
                <Trash size={16} />
                <span>REMOVER</span>
              </RemoveBtn>
            </Buttons>
          </Group>
        </LeftCoffeeContent>
        
        <PriceTag>{price.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL'
        })}
        </PriceTag>
      </Container>

      <Divider></Divider>
    </>
  )
}