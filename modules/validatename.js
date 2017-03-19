// String (characters allowed: letter, dash, apostrophe. Must contain at least two letters)
const validateName = (name) => {
  if (!name) {
    return new Error('no input was provided');
  }
  else if (typeof(name) !== 'string') {
    return new Error('input is not a string');
  }
  else if (name.length < 2) {
    return new Error('input is not long enough');
  }
  else if (name.search(/[^a-zA-Z-']/gi) !== -1) {
    return new Error('input has invalid characters');
  }
}

module.exports = validateName;
