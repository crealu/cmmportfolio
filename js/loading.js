let loader = document.getElementById('loader-modal');
let loadFlower = document.getElementById('loader-flower');
let mobileLinks = document.getElementsByClassName('nav-item-mobile');
let mediaItem = document.getElementsByClassName('media-item')[0];

function loadingBar() {
  let i = 0;
  let id = setInterval(frame, 1000);
  function frame() {
    i++;
    if (i >= 1) {
      loadFlower.style.transition = '0.5s';
      loadFlower.style.opacity = '0';
    }
    if (i >= 1.75) {
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
  // if (showing) {
  //   menu.style.display = 'block';
  // } else {
  //   menu.style.height = '0px';
  // }
  let rate = showing ? 100 : 500;
  // showing ? menu.style.display = 'block': menu.style.height = '0px';
  // showing ? rate = 100: rate = 500;

  if (!showing) {
    // mediaItem.style.transition = '0.1s';
    // mediaItem.style.opacity = '0';
    // mediaItem.style.animation = '0';
    for (var m = 0; m < mobileLinks.length; m++) {
      // mobileLinks[m].style.transition = '0.1s';
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
      // showing ? menu.style.height = window.innnerHeight + 'px': menu.style.display = 'none';
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

function animateMobile() {

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
