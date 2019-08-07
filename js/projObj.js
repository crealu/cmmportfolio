// projectObject

let webProject = {
  title: '',
  img: '',
  text: '',
  link: '',
}

let softwareProj = {
  title: '',
  img: '',
  text: '',
  viewLink: '',
  sourceLink: ''
}

function softwareProj() {

}

// software projects
/* websites

*/

// title, description, image
function createImgSlide(c, i) {
  let imgSlide = createEl("div");
  /*let titleWrapper = createEl("div");
  let titleText = textNode(t);
  let descWrapper = createEl("div");
  let descText = textNode(d);*/
  let theImg = createEl("img");
  theImg.setAttribute("src", "img/photos/" + c + "/" + i + ".jpg");

  imgSlide.classList.add('img-slide');
  theImg.classList.add('modal-img');
  /*titleWrapper.classList.add('img-title-wrapper');
  descWrapper.classList.add('img-para');*/

  imgSlide.appendChild(theImg);
  return imgSlide;
}

function websiteProject() {
  this.titleW = createEl("div"),
  this.titleH = createEl("h3"),
  this.titleT = textNode(ti),
  this.textW = createEl("div"),
  this.textP = createEl("p"),
  this.textT = textNode(te),
  this.imgW = createEl("div"),
  this.img = i,
  this.linkW = createEl("div"),
  this.link = l
}

function projectListItem(ti) {
  this.newLI = createEl("li");
  this.titleH = createEl("h3");
  this.titleT = textNode(ti);
}

function projectObj(ti, te, i, l) {
  this.newW = createEl("div");
  this.titleH = createEl("h3"),
  this.titleT = textNode(ti),
  this.textP = createEl("p"),
  this.textT = textNode(te),
  this.img = i,
  this.link = l
}

// used project data

let webProjects = [
  [
    'Photaero',
    'Photography services company website.',
    'photaero-logo.png',
    'https://crealu.github.io/photaero/'
  ],
  [
    'Urushitei',
    'Japanese Ryokan in Kyoto, Japan.',
    'urushitei-logo.png',
    'https://crealu.github.io/urushiteisample/'
  ]
  [
    'Uniqtable',
    'A website for a travel industry startup in Japan.',
    'UT_transparent_logo.png',
    'https://crealu.github.io/niheigo/'
  ],
  [
    'Niheigo',
    'Kanji learning application.',
    'niheigo temp logo.png',
    'https://crealu.github.io/niheigo/'
  ],
  [
    'Holistic Pracitioner',
    "Custom built website for a holisitic practitioner's growing business.",
    'marissasite.jpg',
    'https://crealu.github.io/marissasite/'
  ],
  [
    'Moosiko',
    'Moosiko company website built on top of WordPress.',
    'moosiko-site-img.jpg',
    'https://www.moosiko.com/'
  ],
  [
    'Perios World',
    'Website for an educational video game that teaches kids chemistry.',
    'periossite.jpg',
    'http://www.periosworld.com/'
  ],
  [
    'Quinn Tu Portfolio',
    'A portfolio website for lifestyle influencer, Quinn Tu.',
    'quinnsite.jpg',
    'https://crealu.github.io/quinntu/'
  ],
  [
    'Robert Miller Portfolio',
    'Porfolio for painter Robert E. Miller.',
    'rainy-day.png',
    'REM Site/remHome.html'
  ]
];

let softwareProj = {
  title: '',
  img: '',
  text: '',
  viewLink: '',
  sourceLink: ''
}

// just need to plug in the next data and fix displayProjects function
// to take in the projects array (w) as a dependent variable
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
]

export jsProjects, pyProjects, cppProjects;
