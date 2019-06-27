// projectObject

let webProject = {
  title: '',
  img: '',
  text: '',
  link: '',
}

let softwareProj = {
  language: '',
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

let websiteProjects = [
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
]
