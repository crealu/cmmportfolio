// redesign.js
function checkViewport() {
  let w = window;
  let wWidth = w.innerWidth;
  let wHeight = w.innerHeight;

  //console.log(wWidth, wHeight);
  resizeHomeImg(wWidth, wHeight);
}

function resizeHomeImg(wW, wH) {
  let homeImg = gebcn('home-img')[0];
  let desktopView = gebcn('desktop-view')[0];

  if (wW >= 1400) {
    homeImg.style.width = wW.toString() + 'px';;
  }

  if (wH >= 766) {
    homeImg.style.height = wH.toString() + 'px';
  } else if (wH < 760 && wW > 700) {
    console.log(wH, wH - 550);
    desktopView.style.top = (wH - 550).toString() + 'px';
  }

  if (900 < wW <= 1400 && wH >= 600) {
    homeImg.style.transform = 'translateX(-' + (1400 - wW) + 'px)';
  }

  if (wW <= '800') {
    homeImg.style.transform = 'translateX(-' + (1090 - wW) + 'px)';
  }

  //console.log(homeImg);
}

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

  if (homeImg.style.opacity == '0') {
    for (var q = 0; q < bars.length; q++) {
      bars[q].style.background = '#353535';
    }
  }
}

function whatsNewTab(wn) {
  let newAddress = '';
  switch (wn) {
    case 'niheigo':
      newAddress = 'https://niheigo.herokuapp.com';
      break;
    case 'mernboiler':
      newAddress = 'https://github.com/crealu/mernboiler';
      break;
    case 'phocam':
      newAddress = 'https://crealu.github.io/phocam/';
      break;
  }
  window.open(newAddress, '_blank');
}

function displayProjects(div) {
  let contentArray = [
    'about-content',
    'software-projects',
    'design-projects'
  ];

  let desProj = gebi('design-projects');

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
  let whatsNew = gebi('whats-new-wrapper');
  fadeHide(whatsNew);

  switch (topic) {
    case 'About':
      toggleSoftVis(2);
      displayProjects('about-content');
      break;
    case 'Software':
      toggleSoftVis(1);
      displayProjects('software-projects');
      addProjectList('js');
      fillProject("js", 0);
      let option1 = gebcn('options-wrapper')[0];
      //option1.style.background = 'rgba(250, 250, 250, 0.4)';
      option1.style.boxShadow = 'inset 0px 0px 16px 4px #ffffff';
      break;
    case 'Visual Arts':
      toggleSoftVis(0);
      displayProjects('design-projects');
      addVisualProjectList('photos');
      break;
  }

  window.history.pushState('', topic, topic);

  let bars = gebcn('bars');
  if (window.innerWidth <= 800) {
    mobileMenu();
    checkViewport();
    if (topic == 'About' || topic == 'Software') {
      toggleNavBackground('yes');
    } else if (topic == 'Visual Arts') {
        toggleNavBackground('no');
        for (var z = 0; z < bars.length; z++) {
          bars[z].style.background = '#353535';
        }
        console.log('switch to vis');
    }
  }
}

/* soft js */
function projectListItem(ti, projectDescription) {
  this.newLI = createEl("li");
  this.titleH = createEl("h3");
  this.titleT = textNode(ti);
  this.descP = createEl("p");
  this.descT = textNode(projectDescription);
}

function addProjectList(p) {
  let softwareList = gebcn('software-list')[0];
  let softwareImg = gebcn('software-img')[0];
  clear(softwareList);

  let itemLI, itemH, itemTitle, itemP, itemDesc;
  let attrArr = [
    [itemLI, 'newLI'],
    [itemH, 'titleH'],
    [itemTitle, 'titleT'],
    [itemP, 'descP'],
    [itemDesc, 'descT']
  ];
  console.log(p);

  // option tab number
  let optNum;
  let projArr;
  switch (p) {
    case 'js':
      projArr = jsProjects;
      optNum = 0;
      break;
    case 'py':
      projArr = pyProjects;
      optNum = 1;
      break;
    case 'cpp':
      projArr = cppProjects;
      optNum = 2;
      break;
    case 'web':
      projArr = websiteProjects;
      optNum = 1;
      break;
  }

  let opt = gebcn('options-wrapper');
  for (var x = 0; x < opt.length; x++) {
    opt[x].style.boxShadow = '';
  }
  opt[optNum].style.boxShadow = 'inset 0px 0px 16px 4px #ffffff';

  for (var z = 0; z < projArr.length; z++) {
    let newItem = new projectListItem(projArr[z][0], projArr[z][1]);
    for (var y = 0; y < attrArr.length; y++) {
      attrArr[y][0] = newItem[attrArr[y][1]];
    }

    attrArr[1][0].classList.add('list-item-title');
    attrArr[1][0].appendChild(attrArr[2][0]);

    attrArr[0][0].classList.add('software-list-item');
    attrArr[0][0].appendChild(attrArr[1][0]);


    if (window.innerWidth <= 800) {
      attrArr[3][0].classList.add('list-item-description');
      attrArr[3][0].appendChild(attrArr[4][0]);
      attrArr[0][0].appendChild(attrArr[3][0]);
      attrArr[0][0].setAttribute('onclick', 'window.open("' + projArr[z][3] + '", "_blank")');
    } else {
      attrArr[0][0].setAttribute('onmouseover', 'fillProject("' + p + '", ' + z + ')');
    }

    softwareList.appendChild(attrArr[0][0]);
  }
}

