const generateTokens = (numberOfTokens, tokensPerRow) => {
  let numberOfRows = Math.ceil(numberOfTokens / tokensPerRow)
  let outputTokensArray = []
  let tokenCount = 0

  for (let i = 0; i < numberOfRows; i++) {
    let tempTokens = []
    for (let j = 0; j < tokensPerRow; j++) {
      tokenCount++
      if (tokenCount > numberOfTokens) break
      tempTokens.push(tokenCount)
    }
    outputTokensArray.push(tempTokens)
  }

  return outputTokensArray
}

export default generateTokens
