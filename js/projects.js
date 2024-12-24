const projects = [
  [
    'Niheigo',
    'Japanese lanugage learning game',
    'img/icons/niheigo logo.svg',
    'https://www.niheigo.com',
    `Learning Japanese kanji can be a challenging and complex process. Niheigo addresses 
    this with a suite of tools tailored for Japanese language learners. The platform includes 
    features such as customizable testing, comprehensive kanji learning sets, engaging 
    language games, and detailed language analytics to enhance the learning experience.`,
    'Figma, HTML, CSS, JavaScript, Node, Express, MongoDB, Heroku, p5.js',
    4
  ],
  [
    'Jahmon',
    'Web-based music composition app',
    'img/icons/jahmon logo.svg',
    'https://www.jahmon.space',
    `Musical ideas can often become inaccessible, lost, and forgotten in disorganized notebooks. 
    To address this issue, Jahmon was developed as a tool for guitarists, songwriters, and creatives 
    who generate musical riffs or lines and need an efficient way to document them. The application 
    features an interactive fretboard, a step sequencer, a lyric module, and a chord bank, enabling 
    users to compose and organize songs with ease and precision.`,
    'Figma, TypeScript, React, Webpack, Node, Express, MongoDB, Heroku',
    3
  ],
  [
    'Paranormal',
    'Interactive map of haunted places in the US',
    'img/icons/paranormal logo.svg',
    'https://paranormal.onrender.com/',
    `A project developed for a client seeking to map haunted locations across the United States. 
    Designed as a data-driven interface, it offers intriguing possibilities for exploring eerie and 
    supernatural themes. The map visualization was created using D3.js and geocoded CSV data.`,
    'CSS, JavaScript, D3.js, Node, Render',
    1
  ],
  [
    'Dotmate',
    'Customizable logo visualization interface',
    'img/icons/dotmate logo.svg',
    'https://dotmate.herokuapp.com/',
    `A demo UI was created as part of a job application process. It allows users to place 
    dots on a canvas, configure parameters to control animation styles, and preview the resulting 
    animation. The dot placement can be adjusted to create diverse patterns, offering flexibility 
    in design and visualization.`,
    'p5.js, React, Webpack, Heroku',
    3
  ],
  [
    'Storyline',
    'RPG game design scaffolding',
    'img/icons/storyline logo.svg',
    'https://github.com/crealu/clean-story',
    `A codebase developed as an exercise in designing a task-based RPG while refining C++ 
    programming skills. Although the project was retired after achieving a functional prototype, 
    the resulting codebase serves as a foundational guideline for building more advanced game objects 
    and features.`,
    'C++, SDL2, Clang compiler',
    2
  ],
  [
    'Tartle',
    'Generative art with Python',
    'img/icons/tartle logo.svg',
    'https://github.com/crealu/tartle',
    `A project that emphasizes experimentation as a core principle, blending visual arts programming 
    with the goal of maintaining proficiency in Python. It showcases generative art drawings and 
    straightforward concepts designed with approachable, learnable methods. The focus remains on 
    exploring creative possibilities through iterative trial-and-error processes rather than producing 
    overly complex outputs.`,
    'Python, Turtle, PIL',
    4
  ],
  [
    'Breath Of The Wild UI',
    'Zelda BOTW inspired user interface',
    'img/icons/botw logo.svg',
    'https://botw-ui.herokuapp.com',
    `A project presented as an engaging challenge, particularly in connecting application state updates 
    to game events. As both a UI developer and an aspiring game designer, it provided an opportunity to 
    explore the integration of game logic, 3D rendering, and graphical user interfaces. The experience also 
    offered valuable insights into leveraging Three.js effectively within a React application.`,
    'Three.js, React, Webpack, Node',
    4
  ],
  [
    'Lightning Shaders',
    'GLSL editing interface',
    'img/icons/ls logo.svg',
    'https://lightningshaders.herokuapp.com/',
    `A shader programming interface developed to facilitate a deeper understanding of the code structure within 
    shader programs, particularly fragment shaders. As a graphics enthusiast with limited experience, creating 
    this tool provided a valuable means to visualize and analyze the significance of each component within the 
    programs, greatly enhancing the learning process.`,
    'React, Node, Express, MongoDB, Webpack, GLSL, Heroku',
    1
  ]
];

// [
//   'How You Eye',
//   'Explorations in UI/UX, coding, and design',
//   'img/icons/hye logo.svg',
//   'https://www.youtube.com/@howyoueye.',
//   `Unraveling topics in tech is always a fun challenge. How You Eye is a channel featuring design and code for user interfaces.
//   Videos cover various technical and creative concepts used in software, design, music,
//   language, and games.`
// ],

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
