function getRandomNumber(size) {
  return Math.floor(Math.random() * size);
}

function getDistance(e, target) {
  let diffX = e.offsetX - target.x;
  let diffY = e.offsetY - target.y;
  return Math.sqrt(diffX * diffX + diffY * diffY);
}

function getDistanceHint(distance) {
  if (distance < 30) {
    return { message: "Hirviendo!", className: "red" };
  } else if (distance < 40) {
    return { message: "Muy Caliente", className: "red" };
  } else if (distance < 60) {
    return { message: "Caliente", className: "red" };
  } else if (distance < 100) {
    return { message: "Cálido", className: "yellow" };
  } else if (distance < 180) {
    return { message: "Frío", className: "blue" };
  } else if (distance < 360) {
    return { message: "Muy Frío", className: "blue" };
  } else {
    return { message: "Congelado!", className: "blue" };
  }
}
