import { useState } from 'react'
import Button from '@mui/material/Button'

import { TokenContainer } from './TokenContainer'
import generateTokens from './helperFunctions'
import './App.css'

export default function App() {
  const [noBlueOfTokens, setBlueNoOfTokens] = useState(1)
  const [blueTokensPerRow, setBlueTokensPerRow] = useState(1)
  const [blueTokenPrefix, setBlueTokenPrefix] = useState('')
  const [noRedOfTokens, setRedNoOfTokens] = useState(1)
  const [redTokensPerRow, setRedTokensPerRow] = useState(1)
  const [redTokenPrefix, setRedTokenPrefix] = useState('')
  const [blueTokenArray, setBlueTokenArray] = useState([])
  const [redTokenArray, setRedTokenArray] = useState([])

  const handleOnGenerateClick = () => {
    setBlueTokenArray([...generateTokens(noBlueOfTokens, blueTokensPerRow)])
    setRedTokenArray([...generateTokens(noRedOfTokens, redTokensPerRow)])
  }

  const handleOnClearClick = () => {
    setBlueNoOfTokens(1)
    setBlueTokensPerRow(1)
    setBlueTokenPrefix('')
    setRedNoOfTokens(1)
    setRedTokensPerRow(1)
    setRedTokenPrefix('')
    setBlueTokenArray([])
    setRedTokenArray([])
  }

  return (
    <div className='App'>
      <h1>Token Generator Application</h1>
      <div className='ButtonContainer'>
        <Button variant='contained' onClick={handleOnGenerateClick}>
          Generate Token
        </Button>
        <Button variant='contained' onClick={handleOnClearClick}>
          Clear
        </Button>
      </div>
      <div className='MainContainer'>
        <TokenContainer
          color='Red'
          tokens={noRedOfTokens}
          tokenArray={redTokenArray}
          tokensPerRow={redTokensPerRow}
          tokenPrefix={redTokenPrefix}
          setTokens={setRedNoOfTokens}
          setTokensPerRow={setRedTokensPerRow}
          setTokenPrefix={setRedTokenPrefix}
        />
        <TokenContainer
          color='Blue'
          tokens={noBlueOfTokens}
          tokenArray={blueTokenArray}
          tokensPerRow={blueTokensPerRow}
          tokenPrefix={blueTokenPrefix}
          setTokens={setBlueNoOfTokens}
          setTokensPerRow={setBlueTokensPerRow}
          setTokenPrefix={setBlueTokenPrefix}
        />
      </div>
    </div>
  )
}
