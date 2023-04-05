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
} from "./styles";

import CoffeeDeliveryImg from '../../assets/coffee-delivery-img.svg'
import { CoffeeCard } from "../../components/CoffeeCard";

export function Home() {
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

      <h2>Nosso cafés</h2>

      <MenuContent>
        <CoffeeCard />
      </MenuContent>
    </HomeContainer>
  )
}