import { throws, strictEqual } from 'assert'
import defaultExport, { symbolDescription as subject } from '.'

const assertionData = [
  {
    sym: Symbol(), // eslint-disable-line symbol-description
    str: undefined
  },
  {
    // Even though TypeScript doesn't think so, API seems to allow this.
    sym: Symbol.for(undefined as any),
    str: 'undefined'
  },
  {
    sym: Symbol('foo'),
    str: 'foo'
  },
  {
    sym: Symbol.for('foo'),
    str: 'foo'
  }
]

assertionData.forEach(({ sym, str }) => {
  console.log(`\`${String(sym)}\` -> ${str !== undefined ? `'${str}'` : String(undefined)}`)
  strictEqual(subject(sym), str)
})

const looseSubject = subject as any
throws(() => looseSubject('foo'), TypeError)
throws(() => looseSubject(1), TypeError)
throws(() => looseSubject([]), TypeError)
throws(() => looseSubject({}), TypeError)
throws(() => looseSubject(() => {}), TypeError) // eslint-disable-line @typescript-eslint/no-empty-function
throws(() => looseSubject(new Map()), TypeError)
throws(() => looseSubject(new Set()), TypeError)

strictEqual(subject, defaultExport)
