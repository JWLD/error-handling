// Integer (must be greater than 16 but less than 80)
const validateAge = (age) => {
  if (!age) {
    return new Error('no input was provided');
  }
  else if (typeof(age) !== 'number') {
    return new Error('input is not a number');
  }
  else if (age < 16 || age > 80) {
    return new Error('age is not in the range');
  }
}

module.exports = validateAge;
