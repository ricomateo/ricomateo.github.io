function setUpCompilation() {
    let button = document.querySelector('.compile-button');
    button.addEventListener('click', () => {
        let terminal = document.querySelector('.console-content');
        let span = document.createElement('span');
        let p = document.createElement('p');
        span.classList.add("comment");
        span.textContent = '/home/portfolio';
        p.appendChild(span);
        p.append(":~$ gcc portfolio.c -o portfolio");
        terminal.appendChild(p);
        button.textContent = "Compiled!";
        button.style.backgroundColor = "green";
        let runButton = document.querySelector('.run-button');
        runButton.style.backgroundColor = "rgb(0, 122, 204)";
        runButton.addEventListener('click', setUpRunning);
    })
}

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
    console.log("buttons = ", buttons);
    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            console.log("clickeaste en ", button);
            if (button.classList.contains('selected')) return;
            let previouslySelected = document.querySelector('.selected');
            if (previouslySelected != null) {
                previouslySelected.classList.remove('selected');
            }
            button.classList.add('selected');
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

//delay();
setUpName();
setUpButtons();
