import { useContext } from "react";
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

import { Minus, Plus, ShoppingCartSimple } from "@phosphor-icons/react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

interface CardProps {
  coffeeId: string
  image: string
  title: string
  subtitle: string
  tags: string[]
  price: number
}

export function CoffeeCard({coffeeId, image, title, subtitle, tags, price}: CardProps) {
  const {minusOneCounter, plusOneCounter, coffeeQuantities, addToCart} = useContext(CoffeeContext)
  function handlePlusBtn() {
    plusOneCounter(coffeeId)
  }

  function handleMinusBtn() {
    minusOneCounter(coffeeId)
  }

  
  const coffeeQuantity = coffeeQuantities[coffeeId] || 0;
  
  function handleAddToCart() {
    addToCart(coffeeId)
  }

  return (
    <CardContainer>
      <Image src={image} alt="" />

      <Tags>
        {tags.map((tag, index) => {
          return (
            <Tag key={index}>{tag}</Tag>
          )
        })}
      </Tags>
      
      <TextContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContent>

      <PriceContent>
        <Price>R$ <strong>{price.toString().replace('.', ',').padEnd(4, '0')}</strong></Price>
        <ActionsBar>
          <Counter>
            <CounterBtn onClick={handleMinusBtn}>
              <Minus size={14} weight="bold" />
            </CounterBtn>
            <Value>{coffeeQuantity.toString()}</Value>
            <CounterBtn onClick={handlePlusBtn}>
              <Plus size={14} weight="bold" />
            </CounterBtn>
          </Counter>
          <IconButton onClick={handleAddToCart}>
            <ShoppingCartSimple size={22} weight="fill" />
          </IconButton>
        </ActionsBar>
      </PriceContent>
    </CardContainer>
  )
}