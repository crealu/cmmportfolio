
// toggles menu for mobile
function toggleNavList() {
  let navList = document.getElementById('nav-list-container-mobile');
  let body = document.body;
  if (!(navList.style.left === '100px')) {
    navList.style.left = '100px';
    navList.style.opacity = '1';
    //body.style.opacity = '0.5'
  } else {
      navList.style.left = '355px';
      navList.style.opacity = '0';
      ///body.style.opacity = '1';
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

function deColor() {
  let homeImg = gebcn('home-img')[0];
  homeImg.style.filter = 'brightness(0.75) grayscale(1)';
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
          changeTitle('About', titleH2);
          displayProject('about-content');
          deColor();
          break;
        case 'Software':
          toggleNavList();
          changeTitle('Software', titleH2);
          displayProject('website-projects');
          createList('s');
          deColor();
          break;
        case 'Visual Arts':
          toggleNavList();
          changeTitle('Visual Arts', titleH2);
          displayProject('design-projects');
          createList('va');
          deColor();
          break;
        case 'Mechanical':
          toggleNavList();
          changeTitle('Mechanical', titleH2);
          displayProject('mechanical-content');
        break;
      }
      sth.style.opacity = '1';
    }
    document.getElementById('portfolio-footer').style.display = 'block';
  }
}

// creates a selectable sub-section list
function createList(topic) {
  let sth = document.getElementById('section-title-here');

  let topicButtons = document.createElement("div");
  topicButtons.setAttribute("id", "topic-buttons-container");

  let buttonsUL = document.createElement("ul");
  buttonsUL.setAttribute("class", "topic-btn-list");
  //let newBtnsUL = document.getElementsByClassName("topic-btn-list")[0];

  let optionsArray;

  switch (topic) {
    case 's':
      optionsArray = [
        {
          title: 'Websites',
          projects: 'website-projects'
        },
        {
          title: 'JavaScript',
          projects: 'js-projects'
        },
        {
          title: 'Python',
          projects: 'py-projects'
        },
        {
          title: 'C/C++',
          projects: 'cpp-projects'
        }
      ];
      buttonsUL.style.width = '400px';
      buttonsUL.style.left = '10px';
      break;
    case 'va':
      optionsArray = [
        {
          title: 'Design',
          projects: 'design-projects'
        },
        {
          title: 'Photo',
          projects: 'photo-projects'
        },
        {
          title: 'Video',
          projects: 'video-projects'
        }
      ];
      buttonsUL.style.width = '300px';
      buttonsUL.style.left = '40px';
      break;
  }

  for (let i = 0; i < optionsArray.length; i++) {
    let buttonsLI = document.createElement("li");
    buttonsLI.setAttribute("class", "topic-btn-item text-center");

    let dot = document.createElement("div");
    dot.setAttribute("class", "list-dot");

    let optionText = document.createTextNode(optionsArray[i].title);

    let optionButton = document.createElement("button");
    optionButton.setAttribute("class", "topic-button");
    optionButton.setAttribute("onclick", "displayProject('" + optionsArray[i].projects + "')");

    optionButton.appendChild(optionText);
    buttonsLI.appendChild(optionButton);
    buttonsLI.appendChild(dot);
    buttonsUL.appendChild(buttonsLI);
  }

  topicButtons.appendChild(buttonsUL);

  sth.appendChild(topicButtons);
}

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
      imgSource = 'img\\desings\\mf logo.jpg';
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

//window.location.replace('https://github.com/crealu');
