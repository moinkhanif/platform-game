import getTimestamp from '../src/utils/functions';

test('it returns the time', () => {
  expect(getTimestamp()).toBeTruthy();
});
