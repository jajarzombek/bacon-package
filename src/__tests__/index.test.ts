import { sayHello } from '../index';

test('says hello', () => {
  expect(sayHello('Carl')).toBe('Hello Carl');
});
