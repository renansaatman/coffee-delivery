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

  width: 100%;
`

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: .75rem;
`

export const NavLink = styled(Link)<LinkProps>`
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