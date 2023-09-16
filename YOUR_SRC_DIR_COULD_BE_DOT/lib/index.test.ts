import * as unit from '.';

describe('lib', () => {
  describe('add', () => {
    it('should add two numbers', () => {
      expect(unit.add(1, 2)).toBe(3);
      expect(unit.add(0, 2)).toBe(2);
      expect(unit.add(1, 0)).toBe(1);
    });
  });

  describe('sub', () => {
    it('should subtract two numbers', () => {
      expect(unit.sub(1, 2)).toBe(-1);
      expect(unit.sub(0, 2)).toBe(-2);
      expect(unit.sub(1, 0)).toBe(1);
    });
  });
});
