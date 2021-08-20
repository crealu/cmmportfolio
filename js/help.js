const doc = {
  gebi: (i) => { return document.getElementById(i) },
  gebcn: (c) => { return document.getElementsByClassName(c) },
  clear: (e) => { while(e.firstChild) { e.removeChild(e.firstChild); } },
  createl: (e) => { return document.createElement(e) },
  textnode: (t) => { return document.createTextNode(t) },
  gsv: (e, s) => { return getComputedStyle(e).getPropertyValue(s) }
};

function delayZoomShow(el) {
  let id = setInterval(frame, 100);
  let i = 0;
  el.style.display = 'block';
  function frame() {
    i++;
    if (i == 1) {
      clearInterval(id);
      el.style.opacity = '1';
      el.style.transform = 'scale(1)';
    }
  }
}

function gebi(idName) {
  let element = document.getElementById(idName);
  return element;
}

function gebcn(className) {
  let elements = document.getElementsByClassName(className);
  return elements;
}

function clear(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function getStyleValue(ele, style) {
  let el = getComputedStyle(ele).getPropertyValue(style);
  return el;
}

function getURLVars() {
  let url = window.location.href;
  return url;
}

function createEl(docEl) {
  let newEl = document.createElement(docEl);
  return newEl;
}

function textNode(tn) {
  let newTN = document.createTextNode(tn);
  return newTN;
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

function fadeShowWhatsNew() {
  let whatsNew = gebi('whats-new-wrapper');
  fadeShow(whatsNew);
}
