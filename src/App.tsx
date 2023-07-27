import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { CoffeeContextProvider } from './contexts/CoffeeContext'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <CoffeeContextProvider>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </CoffeeContextProvider>
      <GlobalStyle />
    </ThemeProvider>
  )
}
