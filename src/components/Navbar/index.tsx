import { CartItems, Links, NavContainer, NavLink } from "./styles";
import { MapPin, ShoppingCart } from "@phosphor-icons/react";

import LogoImg from '../../assets/logo.svg'
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Navbar() {
  const { sumOfItems } = useContext(CoffeeContext)

  return (
    <NavContainer>
      <img src={LogoImg} alt="" />

      <Links>
        <NavLink to={'/'} variant='purple'><MapPin size={22} weight="fill" /> <span>Parnamirim, RN</span></NavLink>
        <NavLink to={'/cart'} variant='yellow'>
          <ShoppingCart size={22} weight="fill" />
          {sumOfItems !== 0 && <CartItems>{sumOfItems}</CartItems>}
        </NavLink>
      </Links>
    </NavContainer>
  )
}