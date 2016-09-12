function validBraces(braces) {
  const bracesArr = braces.split('')
  const stack = []

  while (bracesArr.length) {
    const brace = bracesArr.shift()

    if (')]}'.includes(brace)) {
      if (isMatchedBraces(stack.pop(), brace)) {
        continue
      }
      return false
    }

    stack.push(brace)
  }

  return !stack.length
}

function isMatchedBraces(left, right) {
  return ['()', '[]', '{}'].some(([l, r]) => l === left && r === right)
}

module.exports = validBraces
