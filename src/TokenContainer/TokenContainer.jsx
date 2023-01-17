import { memo } from 'react'
import { Paper, TextField } from '@mui/material'
import './styles.css'

const TokenContainer = ({
  color,
  tokens,
  tokensPerRow,
  tokenPrefix,
  setTokens,
  setTokensPerRow,
  setTokenPrefix,
  tokenArray,
}) => {
  const handleOnNoOfTokensChange = event => {
    if (!!event.target.value && event.target.value > 0) {
      setTokens(event.target.value)
    }
  }

  const handleOnTokensPrefixChange = event => {
    setTokenPrefix(`${event.target.value}`.trim())
  }

  const handleOnTokensPerRowChange = event => {
    if (!!event.target.value && event.target.value > 0) {
      setTokensPerRow(event.target.value)
    }
  }

  return (
    <div className='BodyContainer'>
      <h4 style={{ color: color?.toLowerCase() }}>{color} Tokens</h4>
      <div className='InputContainer'>
        <TextField
          type='number'
          label={`${color} number of Tokens`}
          style={{ width: '250px' }}
          onChange={handleOnNoOfTokensChange}
          value={tokens}
        />
        <TextField
          label={`${color} token Prefix`}
          style={{ width: '250px' }}
          onChange={handleOnTokensPrefixChange}
          value={tokenPrefix}
        />
        <TextField
          type='number'
          label={`${color} tokens Per Row`}
          style={{ width: '250px' }}
          onChange={handleOnTokensPerRowChange}
          value={tokensPerRow}
        />
      </div>
      <div className='TokenContainer'>
        {tokenArray?.map(value => (
          <div
            className='TokenRowContainer'
            key={`${Math.random() * Math.random()}tokenRowContainer`}
          >
            {value.map(token => (
              <Paper
                key={`${Math.random() * Math.random()}tokenPrefix`}
                style={{
                  height: '100px',
                  minWidth: '100px',
                  textAlign: 'center',
                  display: 'flex',
                  margin: '5px',
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: color.toLowerCase(),
                }}
                elevation={4}
              >{`${tokenPrefix}${token}`}</Paper>
            ))}
          </div>
        ))}
      </div>
    </div>
  )
}

export default memo(TokenContainer)
