import Budget from '../services/budget';

test('should be able to add new budget', () => {
  expect(Budget.sum(1, 1)).toBe(2);
});
