const WIDTH = 400;
const HEIGHT = 400;

let target = {
  x: getRandomNumber(WIDTH),
  y: getRandomNumber(HEIGHT)
};

let $map = document.querySelector('#map');
let $distance = document.querySelector('#distance');
let clicks = 0;

$map.addEventListener('click', function(e) {
  clicks++;
  let distance = getDistance(e, target);
  let { message, className } = getDistanceHint(distance);
  $distance.innerHTML = `<h1 class="${className}">${message}</h1>`;

  if (distance < 20) {
    alert(`Encontraste el Tesoro en: ${clicks} clicks!`);
    location.reload();
  }
});
