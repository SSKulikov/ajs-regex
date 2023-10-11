import Validator from '../app';

test.each([
  ['testUsername', true],
  ['test211Username', true],
  ['TESTUSERNAME', true],
  ['test-Username', true],
  ['test_Username', true],
  ['test222Username', true],
  ['test1111Username', false],
  ['1testUsername', false],
  ['testUsername1', false],
  ['_testUsername', false],
  ['testUsername_', false],
  ['-testUsername', false],
  ['testUsername-', false],
])('check username', (username, expectedResult) => {
  const validatename = new Validator(username);
  expect(validatename.validateUsername(username)).toBe(expectedResult);
});
