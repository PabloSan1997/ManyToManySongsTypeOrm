import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { ProviderContext } from './Context.tsx'
import './styles/index.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ProviderContext>
      <App />
    </ProviderContext>
  </React.StrictMode>,
)
