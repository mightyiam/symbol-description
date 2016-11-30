# symbol-description

Returns description of provided symbol

```js
const symDesc = require('symbol-description')
symDesc(Symbol()) // undefined
symDesc(Symbol('foo')) // 'foo'
symDesc(Symbol.for('foo')) // 'foo'
symDesc(Symbol.for()) // 'undefined' (string)
```

[![JavaScript Style Guide](https://cdn.rawgit.com/feross/standard/master/badge.svg)](https://github.com/feross/standard)
