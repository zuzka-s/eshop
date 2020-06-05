import { getDistance, initDistanceDetector } from './test-this'

function simulateClick (x = 0, y = 0) {
  const event = new MouseEvent('click', { clientX: x, clientY: y })
  document.dispatchEvent(event)
}

describe('Distance Detector', function () {

  describe('getDistance', function () {

    it('should get distance between zero points', function () {
      const pointA = { x: 0, y: 0 }
      const pointB = { x: 0, y: 0 }
      const result = getDistance(pointA, pointB)
      expect(result).toBe(0)
    })

    it('should return error when parameters are not in right format', function () {
        const pointA = "3"
        const pointB = { x: 0, y: 0 }
        const result = getDistance(pointA, pointB)
        expect(result).toBe(NaN)
    })

    it('should handle negative numbers', function () {
        const pointA = { x: -10, y: 0 }
        const pointB = { x: -10, y: 0 }
        const result = getDistance(pointA, pointB)
        expect(result).toBe(0)
    })

    it('should handle missing parameters', function () {
        const result = getDistance()
        expect(result).toBe(0)
    })

    it('should return result when all parameters are defined', function () {
      const pointA = { x: 80, y: 56 }
      const pointB = { x: 50, y: 80 }
      const result = getDistance(pointA, pointB)
      expect(result).toBe(38.41874542459709)
  })

  })

  describe('initDistanceDetector', function () {

    const spy = jest.fn()
    let cleanup = function () {}

    beforeEach(function () {
      spy.mockReset()
    })

    afterEach(function () {
      cleanup()
    })

    it('should react to clicks', function () {
      cleanup = initDistanceDetector({callback: spy})
      simulateClick(0, 0)
      expect(spy).toHaveBeenCalled()
    })

    it('should display distance between zero event and ref point', function () {
      cleanup = initDistanceDetector({callback: spy})
      simulateClick(0, 0)
      expect(spy).toHaveBeenCalledWith(0)
    })

    it('should display distance between 0/0 event and ref 0/100 point', function () {
      cleanup = initDistanceDetector({
        callback: spy,
        referencePoint: {x: 0, y: 100}
      })
      simulateClick(0, 0)
      expect(spy).toHaveBeenCalledWith(100)
    })

    it('should call callback only once', function () {
      cleanup = initDistanceDetector({callback: spy})
      simulateClick(0, 0)
      expect(spy).toHaveBeenCalledTimes(1)
    })

    

  })

})
