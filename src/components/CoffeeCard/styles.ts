import styled from "styled-components";

export const CardContainer = styled.div`
  width: 16rem;
  height: 19.375rem;

  background: ${props => props.theme["base-card"]};
  border-radius: 6px 36px;

  display: flex;
  flex-direction: column;

  align-items: center;
`

export const Image = styled.img`
  width: 7.5rem;

  margin-top: -1.25rem;
`

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .25rem;

  margin-top: .75rem;
  margin-bottom: 1rem;
`

export const Tag = styled.span`
  font-size: .625rem;
  font-weight: 700;
  text-transform: uppercase;

  color: ${props => props.theme["yellow-dark"]};
  background: ${props => props.theme["yellow-light"]};

  padding: .25rem .5rem;
  border-radius: 100px;
`

export const TextContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;

  padding: 0 1.25rem;

  margin-bottom: 2.06rem;
`

export const Title = styled.h3`
  font-size: 1.25rem;
  color: ${props => props.theme["base-subtitle"]};
  font-weight: 700;
`

export const Subtitle = styled.p`
  font-size: .875rem;
  color: ${props => props.theme["base-label"]};
  line-height: 130%;
  text-align: center;
`

export const PriceContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  gap: 1.8125rem;
`

export const Price = styled.p`
  font-size: .875rem;
  color: ${props => props.theme["base-text"]};
  
  
  strong {
    font-family: 'Baloo 2', cursive;
    font-size: 1.5rem;
  }
`

export const ActionsBar = styled.div`
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

export const IconButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2.375rem;
  height: 2.375rem;

  border: 0;
  border-radius: 6px;

  background: ${props => props.theme["purple-dark"]};
  color: ${props => props.theme["base-card"]};

  transition: background .2s;
  
  &:hover {
    background: ${props => props.theme.purple};
  }
`