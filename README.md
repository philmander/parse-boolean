# parse-boolean

Parse boolean function I've always used.

`npm i -S parse-boolean`

Examples:

```js
const parseBoolean = require('parse-boolean');

// true
parseBoolean(true) // true
parseBoolean(new Boolean(true)) // true
parseBoolean('true') // true
parseBoolean('TRUE') // true
parseBoolean('trUe') // true
parseBoolean('   true   ') // true
parseBoolean(new String('true') // true
parseBoolean(1) // true
parseBoolean(-1) // true
parseBoolean(0.1) // true
parseBoolean(new Number(1)) // true

// false
parseBoolean(false) // false
parseBoolean('false') // false
parseBoolean('blah') // false
parseBoolean('') // false
parseBoolean('1') // false
parseBoolean(0) // false
parseBoolean(null) // false
parseBoolean(undefined) // false
parseBoolean({}) // false
parseBoolean([]) // false
parseBoolean(NaN) // false
```