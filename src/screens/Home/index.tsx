import { 
  HomeContainer,
  BannerContent,
  BannerTitles,
  Title,
  Subtitle,
  BannerItems,
  BannerItem,
  CartIcon,
  TimerIcon,
  PackageIcon,
  CoffeeIcon,
  MenuContent,
  Coffees,
} from "./styles";

import CoffeeDeliveryImg from '../../assets/coffee-delivery-img.svg'

import { CoffeeCard } from "../../components/CoffeeCard";
import { useContext } from "react";
import { CoffeeContext } from "../../contexts/CoffeeContext";

export function Home() {
  const { listOfCoffees } = useContext(CoffeeContext)


  return (
    <HomeContainer>
      <BannerContent>
        <div>
          <BannerTitles>
            <Title>Encontre o café perfeito para qualquer hora do dia</Title>
            <Subtitle>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</Subtitle>
          </BannerTitles>

          <BannerItems>
            <BannerItem>
              <CartIcon size={16} weight="fill" />
              <p>Compra simples e segura</p>
            </BannerItem>
            <BannerItem>
              <PackageIcon size={16} weight="fill" />
              <p>Embalagem mantém o café intacto</p>
            </BannerItem>
            <BannerItem>
              <TimerIcon size={16} weight="fill" />
              <p>Entrega rápida e rastreada</p>
            </BannerItem>
            <BannerItem>
              <CoffeeIcon size={16} weight="fill" /> 
              <p>O café chega fresquinho até você</p>
            </BannerItem>
          </BannerItems>
        </div>

        <img src={CoffeeDeliveryImg} alt="" />
      </BannerContent>

      <MenuContent>
        <h2>Nosso cafés</h2>

        <Coffees>
          {
            listOfCoffees.map((coffee, coffeeIndex) => {
              return (
                <CoffeeCard 
                  key={coffee.coffeeId}
                  coffeeId={coffee.coffeeId.toString()}
                  title={coffee.title}
                  subtitle={coffee.subtitle}
                  image={coffee.image}
                  price={coffee.price}
                  tags={coffee.tags}
                />
              )
            })
          }
        </Coffees>
      </MenuContent>

    </HomeContainer>
  )
}