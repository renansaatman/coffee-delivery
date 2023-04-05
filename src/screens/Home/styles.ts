import styled from "styled-components";
import Background from '../../assets/background.svg'

import { Coffee, Package, ShoppingCart, Timer } from "@phosphor-icons/react";

export const HomeContainer = styled.div`
  h2 {
    font-size: 2rem;
    color: ${props => props.theme["base-subtitle"]};

    margin: 2rem auto 3.375rem 15rem;
  }

`

export const BannerContent = styled.div`
  height: 544px;

  background: url(${Background}) no-repeat center/cover;
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 15rem;
`

export const BannerTitles = styled.div`
  max-width: 36.75rem;
  width: 100%;
  margin-bottom: 4.125rem;
`

export const Title = styled.h1`
  color: ${props => props.theme["base-title"]};
  font-size: 3rem;
  font-weight: 800;

  line-height: 130%;
`

export const Subtitle = styled.p`
  color: ${props => props.theme["base-subtitle"]};
  font-size: 1.25rem;

  line-height: 130%;
`

export const BannerItems = styled.div`
  display: grid;
  grid-template-columns: 14.43rem 18.375rem;
  grid-template-rows: 1fr 1fr;
  gap: 1.25rem 2.5rem;
`

export const BannerItem = styled.div`
  display: flex;
  align-items: center;

  gap: .75rem;

  p {
    color: ${props => props.theme["base-text"]};
  }
`

export const CartIcon = styled(ShoppingCart)`
  color: ${props => props.theme.background};
  border-radius: 50%;
  background-color: ${props => props.theme["yellow-dark"]};
  width: 2rem;
  height: 2rem;
  padding: .5rem;
`

export const TimerIcon = styled(Timer)`
  color: ${props => props.theme.background};
  border-radius: 50%;
  background-color: ${props => props.theme["yellow"]};
  width: 2rem;
  height: 2rem;
  padding: .5rem;
`

export const PackageIcon = styled(Package)`
  color: ${props => props.theme.background};
  border-radius: 50%;
  background-color: ${props => props.theme["base-text"]};
  width: 2rem;
  height: 2rem;
  padding: .5rem;
`

export const CoffeeIcon = styled(Coffee)`
  color: ${props => props.theme.background};
  border-radius: 50%;
  background-color: ${props => props.theme["purple"]};
  width: 2rem;
  height: 2rem;
  padding: .5rem;
`

export const MenuContent = styled.div``