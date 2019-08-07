
// toggles menu for mobile
function toggleNavList() {
  let navList = document.getElementById('nav-list-container-mobile');
  let body = document.body;
  if (!(navList.style.left === '10%')) {
    navList.style.left = '10%';
    navList.style.opacity = '1';
    navList.style.width = '90%';
    //body.style.opacity = '0.5'
  } else {
      navList.style.left = '100%';
      navList.style.opacity = '0';
      navList.style.width = '90%';
      ///body.style.opacity = '1';
  }
}

function mobileMenu() {
  let mobileNav = gebcn('mobile-nav-modal')[0];
  if (!(mobileNav.style.display == 'block')) {
    mobileNav.style.display = 'block';
  } else {
      mobileNav.style.display = 'none';
  }
}

// clears the children of any div
function clearDiv(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

// fade current title out
function fadeTitleOut() {
  if (document.getElementsByClassName('active-content')[0]) {
    let activeC = document.getElementsByClassName('active-content')[0];
    activeC.style.opacity = '0';
    activeC.classList.remove("active-content");
  }
}

// changes title
function changeTitle(title, titleH) {
  let newTitle = document.createTextNode(title);
  titleH.appendChild(newTitle);
}

// displays the selected topic content and hides all the rest
function displayProject(div) {
  let topicContents = document.getElementsByClassName('topic-content');
  for (let i = 0; i < topicContents.length; i++) {
    topicContents[i].style.opacity = '0';
    topicContents[i].style.display = 'none';
  }

  let contentToDisplay = document.getElementById(div);
  contentToDisplay.style.display = 'block';
  contentToDisplay.style.opacity = '1';
}

function displayProjectNew(projName) {
  let proj = projName;
  for (var i = 0; i < websiteProjects.length; i++) {
    websiteProjects[i].display = 'none';
  }

  websiteProjects[projName].style.display = 'block';
}

function deColor() {
  let homeImg = gebcn('home-img')[0];
  //homeImg.style.filter = 'brightness(0.85) grayscale(0.75)';
  homeImg.style.filter = 'brightness(0.65)';

}

function displayContent(topic) {
  let sth = document.getElementById('section-title-here');
  sth.style.opacity = '0';
  fadeTitleOut();
  var i = 1;
  let id = setInterval(frame, 1000);
  function frame() {
    i--;
    if (i == 0) {
      clearInterval(id);
      clearDiv(sth);

      let titleH2 = document.createElement("h2");
      titleH2.setAttribute("class", "section-title");

      let titleDiv = document.createElement("div");
      titleDiv.setAttribute("id", "section-title-wrapper");

      titleDiv.appendChild(titleH2);
      sth.appendChild(titleH2);

      switch (topic) {
        case 'About':
          toggleNavList();
          //changeTitle('About', titleH2);
          displayProject('about-content');
          deColor();
          break;
        case 'Software':
          toggleNavList();
          //changeTitle('Software', titleH2);
          displayProject('website-projects');
          addProjectList('web');
          //createList('s');
          let option1 = gebcn('options-wrapper')[0];
          //option1.style.background = 'rgba(250, 250, 250, 0.4)';
          option1.style.boxShadow = 'inset 0px 0px 16px 4px #ffffff';
          deColor();
          break;
        case 'Visual Arts':
          toggleNavList();
          //changeTitle('Visual Arts', titleH2);
          displayProject('design-projects');
          //createList('va');
          addVisualProjectList();
          deColor();
          break;
        case 'Mechanical':
          toggleNavList();
          //changeTitle('Mechanical', titleH2);
          displayProject('mechanical-content');
        break;
      }
      sth.style.opacity = '1';
    }
    //document.getElementById('portfolio-footer').style.display = 'block';
  }
}

let websiteProjects = [
  [
    'Photaero',
    'Photography services company website.',
    'img/covers/photaero-site.png',
    'https://crealu.github.io/photaero/'
  ],
  [
    'Urushitei',
    'Japanese Ryokan in Kyoto, Japan.',
    'img/covers/new urushitei logo.png',
    'https://crealu.github.io/urushiteisample/'
  ],
  [
    'Uniqtable',
    'A website for a travel industry startup in Japan.',
    'img/covers/UT_transparent_logo.png',
    'https://crealu.github.io/niheigo/'
  ],
  [
    'Niheigo',
    'Kanji learning application.',
    'img/covers/niheigo temp logo.png',
    'https://crealu.github.io/niheigo/'
  ],
  [
    'Holistic Pracitioner',
    "Custom built website for a holisitic practitioner's growing business.",
    'img/covers/marissasite.jpg',
    'https://crealu.github.io/marissasite/'
  ],
  [
    'Moosiko',
    'Moosiko company website built on top of WordPress.',
    'img/covers/moosiko-site-img.jpg',
    'https://www.moosiko.com/'
  ],
  [
    'Perios World',
    'Website for an educational video game that teaches kids chemistry.',
    'img/covers/periossite.jpg',
    'http://www.periosworld.com/'
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
    'img/drummachine.jpg',
    'https://codepen.io/lucidcode6/full/eQygOP',
    'https://codepen.io/lucidcode6/pen/eQygOP?editors=0010'
  ],
  [
    'Wikipedia Article Viewer',
    'An app that uses the Wikipedia API to display article results of what the user searches',
    'img/wikiviewer.jpg',
    'https://codepen.io/lucidcode6/full/aEgMjq',
    'https://codepen.io/lucidcode6/pen/aEgMjq'
  ],
  [
    'Fontify',
    'Hand drawn fonts edited with Adobe Illustrator. Generator algorithm coded in JavaScript',
    'img/fontify.jpg',
    'fontify.html',
    'https://github.com/crealu'
  ],
  [
    'JavaScript Calculator',
    "Basic calculator created using JavaScript's built in math funcitons",
    'img/calculator.jpg',
    'https://codepen.io/lucidcode6/full/EoJzKg',
    'https://codepen.io/lucidcode6/pen/EoJzKg'
  ],
  [
    'Pomodoro Clock',
    'Clock for hepling to break down productivity into segments of time',
    'img/pomodoro.jpg',
    'https://codepen.io/lucidcode6/full/mXdZZK',
    'https://codepen.io/lucidcode6/pen/mXdZZK'
  ],
  [
    'Random Quote Machine',
    'Random quote generator form JavaScript object',
    'img/quoteMachine.jpg',
    'https://codepen.io/lucidcode6/full/ppOoYR',
    'https://codepen.io/lucidcode6/pen/ppOoYR'
  ],
  [
    'Tic Tac Toe',
    'Tic tac toe game built with vanilla JavaScript',
    'img/xando.jpg',
    'https://codepen.io/lucidcode6/full/yvvZej',
    'https://codepen.io/lucidcode6/pen/yvvZej'
  ]
];

let pyProjects = [
  [
    'Sanuk Sidewalk Surfers',
    "A web scrape for the title and price of Sanuk's sandals. Saves data into a csv file",
    'img/sidewalkSurferspy.jpg',
    'https://repl.it/@crealu/Sidewalk-Surfers-Scrape',
    'https://repl.it/@crealu/Sidewalk-Surfers-Scrape'
  ],
  [
    'Employee Class',
    'A program that creates an employee using object-oriented methods',
    'img/employeepy.jpg',
    'https://repl.it/@crealu/Employee-Class',
    'https://repl.it/@crealu/Employee-Class'
  ]
];

let cppProjects = [
  [
    'Simple Shape Drawing',
    'The program allows users to input dimensions of a shape and have it drawn to size',
    'img/schapecpp.jpg',
    'https://repl.it/@crealu/Draw-Shape',
    'https://repl.it/@crealu/Draw-Shape'
  ]
];

function fillProject(p, projN) {
  let softwareImg = gebcn('software-img')[0];
  let softViewLink = gebcn('software-view-link')[0];
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

  console.log(softwareImg.src, softViewLink.href);
}

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
  //option1.style.background = 'rgba(250, 250, 250, 0.4)';
  opt[optNum].style.boxShadow = 'inset 0px 0px 16px 4px #ffffff';

  for (var z = 0; z < projArr.length; z++) {
    let newItem = new projectListItem(projArr[z][0]);
    for (var y = 0; y < attrArr.length; y++) {
      attrArr[y][0] = newItem[attrArr[y][1]];
      console.log(attrArr[y][0]);
    }

    attrArr[0][0].classList.add('software-list-item');
    attrArr[0][0].setAttribute('onclick', 'fillProject("' + p + '", ' + z + ')');
    attrArr[1][0].classList.add('list-item-title');

    attrArr[1][0].appendChild(attrArr[2][0]);
    attrArr[0][0].appendChild(attrArr[1][0]);
    softwareList.appendChild(attrArr[0][0]);
  }

  softwareImg.src = 'img/site' + p[0][2];
}

