# symbol-description [![Build Status](https://travis-ci.org/mightyiam/symbol-description.svg?branch=master)](https://travis-ci.org/mightyiam/symbol-description)

Returns description of provided symbol.

```js
import { symbolDescription } from 'symbol-description'

symbolDescription(Symbol()) // undefined
symbolDescription(Symbol('foo')) // 'foo'
symbolDescription(Symbol.for('foo')) // 'foo'
symbolDescription(Symbol.for()) // 'undefined' (string)
```

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
