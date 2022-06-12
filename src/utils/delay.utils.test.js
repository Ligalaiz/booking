import { delay } from './delay.utils';

jest.useFakeTimers();
const data = true;

test('delay calls both callbacks', () => {
  expect.assertions(2);

  function callback1() {
    expect(data).toBeTruthy();
  }

  function callback2() {
    expect(data).toBeTruthy();
  }

  delay(callback1, 1000);
  delay(callback2, 1000);

  jest.runAllTimers();
});