//addProjectList(websiteProjects);

function oneImgModal(oneImg) {
  let modal = document.getElementById('modal');
  let modalInner = document.getElementById('modal-inner');

  let imgEL = document.createElement("img");
  imgEL.setAttribute("class", "modal-img");

  let imgSource = '';

  switch (oneImg) {
    case 'moosikolessons':
      imgSource = 'img\\single\\moosiko pdf.jpg';
      break;
    case 'medfusionscss':
      imgSource = 'img\\single\\scss design.jpg'
      break;
    case 'millerfest':
      imgSource = 'img\\designs\\mf logo.jpg';
      break;
    case 'alz':
      imgSource = 'img\\single\\alz cure.jpg';
      break;
  }

  imgEL.setAttribute('src', imgSource);
  modalInner.appendChild(imgEL);

  modal.style.overflowY = 'scroll';
  modal.style.display = 'block';
  modal.style.animation = 'openUp 1s 0s 1 normal forwards';
}

function designModal() {
  let modal = document.getElementById('modal');
  let modalInner = document.getElementById('modal-inner');

  let graphicArt = [
    'blackFace.svg',
    'dodec.svg',
    'faces.svg',
    'pacha1.svg',
    'sacral.svg',
    'sahasrara.jpg'
  ];

  for (let i = 0; i < graphicArt.length; i++) {
    let imgEL = document.createElement("img");
    imgEL.setAttribute("src", "img/designs/" + graphicArt[i]);
    imgEL.setAttribute("class", "modal-img");
    modalInner.appendChild(imgEL);
  }

  modal.style.overflowY = 'scroll';
  modal.style.display = 'block';
  modal.style.animation = 'openUp 1s 0s 1 normal forwards';
}

