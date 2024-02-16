//puntatori
const carta = document.getElementById('carta');

const forbice = document.getElementById('forbice');

const sasso = document.getElementById('sasso');

const computer = document.getElementById('computer');

const banner = document.getElementById('banner');

const uno = document.getElementById('uno');

const due = document.getElementById('due');

const tre = document.getElementById('tre');

const button = document.getElementById('button');

const risultato = document.createElement('h2');


let i = 0;
let j = 0;
let utente = 0;

//click
function estrazione() {
    let random = Math.floor(Math.random() * 3) + 1;
    (if i === 0) {
        if (random === 1) { //carta
            uno.style.display = "inline-block";
            i++;
        }
        if (random === 2) { //forbice
            due.style.display = "inline-block";
            i++;
        }
        if (random === 3) { //sasso
            tre.style.display = "inline-block";
            i++;
        }
    }
    if (j === 0) {
        if (random === utente) {
            risultato.textContent = 'Pareggio';
            banner.appendChild(risultato);
            risultato.style.display = "inline-block";
            banner.style.backgroundImage = "url('https://staticgeopop.akamaized.net/wp-content/uploads/sites/32/2023/09/carta-geografica-svizzera.jpg')";
            banner.style.backgroundPosition = "left";
            banner.style.backgroundSize = "170px auto"; 
            j++;
        } else if (random === 1 && utente === 2) {
            risultato.textContent = 'Hai vinto';
            banner.appendChild(risultato);
            risultato.style.display = "inline-block";
            banner.style.backgroundColor = "Green";
            j++;
        } else if (random === 1 && utente === 3) {
            risultato.textContent = `Hai perso ..-. .-. --- -. - .- -. -..  / - .-. --- .--. .--. ---  / ... -.-. .- .-. ... ---`;
            banner.appendChild(risultato);
            risultato.style.display = "block";
            banner.style.backgroundColor = "Red";
            j++;
        } else if (random === 2 && utente === 1) {
            risultato.textContent = `Hai perso ..-. .-. --- -. - .- -. -..  / - .-. --- .--. .--. ---  / ... -.-. .- .-. ... ---`;
            banner.appendChild(risultato);
            risultato.style.display = "block";
            banner.style.backgroundColor = "Red";
            j++;
        } else if (random === 2 && utente === 3) {
            risultato.textContent = 'Hai vinto';
            banner.appendChild(risultato);
            risultato.style.display = "inline-block";
            banner.style.backgroundColor = "Green";
            j++;
        } else if (random === 3 && utente === 1) {
            risultato.textContent = 'Hai vinto';
            banner.appendChild(risultato);
            risultato.style.display = "inline-block";
            banner.style.backgroundColor = "Green";
            j++;
        } else if (random === 3 && utente === 2) {
            risultato.textContent = `Hai perso ..-. .-. --- -. - .- -. -..  / - .-. --- .--. .--. ---  / ... -.-. .- .-. ... ---`;
            banner.appendChild(risultato);
            risultato.style.display = "block";
            banner.style.backgroundColor = "Red";
            j++;
        }
    }
}


carta.addEventListener('click', function () {
    utente = 1;
    estrazione();
})

forbice.addEventListener('click', function () {
    utente = 2;
    estrazione();
})

sasso.addEventListener('click', function () {
    utente = 3;
    estrazione();
})

button.addEventListener('click', function () {
    i = 0;
    j = 0;
    utente = 0;
    uno.style.display = "none";
    due.style.display = "none";
    tre.style.display = "none";
    risultato.style.display = "none";
    banner.style.backgroundColor = "white";
    banner.style.backgroundImage = "";
})





