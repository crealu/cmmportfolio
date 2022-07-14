function toggleNavBackground(yn) {
  let nav = gebcn('navigation-bar')[0];
  let backgroundStyle;
  switch (yn) {
    case 'yes':
      backgroundStyle = 'linear-gradient(180deg, rgba(139, 161, 198, 1) 50%, rgba(159, 179, 200, 0))';
      break;
    case 'no':
      backgroundStyle = 'linear-gradient(180deg, rgba(250, 250, 250, 1) 50%, rgba(250, 250, 250, 0))';
      break;
  }

  nav.style.background = backgroundStyle;
}

function mobileMenu() {
  let mobileNav = gebi('nav-mobile');
  if (!(mobileNav.style.display == 'block')) {
    switchNavBtn();
    fadeShowMobile(mobileNav);
  } else {
      switchNavBtn();
      fadeHideMobile(mobileNav);
  }
}

function fadeShowMobile(el) {
  let i = 0;
  let id = setInterval(frame, 125);
  el.style.display = 'block';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      el.style.opacity = '1';
    }
  }
}

function fadeHideMobile(el) {
  let i = 0;
  let id = setInterval(frame, 125);
  el.style.opacity = '0';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      el.style.display = 'none';
    }
  }
}

function switchNavBtn() {
  let bars = gebcn('bar');
  let navBtn = gebi('nav-btn');
  let homeImg = gebcn('home-img')[0];

  if (bars[2].style.opacity == '0') {
    bars[0].style.transform = 'rotate(0deg)';
    bars[0].style.top = '0px';
    bars[0].style.background = 'white';
    bars[1].style.transform = 'rotate(0deg)';
    bars[1].style.top = '0px';
    bars[1].style.background = 'white';
    bars[2].style.opacity = '1';
    bars[2].style.background = 'white';

  } else {
      bars[0].style.transform = 'rotate(45deg)';
      bars[0].style.top = '5px';
      bars[0].style.background = '#353535';
      bars[1].style.transform = 'rotate(-45deg)';
      bars[1].style.top = '-3px';
      bars[1].style.background = '#353535';
      bars[2].style.opacity = '0';
      bars[2].style.background = '#353535';
  }
}

let whatsNewSites = {
  niheigo: 'https://www.niheigo.com',
  mernboiler: 'https://github.com/crealu/mern-boilerplate',
  phocam: 'https://crealu.github.io/phocam',
  lshaders: 'https://lightningshaders.herokuapp.com',
  gengoatvista: 'https://gengoatvista.herokuapp.com'
}

function whatsNewTab(wn) {
  window.open(whatsNewSites[wn], '_blank')
}

function displayProjects(div) {
  let contentArray = [
    'about-content',
    'projects-content',
    'connect-content'
  ];

  if (contentArray.indexOf(div) != -1) {
    let ind = contentArray.indexOf(div);
    contentArray.splice(ind, 1);
  }

  let c2 = gebi(contentArray[1]);
  let c1 = gebi(contentArray[0]);
  fadeHide2(c1, c2);

  let contentToDisplay = gebi(div);
  fadeShow(contentToDisplay);
}

function toggleSoftVis(tog) {
  let homeImg = gebcn('home-img')[0];
  let navbar = gebcn('navigation-bar')[0];
  let hoverLines = gebcn('underline');
  let languageToggle = gebcn('language-toggle')[0];

  let backgroundStyle;

  let softVisProps = [
    ['opacity', ''],
    ['color', ''],
    ['background', '']
  ];

  switch (tog) {
    case 0:
      homeImg.style.opacity = '0';
      navbar.style.color = '#353535';
      backgroundStyle = '#353535';
      languageToggle.style.color = '#353535';
      break;
    case 1:
      homeImg.style.opacity = '1';
      navbar.style.color = 'white';
      backgroundStyle = 'white';
      homeImg.style.filter = 'blur(10px) brightness(0.9)';
      homeImg.style.transform = 'scale(1.07)';
      languageToggle.style.color = 'white';
      break;
    case 2:
      homeImg.style.opacity = '1';
      navbar.style.color = 'white';
      backgroundStyle = 'white';
      homeImg.style.filter = 'blur(0px) brightness(0.9)';
      homeImg.style.transform = 'scale(1)';
      languageToggle.style.color = 'white';
      break;
  }

  for (var i = 0; i < hoverLines.length; i++) {
    hoverLines[i].style.background = backgroundStyle;
  }
}

function displayContent(topic) {
  let whatsNew = gebi('about-content');
  fadeHide(whatsNew);

  switch (topic) {
    case 'About':
      displayProjects('about-content');
      break;
    case 'Projects':
      displayProjects('projects-content');
      // let option1 = gebcn('options-wrapper')[0];
      break;
    case 'Connect':
      displayProjects('connect-content');
      break;
  }

  // let bars = gebcn('bars');
  if (window.innerWidth <= 800) {
    mobileMenu();
    // checkViewport();
    // if (topic == 'About' || topic == 'Software') {
    //   toggleNavBackground('yes');
    // } else if (topic == 'Visual Arts') {
    //     toggleNavBackground('no');
    //     for (var z = 0; z < bars.length; z++) {
    //       bars[z].style.background = '#353535';
    //     }
    //     console.log('switch to vis');
    // }
  }
}

