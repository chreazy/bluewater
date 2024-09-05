import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TonConnectButton } from '@tonconnect/ui-react'

function App() {
  const [count, setCount] = useState(0)

  const dappMetadata = {
    manifestUrl:
      'https://pastebin.com/raw/zQN5PYhE',
  };

  return (
    <>
      <TonConnectButton/>
    </>
  )
}

export default App
