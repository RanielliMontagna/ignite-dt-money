import { ThemeProvider } from 'styled-components'
import { TransactionsProvider } from './contexts/transactionsContext'
import { Transactions } from './pages/transactions'
import { GlobalStyle } from './styles/global'
import { defaultTheme } from './styles/themes/default'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsProvider>
        <Transactions />
      </TransactionsProvider>
    </ThemeProvider>
  )
}

export default App
