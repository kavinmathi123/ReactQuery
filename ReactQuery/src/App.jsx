import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import Test1 from './Test1'

function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Test1></Test1>
      </QueryClientProvider>
    </>
  )
}

export default App
