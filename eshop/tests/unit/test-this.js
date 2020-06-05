/**
 * Returns distance in pixels between two points.
 * @param {Object} pointA
 * @param pointB
 * @returns {number}
 */
export function getDistance (pointA = { x: 0, y: 0 }, pointB = { x: 0, y: 0 }) {
    return Math.sqrt(Math.pow(pointA.x - pointB.x, 2) + Math.pow(pointA.y - pointB.y, 2))
  }
  
  export function initDistanceDetector ({
    callback = console.log,
    referencePoint = {x: 0, y: 0},
    eventType = 'click'
  } = {}) {
    const handleClick = function (e) {
      const eventPoint = {x: e.clientX, y: e.clientY}
      callback(getDistance(referencePoint, eventPoint))
    }
  
    document.addEventListener(eventType, handleClick)
  
    return function () {
      document.removeEventListener(eventType, handleClick)
    }
  }
  