const projects = [
  [
    'Niheigo',
    'Web-based application for learning Japanese kanji and vocabulary',
    'img/niheigo1.png',
    'https://www.niheigo.com',
    `Niheigo is a platform that contains a suite of tools designed to 
    help Japanese language learners better understand kanji. It 
    features a customizable quiz, various learning sets, a typing game,
    and a lookup table based on kana. For those who like to explore, there
    is a tool for simply checking details related to specific kanji. All platform 
    features were written in vanilla JavaScript and the app is served on 
    a Node/Express server.`
  ],
  [
    'Jahmon',
    'Music tabulating app for guitarists',
    'img/jahmon.png',
    'https://jahmon.herokuapp.com',
    `Jahmon is an application meant for guitarists and songwriters. With an interactive fretboard, 
    chord sequence customizer, and lyric module, users can create any song that comes to their imagination.
    This project uses a React/TypeScript frontend built on top of a Node backend.`
  ],
  [
    'Dotmate',
    'Logo visualization generator built with p5.js and React',
    'img/dotmate.png',
    'https://dotmate.herokuapp.com/',
    `Dotmate was a really fun side project that I threw together for an specific application.
    It features p5.js (what used to be Processing) and implements the animation UI within
    a basic React application. A big area to improvement in this project would be to create a CPU throttler
    or to get more low-level and draw directly on a WebGL canvas.`
  ],
  [
    'Storyline',
    'Codebase containing game components and story logic for basic RPG. Built with SDL and C++',
    'img/storyline.png',
    'https://github.com/crealu/clean-story',
    `In an effort to kill two birds with one stone (desigining a tasked based RPG game while
    improving my C++ chops) I created Storyline. Although I decided to sunset this project after I
    reached a barebones working version of the game, the codebase can be used as a guideline 
    or starting point to develop more sophisticated game objects and features.`
  ],
  [
    'Breath Of The Wild UI',
    'A user interface inspired by the game menu used in Zelda: Breath of The Wild',
    'img/botw.png',
    'https://botw-ui.herokuapp.com',
    `After one too many long nights of playing Switch, I decided to recreate the (game) 
    UI of Zelda: Breath of The Wild with React and Three.js. What a fun challenge this was!
    As a UI developer and modest game designer, linking updates in the application state to 
    game events was an exciting brain tease of integration.`
  ],
  [
    'Lightning Shaders',
    'Interface for creating and experimenting with WebGL shader programs',
    'img/lightningshaders.png',
    'https://lightningshaders.herokuapp.com/',
    `I designed this shader programming interface to better understand the lines of code
    within shader programs. Being a graphics nerd and not having a very strong foundation in it,
    I find that constructing tools like this to visualize each aspects part in the program is
    a massive help.`
  ],
  [
    'KIT Group Ryokans',
    'Main and branch websites for Japanese ryokan group, KIT',
    'img/kit.png',
    'https://www.kyoto-ryokan-sakura.com/',
    `As a freelancer in Japan, I connected with a startup in the travel and tourism industry.
    We were tasked with redesigning several websites for a hotel group, KIT, and I was the 
    primary developer on the project. An exciting endeavor indeed! I worked with marketers, designers,
    and consultants and helped get the site up and running with a custom WordPress theme.`
  ]
];

// {
//   title: 'Niheigo',
//   caption: 'Web-based application for learning Japanese kanji and vocab',
//   logo: 'img/covers/niheigo temp logo.png',
//   link: 'https://www.niheigo.com',
//   tag: 'Application'
//   discription: `Niheigo is a platform that contains a suite of tools designed to 
//     help Japanese language learners gain a better handle on kanji. It 
//     features a customizable quiz, various learning sets, a typing game,
//     and a lookup table based on kana. For those who like to explore, there
//     is a tool for simply checking details related to specific kanji.`
// }

let photos = [
  {
    collection: 'aerial',
    images: [
      'casino',
      'cathedral',
      'chigabeach',
      'furusato real',
      'latourell falls',
      'marin headlands',
      'maroon bells',
      'nara 2',
      'nikkoscape',
      'rainierbow',
      'whole pier'
    ]
  },
  {
    collection: 'long exposure',
    images: [
      'bs light',
      'meguro aerial',
      'ochanomizu ground',
      'odaiba 2',
      'rainbow nonbridge',
      'rville falls',
      'shinobazu skytree',
      'train trails edit',
      'yoyogi fountain gradients',
      'yoyogi longexp2'
    ]
  },
  {
    collection: 'moon',
    images: [
      'berkeley',
      'big sur',
      'chichibu',
      'ireland',
      'uenomoon'
    ]
  },
  {
    collection: 'pattern',
    images: [
      'ice',
      'foliage',
      'dirt',
      'bs red shrubs',
      'calm water',
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
      'sea iguana',
      'snowy shadows',
      'starboard',
      'sun portal',
      'tail of the snake skin',
      'temple sakura',
      'webside relaxing'
    ]
  },
  {
    collection: 'sunscapes',
    images: [
      'denver sunset',
      'arisen',
      'morning gradients',
      'pre-sun',
      'sun surfer',
      'waikiki sun'
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
