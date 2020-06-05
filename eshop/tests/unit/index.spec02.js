import { coordinatesDistance } from './distance'


describe('Distance', function () {

  describe('coordinatesDistance', function () {

    it('should return 0 when all parameters are missing', function () {
      expect(coordinatesDistance()).toBe(0)
    })

    it('should return 0 when all parameters are the same value', function () {
      expect(coordinatesDistance(5,5,5,5)).toBe(0)
    })

    it('should handle missing parameters', function () {
      expect(coordinatesDistance(0,0)).toBe(0)
    })

    it('should handle negative numbers', function () {
      expect(coordinatesDistance(0,0,-1,-1)).toBe(1.4142135623730951)
    })

    it('should return error when parameters are strings', function () {
      expect(coordinatesDistance("abcd")).toBe(NaN)
    })


  })

})