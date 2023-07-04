import { CashIcon, Content, Info, InfoBox, MapIcon, Subtitle, SuccessContainer, Texts, TimerIcon, Title } from "./styles";

import SuccessImg from '../../assets/success-img.svg'

export function Success() {
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
              <p>Entrega em <strong>Rua João Daniel Martinelli, 102</strong></p>
              <p>Farrapos - Porto Alegre, RS</p>
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
              <p><strong>Cartão de Crédito</strong></p>
            </div>
          </Info>
        </InfoBox>

        <img src={SuccessImg}/>
      </Content>
    </SuccessContainer>
  )
}