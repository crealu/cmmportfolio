let loader = document.getElementById('loader-modal');
let loadFlower = document.getElementById('loader-flower');
let mobileLinks = document.getElementsByClassName('nav-item-mobile');
let mediaItem = document.getElementsByClassName('media-item')[0];
let cls1 = document.getElementsByClassName('cls-1');

let glowColors = {
  red: 'f44832',
  maroon: 'a65755',
  purple: '665865',
  blue: 'b1c8e8',
  yellow: 'fcfc69',
  orange: 'ff9b51'
}

let totalDuration = 3.0;
let cb = 'cubic-bezier(0.61, 0.09, 0.39, 0.88)';
let factor = 2.0;

function oneAnimation(className) {
  let cls = document.getElementsByClassName(className);
  let len = cls.length;
  for (let i = 0; i < len; i++) {
    let duration = (len - i) / len + totalDuration;
    let delay = i / len * totalDuration;
    duration /= factor;
    delay /= factor;
    cls[i].style.animation = `${duration}s ${cb} ${delay}s forwards intro`;
  }
}

function attachAnimations() {
  for (let i = 1; i <= 6; i++) {
    oneAnimation(`cls-${i}`);
  }
}

function loadingBar() {
  let i = 0;
  let id = setInterval(frame, 1000);
  attachAnimations();

  function frame() {
    i++;

    if (i >= 4) {
      loadFlower.style.transition = '0.5s ease';
      loadFlower.style.opacity = '0';
    }

    if (i >= 2) {
      clearInterval(id);
      closeLoader();
    }
  }
}

function closeLoader() {
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

loadingBar();
