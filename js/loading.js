function loadingBar() {
  let loader = document.getElementById('loader-modal');

  let i = 0;
  let id = setInterval(frame, 1000);
  function frame() {
    i++;
    if (i >= 4) {
      let loadFlower = document.getElementById('loader-flower');
      loadFlower.style.transition = '0.5s';
      loadFlower.style.opacity = '0';
    }
    if (i >= 4.75) {
      clearInterval(id);
      closeLoader();
    }
  }
}

function closeLoader() {
  let loader = document.getElementById('loader-modal');
  loader.style.opacity = '0';

  let i = 0;
  let id = setInterval(frame, 1000);

  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      loader.style.display = 'none';
    }
  }
}

let glowColors = {
  red: 'f44832',
  maroon: 'a65755',
  purple: '665865',
  blue: 'b1c8e8',
  yellow: 'fcfc69',
  orange: 'ff9b51'
}

loadingBar();
