export const symbolDescription = (symbol: symbol): string | undefined => {
  if (typeof symbol !== 'symbol') throw new TypeError()
  const key = Symbol.keyFor(symbol)
  if (key !== undefined) return key
  const description = String(symbol).slice(7, -1)
  return description.length > 0 ? description : undefined
}
// Backwards compatibility
export default symbolDescription
