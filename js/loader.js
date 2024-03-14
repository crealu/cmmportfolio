let glowColors = {
  red: 'f44832',
  maroon: 'a65755',
  purple: '665865',
  blue: 'b1c8e8',
  yellow: 'fcfc69',
  orange: 'ff9b51'
}

function randomInt(min, max) {
  return Math.floor(Math.rand() * max - min);
}
let keys = Object.getKeys(glowColors);

for (let i = 0; i < keys.length; i++) {
  let circle = document.createElement();
  let x = randomInt(10, 1000);
  let y = randomInt(10, 432)
  circle.style.left = x + 'px';
  circle.style.top = y + 'px';
  circle.style.width =  '100px';
  circle.style.height = '100px';
  circle.style.borderRadius = '50%';
  circle.style.background = glowColors[keys[i]]
  document.appendChild(circle)
}