const isBoolean = v => typeof v === 'boolean' || v instanceof Boolean;
const isString = v => typeof v === 'string' || v instanceof String;
const isNumber = v => typeof v === 'number' || v instanceof Number;

/**
 * Converts a value to a boolean. If the value is a string, equality with 'true'
 * (ignoring case) will return true. If the value is a number, any value other than 0 will
 * return true.
 * @param {*} value The value to parse
 * @example
 * parseBoolean('TRUE');
 * // => true
 */
module.exports = function parseBoolean(value) {
    //double equals deliberately used here for type coercion of primitive wrappers
    return (
        (isBoolean(value) && value == true) ||
        (isString(value) && 'true' == value.trim().toLowerCase()) ||
        (isNumber(value) && !isNaN(value) && value != 0)
    );
};
