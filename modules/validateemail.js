// String (valid email address)
const validateEmail = (email) => {
  if (!email) {
    return new Error('no input was provided');
  }
}

module.exports = validateEmail;
