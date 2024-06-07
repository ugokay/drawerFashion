import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ApolloProvider } from '@apollo/client'
import { Client } from '@/lib/Client.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <ApolloProvider client={Client}>
    <App />
    </ApolloProvider>
  </React.StrictMode>
  ,
)