function projectListItem(ti, projectDescription) {
  this.newLI = createEl("li");
  this.titleH = createEl("h3");
  this.titleT = textNode(ti);
  this.descP = createEl("p");
  this.descT = textNode(projectDescription);
}

const projectContentRow = document.getElementById('project-content-row');

(function addProjectList() {
  projects.forEach(project => {
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const link = document.createElement("a");

    div.classList.add('software-project-wrapper');
    title.classList.add('software-project-title');
    title.textContent = project[0];
    description.classList.add('software-project-text');
    description.textContent = project[1];
    link.classList.add('software-project-link');
    link.href = project[3];
    link.setAttribute('target', '_blank');

    div.appendChild(title);
    div.appendChild(description);
    link.appendChild(div);
    projectContentRow.appendChild(link);
  });
})();

// addProjectList();

function addVisualProjectList(vp) {
  let visualList = gebcn('visual-list')[0];
  clear(visualList);
  let vaArr, newSlide;

  if (vp == 'videos') {
    visualList.innerHTML = '<iframe class="vid-iframe" width="560" height="315" src="https://www.youtube.com/embed/78gaqQMWiOI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
    visualList.innerHTML += '<iframe class="vid-iframe" width="560" height="315" src="https://www.youtube.com/embed/CEJ846oOJhs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
  } else {
      switch (vp) {
        case 'photos':
          vaArr = photos;
          break;
        case 'designs':
          vaArr = designs;
          break;
      }

      vaArr.forEach( v => {
        let newLI = createEl("li");
        newSlide = createVASlide(v, vp);
        newLI.appendChild(newSlide);
        newLI.classList.add('visual-ui-item');
        visualList.appendChild(newLI);
      });
  }
}

function createVASlide(va, theCase) {
  let imgSlide = createEl("div");
  let theImg = createEl("img");
  let srcAttribute = '';
  let theTitle, titleText;

  imgSlide.classList.add('visual-ui-img-wrapper');
  theImg.classList.add('visual-ui-img');

  if (theCase == 'photos') {
    imgSlide.setAttribute('onclick', 'photoModal("' + va.collection + '", photos)')
    srcAttribute = 'img/photos/' + va.collection + '/' + va.images[0] + '.jpg';
    titleText = document.createTextNode(va.collection.toUpperCase());
    theTitle = createEl("p");
    theTitle.classList.add('photo-img-title');
  } else {
    srcAttribute = 'img/designs/' + va;
    theImg.classList.add('design-img');
  }

  theImg.setAttribute('src', srcAttribute);
  imgSlide.appendChild(theImg);
  if (theTitle) {
    theTitle.appendChild(titleText);
    imgSlide.appendChild(theTitle);
  }
  return imgSlide;
}

var ball = document.getElementsByClassName('dot')[0];
var ballSmall = '20px';
var ballBig = '100px';

let mouseX = window.innerWidth/2;
let mouseY = window.innerHeight/2;
let ballX = window.innerWidth/2;
let ballY = window.innerHeight/2;

let speed = 0.06;

function animate() {
  let distX = mouseX - ballX;
  let distY = mouseY - ballY;

  ballX = ballX + (distX * speed);
  ballY = ballY + (distY * speed);
  ball.style.left = ballX + "px";
  ball.style.top = ballY + "px";

  requestAnimationFrame(animate);
}

function handleMouseMove(event) {
  mouseX = event.pageX;
  mouseY = event.pageY;
}

document.addEventListener('mousemove', handleMouseMove);
var called = 1;
function photoModal(category, phos) {
  ball.style.display = 'none';
  var theClose = document.getElementById('close');
  theClose.addEventListener('mouseover', () => {
    ball.style.opacity = '0';
    var hideIt = setTimeout(500, () => {
      ball.style.display = 'none';
    });
    clearTimeout(hideIt);
  });

  theClose.addEventListener('mouseout', () => {
    ball.style.display = 'none';
    var showIt = setTimeout(500, () => {
      ball.style.opacity = '1';
    });
    clearTimeout(showIt);
  });
  if (called == 0) {
    called++;
  }
  let modal = document.getElementById('modal');
  let modalInner = document.getElementById('modal-inner');
  let modalTitle = createEl("h3");
  let filmRoll = createEl("div");
  let upperCat = category.toUpperCase();
  let titleText = document.createTextNode(upperCat);

  modalTitle.classList.add('modal-title');
  filmRoll.classList.add('modal-film-roll');
  filmSlide3(filmRoll);

  modalTitle.appendChild(titleText);
  modalInner.appendChild(modalTitle);
  modalInner.appendChild(filmRoll);

  for (let i = 0; i < phos.length; i++) {
    if (category == phos[i].collection) {
      for (let j = 0; j < phos[i].images.length; j++) {
        let newImgSlide = createImgSlide(category, phos[i].images[j], j);
        filmRoll.appendChild(newImgSlide);
      }
    }
  }

  let imgSlides = gebcn('img-slide');
  for (let z = 0; z < imgSlides.length; z++) {
    imgSlides[z].style.display = 'none';
  }

  imgSlides[0].style.display = 'block';

  let kanjiSlideNum = gebcn('kanji-slide-num')[0];
  kanjiSlideNum.dataset.slidenum = 0;

  modal.style.overflowY = 'scroll';
  modal.style.display = 'block';
  modal.style.animation = 'openUp 1s 0s 1 normal forwards';
}

