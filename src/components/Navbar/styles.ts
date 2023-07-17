import styled from "styled-components";
import { Link } from "react-router-dom";

type LinkProps = {
  variant: 'purple' | 'yellow'
}

export const NavContainer = styled.div`
  height: 6.5rem;
  display: flex;

  align-items: center;
  justify-content: space-between;
  align-self: center;
  width: 100%;
  max-width: 90rem;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`

export const NavLink = styled(Link)<LinkProps>`
  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: .25rem;

  padding: .5rem;
  height: 2.375rem;

  border-radius: 6px;

  background-color: ${props => props.theme[`${props.variant}-light`]};
  color: ${props => props.theme[`${props.variant}-dark`]};

  font-size: .875rem;

  text-decoration: none;
`

export const CartItems = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 50%;

  color: ${props => props.theme.white};
  font-size: .75rem;
  font-weight: 700;
  background-color: ${props => props.theme["yellow-dark"]};
  
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -8px;
  right: -8.345px;
`