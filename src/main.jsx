import React from 'react'
import ReactDOM from 'react-dom/client'
import { NextUIProvider } from '@nextui-org/react'
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

// App imports
import { ThemeProvider } from '@context/ThemeContext'
import Header from '@components/base/Header'
import App from '@/src/App.jsx'
import '@/src/index.css'

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000 * 60 * 12
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NextUIProvider>
      <ThemeProvider>
        <QueryClientProvider client={queryClient}>
          <Header />
          <main>
            <App />
          </main>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </ThemeProvider>
    </NextUIProvider>
  </React.StrictMode>,
)
