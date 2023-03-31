import { ThemeProvider } from 'styled-components'
import { defaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {

  return (
    <ThemeProvider theme={defaultTheme}>
      <div>
        <h1>Hello world!</h1>
      </div>
      <GlobalStyle />
    </ThemeProvider>
  )
}
