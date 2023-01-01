import { createContext, useContext, useEffect, useState } from 'react'

interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  price: number
  category: string
  createdAt: string
}

interface TransacationContextType {
  transactions: Transaction[]
}

interface TransactionsProviderProps {
  children: React.ReactNode
}

const TransactionsContext = createContext({} as TransacationContextType)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, _setTransactions] = useState<Transaction[]>([])

  async function loadTransactions() {
    const response = await fetch('http://localhost:3333/transactions')
    const data = await response.json()

    _setTransactions(data)
  }

  useEffect(() => {
    loadTransactions()
  }, [])

  return (
    <TransactionsContext.Provider value={{ transactions }}>{children}</TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  if (!context) {
    throw new Error('useTransactions must be used within a TransactionsProvider')
  }

  return context
}
