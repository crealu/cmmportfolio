let wst = {
  navigation: {
    e: ['About', 'Software', 'Visual Arts'],
    j: ['自身', 'ソフトウエア', 'ビジュアルアツ']
  },

  whatsNew: {
    e: [
      "What's new ?",
      'A kanji learning platform and full-stack challenge bundled into one. This is a side project where a frontend testing interface is combined with a backend database architecture using custom JavaScript and Node.js. Users can customize their own kanji learning sets.',
      'A digital brand specializing in creative content. Initially a photojournalism project, Phocam has grown into a brand that offers services in photography, videography, and content creation. Highlights are posted under the Instagram handle, photaero.',
      'A MERN stack web application boiler plate written in Python. The Python scripts create an application architecture that utilizes Node.js, Express, MongoDB in the backend and React in the frontend.'
    ],
    j: [
      '新しい事',
      '漢字の勉強してのアプリです。このサイドプロジェクトでウエブサイトが作るのがJavaScriptを使う。バクエンドのデタベスを作るのがNode.jsを使う。日本語の勉強して人は学び方がカストマイズ出来る。',
      'デイジタルのブランドです。始めには写真の日記でした、最近はクリエテイブサビスに伸びているなります。ハイライトがInstagramのphocammの下でポストします。',
      '自動化のウエブのアプリケシャンのプログラムです。私はPythonで作りました。Pythonのスクリプトがアプリのファイルの建築を作ります。'
    ]
  },

  about: {
    e: [
      'Me',
      "Originally from the US, I'm a software developer and visual artist based in Tokyo, Japan. With versatility as a natural strength, code and creative design are pursuits that coalesce well for me. They are skills that I strive to continuously hone. Projects that I enjoy working on include building user interfaces, coding animations, designing and editing digital content, and, recently, configuring database architecture.　When I'm not coding I'm usually socializing, making music, or adventuring outside. Oftentimes I explore new places to grow my photography portfolio. Traveling is a big part of my life, too, and I'm always looking to expand my network. Let's connect or collaborate!"
    ],
    j: [
      '私',
      'ニューヨークでソフトエアの開発者とビジュアルアーティストです。プログラミングとクリエテイブデザインは１番強みです。それら実力は絶えず磨っています。嬉しくプロジェクトはUIインタフェースを作ったりとアニメシャンをプログラんしたりデジタルコンテンツを編集したり。働いていないとき友達と遊んだりと音楽を作ったりと東京じゅう探索したります。'
    ]
  },

  software: {
    e: [
      'Software',
      'Web'
    ],
    j: [
      'ソフトエア',
      'ウエブ'
    ]
  },

  visualarts: {
    e: [
      'Visual Arts',
      'Design',
      'Photo',
      'Video'
    ],
    j: [
      'ビジュアルアツ',
      'デザイン',
      '写真',
      'ビデオ'
    ]
  }
};

let translations = [
  {
    e: 'About',
    j: '自身'
  },
  {
    e: 'Software',
    j: 'ソフトエア'
  },
  {
    e: 'Visual Arts',
    j: 'ビジュアルアツ'
  },
  {
    e: "What's new?",
    j: '新し物'
  },
  {

  }
];

function changeLanguage(lang) {
  let navLinks = doc.gebcn('navigation-link');
  loopAndSwap(navLinks, wst.navigation, lang);

  let whatsNewText = doc.gebcn('whats-new-swap');
  loopAndSwap(whatsNewText, wst.whatsNew, lang);

  let aboutText = doc.gebcn('about-swap');
  loopAndSwap(aboutText, wst.about, lang);

  let softwareText = doc.gebcn('software-swap');
  loopAndSwap(softwareText, wst.software, lang);

  let vaText = doc.gebcn('va-swap');
  loopAndSwap(vaText, wst.visualarts, lang);

  if (window.innerWidth <= 800) {
    mobileMenu();
  }
}

function loopAndSwap(elements, section, language) {
  for (var i = 0; i < elements.length; i++) {
    doc.clear(elements[i]);
    elements[i].textContent = section[language][i];
  }
}
