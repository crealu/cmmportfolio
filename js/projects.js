const projects = [
  // [
  //   'How You Eye',
  //   'Explorations in UI/UX, coding, and design',
  //   'img/icons/hye logo.svg',
  //   'https://www.youtube.com/@howyoueye.',
  //   `Unraveling topics in tech is always a fun challenge. How You Eye is a channel featuring design and code for user interfaces.
  //   Videos cover various technical and creative concepts used in software, design, music,
  //   language, and games.`
  // ],
  [
    'Paranormal',
    'US map of haunted places',
    'img/icons/paranormal logo.svg',
    'https://paranormal.onrender.com/',
    `This project was for a client who wanted to map all ghostly places in the US.
    Although it is a simple data-driven UI, there are exciting and spooky directions 
    this project can go. D3.js and geocoded CSV data is used to render the map.`,
    'CSS, JavaScript, D3.js, Node, Render',
    1
  ],
  [
    'Niheigo',
    'Japanese lanugage learning app',
    'img/icons/niheigo logo.svg',
    'https://www.niheigo.com',
    `Learning Japanese kanji characters can be confusing and daunting. 
    Niheigo is a platform that contains a suite of tools designed to 
    help Japanese language learners. It features customizable testing, 
    detailed kanji learning sets, language games, and language analytics.`,
    'Figma, HTML, CSS, JavaScript, Node, Express, MongoDB, Heroku, p5.js',
    4
  ],
  [
    'Jahmon',
    'Music tabulating app',
    'img/icons/jahmon logo.svg',
    'https://www.jahmon.space',
    `When I would come up with musical ideas they usually ended up lost somewhere
    in a misplaced notebook. I wanted to change that. Jahmon is an application meant 
    for guitarists, songwriters, and people who simply invent musical riffs or lines
    and want to keep them on record... figuratively. With an interactive fretboard, 
    step sequencer, lyric module, and chordbank, users can create any song that gets 
    conjured in the old noggin of imagination.`,
    'Figma, TypeScript, React, Webpack, Node, Express, MongoDB, Heroku, GitHub',
    3
  ],
  [
    'Dotmate',
    'Logo visualization interface',
    'img/icons/dotmate logo.svg',
    'https://dotmate.herokuapp.com/',
    `I needed to put together a demo UI for a job application and this is what came out. 
    Users can place dots inside the canvas, set specific parameters that control the 
    style of the animation, and view the animation. The placement of the dots can be 
    edited to obtain various patterns.`,
    'React, p5.js, Heroku, GitHub',
    3
  ],
  [
    'Storyline',
    'RPG game design codebase',
    'img/icons/storyline logo.svg',
    'https://github.com/crealu/clean-story',
    `In an effort to design a tasked based RPG game while improving my C++ coding skills, 
    I created Storyline. Although I decided to sunset this project upon obtaining a 
    barebones working version of the game, the codebase can be used as a small guideline 
    or starting point to develop more sophisticated game objects and features.`,
    'C++, SDL2, Clang compiler',
    2
  ],
  [
    'Tartle',
    'Generative art with Python Turtle',
    'img/icons/tartle logo.svg',
    'https://github.com/crealu/tartle',
    `Experimentation is the name of the game. What better way to get in touch with 
    my visual arts programming roots and simultaneously keep my Python coding chops sharp? 
    This project features generative art drawings and simple ideas with learnable 
    approaches. Nothing toofancy - just some good old-fashioned trial and error drawing.`,
    'Python, Turtle, PIL',
    4
  ],
  [
    'Breath Of The Wild UI',
    'Zelda BOTW inspired user interface',
    'img/icons/botw logo.svg',
    'https://botw-ui.herokuapp.com',
    `What a fun challenge this was! As a UI developer and modest game designer, linking updates 
    in the application state to game events was an exciting brain tease. Taking on this project 
    allowed me to see the intergrated aspects of game logic, 3D rendering, GUIs and how best to
    utilize Three.js in a React application.`,
    'React, Webpack, Node, Three.js',
    4
  ],
  [
    'Lightning Shaders',
    'GLSL editing interface',
    'img/icons/ls logo.svg',
    'https://lightningshaders.herokuapp.com/',
    `I created a shader programming interface to better understand the lines of code
    written in shader programs, specifically fragment shaders. Being a graphics nerd 
    (and beginner) with little experience, I found that constructing a tool like this 
    to visualize each part's significance in the program was a massive help.`,
    'React, Node, Express, MongoDB, Webpack, GLSL, Heroku',
    1
  ]
];

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
  'faces.svg',
  'dodec.svg',
  'faces.svg',
  'pacha1.svg',
  'sacral.svg',
  'sahasrara.jpg',
  'mf logo.jpg'
];
