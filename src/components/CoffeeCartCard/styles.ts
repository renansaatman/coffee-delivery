import styled from "styled-components";

export const Container = styled.div`
  width: 23rem;
  display: flex;
  justify-content: space-between;

  padding: .5rem .25rem;
`

export const LeftCoffeeContent = styled.div`
  display: flex;
  gap: 1.25rem;
  align-items: center;
`

export const Group = styled.div`
  display: flex;
  flex-direction: column;
  gap: .5rem;
`

export const Image = styled.img`
  width: 4rem;
`

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 130%;

  color: ${props => props.theme["base-subtitle"]};
`

export const Buttons = styled.div`
  display: flex;
  gap: .5rem;
`
export const Counter = styled.div`
  display: flex;
  align-items: center;
  gap: .25rem;

  border-radius: 6px;
  padding: .5rem;

  background: ${props => props.theme["base-button"]};
`

export const CounterBtn = styled.button`
  border: 0;
  background: transparent;
  color: ${props => props.theme.purple};

  transition: color .2s;
  
  &:hover {
    color: ${props => props.theme["purple-dark"]};
  }
`

export const Value = styled.span`
  font-size: 1rem;
  color: ${props => props.theme["base-title"]};
`

export const RemoveBtn = styled.button`
  border: 0;
  display: flex;
  align-items: center;
  gap: .25rem;

  border-radius: 6px;
  padding: .5rem;

  cursor: pointer;

  background: ${props => props.theme["base-button"]};
  color: ${props => props.theme.purple};

  transition: .2s background, .2s color;

  span {
    color: ${props => props.theme["base-text"]};
  }

  &:hover {
    background: ${props => props.theme["base-hover"]};
    color: ${props => props.theme["purple-dark"]};
    
    span {
      color: ${props => props.theme["base-subtitle"]};
    }
  }

`

export const PriceTag = styled.span`
  color: ${props => props.theme["base-text"]};
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
`

export const Divider = styled.div`
  margin: 1.5rem 0;

  min-height: 1px;
  width: 23rem;

  background-color: ${props => props.theme["base-button"]};
`