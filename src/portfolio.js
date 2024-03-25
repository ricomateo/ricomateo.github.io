

function sleep(ms) {
    setTimeout(() => {}, ms);
}
  

function setUpRunning() {
    let button = document.querySelector('.run-button');
    let terminal = document.querySelector('.console-content');
    let span = document.createElement('span');
    let p = document.createElement('p');
    span.classList.add("comment");
    span.textContent = '/home/portfolio';
    p.appendChild(span);
    p.append(":~$ ./portfolio");
    terminal.appendChild(p);
    button.textContent = "Running!";
    button.style.backgroundColor = "green";

    let body = document.querySelector('body');
    let container = document.querySelector('.container');
    sleep(10000);
    body.removeChild(container);
}
// cuando clickeo en un boton, se le agrega la clase selected
// y se le saca el selected al boton que estaba selected antes.
function setUpButtons() {
    let buttons = document.querySelectorAll('.button');
    let aboutMeSection = document.querySelector('.about-me-container');
    let projectsSection = document.querySelector('.projects');
    let homeSection = document.querySelector('.presentation');
    let contactSection = document.querySelector('.contact');

    // location.assign("index.html");
    // window.location.href = "index.html";
    console.log("buttons = ", buttons);
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log("clickeaste en ", button);
            let previouslySelected = document.querySelector('.selected');
            if (previouslySelected != null) {
                previouslySelected.classList.remove('selected');
            }
            button.classList.add('selected');

            if (button.classList.contains('about-me-button')) {
                scrollToSection(aboutMeSection);
            } else if (button.classList.contains('projects-button')) {
                scrollToSection(projectsSection);
            } else if (button.classList.contains('home')) {
                scrollToSection(homeSection);
            } else if (button.classList.contains('contact-button')) {
                scrollToSection(contactSection);
            }
        })
    });
}

function replace(string, index, replacement) {
    return string.substring(0, index) + replacement + string.substring(index + replacement.length);
}

function setUpName() {
    let name = document.querySelector('.title');
    name.textContent = "                   ";
    let text = "Software developer";

    let i = 0;
    let string = name.textContent;
    let writing = true;
    const interval = setInterval(() => {
        string = replace(string, i, text[i]);
        string = replace(string, i + 1, "█");
        name.textContent = string;
        i++;
        if (i === text.length) {
            clearInterval(interval);
            writing = false;
        }
        titilate(writing);
    }, 150);
    
}

function titilate(writing) {
    if (writing) {
        console.log("still writing");
        return;
    }
    console.log("no more writing");
    let name = document.querySelector('.title');
    let j = 0;
    const interval2 = setInterval(() => {
        if (j % 2 == 0) {
            name.textContent = "Software developer";
        } else {
            name.textContent = "Software developer█";
        }
        j++;
        if (j === -1) {
            clearInterval(interval2);
        }
    }, 500);
}

function delay() {
    let container = document.querySelector('.container');
    let body = document.querySelector('body');
    body.removeChild(container);
    let j = 0;
    const interval = setInterval(() => {
        if (j === 1) {
            clearInterval(interval);
            body.appendChild(container);
        }
        j++;
    }, 2000);

}

function scrollToSection(section) {
    section.scrollIntoView({ behavior: "smooth", block: "center" });   
}

function setScrollToAbout() {

}

setScrollToAbout();
setUpName();
setUpButtons();
