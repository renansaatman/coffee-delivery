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

interface CardProps {
  image: string
  title: string
  subtitle: string
  tags: string[]
  price: number
}

export function CoffeeCard({image, title, subtitle, tags, price}: CardProps) {
  return (
    <CardContainer>
      <Image src={image} alt="" />

      <Tags>
        {tags.map(tag => {
          return (
            <Tag>{tag}</Tag>
          )
        })}
      </Tags>
      
      <TextContent>
        <Title>{title}</Title>
        <Subtitle>{subtitle}</Subtitle>
      </TextContent>

      <PriceContent>
        <Price>R$ <strong>{price.toString().replace('.', ',')}</strong></Price>
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