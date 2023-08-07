const bars = document.getElementsByClassName('bar');
const navBtn = document.getElementById('nav-btn');
const mobileNav = document.getElementById('nav-mobile');
const projectContentRow = document.getElementById('project-content-row');
const aboutContent = document.getElementById('about-content');
const projectModal = document.getElementsByClassName('project-modal')[0];
const projectModalTitle = document.getElementsByClassName('project-modal-title')[0];
const projectModalDescription = document.getElementsByClassName('project-modal-description')[0];
const projectExternalLink = document.getElementsByClassName('external-link')[0];

function clear(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
  }
}

function openMenu() {
  if (!(mobileNav.style.display == 'block')) {
    switchNavBtn();
    fadeShowMobile(mobileNav);
  } else {
    switchNavBtn();
    fadeHideMobile(mobileNav);
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
  let id = setInterval(frame, 125);
  el.style.opacity = '0';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      el.style.display = 'none';
    }
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

function displayProjects(div) {
  let content = ['about', 'projects', 'connect'];

  if (content.indexOf(div) != -1) {
    content.splice(content.indexOf(div), 1);
  }

  let content1 = document.getElementById(content[0] + '-content');
  let content2 = document.getElementById(content[1] + '-content');
  fadeHide2(content1, content2);

  let contentToDisplay = document.getElementById(div + '-content');
  fadeShow(contentToDisplay);
}

function displayContent(topic) {
  displayProjects(topic.toLowerCase());
  if (window.innerWidth <= 800) {
    openMenu();
  }
}

function projectListItem(ti, projectDescription) {
  this.newLI = document.createElement("li");
  this.titleH = document.createElement("h3");
  this.titleT = document.createTextNode(ti);
  this.descP = document.createElement("p");
  this.descT = document.createTextNode(projectDescription);
}

function addProjectList() {
  projects.forEach(project => {
    const div = document.createElement("div");
    const title = document.createElement("h3");
    const description = document.createElement("p");
    const link = document.createElement("div");

    div.classList.add('software-project-wrapper');
    title.classList.add('software-project-title');
    title.textContent = project[0];
    description.classList.add('software-project-text');
    description.textContent = project[1];
    link.classList.add('software-project-link');
    // link.href = project[3];
    link.setAttribute('target', '_blank');
    link.addEventListener('click', () => {
      const modalTitle = link.children[0].children[0].textContent;
      openProjectModal(project);
      console.dir(link.children[0].children[0]);
      // console.log(link.children[0].textContent);
    })

    div.appendChild(title);
    div.appendChild(description);
    link.appendChild(div);
    projectContentRow.appendChild(link);
  });
};

addProjectList();

function openProjectModal(project) {
  projectModalTitle.innerHTML = project[0];
  projectModalDescription.innerHTML = project[4];
  projectExternalLink.href = project[3];
  revealModal(project);
  // fadeShow(projectModal);
}

function closeProjectModal() {
  hideModal();
  // fadeHide(projectModal);
}

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

function hideModal() {
  let i = 0;
  let id = setInterval(frame, 500);
  projectModal.style.opacity = '0';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      projectModal.style.display = 'none';
      clear(projectModalTitle);
      clear(projectModalDescription);
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

function fadeHide2(el1, el2) {
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

function homeLoadFunctions() {
  fadeShow(aboutContent);
}

window.onload = homeLoadFunctions();
