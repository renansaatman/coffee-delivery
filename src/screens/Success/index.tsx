import { CashIcon, Content, Info, InfoBox, MapIcon, Subtitle, SuccessContainer, Texts, TimerIcon, Title } from "./styles";

import SuccessImg from '../../assets/success-img.svg'
import { useContext, useEffect } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Success() {
  const { cartFormData, clearCart } = useContext(CoffeeContext)

  useEffect(() => {
    clearCart()
  })

  return (
    <SuccessContainer>
      <Texts>
        <Title>Uhu! Pedido confirmado</Title>
        <Subtitle>Agora é só aguardar que logo o café chegará até você</Subtitle>
      </Texts>
      
      <Content>
        <InfoBox>
          <Info>
            <MapIcon weight="fill" size={16}/>
            <div>
              <p>Entrega em <strong>{cartFormData.rua}, {cartFormData.numero}</strong></p>
              <p>{cartFormData.bairro} - {cartFormData.cidade}, {cartFormData.uf}</p>
            </div>
          </Info>
          <Info>
            <TimerIcon weight="fill" size={16}/>
            <div>
              <p>Previsão de entrega</p>
              <p><strong>20 min - 30 min</strong></p>
            </div>
          </Info>
          <Info>
            <CashIcon weight="fill" size={16}/>
            <div>
              <p>Pagamento na entrega</p>
              <p>
                <strong>
                  {
                    cartFormData.formaDePagamento === 'credito' ? 'Cartão de Crédito' : cartFormData.formaDePagamento === 'debito' ? 'Cartão de Débito' : 'Dinheiro'
                  }
                </strong>
              </p>
            </div>
          </Info>
        </InfoBox>

        <img src={SuccessImg}/>
      </Content>
    </SuccessContainer>
  )
}