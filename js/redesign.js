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
  switch (yn) {
    case 'yes':
      nav.style.background = 'linear-gradient(180deg, rgba(139, 161, 198, 1) 50%, rgba(159, 179, 200, 0))';
      break;
    case 'no':
      nav.style.background = 'linear-gradient(180deg, rgba(250, 250, 250, 1) 50%, rgba(250, 250, 250, 0))';
      break;
  }
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

function fadeHide(el) {
  let i = 0;
  let id = setInterval(frame, 500);
  el.style.opacity = '0';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      el.style.display = 'none';
    }
  }
}

function fadeHide2(el1, el2) {
  let i = 0;
  let id = setInterval(frame, 500);
  el1.style.opacity = '0';
  el2.style.opacity = '0';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      el1.style.display = 'none';
      el2.style.display = 'none';
    }
  }
}

function fadeShow(el) {
  let i = 0;
  let id = setInterval(frame, 500);
  function frame() {
    i++;
    if (i == 1) {
      el.style.display = 'block';
    } else if (i == 2) {
        clearInterval(id);
        el.style.opacity = '1';
    }
  }
}

function fadeShowWhatsNew() {
  let whatsNew = gebi('whats-new-wrapper');
  fadeShow(whatsNew);
}

function whatsNewTab(wn) {
  let newAddress = '';
  switch (wn) {
    case 'niheigo':
      newAddress = 'https://niheigo.herokuapp.com';
      break;
    case 'tochigi':
      newAddress = 'https://www.instagram.com/p/B0NTGdAH53C/';
      break;
    case 'photaero':
      newAddress = 'https://www.instagram.com/photaero/';
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

  /*if (desProj.style.display == 'block') {
    let topicContents = document.getElementsByClassName('topic-content');
    for (let i = 0; i < topicContents.length; i++) {
      topicContents[i].style.opacity = '0';
      topicContents[i].style.display = 'none';
    }
  } else*/

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
  /*let softVisProps = [
    ['opacity', ''],
    ['color', ''],
    ['background', ''],

  ]*/
  switch (tog) {
    case 0:
      homeImg.style.opacity = '0';
      navbar.style.color = '#353535';
      for (var hl = 0; hl < hoverLines.length; hl++) {
        hoverLines[hl].style.background = '#353535';
      }

      break;
    case 1:
      homeImg.style.opacity = '1';
      homeImg.style.filter = 'blur(10px) brightness(0.95)';
      homeImg.style.transform = 'scale(1.05)';
      navbar.style.color = 'white';
      for (var hl = 0; hl < hoverLines.length; hl++) {
        hoverLines[hl].style.background = 'white';
      }

      break;
    case 2:
      homeImg.style.opacity = '1';
      homeImg.style.filter = null;
      homeImg.style.transform = null;
      navbar.style.color = 'white';
      for (var hl = 0; hl < hoverLines.length; hl++) {
        hoverLines[hl].style.background = 'white';
      }

      break;
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
      addProjectList('web');
      fillProject("web", 0);
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

  let bars = gebcn('bars');
  if (window.innerWidth <= 675) {
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
function projectListItem(ti) {
  this.newLI = createEl("li");
  this.titleH = createEl("h3");
  this.titleT = textNode(ti);
}

function addProjectList(p) {
  let softwareList = gebcn('software-list')[0];
  let softwareImg = gebcn('software-img')[0];
  clear(softwareList);

  let itemLI, itemH, itemTitle;
  let attrArr = [
    [itemLI, 'newLI'],
    [itemH, 'titleH'],
    [itemTitle, 'titleT']
  ];
  console.log(p);

  // option tab number
  let optNum;
  let projArr;
  switch (p) {
    case 'web':
      projArr = websiteProjects;
      optNum = 0;
      break;
    case 'js':
      projArr = jsProjects;
      optNum = 1;
      break;
    case 'py':
      projArr = pyProjects;
      optNum = 2;
      break;
    case 'cpp':
      projArr = cppProjects;
      optNum = 3;
      break;
  }

  let opt = gebcn('options-wrapper');
  for (var x = 0; x < opt.length; x++) {
    opt[x].style.boxShadow = '';
  }
  opt[optNum].style.boxShadow = 'inset 0px 0px 16px 4px #ffffff';

  for (var z = 0; z < projArr.length; z++) {
    let newItem = new projectListItem(projArr[z][0]);
    for (var y = 0; y < attrArr.length; y++) {
      attrArr[y][0] = newItem[attrArr[y][1]];
      //console.log(attrArr[y][0]);
    }

    attrArr[0][0].classList.add('software-list-item');
    attrArr[0][0].setAttribute('onclick', 'fillProject("' + p + '", ' + z + ')');
    attrArr[1][0].classList.add('list-item-title');

    attrArr[1][0].appendChild(attrArr[2][0]);
    attrArr[0][0].appendChild(attrArr[1][0]);
    softwareList.appendChild(attrArr[0][0]);
  }

  softwareImg.src = projArr[0][2];
  //console.log(p[0]);
}

function fillProject(p, projN) {
  let softwareImg = gebcn('software-img')[0];
  let softViewLink = gebcn('software-view-link')[0];
  let softwareText = gebcn('software-project-text')[0];
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
  softwareImg.src = newImgSrc;
  softViewLink.setAttribute('href', newSoftwareLink);
  softwareText.innerHTML = projArr[projN][1];

  console.log(softwareImg.src, softViewLink.href);
}

/* va js */
function addVisualProjectList(vp) {
  let visualList = gebcn('visual-list')[0];
  clear(visualList);
  let vaArr;
  let newSlide;

  switch (vp) {
    case 'photos':
      for (var n = 0; n < photos.length; n++) {
        let newLI = createEl("li");
        newSlide = createPhotoSlide(photos[n].collection, photos[n].images[0]);
        newLI.appendChild(newSlide);
        newLI.classList.add('visual-ui-item');
        visualList.appendChild(newLI);
      }
      break;
    case 'designs':
    for (var n = 0; n < designs.length; n++) {
      let newLI = createEl("li");
      newSlide = createDesignSlide(designs[n]);
      newLI.appendChild(newSlide);
      newLI.classList.add('visual-ui-item');
      visualList.appendChild(newLI);
    }
      break;
    case 'videos':
      for (var n = 0; n < videos.length; n++) {
        let newLI = createEl("li");
        newSlide = createVideoSlide(videos[n]);
        newLI.appendChild(newSlide);
        newLI.classList.add('visual-ui-item');
        visualList.appendChild(newLI);
      }
      clear(visualList);
      visualList.innerHTML = '<iframe class="vid-iframe" width="560" height="315" src="https://www.youtube.com/embed/78gaqQMWiOI" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';
      visualList.innerHTML += '<iframe class="vid-iframe" width="560" height="315" src="https://www.youtube.com/embed/CEJ846oOJhs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>';

      break;
  }
}

function createPhotoSlide(c, i) {
  let imgSlide = createEl("div");
  let theImg = createEl("img");
  theImg.setAttribute("src", "img/photos/" + c + "/" + i + ".jpg");

  imgSlide.classList.add('visual-ui-img-wrapper');
  theImg.classList.add('visual-ui-img');
  // add clickable modal
  imgSlide.setAttribute('onclick', 'photoModal("' + c + '", photos)');
  imgSlide.appendChild(theImg);
  return imgSlide;
}

function createDesignSlide(i) {
  let imgSlide = createEl("div");
  let theImg = createEl("img");
  theImg.setAttribute("src", "img/designs/" + i);

  imgSlide.classList.add('visual-ui-img-wrapper');
  theImg.classList.add('visual-ui-img');
  theImg.classList.add('design-img');
  // add clickable modal
  // imgSlide.setAttribute('onclick', 'photoModal("' + c + '", photos)');
  imgSlide.appendChild(theImg);
  return imgSlide;
}

function createVideoSlide(i) {
  let imgSlide = createEl("div");
  let theImg = createEl("img");
  theImg.setAttribute("src", "img/videos/" + i);

  imgSlide.classList.add('visual-ui-img-wrapper');
  theImg.classList.add('visual-ui-img');
  // add clickable modal
  // imgSlide.setAttribute('onclick', 'photoModal("' + c + '", photos)');
  imgSlide.appendChild(theImg);
  return imgSlide;
}

function photoModal(category, phos) {
  let modal = document.getElementById('modal');
  let modalInner = document.getElementById('modal-inner');

  for (let i = 0; i < phos.length; i++) {
    if (category == phos[i].collection) {
      for (let j = 0; j < phos[i].images.length; j++) {
        let newImgSlide = createImgSlide(category, phos[i].images[j]);
        modalInner.appendChild(newImgSlide);
      }
    }
  }

  let imgSlides = gebcn('img-slide');
  for (let z = 0; z < imgSlides.length; z++) {
    imgSlides[z].style.display = 'none';
  }

  let kanjiSlideNum = gebcn('kanji-slide-num')[0];
  kanjiSlideNum.dataset.slidenum = 0;

  imgSlides[0].style.display = 'block';

  modal.style.overflowY = 'scroll';
  modal.style.display = 'block';
  modal.style.animation = 'openUp 1s 0s 1 normal forwards';
}

function createImgSlide(c, i) {
  let imgSlide = createEl("div");
  let theImg = createEl("img");
  theImg.setAttribute("src", "img/photos/" + c + "/" + i + ".jpg");

  imgSlide.classList.add('img-slide');
  theImg.classList.add('modal-img');

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
    testSlides[slideNum - 1].style.animation = 'psah 1s ease 0s forwards';

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
}

function homeLoadFunctions() {
  checkViewport();
  fadeShowWhatsNew()
  let abtCnt = gebi('about-content');
  fadeHide(abtCnt);
  window.addEventListener('resize', checkViewport);
}

window.onload = homeLoadFunctions();

let websiteProjects = [
  [
    'Niheigo',
    'Kanji learning application.',
    'img/covers/niheigo temp logo.png',
    'https://crealu.github.io/niheigo/'
  ],
  [
    'Uniqtable',
    'A website for a travel industry startup in Japan.',
    'img/covers/uniqtable-site.png',
    'http://uniqtable.xsrv.jp/wp/'
  ],
  [
    'Photaero',
    'Photography services company website.',
    'img/covers/photaero-site.png',
    'https://crealu.github.io/photaero/'
  ],
  [
    'Holistic Pracitioner',
    "Custom built website for a holisitic practitioner's growing business.",
    'img/covers/marissasite.jpg',
    'https://crealu.github.io/marissasite/'
  ],
  [
    'Perios World',
    'Website for an educational video game that teaches kids chemistry.',
    'img/covers/periossite.jpg',
    'http://www.periosworld.com/'
  ],
  [
    'Moosiko',
    'Moosiko company website built on top of WordPress.',
    'img/covers/moosiko-site-img.jpg',
    'https://www.moosiko.com/'
  ],
  [
    'Quinn Tu Portfolio',
    'A portfolio website for lifestyle influencer, Quinn Tu.',
    'img/covers/quinnsite.jpg',
    'https://crealu.github.io/quinntu/'
  ],
  [
    'Robert Miller Portfolio',
    'Porfolio for painter Robert E. Miller.',
    'img/covers/rainy-day.png',
    'REM Site/remHome.html'
  ]
];

let jsProjects = [
  [
    'React Drum Machine',
    'A drum machine with pads that responds to key press events',
    'img/softimg/drummachine.jpg',
    'https://codepen.io/lucidcode6/full/eQygOP',
    'https://codepen.io/lucidcode6/pen/eQygOP?editors=0010'
  ],
  [
    'Wikipedia Article Viewer',
    'An app that uses the Wikipedia API to display article results of what the user searches',
    'img/softimg/wikiviewer.jpg',
    'https://codepen.io/lucidcode6/full/aEgMjq',
    'https://codepen.io/lucidcode6/pen/aEgMjq'
  ],
  [
    'Fontify',
    'Hand drawn fonts edited with Adobe Illustrator. Generator algorithm coded in JavaScript',
    'img/softimg/fontify.jpg',
    'fontify.html',
    'https://github.com/crealu'
  ],
  [
    'JavaScript Calculator',
    "Basic calculator created using JavaScript's built in math funcitons",
    'img/softimg/calculator.jpg',
    'https://codepen.io/lucidcode6/full/EoJzKg',
    'https://codepen.io/lucidcode6/pen/EoJzKg'
  ],
  [
    'Pomodoro Clock',
    'Clock for hepling to break down productivity into segments of time',
    'img/softimg/pomodoro.jpg',
    'https://codepen.io/lucidcode6/full/mXdZZK',
    'https://codepen.io/lucidcode6/pen/mXdZZK'
  ],
  [
    'Random Quote Machine',
    'Random quote generator form JavaScript object',
    'img/softimg/quoteMachine.jpg',
    'https://codepen.io/lucidcode6/full/ppOoYR',
    'https://codepen.io/lucidcode6/pen/ppOoYR'
  ],
  [
    'Tic Tac Toe',
    'Tic tac toe game built with vanilla JavaScript',
    'img/softimg/xando.jpg',
    'https://codepen.io/lucidcode6/full/yvvZej',
    'https://codepen.io/lucidcode6/pen/yvvZej'
  ]
];

let pyProjects = [
  [
    'Sandal Prices Web Scrape',
    "A web scrape for the title and price of Sanuk's sandals. Saves data into a csv file",
    'img/softimg/sidewalkSuferspy.jpg',
    'https://repl.it/@crealu/Sidewalk-Surfers-Scrape',
    'https://repl.it/@crealu/Sidewalk-Surfers-Scrape'
  ],
  [
    'Object Oriented Basics',
    'A program that creates an employee using object-oriented methods',
    'img/softimg/employeepy.jpg',
    'https://repl.it/@crealu/Employee-Class',
    'https://repl.it/@crealu/Employee-Class'
  ],
  [
    'Find Longest Algorithm',
    'A small function that finds the longest word in a string',
    'img/softimg/findlongest.png',
    'https://github.com/crealu/pysamples/blob/master/findLongest.py',
    'https://github.com/crealu/pysamples/blob/master/findLongest.py'
  ],
  [
    'Linear Regression',
    'Data analytics walkthrough with numpy, sklearn and matplotlib',
    'img/softimg/linearreg.png',
    'https://github.com/crealu/pysamples/blob/master/linearRegression.py',
    'https://github.com/crealu/pysamples/blob/master/linearRegression.py'
  ],
  [
    'Writing a JavaScript File',
    'A python program that writes to a .js program',
    'img/softimg/pywritejs.png',
    'https://github.com/crealu/pysamples/blob/master/writeJS.py',
    'https://github.com/crealu/pysamples/blob/master/writeJS.py'
  ],
  [
    'Filter Excel Data',
    'Using the xlrd and xlwt modules for filtering excel data',
    'img/softimg/filterexcel.png',
    'https://github.com/crealu/pysamples/blob/master/readSources.py',
    'https://github.com/crealu/pysamples/blob/master/readSources.py'
  ]
];

let cppProjects = [
  [
    'Shape Drawing',
    'A program allowing users to input dimensions of a shape and have it drawn to size',
    'img/softimg/shapecpp.jpg',
    'https://repl.it/@crealu/Draw-Shape',
    'https://repl.it/@crealu/Draw-Shape'
  ],
  [
    'Windows GUI',
    'A desktop application for opening, editing, and saving built using the windows API.',
    'img/softimg/windowsGUI.png',
    'https://github.com/crealu/cppsamples/blob/master/gui9.cpp',
    'https://github.com/crealu/cppsamples/blob/master/gui9.cpp'
  ],
  [
    'Function Pointers',
    'Declaring and using function pointers.',
    'img/softimg/functionpointers.png',
    'https://github.com/crealu/cppsamples/blob/master/functionPointer.cpp',
    'https://github.com/crealu/cppsamples/blob/master/functionPointer.cpp'
  ],
  [
    'Abstract Data Types',
    'Creating a linked list with abstract data types',
    'img/softimg/linkedlist.png',
    'https://github.com/crealu/cppsamples/blob/master/linkedList.cpp',
    'https://github.com/crealu/cppsamples/blob/master/linkedList.cpp'
  ],
  [
    'Derived Classes',
    'Calling constructors and destructors for objects belonging to derived classes',
    'img/softimg/derivedclasses.png',
    'https://github.com/crealu/cppsamples/blob/master/mammal3.cpp',
    'https://github.com/crealu/cppsamples/blob/master/mammal3.cpp'
  ],
  [
    'Virtual Functions',
    'Calling a virtual funciton on an array of pointers to respective subclasses',
    'img/softimg/virtualfunctions.png',
    'https://github.com/crealu/cppsamples/blob/master/mammal9.cpp',
    'https://github.com/crealu/cppsamples/blob/master/mammal9.cpp'
  ],
  [
    'Pointer Swap',
    'Passing pointers as parameters to manipulate their original value',
    'img/softimg/pointerswap.png',
    'https://github.com/crealu/cppsamples/blob/master/pointerSwap.cpp',
    'https://github.com/crealu/cppsamples/blob/master/pointerSwap.cpp'
  ],
  [
    'Temperature Conversion',
    'Calling a virtual funciton on an array of pointers to respective subclasses',
    'img/softimg/tempconverter.png',
    'https://github.com/crealu/cppsamples/blob/master/temperature2.c',
    'https://github.com/crealu/cppsamples/blob/master/temperature2.c'
  ]
];

let photos = [
  {
    collection: 'aerial',
    images: [
      'casino',
      'cathedral',
      'furusato real',
      'furusato windmill',
      'latourell falls',
      'marin headlands',
      'maroon bells',
      'nara 2',
      'nara park back',
      'rainierbow',
      'santa cruz',
      'tp sunset',
      'twopaths',
      'whole pier'
    ]
  },
  {
    collection: 'long exposure',
    images: [
      'bs light',
      'meguro aerial',
      'meguro spark',
      'ocha n 2',
      'ochanomizu gate',
      'ochanomizu ground',
      'odaiba 2',
      'rainbowbashi 2',
      'rville falls',
      'rville falls 2',
      'yoyogi longexp2'
    ]
  },
  {
    collection: 'moon',
    images: [
      'berkeley',
      'clouds',
      'ireland',
      'venice'
    ]
  },
  {
    collection: 'pattern',
    images: [
      'bs red shrubs',
      'calm water',
      'dirt',
      'foliage speckles',
      'foliage',
      'glass',
      'grass',
      'rainbow'
    ]
  },
  {
    collection: 'travel',
    images: [
      'balinese serenade',
      'blue eyed bird',
      'chichibu gates',
      'cordillera cow',
      'deermeme',
      'lopez foliage',
      'meguro lanterns',
      'sakura and river',
      'sea iguana',
      'snowy shadows',
      'starboard',
      'sun portal',
      'sun surfer',
      'temple sakura',
      'webside relaxing'
    ]
  }
];

let designs = [
  'blackFace.svg',
  'dodec.svg',
  'faces.svg',
  'pacha1.svg',
  'sacral.svg',
  'sahasrara.jpg',
  'mf logo.jpg'
];

let videos = [
  ''
];

/* mobile screen sizes
large tablets around 1000px
medium tablets around 767px
smart phones around 479px

greatest height for iphones is 896px so lets rounnd to 900px

 */
