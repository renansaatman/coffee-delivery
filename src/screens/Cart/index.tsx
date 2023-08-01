import { MapPinLine, CurrencyDollar, CreditCard, Bank, Money } from "@phosphor-icons/react";
import { AddressForm, AddressFormArea, CartContainer, CartContent, CartInfoArea, CheckoutArea, ClientInfoContent, FormInput, Price, PaymentArea, Prices, Radio, RadioButtons, RadioInput, RadioLabel, RadioText, ShopBtn, TextArea, Title, Value, Text, TotalParagraph, ComplementoContainer, OptionalComplementoText } from "./styles";
import { useContext, useEffect, useState } from "react";
import { CoffeeCartCard } from "../../components/CoffeeCartCard";
import { CoffeeContext } from "../../contexts/CoffeeContext";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"

import * as zod from 'zod'
import { useNavigate } from "react-router-dom";

const cartFormValidationSchema = zod.object({
  cep: zod.string().min(8),
  rua: zod.string().min(1).max(50),
  numero: zod.string().min(1),
  bairro: zod.string().min(1).max(50),
  cidade: zod.string().min(1).max(50),
  complemento: zod.string().optional(),
  uf: zod.string().min(1).max(2),
  formaDePagamento: zod.enum(['credito', 'debito', 'dinheiro']).refine(value => value !== undefined)
})

type CartFormData = zod.infer<typeof cartFormValidationSchema>

export function Cart() {
  const navigate = useNavigate()
  const { cart, ship, partialPrice, totalPrice, saveFormData } = useContext(CoffeeContext)

  const { register, handleSubmit, watch, reset } = useForm<CartFormData>({
    resolver: zodResolver(cartFormValidationSchema),
    defaultValues: {
      cep: '',
      rua: '',
      numero: '',
      bairro: '',
      cidade: '',
      complemento: '',
      uf: '',
    }
  })

  function handleFinishOrder(data: CartFormData) {
    saveFormData(data)
    reset()
    navigate('/success')
  }

  const complemento = watch('complemento')
  const isComplementoEmpty = !complemento

  const formaDePagamento = watch('formaDePagamento')

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
              id="cep"
              type="number" 
              placeholder="CEP"
              style={{gridArea: '1 / 1 / 2 / 2'}} 
              {...register('cep')}
            />
            <FormInput 
              id="rua"
              type="text" 
              placeholder="Rua"
              style={{gridArea: '2 / 1 / 3 / 4'}}
              {...register('rua')}
            />
            <FormInput 
              id="numero"
              type="number" 
              placeholder="Número"
              style={{gridArea: '3 / 1 / 4 / 2'}}
              {...register('numero')}
            />
            <ComplementoContainer style={{gridArea: '3 / 2 / 4 / 4'}}>
              <FormInput 
                id="complemento"
                type="text" 
                placeholder="Complemento"
                {...register('complemento')}
              />
              {isComplementoEmpty && <OptionalComplementoText>Opcional</OptionalComplementoText>}
            </ComplementoContainer>
            <FormInput 
              id="bairro"
              type="text" 
              placeholder="Bairro"
              style={{gridArea: '4 / 1 / 5 / 2'}}
              {...register('bairro')}
            />
            <FormInput 
              id="cidade"
              type="text" 
              placeholder="Cidade"
              style={{gridArea: '4 / 2 / 5 / 3'}}
              {...register('cidade')}
            />
            <FormInput 
              id="uf"
              type="text" 
              placeholder="UF"
              style={{gridArea: '4 / 3 / 5 / 4'}}
              {...register('uf')}
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
                <RadioInput 
                  type="radio" 
                  value="credito"
                  checked={formaDePagamento === 'credito'} 
                  {...register('formaDePagamento')}
                />
                <RadioText>
                  <CreditCard size={22} color="#8047F8" />
                  CARTÃO DE CRÉDITO
                </RadioText>
              </RadioLabel>
            </Radio>
            <Radio>
              <RadioLabel>
                <RadioInput 
                  type="radio" 
                  value="debito"
                  checked={formaDePagamento === 'debito'} 
                  {...register('formaDePagamento')}
                />
                <RadioText>
                  <Bank size={22} color="#8047F8" />
                  CARTÃO DE DÉBITO
                </RadioText>
              </RadioLabel>
            </Radio>
            <Radio>
              <RadioLabel>
                <RadioInput 
                  type="radio" 
                  value="dinheiro"
                  checked={formaDePagamento === 'dinheiro'} 
                  {...register('formaDePagamento')}
                />
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
          {cart && cart.map(cartItem => {
            return (
              <CoffeeCartCard 
                key={cartItem.coffeeId}
                coffeeId={cartItem.coffeeId}
                image={cartItem.image}
                price={cartItem.price}
                title={cartItem.title}
                numberOfItems={cartItem.numberOfItems}
              />
            )
          })}

          <CheckoutArea>
            <Prices>
              <Price>
                <Text>Total de itens</Text>
                <Value>{partialPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</Value>
              </Price>
              <Price>
                <Text>Entrega</Text>
                <Value>{ship.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</Value>
              </Price>

              <Price>
                <TotalParagraph>Total</TotalParagraph>
                <TotalParagraph>{totalPrice.toLocaleString('pt-BR', {
                  style: 'currency',
                  currency: 'BRL'
                })}</TotalParagraph>
              </Price>
            </Prices>
            <ShopBtn onClick={handleSubmit(handleFinishOrder)} disabled={cart.length === 0} >Confirmar Pedido</ShopBtn>
          </CheckoutArea>
        </CartInfoArea>
      </CartContent>
    </CartContainer>
    
  )
}