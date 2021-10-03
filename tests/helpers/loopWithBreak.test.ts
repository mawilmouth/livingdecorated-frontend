import loopWithBreak from '../../helpers/loopWithBreak';

describe('loopWithBreak', () => {
  it('should execute the callback the expected number of times', () => {
    const mockCallback = jest.fn();
    const arr = [0, 1, 2, 3, 4];

    loopWithBreak<number>(arr, mockCallback, () => false);

    expect(mockCallback.mock.calls.length).toBe(5)
  });

  it('should break out of the loop', () => {
    const mockCallback = jest.fn();
    const arr = [0, 1, 2, 3, 4];

    loopWithBreak<number>(arr, mockCallback, () => true);

    expect(mockCallback.mock.calls.length).toBe(0)
  });
});