function fillProject(p, projN) {
  let softwareImg = gebcn('software-img')[0];
  let softViewLink = gebcn('software-view-link')[0];
  let softwareText = gebcn('software-project-text')[0];
  let softwareTitle = gebcn('software-project-title')[0];
  let projArr;

  switch (p) {
    case 'web':
      projArr = websiteProjects;
      break;
    case 'js':
      projArr = jsProjects;
      break;
    case 'py':
      projArr = pyProjects;
      break;
    case 'cpp':
      projArr = cppProjects;
      break;
  }
  let newImgSrc = projArr[projN][2];
  console.log(projArr);

  let newSoftwareLink = projArr[projN][3];
  //softwareImg.src = newImgSrc;
  softViewLink.setAttribute('href', newSoftwareLink);
  softwareTitle.innerHTML = projArr[projN][0];
  softwareText.innerHTML = projArr[projN][1];

  console.log(softViewLink.href);
}

/* va js */
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
  //checkBounds();
}

document.addEventListener('mousemove', handleMouseMove);
var called = 0;
function photoModal(category, phos) {
  ball.style.display = 'block';
  var theClose = document.getElementById('close');
  theClose.addEventListener('mouseover', () => {
    ball.style.opacity = '0';
    var hideIt = setTimeout(500, () => {
      ball.style.display = 'none';
    });
    clearTimeout(hideIt);
    console.log('over close');
  });

  theClose.addEventListener('mouseout', () => {
    ball.style.display = 'block';
    var showIt = setTimeout(500, () => {
      ball.style.opacity = '1';
    });
    clearTimeout(showIt);
    console.log('left close');
  });
  if (called == 0) {
    animate();
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

  //addFilmSlide(filmRoll);
  //addFilmSlide1(filmRoll);
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
  //imgSlide.setAttribute('onmousedown', "slideImg(" + j + ")");
  imgSlide.appendChild(theImg);
  return imgSlide;
}

function slideCaro(direction) {
  let testSlides = gebcn('img-slide');
  let testSlideLen = testSlides.length;
  let kanjiSlideNum = gebcn('kanji-slide-num')[0];
  //let testHere = document.getElementById('gets-test');

  if (direction == 'next' && kanjiSlideNum.dataset.slidenum != testSlideLen - 1) {
    kanjiSlideNum.dataset.slidenum++;
  } else if (direction == 'prev' && kanjiSlideNum.dataset.slidenum != 0) {
      kanjiSlideNum.dataset.slidenum--;
  }
  let slideNum = kanjiSlideNum.dataset.slidenum;
  kanjiSlideNum.innerHTML = slideNum;

  for (let j = 0; j < testSlides.length; j++) {
    testSlides[j].style.display = 'none';
    //testSlides[j].style.animation = 'psah 1s ease 0s forwards';

    // need to separate the previous slide anmiation to come before slideCaro('next') is called
    //testSlides[slideNum - 1].style.animation = 'psah 1s ease 0s forwards';

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
  checkViewport();
  fadeShowWhatsNew()
  let abtCnt = gebi('about-content');
  fadeHide(abtCnt);
  window.addEventListener('resize', checkViewport);
}

window.onload = homeLoadFunctions();

/* mobile screen sizes
large tablets around 1000px
medium tablets around 767px
smart phones around 479px

greatest height for iphones is 896px so lets rounnd to 900px

 */
