import { ApolloProvider } from "@apollo/client"
import { BrowserRouter } from "react-router-dom"
import { client } from './lib/apollo'
import { Router } from "./Router"

function App() {
  return (
    // ApolloProvider é um context provider, ele usa o atributo "client" para se conectar com as credenciais do graphCMS
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Router/>
      </BrowserRouter>
    </ApolloProvider>
  )
}

export default App