function photoModal(category) {
  let modal = document.getElementById('modal');
  let modalInner = document.getElementById('modal-inner');

  let allPhotos = [
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
  ]
  /*let allPhotos = [
    {
      collection: 'pattern',
      images: [
        'bs red shrubs',
        'bs shrubs',
        'bs water',
        'calm water',
        'dirt',
        'foliage speckles',
        'foliage',
        'glass',
        'grass',
        'rainbow',
        'rough water',
        'water glass'
      ]
    },
    {
      collection: 'aerial',
      images: [
        'fog',
        'latourell falls',
        'marin headlands',
        'maroon bells',
        'monument rocks',
        'rainierbow',
        'san juan',
        'santa cruz',
        'tp sunset',
        'whole pier',
        'niagara',
        'comet falls',
        'casino',
        'cathedral',
        'telluride',
        'oregon coast',
        'quarry',
        'raleigh',
        'tent',
        'town park',
        'church'
      ]
    },
    {
      collection: 'travel',
      images: [
        'balinese serenade',
        'blue eyed bird',
        'cordillera cow',
        'lopez foliage',
        'sea iguana',
        'snowy shadows',
        'starboard',
        'sun portal',
        'sun surfer',
        'webside relaxing'
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
      collection: 'long exposure',
      images: [
        'bs light',
        'sf street',
        'tail light'
      ]
    }
  ];*/

  for (let i = 0; i < allPhotos.length; i++) {
    if (category == allPhotos[i].collection) {
      for (let j = 0; j < allPhotos[i].images.length; j++) {
        let newImgSlide = createImgSlide(category, allPhotos[i].images[j]);
        modalInner.appendChild(newImgSlide);

        /*let imgEL = document.createElement("img");
        imgEL.setAttribute("src", "img/photos/" + category + "/" + allPhotos[i].images[j] + ".jpg");
        imgEL.setAttribute("class", "modal-img");
        modalInner.appendChild(imgEL);*/
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

  /*let checkButton = document.getElementById('check-kanji-btn');

  if (kanjiSlideNum.dataset.slidenum == testSlideLen - 1) {
    checkButton.style.display = 'block';
  } else {
      checkButton.style.display = 'none';
  }*/
}

// displays the modal with a new video element inserted into it
function videoModal(videoTitle) {
  let modal = document.getElementById('modal');
  let modalInner = document.getElementById('modal-inner');

  let videoEL = document.createElement("video");
  videoEL.setAttribute("class", "modal-video");
  videoEL.setAttribute("controls", "");

  let sourceEL = document.createElement("source");
  sourceEL.setAttribute("type", "video/mp4");

  let sourceSRC;
  switch (videoTitle) {
    case 'vw':
      sourceSRC = 'vbust2';
      break;
    case 'galap':
      sourceSRC = 'galapagos trip';
      break;
    case 'venice':
      sourceSRC = 'venice beach';
      break;
  }
  sourceEL.setAttribute("src", "img/videos/" + sourceSRC + ".mp4");

  videoEL.appendChild(sourceEL);
  modalInner.appendChild(videoEL);

  modal.style.overflowY = 'scroll';
  modal.style.display = 'block';
  modal.style.animation = 'openUp 1s 0s 1 normal forwards';
}

function mechanicalModal(project) {
  let modal = document.getElementById('mechanicalModal');

  function mechanicalProject(t, p, img) {
    this.title = t,
    this.paragraph = p,
    this.image = img
  }

  let infoObject;
  switch (project) {
    case 'capstone':
      infoObject = new mechanicalProject(
        '3D Printer Head for Ceramics',
        'Alongside a multidsiplinary team of engineers and artists, I helped to envision, design, and bulid a mechanical extruder system for 3D printing ceramic material, sponsored by the Penn State School of Visual Arts (SoVA).',
        'img\\extruderthings-1.png'
      );
      break;
    case 'conmed':
      infoObject = new mechanicalProject(
        'Manufacturing Engineering Projects',
        'As a Manufacturing Engineer Intern at ConMed Corporation Inc. I collaborated with engineering professionals on a variety of projects. One of these was a Continuous Improvement effort to validate and install a new product line for the incoming medical device, Assist Arm Surgical Positioner.',
        'img\\assistarmconmed.png'
      );
      break;
    case 'guitar':
      infoObject = new mechanicalProject(
        'Hollow Body Guitar',
        'A DIY project for constructing a custom hollow body guitar.',
        'img\\guit\\fin.jpg'
      );
      break;
  }

  let titleHere = document.getElementsByClassName('mechanical-proj-title')[0];
  let imgHere = document.getElementById('carousel-display');
  let textHere = document.getElementById('carousel-text');
  clearDiv(titleHere);
  clearDiv(imgHere);
  clearDiv(textHere);

  let projectTitle = document.createTextNode(infoObject.title);
  titleHere.appendChild(projectTitle);

  let projectImg = document.createElement("img");
  projectImg.setAttribute('src', infoObject.image);
  imgHere.appendChild(projectImg);

  let projectText = document.createTextNode(infoObject.paragraph);
  textHere.appendChild(projectText);

  modal.style.display = 'block';
  modal.style.overflowY = 'scroll';
  modal.style.animation = 'openUp 1s 0s 1 normal forwards';
}

function closeMechModal() {
  let mod = document.getElementById('mechanicalModal');
  mod.style.display = 'none';
}

// clears the modal, closes it and hides it
function closeModal() {
  let modal = document.getElementById('modal');
  let modalInner = document.getElementById('modal-inner');
  clearDiv(modalInner);
  modal.style.display = 'none';
  modal.style.animation = null;
}

// new functions
function addVisualProjectList() {
  let visualList = gebcn('visual-list')[0];
  clear(visualList);

  let newSlide;
  for (var n = 0; n < photos.length; n++) {
    let newLI = createEl("li");
    newSlide = createPhotoSlide(photos[n].collection, photos[n].images[0]);
    newLI.appendChild(newSlide);
    newLI.classList.add('visual-ui-item');
    visualList.appendChild(newLI);
  }
}

function createPhotoSlide(c, i) {
  let imgSlide = createEl("div");
  let theImg = createEl("img");
  theImg.setAttribute("src", "img/photos/" + c + "/" + i + ".jpg");

  imgSlide.classList.add('visual-ui-img-wrapper');
  theImg.classList.add('visual-ui-img');
  // add clickable modal
  imgSlide.setAttribute('onclick', 'photoModal("' + c + '")');
  imgSlide.appendChild(theImg);
  return imgSlide;
}

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

//window.location.replace('https://github.com/crealu');
