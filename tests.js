// Imports
const { validateName, validateAge, validateEmail, validateReason } = require('./modules');
const test = require('tape');

// Initialise
test('Initialise', (t) => {
  t.ok(true, 'assert testing environment');
  t.end();
})

// validateName
test('Testing validateName', (t) => {
  t.equal(validateName().message, 'no input was provided',
    'no input returns the correct error');
  t.equal(validateName(123).message, 'input is not a string',
    'a non-string input returns the correct error');
  t.equal(validateName('j').message, 'input is not long enough',
    'an input that is too short throws the correct error');
  t.equal(validateName('ree4m').message, 'input has invalid characters',
    'an input with a number throws the correct error');
  t.error(validateName('re-e\'m'),
    'the name re-e\'m does not return an error');
  t.end();
})

// validateAge
test('Testing validateAge', (t) => {
  t.equal(validateAge().message, 'no input was provided',
    'no input returns the correct error');
  t.equal(validateAge('hey').message, 'input is not a number',
    'a non-numerical input returns the correct error');
  t.equal(validateAge(90).message, 'age is not in the range',
    'age of 90 returns the correct error');
  t.equal(validateAge(5).message, 'age is not in the range',
    'age of 5 returns the correct error');
  t.error(validateAge(20),
    'age of 20 does not return an error');
  t.end();
})

// validateEmail
test('Testing validateEmail', (t) => {
  t.equal(validateEmail().message, 'no input was provided',
    'no input returns the correct error');
  t.end();
})
/*// validateReason
test('Testing validateReason', (t) => {
  // @TODO: Add tests
  t.end();
})*/
