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

let colors = Object.values(glowColors);

function attachAnimations() {
  for (let i = 1; i <= 6; i++) {
    oneAnimation(`cls-${i}`);
  }
}

function oneAnimation(className) {
  let cb = 'cubic-bezier(0.61, 0.09, 0.39, 0.88)';
  let cls = document.getElementsByClassName(className);
  let len = cls.length;
  let totalDuration = 3.0;
  let factor = 2.0;
  for (let i = 0; i < len; i++) {
    let duration = (len - i) / len + totalDuration;
    let delay = i / len * totalDuration;
    duration /= factor;
    delay /= factor;
    cls[i].style.animation = `${duration}s ${cb} ${delay}s forwards intro`;
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

    if (i >= 4.5) {
      clearInterval(id);
      closeLoader();
    }
  }
}

function closeLoader() {
  // let loader = document.getElementById('loader-modal');
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

function toggleMobileNav(menu, showing) {
  let rate = showing ? 100 : 500;

  if (!showing) {
    for (var m = 0; m < mobileLinks.length; m++) {
      mobileLinks[m].style.opacity = '0';
    }
  }

  let id = setInterval(frame, rate);
  let i = 0;

  function frame() {
    i++;
    if (i >= 1 && i < 2) {
      if (showing) {
        menu.style.height = window.innnerHeight + 'px';
      } else {
        menu.style.display = 'none';
      }
    }
    if (showing) {
      if (i >= 2 && i < 3) {
        mobileLinks[0].style.opacity = '1';
        mobileLinks[0].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 3 && i < 4) {
        mobileLinks[1].style.opacity = '1';
        mobileLinks[1].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 4 && i < 5) {
        mobileLinks[2].style.opacity = '1';
        mobileLinks[2].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 5 && i < 6) {
        mobileLinks[3].style.opacity = '1';
        mobileLinks[3].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 9 && i < 10) {
        // clearInterval(id);
        // mediaItem.style.animation = '0.5s var(--cb-bounce) 0s forwards media_bounce';
      }
    } else {
        if (i >= 1) {
          clearInterval(id);
          for (var m = 0; m < mobileLinks.length; m++) {
            mobileLinks[m].style.transform = 'scale(1.1) translateY(-30px)';
            mobileLinks[m].style.transition = '0.5s ease opacity, 0.5s ease transform';
          }
        }
    }
  }
}


loadingBar();
