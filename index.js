module.exports = (symbol) => {
  if (typeof symbol !== 'symbol') {
    throw new TypeError()
  }
  const key = Symbol.keyFor(symbol)
  return key || String(symbol).slice(7, -1) || undefined
}
