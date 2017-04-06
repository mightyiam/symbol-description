const { strictEqual, throws } = require('assert')
const subject = require('.')

const assertionData = [
  {
    sym: Symbol(), // eslint-disable-line symbol-description
    str: undefined
  },
  {
    sym: Symbol.for(),
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
  console.log(`\`${String(sym)}\` -> ${str ? `'${str}'` : undefined}`)
  strictEqual(subject(sym), str)
})

throws(() => subject('foo'), TypeError)
throws(() => subject(1), TypeError)
throws(() => subject([]), TypeError)
throws(() => subject({}), TypeError)
throws(() => subject(() => {}), TypeError)
throws(() => subject(new Map()), TypeError)
throws(() => subject(new Set()), TypeError)
