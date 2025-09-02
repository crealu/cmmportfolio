const bars = document.getElementsByClassName('bar');
const navBtn = document.getElementById('nav-btn');
const mobileNav = document.getElementById('nav-mobile');
const projectContentRow = document.getElementById('project-content-row');
const firstContent = document.getElementById('projects-content');
const projectModal = document.getElementsByClassName('project-modal')[0];
const projectModalTitle = document.getElementsByClassName('project-modal-title')[0];
const projectModalDescription = document.getElementsByClassName('project-modal-description')[0];
const projectModalLink = document.getElementsByClassName('project-modal-link')[0];
const projectModalTechStack = document.getElementsByClassName('project-modal-tech-stack')[0];
const projectModalScreenshots = document.getElementsByClassName('project-modal-screenshots')[0];
const animateBtn = document.getElementsByClassName('glow-btn')[0];
const portrait1 = document.getElementsByClassName('portrait-color')[0];
const portrait2 = document.getElementsByClassName('portrait-color')[1];

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

function animateMe() {
  portrait1.classList.add('animated-portrait-1');
  portrait2.classList.add('animated-portrait-2');
}

function animateMeFromBtn() {
  portrait1.classList.remove('animated-portrait-1');
  portrait2.classList.remove('animated-portrait-2');
  portrait1.classList.add('unanimated-portrait-1');
  portrait2.classList.add('unanimated-portrait-2');

  setTimeout(() => {
    portrait1.classList.remove('unanimated-portrait-1');
    portrait2.classList.remove('unanimated-portrait-2');
    portrait1.classList.add('animated-portrait-1');
    portrait2.classList.add('animated-portrait-2');
  }, 100)
}

function displayContent(topic) {
  displayProjects(topic.toLowerCase());

  if (topic == 'About') {
    animateMe();
    animateBtn.style.animation = '1s reveal_glow_btn 9s ease forwards';
  }

  if (window.innerWidth <= 800) {
    openMenu();
  }
}

function addProjectList() {
  projects.forEach(project => {
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const link = document.createElement("div");
    const techStack = document.createElement("p");
    const image = document.createElement("img");
    const imageWrapper = document.createElement("div");

    div.classList.add('software-project-wrapper');
    title.classList.add('software-project-title');
    title.textContent = project[0];
    description.classList.add('software-project-text');
    description.textContent = project[1];

    link.classList.add('software-project-link');
    link.setAttribute('target', '_blank');
    link.addEventListener('click', () => { openProjectModal(project) })

    // const modalTitle = link.children[0].children[0].textContent;

    imageWrapper.classList.add('software-project-img-wrapper');
    image.classList.add('software-project-img');
    image.src = project[2];

    imageWrapper.appendChild(image);
    div.appendChild(title);
    div.appendChild(description);
    link.appendChild(imageWrapper);
    link.appendChild(div);
    projectContentRow.appendChild(link);
  });
};

function revealModal() {
  let i = 0;
  let id = setInterval(frame, 500);
  projectModal.style.display = 'block';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      projectModal.style.top = '0px';
      projectModal.style.opacity = '1';
    }
  }
}

function fillScreenshots(name, count) {
  clear(projectModalScreenshots);
  
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

function openProjectModal(project) {
  projectModalTitle.textContent = project[0];
  // projectModalDescription.textContent = project[4];
  projectModalDescription.innerHTML = project[4];
  projectModalTechStack.textContent = project[5];
  projectModalLink.href = project[3];
  fillScreenshots(project[0], project[6]);
  revealModal();
}

function closeProjectModal() {
  hideModal();
}


function hideModal() {
  let i = 0;
  let id = setInterval(frame, 500);
  projectModal.style.opacity = '0';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      projectModal.style.display = 'none';
      projectModal.style.top = '-30px';
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

function loadPage() {
  fadeShow(firstContent);
  addProjectList();
  animateBtn.addEventListener('click', animateMeFromBtn);
}

window.addEventListener('load', loadPage);


