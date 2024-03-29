import { ReactNode, createContext, useEffect, useState } from "react";
import { coffees } from '../coffees';


interface CoffeeQuantitiesType {
  [key: string]: number
}

interface CoffeeProps {
  coffeeId: string
  title: string
  subtitle: string
  tags: string[]
  price: number
  image: string
  numberOfItems?: number
}

interface CartFormData {
  cep: string
  rua: string
  numero: string
  bairro: string
  cidade: string
  complemento?: string
  uf: string
  formaDePagamento: 'credito' | 'debito' | 'dinheiro'
}

interface CoffeeContextType {
  plusOneCounter: (cardId: string, isInTheCart?: boolean) => void
  minusOneCounter: (cardId: string, isInTheCart?: boolean) => void
  addToCart: (coffeeId: string) => void
  removeFromCart: (coffeeId: string) => void
  saveFormData: (data: CartFormData) => void
  clearCart: () => void
  coffeeQuantities: CoffeeQuantitiesType
  sumOfItems: number
  cart: CoffeeProps[]
  listOfCoffees: CoffeeProps[]
  ship: number
  partialPrice: number
  totalPrice: number
  cartFormData: CartFormData
}

export const CoffeeContext = createContext({} as CoffeeContextType)

interface CoffeeContextProviderProps {
  children: ReactNode
}

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {
  const [listOfCoffees, setListOfCoffees] = useState<CoffeeProps[]>([...coffees])
  const [sumOfItems, setSumOfItems] = useState(0)
  const [coffeeQuantities, setCoffeeQuantities] = useState({} as CoffeeQuantitiesType)
  const [partialPrice, setPartialPrice] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)
  const [cartFormData, setCartFormData] = useState({} as CartFormData) 

  const [cart, setCart] = useState<CoffeeProps[]>(getCartFromLocalStorage)

  const ship = 3.50

  function plusOneCounter(coffeeId: string, isInTheCart?: boolean) {
    if(isInTheCart) {
      const modifiedCart = cart.map(coffee => {
        if(coffee.coffeeId === coffeeId) {
          const items = coffee.numberOfItems || 1
          return {...coffee, numberOfItems: items + 1}
        } else {
          return coffee
        }
      })

      setCart(modifiedCart)
    } 
    else {
      setCoffeeQuantities(prev => ({
        ...prev,
        [coffeeId]: (prev[coffeeId] || 0) + 1,
      }))
    }
    
  }

  function minusOneCounter(coffeeId: string, isInTheCart?: boolean) {
    if(isInTheCart) {
      const modifiedCart = cart.map(coffee => {
        if(coffee.coffeeId === coffeeId) {
          const items = coffee.numberOfItems || 1 
          return {...coffee, numberOfItems: Math.max(items - 1, 1)}
        } else {
          return coffee
        }
      })

      setCart(modifiedCart)
    }
    else {
      setCoffeeQuantities(prev => ({
        ...prev,
        [coffeeId]: Math.max((prev[coffeeId] || 0) - 1, 0)
      }))
    }
  }

  function addToCart(coffeeId: string) {
    const modifiedListOfCoffees = listOfCoffees.map(coffee => {

      if(coffee.coffeeId === coffeeId) {
        setCart(prevCart => [...prevCart, {...coffee, numberOfItems: coffeeQuantities[coffeeId]}])
        return {...coffee, numberOfItems: coffeeQuantities[coffeeId]}
      } else {
        return coffee
      }
    })

    setListOfCoffees(modifiedListOfCoffees)
    setCoffeeQuantities({})
  }

  function removeFromCart(coffeeId: string) {
    setCart(cart.filter(coffee => coffee.coffeeId !== coffeeId))
  }

  function saveFormData(data: CartFormData) {
    setCartFormData(data)
  }

  function clearCart() {
    setCart([])
  }

  function saveCartToLocalStorage(cart: CoffeeProps[]) {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function getCartFromLocalStorage(): CoffeeProps[] {
    const cartString = localStorage.getItem('cart');
    return cartString ? JSON.parse(cartString) : [];
  }

  useEffect(() => {
    const sum = cart.reduce((acc, coffee) => {
      return acc + (coffee.numberOfItems || 1)
    }, 0)

    const cartPrice = cart.reduce((acc, coffee) => {
      return acc + ((coffee.numberOfItems || 1) * coffee.price)
    }, 0)

    setPartialPrice(cartPrice)
    setTotalPrice(cartPrice + ship)
    setSumOfItems(sum)

    saveCartToLocalStorage(cart)
  }, [cart])

  return (
    <CoffeeContext.Provider 
      value={{
        ship, 
        plusOneCounter, 
        minusOneCounter, 
        coffeeQuantities, 
        sumOfItems, 
        addToCart, 
        cart, 
        listOfCoffees, 
        removeFromCart, 
        totalPrice, 
        partialPrice,
        saveFormData,
        cartFormData,
        clearCart
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}