import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { TonConnectUIProvider } from '@tonconnect/ui-react'

const manifest = "https://pastebin.com/raw/zQN5PYhE";
createRoot(document.getElementById('root')!).render(
  <TonConnectUIProvider manifestUrl={manifest}>
    <App />
  </TonConnectUIProvider>,
)
