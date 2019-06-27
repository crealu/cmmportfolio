// new.js refactored

// what can we take out/what repeats?
function clearContent(div) {
  while(div.firstChild) {
    div.removeChild(div.firstChild);
  }
}

function hideContent(div) {
  div.style.display = 'none';
}

function revealContent(title, details, titleH) {
  let newTitle = document.createTextNode(title);
  titleH.appendChild(newTitle);
  var id1 = setInterval(frames, 500);
  function frames() {
    let i = 0;
    i++;
    details.style.opacity = '' + i + '';
    if (i == 1) {
      clearInterval(id1);
    }
  }
  details.style.display = 'block';
}

function displayContents(topic) {
  let cc = document.getElementById('welcome-content');
  cc.style.opacity = '0';
  if (document.getElementsByClassName('active-content')[0]) {
    let activeC = document.getElementsByClassName('active-content')[0];
    activeC.style.opacity = '0';
    activeC.classList.remove("active-content");
  }
  let designC = document.getElementById('design-content');
  let devC = document.getElementById('dev-content');
  let photoC = document.getElementById('photo-content');
  var i = 1;
  function frame() {
    i--;
    if (i == 0) {
      clearInterval(id);
      clearContent(wc)
      let titleRow = document.createElement("div");
      titleRow.setAttribute("class", "row");

      let titleCol = document.createElement("div");
      titleCol.setAttribute("class", "col-xs-12 text-center");

      let title = document.createElement("h2");
      title.setAttribute("class", "section-title");

      cc.appendChild(titleRow);
      titleRow.appendChild(titleCol);
      titleCol.appendChild(title);
      cc.style.top = '75px';

      switch (topic) {
        case 0:
          devC.style.display = 'none';
          photoC.style.display = 'none';
          let design = document.createTextNode('Design');
          title.appendChild(design);
          designC.setAttribute("class", "active-content topic-content");
          function frames() {
            var i = 0;
            i++;
            designC.style.opacity = '' + i + '';
            if (i == 1) {
              clearInterval(id1)
            }
          }
          var id1 = setInterval(frames, 500);
          designC.style.display = 'block';
          break;
        case 1:
          designC.style.display = 'none';
          photoC.style.display = 'none';
          let dev = document.createTextNode('Dev');
          title.appendChild(dev);
          devC.setAttribute("class", "active-content topic-content");
          function frames1() {
            var i = 0;
            i++;
            devC.style.opacity = '' + i + '';
            if (i == 1) {
              clearInterval(id1)
            }
          }
          var id1 = setInterval(frames1, 500);
          devC.style.display = 'block';
          break;
        case 2:
        case 3:
        designC.style.display = 'none';
        devC.style.display = 'none';
        let photo = document.createTextNode('Photography');
        title.appendChild(photo);
        photoC.setAttribute("class", "active-content topic-content");
        function frames3() {
          var i = 0;
          i++;
          photoC.style.opacity = '' + i + '';
          if (i == 1) {
            clearInterval(id1)
          }
        }
        var id1 = setInterval(frames3, 500);
        photoC.style.display = 'block';
        break;
      }
      cc.style.opacity = '1';
    }
    document.getElementById('portfolio-footer').style.display = 'block';

  }
  let id = setInterval(frame, 1000);
}

function displayContentsMain(titleCase) {
  let titleHere = document.getElementById('gets-title');
  let detailsHere = document.getElementById('gets-details');
  titleHere.style.opacity = '0';
  detailsHere.style.opacity = '0';

  clearContent(titleHere);
  clearContent(detailsHere);

  let title = document.createElement("h1");
  let details = document.createElement("p");

  let titleText = document.createTextNode(titleCase);
  var dT, detailsText;

  switch (titleCase) {
    case 'About':
      dT = "My name is Cam, I'm a sofware developer and visual artist. With" +
           " versatility as a one my natural strengths, code and creative" +
           " design are passions that coalesce well for me. They are skills" +
           " that I strive to continuously hone. Traveling is a big part of" +
           " my life, too. I'm always looking to expand my network as I learn" +
           " and grow. Let's connect!";
      detailsText = document.createTextNode(dT);
      break;

    case 'Dev':
      let dev = document.createTextNode('Dev');
      title.appendChild(dev);
      devC.setAttribute("class", "active-content topic-content");
      function frames1() {
        var i = 0;
        i++;
        devC.style.opacity = '' + i + '';
        if (i == 1) {
          clearInterval(id1)
        }
      }
      var id1 = setInterval(frames1, 500);
      devC.style.display = 'block';
      break;

    case 'Software':
      dT = "A collection of software programs that I built with a variety of" +
           " languages. My strongest languages are JavaScript, Python, and C++.";
      detailsText = document.createTextNode(dT);
      title.classList.add('software-title');
      break;

    case 'Visual Arts':
      dT = "A variety of visual arts projects that range from video edits" +
           " to drawing and painting.";
      detailsText = document.createTextNode(dT);
      title.classList.add('software-title');
      break;

    case 'Projects':
      dT = "Here is a collection of projects that I have worked on" +
           " professionally, as a freelancer, and out of my own interest.";
      detailsText = document.createTextNode(dT);
      break;
  }

  details.classList.add('current-details');
  title.classList.add('current-title');
  title.appendChild(titleText);
  titleHere.appendChild(title);
  details.appendChild(detailsText);
  detailsHere.appendChild(details);

  return([titleHere, detailsHere]);
}

function displayAbout() {
  let mainArray = displayContentsMain('About');
  mainArray;

  mainArray[0].style.animation = 'beseen 1s forwards';
  mainArray[1].style.animation = 'beseen 1s forwards';
}
