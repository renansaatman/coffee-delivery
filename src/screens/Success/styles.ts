import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import styled from "styled-components";

export const SuccessContainer = styled.div`
  max-width: 90rem;
  width: 100%;
  margin: 5rem auto;

  display: flex;
  flex-direction: column;
  gap: 2.5rem;
`

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: .25rem;
`

export const Title = styled.h1`
  font-size: 2rem;
  color: ${props => props.theme["yellow-dark"]};
  line-height: 130%;
`

export const Subtitle = styled.p`
  font-size: 1.25rem;
  line-height: 130%;
`

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;
  
  width: 32.875rem;
  height: auto;
  border-radius: 5px 35px;
  position: relative;
  background: ${props => props.theme.background};

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(to right, #DBAC2C, #8047F8);
    z-index: -1;
    margin: -1px;
    border-radius: 6px 36px;
  }
`

export const Info = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;

  p {
    color: ${props => props.theme["base-text"]};
  }
`

export const MapIcon = styled(MapPin)`
  color: ${props => props.theme.background};
  background: ${props => props.theme.purple};
  
  width: 2rem;
  height: 2rem;
  padding: .5rem;
  border-radius: 50%;
`

export const TimerIcon = styled(Timer)`
  color: ${props => props.theme.background};
  background: ${props => props.theme.yellow};
  
  width: 2rem;
  height: 2rem;
  padding: .5rem;
  border-radius: 50%;
`

export const CashIcon = styled(CurrencyDollar)`
  color: ${props => props.theme.background};
  background: ${props => props.theme["yellow-dark"]};
  
  width: 2rem;
  height: 2rem;
  padding: .5rem;
  border-radius: 50%;
`