import { ApolloProvider } from '@apollo/client'
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { client } from './lib/apollo'

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  // ApolloProvider é um context provider, ele usa o atributo "client" para se conectar com as credenciais do graphCMS

  <React.StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </React.StrictMode>
)
