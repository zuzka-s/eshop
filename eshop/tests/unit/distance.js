let coordinates = { x: 0, y: 0 }

document.addEventListener('click', getCoordinates);

export function getCoordinates (clickCoordinates) {
  let distance = coordinatesDistance (clickCoordinates.pageX,clickCoordinates.pageY, coordinates.x, coordinates.y);
  console.log(distance);
  return distance
} 
export function coordinatesDistance (x = 0, y = 0, x1  = 0, y1 = 0) {
  let distance = Math.sqrt(Math.pow(x1 - x, 2) + Math.pow(y1 - y, 2));
  return distance
 }

