import returnMenu from '../src/utils/returnmenu';

const result = { result: [{ user: 'Moin', score: 25 }] };
const status = 200;
global.fetch = jest.fn(() => Promise.resolve({
  ok: true,
  status,
  json: () => (result || {}),
}));

describe('returnmenu', () => {
  test('it is an instance of promise', () => expect(returnMenu()).toBeInstanceOf(Promise));
  test('it does not return null', () => expect(returnMenu()).resolves.not.toBeNull());
  test('it returns an object', () => expect(returnMenu()).resolves.toBeInstanceOf(Object));
  test('it returns an object with a result that is not an empty array', () => expect(returnMenu()).resolves.not.toHaveProperty('result', []));
  test('it returns array', async () => {
    const menu = await returnMenu();
    expect(menu).toBeInstanceOf(Array);
    expect(menu).toBeInstanceOf(Array);
    expect(menu).toEqual([{ scene: null, text: 'Moin:  25' }]);
  });
});
