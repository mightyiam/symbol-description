import test, { Macro } from 'ava'
import defaultExport, { symbolDescription as subject } from '.'

const output: Macro<[symbol, string | undefined]> = (t, sym, str) => {
  t.is(subject(sym), str)
}

test(
  '`Symbol()` -> undefined',
  output,
  // eslint-disable-next-line symbol-description
  Symbol(),
  undefined
)
test(
  "`Symbol.for(undefined)` -> 'undefined'",
  output,
  // Even though TypeScript doesn't think so, API seems to allow this.
  Symbol.for(undefined as any),
  'undefined'
)
test(
  "`Symbol('foo')` -> 'foo'",
  output,
  Symbol('foo'),
  'foo'
)
test(
  "`Symbol.for('foo')` -> 'foo'",
  output,
  Symbol.for('foo'),
  'foo'
)

const looseSubject = subject as any
const typeError: Macro<[unknown]> = (t, v) => {
  t.throws(() => {
    looseSubject(v)
  })
}
typeError.title = (input) => {
  if (input === undefined) throw new Error()
  return `throws a TypeError when input is ${input}`
}

test('string', typeError, 'foo')
test('number', typeError, 1)
test('array', typeError, [])
test('object', typeError, {})
test('function', typeError, () => {})
test('map', typeError, new Map())
test('set', typeError, new Set())

test('default export identical to `symbolDescription` named export', (t) => {
  t.is(subject, defaultExport)
})
