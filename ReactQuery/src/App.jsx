import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { QueryClientProvider, QueryClient } from 'react-query'
import Test1 from './Test1'
import Test2 from './Test2'
import Test3 from './Test3'

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 40000, gcTime: 10 * (60 * 1000)
      },
    },
  });
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Test1 />
        {/* <Test2></Test2> */}
        {/* <Test3 /> */}
      </QueryClientProvider>
    </>
  )
}

export default App
