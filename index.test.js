const parseBoolean = require('./index');
const { strictEqual } = require('assert');

const whitespace = '   ';

// should accept boolean values
strictEqual(parseBoolean(true), true);
strictEqual(parseBoolean(false), false);
strictEqual(parseBoolean(new Boolean(true)), true);
strictEqual(parseBoolean(new Boolean(false)), false);

// should parse true strings with case insensitivity
strictEqual(parseBoolean('true'), true);
strictEqual(parseBoolean(new String('true')), true);
strictEqual(parseBoolean('TRUE'), true);
strictEqual(parseBoolean('True'), true);
strictEqual(parseBoolean('trUe'), true);

// should parse non-true strings
strictEqual(parseBoolean('false'), false);
strictEqual(parseBoolean(new String('false')), false);
strictEqual(parseBoolean('ABC'), false);
strictEqual(parseBoolean('1'), false);
strictEqual(parseBoolean(''), false);

// should parse strings with leading and trailing whitespace
strictEqual(parseBoolean(whitespace + 'true'), true);
strictEqual(parseBoolean('true' + whitespace), true);
strictEqual(parseBoolean(whitespace + 'true' + whitespace), true);

// should parse numbers
strictEqual(parseBoolean(-1), true);
strictEqual(parseBoolean(1), true);
strictEqual(parseBoolean(0.1), true);
strictEqual(parseBoolean(-0.1), true);
strictEqual(parseBoolean(Number.POSITIVE_INFINITY), true);
strictEqual(parseBoolean(Number.NEGATIVE_INFINITY), true);
strictEqual(parseBoolean(0), false);
strictEqual(parseBoolean(new Number(1)), true);
strictEqual(parseBoolean(new Number(0)), false);

// should accept various other types
strictEqual(parseBoolean(null), false);
strictEqual(parseBoolean(undefined), false);
strictEqual(parseBoolean({}), false);
strictEqual(parseBoolean([]), false);
strictEqual(parseBoolean(NaN), false);
strictEqual(parseBoolean(Number.NaN), false);
