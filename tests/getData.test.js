import getData from '../src/utils/getscore';

const result = { result: [{ user: 'Moin', score: 25 }] };
const status = 200;
global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  status,
  json: () => (result || {}),
}));

describe('getData', () => {
  test('it is an instance of promise', () => expect(getData()).toBeInstanceOf(Promise));
  test('it does not return null', () => expect(getData()).resolves.not.toBeNull());
  test('it returns an object', () => expect(getData()).resolves.toBeInstanceOf(Object));
  test('it returns an object with a result that is not an empty array', () => expect(getData()).resolves.not.toHaveProperty('result', []));
  test('it returns array', async () => {
    const data = await getData();
    expect(data).toBeInstanceOf(Object);
    expect(data).toEqual({ result: [{ score: 25, user: 'Moin' }] });
  });
});
