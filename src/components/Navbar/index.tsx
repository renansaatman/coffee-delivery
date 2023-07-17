import { CartItems, Links, NavContainer, NavLink } from "./styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import LogoImg from '../../assets/logo.svg'

export function Navbar() {
  return (
    <NavContainer>
      <img src={LogoImg} alt="" />

      <Links>
        <NavLink to={'/'} variant='purple'><MapPin size={22} weight="fill" /> <span>Porto Alegre, RS</span></NavLink>
        <NavLink to={'/cart'} variant='yellow'>
          <ShoppingCart size={22} weight="fill" />
          <CartItems>3</CartItems>
        </NavLink>
      </Links>
    </NavContainer>
  )
}