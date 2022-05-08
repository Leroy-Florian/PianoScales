import {commonsTools} from '../domain/services/commonsTools';

test('Array are equal', () => {
  expect(commonsTools.arraysAreEqual([[1, 2], 3], [[1, 2], 3])).toBe(true);
});
test('Array have different length', () => {
  expect(commonsTools.arraysAreEqual([1, 2, 3], [1, 2, 3, 4])).toBe(false);
});
test('Array are different ', () => {
  expect(commonsTools.arraysAreEqual([[1, 2], [3]], [[1, 2], [], 3])).toBe(false);
});
test('Both Array are empty ', () => {
  expect(commonsTools.arraysAreEqual([], [])).toBe(true);
});
test('Array are not equal', () => {
  expect(commonsTools.arraysAreEqual([[1, 2], 3], [1, 2, 4])).toBe(false);
});
