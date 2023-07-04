import styled from "styled-components";

export const CartContainer = styled.div`
  max-width: 90rem;
  width: 100%;
  margin: 2.5rem auto;
  display: flex;
  justify-content: space-between;
`

export const Title = styled.h2`
  color: ${props => props.theme["base-subtitle"]};

  font-size: 1.125rem;
  margin-bottom: .9375rem;
`

export const ClientInfoContent = styled.div``

export const AddressFormArea = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme["base-card"]};

  width: 40rem;
  height: 23.25rem;

  border-radius: 6px;
  margin-bottom: .75rem;
`

export const PaymentArea = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme["base-card"]};

  width: 40rem;
  height: 12.9375rem;

  border-radius: 6px;
`

export const TextArea = styled.div`
  display: flex;
  align-items: flex-start;
  gap: .5rem;

  margin-bottom: 2rem;

  div {
    display: flex;
    flex-direction: column;

    span {
      color: ${props => props.theme["base-subtitle"]};
      line-height: 130%;
    }
  }
  
  p {
    color: ${props => props.theme["base-text"]};
    line-height: 130%;
    font-size: .875rem;
  }
`

export const AddressForm = styled.div`
  display: grid;
  gap: 1rem .75rem;
  grid-template-columns: 12.5rem 17.25rem 3.75rem;
  grid-template-rows: auto;
`

export const FormInput = styled.input`
  padding: .75rem;
  font-size: .875rem;

  background: ${props => props.theme["base-input"]};
  color: ${props => props.theme["base-text"]};

  border: 1px solid ${props => props.theme["base-button"]};
  border-radius: 4px;

  width: 100%;
  
  &::placeholder {
    color: ${props => props.theme["base-label"]};
  }
`

export const ComplementoContainer = styled.div`
  position: relative;
  display: inline-block;
`

export const OptionalComplementoText = styled.span`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);
  color: ${props => props.theme["base-label"]};
  font-size: .75rem;
  font-style: italic;
  line-height: 130%;
`;

export const RadioButtons = styled.div`
  display: flex;
  gap: .75rem;
`

export const Radio = styled.div`
  float: left;
  position: relative;
  width: 11.16rem;
  height: 3.187rem;
`;

export const RadioLabel = styled.label`
  background: ${props => props.theme["base-button"]};
  color: ${props => props.theme["base-text"]};

  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  width: 100%;
  height: 100%;
  white-space: nowrap;

  padding: 1rem;

  transition: .2s background, .2s color;

  span {
    z-index: 1;
  }

  &:hover {
    background: ${props => props.theme["base-hover"]};
    color: ${props => props.theme["base-subtitle"]};
  }
`;

export const RadioInput = styled.input`
  all: unset;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;

  border-radius: 6px;

  &:focus {
    box-shadow: none;
  }

  &:checked {
    border: 1px solid ${props => props.theme.purple};
    background: ${props => props.theme["purple-light"]};
  }
`;

export const RadioText = styled.span`
  display: flex;
  align-items: center;
  gap: .75rem;

  font-size: .75rem;
`;

export const CartContent = styled.div`

`

export const CartInfoArea = styled.div`
  padding: 2.5rem;
  background: ${props => props.theme["base-card"]};

  width: 28rem;
  height: auto;

  border-radius: 6px 44px;
  margin-bottom: .75rem;
`

export const CheckoutArea = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1.5rem;
`

export const Prices = styled.div`
  display: flex;
  flex-direction: column;

  gap: .75rem;
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: ${props => props.theme["base-text"]};
`

export const Text = styled.p`
  font-size: .875rem;
`


export const TotalParagraph = styled.p`
  font-size: 1.25rem;
  font-weight: 700;
  color: ${props => props.theme["base-subtitle"]};

`

export const Value = styled.p``

export const ShopBtn = styled.button`
  border: 0;
  border-radius: 6px;
  background: ${props => props.theme.yellow};

  padding: .75rem .5rem;

  text-transform: uppercase;
  font-size: .875rem;
  font-weight: 700;
  line-height: 160%;
  color: ${props => props.theme.white};

  transition: .2s background;

  &:hover {
    background: ${props => props.theme["yellow-dark"]};
  }
`
