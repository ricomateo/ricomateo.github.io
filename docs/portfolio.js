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

setUpButtons();
