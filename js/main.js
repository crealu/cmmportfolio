const bars = document.getElementsByClassName('bar');
const navBtn = document.getElementById('nav-btn');
const mobileNav = document.getElementById('nav-mobile');
const navLinks = document.getElementsByClassName('navigation-link');
const navLinksMobile = document.getElementsByClassName('nav-link-mobile');
const projectContentRow = document.getElementById('project-content-row');
const firstContent = document.getElementById('projects-content');

function toggleMobileNav(menu, showing) {
  let rate = showing ? 100 : 500;

  if (!showing) {
    for (var m = 0; m < mobileLinks.length; m++) {
      mobileLinks[m].style.opacity = '0';
    }
  }

  let id = setInterval(frame, rate);
  let i = 0;

  function frame() {
    i++;
    if (i >= 1 && i < 2) {
      if (showing) {
        menu.style.height = window.innnerHeight + 'px';
      } else {
        menu.style.display = 'none';
      }
    }
    if (showing) {
      if (i >= 2 && i < 3) {
        mobileLinks[0].style.opacity = '1';
        mobileLinks[0].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 3 && i < 4) {
        mobileLinks[1].style.opacity = '1';
        mobileLinks[1].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 4 && i < 5) {
        mobileLinks[2].style.opacity = '1';
        mobileLinks[2].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 5 && i < 6) {
        mobileLinks[3].style.opacity = '1';
        mobileLinks[3].style.transform = 'scale(1) translateY(0px)';
      } else if (i >= 9 && i < 10) {
        // clearInterval(id);
        // mediaItem.style.animation = '0.5s var(--cb-bounce) 0s forwards media_bounce';
      }
    } else {
        if (i >= 1) {
          clearInterval(id);
          for (var m = 0; m < mobileLinks.length; m++) {
            mobileLinks[m].style.transform = 'scale(1.1) translateY(-30px)';
            mobileLinks[m].style.transition = '0.5s ease opacity, 0.5s ease transform';
          }
        }
    }
  }
}

function openMenu() {
  if (!(mobileNav.style.display == 'block')) {
    switchNavBtn();
    fadeShowMobile(mobileNav);
    toggleMobileNav(mobileNav, true);
  } else {
    switchNavBtn();
    fadeHideMobile(mobileNav);
    toggleMobileNav(mobileNav, false);
  }
}

function switchNavBtn() {
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
  let id = setInterval(frame, 250);
  el.style.opacity = '0';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      el.style.display = 'none';
    }
  }
}

function clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function displayProjects(div) {
  let content = ['about', 'projects', 'connect'];

  if (content.indexOf(div) != -1) {
    content.splice(content.indexOf(div), 1);
  }

  let content1 = document.getElementById(content[0] + '-content');
  let content2 = document.getElementById(content[1] + '-content');
  fadeHideSeveral(content1, content2);

  let contentToDisplay = document.getElementById(div + '-content');
  fadeShow(contentToDisplay);
}

function displayContent(event) {
  let topic = event.target.textContent;

  displayProjects(topic.toLowerCase());
  
  if (window.innerWidth <= 800) {
    openMenu();
  }
}

function toggleDetails(event) {
  let selected = event.target;

  if (selected.classList[0] != 'software-project-wrapper') {
    selected = event.target.parentNode;
  } 

  let details = selected.querySelector('.software-project-details');

  if (details.classList.contains('display-details')) {
    details.classList.remove('display-details')
  } else {
    details.classList.add('display-details');
  }
}

function addProjectList() {
  projects.forEach(project => {
    const div = document.createElement("div");
    div.classList.add('software-project-wrapper');
    div.addEventListener('click', toggleDetails);

    const link = document.createElement("div");
    link.classList.add('software-project-link');

    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add('software-project-img-wrapper');

    const image = document.createElement("img");
    image.classList.add('software-project-img');
    image.src = project[2];

    const title = document.createElement("h3");
    title.classList.add('software-project-title');
    title.textContent = project[0];

    const caption = document.createElement("p");
    caption.classList.add('software-project-text');
    caption.textContent = project[1];

    const details = document.createElement("div");
    details.classList.add('software-project-details');

    const description = document.createElement("p");
    description.classList.add('software-project-stack');
    description.textContent = project[4];

    const stack = document.createElement("p");
    stack.classList.add('software-project-stack');
    stack.textContent = `Tech Stack: ${project[5]}`;

    const button = document.createElement("a");
    button.classList.add('software-live-link');
    button.textContent = 'View Live';
    button.href = project[3];
    button.setAttribute('target', '_blank');

    imageWrapper.append(image);
    details.append(description, stack, button);
    div.append(title, caption, details);
    link.append(imageWrapper, div);
    projectContentRow.append(link);
  });
};

function fillScreenshots(name, count) {  
  if (name.includes('Wild')) {
    name = 'botwui';
  } else if (name.includes('Lightning')) {
    name = 'lightning';
  }

  for (let i = 1; i <= count; i++) {
    const img = document.createElement('img');
    img.classList.add('screenshot');
    img.src = `./img/projs/${name.toLowerCase()}/screenshot_${i}.png`;
    projectModalScreenshots.appendChild(img);
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

function fadeHideSeveral(el1, el2) {
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

function addListeners() {
  navBtn.addEventListener('click', openMenu);
  navLinks[0].addEventListener('click', displayContent)
  navLinks[1].addEventListener('click', displayContent)
  navLinks[2].addEventListener('click', displayContent)  
  navLinksMobile[0].addEventListener('click', displayContent)
  navLinksMobile[1].addEventListener('click', displayContent)
  navLinksMobile[2].addEventListener('click', displayContent)
}

function loadPage() {
  fadeShow(firstContent);
  addProjectList();
  addListeners();
}

window.addEventListener('load', loadPage);