function addFilmSlide(el) {
  let isDown = false;
  let prevX;

  document.addEventListener('mousedown', event => {
    isDown = true;
    prevX = event.clientX;

    document.addEventListener('mousemove', event => {
      event.preventDefault();

      let newX = event.clientX - prevX;
      const elRect = el.getBoundingClientRect();
      console.log(typeof(parseInt(elRect.left)));

      if (isDown) {
        el.style.left = elRect.left - newX + 'px';  //WORKS
        //el.style.transform = 'translateX(' + elRect.left - newX + 'px)';
        //console.log(getFilmTransform());

        /*
        mX1 = event.pageX;
        el.style.transform = 'translateX(' + mX1 + 'px)';
        console.log(
          event.movementX,
          mX1
        );*/
      }
    });

    document.addEventListener('mouseup', event => {
      isDown = false;
    });
  });
}

function addFilmSlide1(el) {
  let isDown = false;
  let prevX;

  document.addEventListener('mousedown', event => {
    isDown = true;
    prevX = event.clientX;

    document.addEventListener('mousemove', event => {
      event.preventDefault();

      if (isDown) {
        let newX = event.clientX - prevX;
        el.style.transform = 'translateX(' + newX + 'px)';
      }
    });

    document.addEventListener('mouseup', event => {
      isDown = false;
    });
  });
}

// no worky! >:(
function filmSlide2(el) {
  let isDown = false;
  let startX;
  let scrollLeft;

  el.addEventListener('mousedown', (e) => {
    isDown = true;
    el.classList.add('active');
    startX = e.pageX - el.offsetLeft;
    scrollLeft = el.scrollLeft;
  });

  el.addEventListener('mouseleave', (e) => {
    isDown = false;
    el.classList.remove('active');
  });

  el.addEventListener('mouseup', (e) => {
    isDown = false;
    el.classList.remove('active');
  });

  el.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - el.offsetLeft;
    const walk = x - startX;
    el.scrollLeft = scrollLeft - walk;
  });
}

function filmSlide3(el) {
  el.addEventListener('mousedown', mousedown);

  function mousedown(e) {
    window.addEventListener('mousemove', mousemove);
    window.addEventListener('mouseup', mouseup);

    let prevX = e.clientX;

    function mousemove(e) {
      let newX = e.prevX - e.clientX;

      const rect = el.getBoundingClientRect();

      el.style.left = rect.left - newX + "px";

      prevX = e.clientX;
    }

    function mouseup() {
      window.removeEventListener('mousemove', mousemove);
      window.removeEventListener('mouseup', mouseup);
    }
  }
}

function getFilmTransform() {
  let film = doc.gebcn('modal-film-roll')[0];
  let valueString = doc.gsv(film, 'transform');
  let styleType = typeof(doc.gsv(film, 'transform'));
  let transformValue = valueString.replace('master(', '');
  console.log(valueString, transformValue);
}

function createImgSlide(c, i, j) {
  let imgSlide = createEl("div");
  let theImg = createEl("img");
  theImg.setAttribute("src", "img/photos/" + c + "/" + i + ".jpg");
  theImg.classList.add('modal-img');
  imgSlide.classList.add('img-slide');
  imgSlide.appendChild(theImg);
  return imgSlide;
}

function slideCaro(direction) {
  let testSlides = gebcn('img-slide');
  let testSlideLen = testSlides.length;
  let kanjiSlideNum = gebcn('kanji-slide-num')[0];

  if (direction == 'next' && kanjiSlideNum.dataset.slidenum != testSlideLen - 1) {
    kanjiSlideNum.dataset.slidenum++;
  } else if (direction == 'prev' && kanjiSlideNum.dataset.slidenum != 0) {
      kanjiSlideNum.dataset.slidenum--;
  }
  let slideNum = kanjiSlideNum.dataset.slidenum;
  kanjiSlideNum.innerHTML = slideNum;

  for (let j = 0; j < testSlides.length; j++) {
    testSlides[j].style.display = 'none';
    testSlides[slideNum].style.display = 'block';
    testSlides[slideNum].style.animation = 'nsar 1s ease 0s forwards';
  }
}

function closeModal() {
  let modal = document.getElementById('modal');
  let modalInner = document.getElementById('modal-inner');
  clear(modalInner);
  modal.style.display = 'none';
  modal.style.animation = null;
  ball.style.display = 'none';
}

function homeLoadFunctions() {
  // checkViewport();
  // fadeShowWhatsNew()
  let abtCnt = gebi('about-content');
  fadeHide(abtCnt);
  // window.addEventListener('resize', checkViewport);
}

window.onload = homeLoadFunctions();
