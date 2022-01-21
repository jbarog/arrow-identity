# arrow-identity
A function that returns the same value that was used as its argument. That is, for f being identity, the equality f(X) = X holds for all X.
```javascript
(x) => x
```

## Install

`npm install --save arrow-identity`

## Usage
```javascript
const identity = require('arrow-identity');

const originalName = 'John';

const name = identity(numberArray);

console.log(name);
/*
John
*/
```

## License
MIT

