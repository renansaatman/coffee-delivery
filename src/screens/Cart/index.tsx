import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { AddressForm, AddressFormArea, CartContainer, CartContent, CartInfoArea, CheckoutArea, ClientInfoContent, FormInput, Price, PaymentArea, Prices, Radio, RadioButtons, RadioInput, RadioLabel, RadioText, ShopBtn, TextArea, Title, Value, Text, TotalParagraph } from "./styles";
import { useState } from "react";
import { CoffeeCartCard } from "../../components/CoffeeCartCard";

export function Cart() {
  const [selectedValue, setSelectedValue] = useState('');

  const handleRadioChange = (value: string) => {
    setSelectedValue(value)
  }

  return (
    <CartContainer>
      <ClientInfoContent>
        <Title>Complete seu pedido</Title>

        <AddressFormArea>
          <TextArea>
            <MapPinLine size={22} color="#C47F17" />
            <div>
              <span>Endereço de entrega</span>
              <p>Informe o endereço onde deseja receber seu pedido</p>
            </div>
          </TextArea>

          <AddressForm>
            <FormInput 
              type="number" 
              placeholder="CEP"
              style={{gridArea: '1 / 1 / 2 / 2'}}  
            />
            <FormInput 
              type="text" 
              placeholder="Rua"
              style={{gridArea: '2 / 1 / 3 / 4'}}
            />
            <FormInput 
              type="number" 
              placeholder="Número"
              style={{gridArea: '3 / 1 / 4 / 2'}}
            />
            <FormInput 
              type="text" 
              placeholder="Complemento"
              style={{gridArea: '3 / 2 / 4 / 4'}}
            />
            <FormInput 
              type="text" 
              placeholder="Bairro"
              style={{gridArea: '4 / 1 / 5 / 2'}}
            />
            <FormInput 
              type="text" 
              placeholder="Cidade"
              style={{gridArea: '4 / 2 / 5 / 3'}}
            />
            <FormInput 
              type="text" 
              placeholder="UF"
              style={{gridArea: '4 / 3 / 5 / 4'}}
            />
          </AddressForm>
        </AddressFormArea>

        <PaymentArea>
          <TextArea>
            <CurrencyDollar size={22} color="#8047F8" />
            <div>
              <span>Pagamento</span>
              <p>O pagamento é feito na entrega. Escolha a forma que deseja pagar</p>
            </div>
          </TextArea>

          <RadioButtons>
            <Radio>
              <RadioLabel>
                <RadioInput type="radio" checked={selectedValue === 'credito'} onChange={() => handleRadioChange('credito')}/>
                <RadioText>
                  <CreditCard size={22} color="#8047F8" />
                  CARTÃO DE CRÉDITO
                </RadioText>
              </RadioLabel>
            </Radio>
            <Radio>
              <RadioLabel>
                <RadioInput type="radio" checked={selectedValue === 'debito'} onChange={() => handleRadioChange('debito')}/>
                <RadioText>
                  <Bank size={22} color="#8047F8" />
                  CARTÃO DE DÉBITO
                </RadioText>
              </RadioLabel>
            </Radio>
            <Radio>
              <RadioLabel>
                <RadioInput type="radio" checked={selectedValue === 'dinheiro'} onChange={() => handleRadioChange('dinheiro')}/>
                <RadioText>
                  <Money size={22} color="#8047F8" />
                  DINHEIRO
                </RadioText>
              </RadioLabel>
            </Radio>
          </RadioButtons>
        </PaymentArea>
      </ClientInfoContent>

      <CartContent>
        <Title>Cafés selecionados</Title>

        <CartInfoArea>
          <CoffeeCartCard />
          <CoffeeCartCard />

          <CheckoutArea>
            <Prices>
              <Price>
                <Text>Total de itens</Text>
                <Value>R$ 29,70</Value>
              </Price>
              <Price>
                <Text>Entrega</Text>
                <Value>R$ 3,50</Value>
              </Price>

              <Price>
                <TotalParagraph>Total</TotalParagraph>
                <TotalParagraph>R$ 33,20</TotalParagraph>
              </Price>
            </Prices>
            <ShopBtn>Confirmar Pedido</ShopBtn>
          </CheckoutArea>
        </CartInfoArea>
      </CartContent>
    </CartContainer>
    
  )
}