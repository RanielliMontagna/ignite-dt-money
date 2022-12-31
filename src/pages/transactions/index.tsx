import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { SearchForm } from './components/searchForm'
import { PriceHighLight, TransactionsContainer, TransactionsTable } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de website</td>
              <td>
                <PriceHighLight variant="income">R$ 12.000,00</PriceHighLight>
              </td>
              <td>Venda</td>
              <td>31/12/2022</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighLight variant="outcome">-R$ 32,00</PriceHighLight>
              </td>
              <td>Alimentação</td>
              <td>31/12/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
