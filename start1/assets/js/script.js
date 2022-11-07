var btn = document.getElementById('btn');
var persone = [];
const oggi = new Date();

//creo l'oggetto stampino
function Utente (nome, cognome, data) {
    this.nome = nome;
    this.cognome = cognome;
    this.data = data;
};

//messaggio di errore nascosto
window.addEventListener('DOMContentLoaded', init());
function init() {
    document.getElementById('errore').style.display = 'none';
}

//al click del button prendo i dati inseriti in input e li mando nell'array
btn.addEventListener('click', (e) => {
    e.preventDefault;
    let newNome = document.getElementById('nome').value;
    let newCognome = document.getElementById('cognome').value;
    let newData = new Date(document.getElementById('data').value);

    let newUtente = new Utente (newNome, newCognome, newData);

    if (newNome == '' || newCognome == '' || newData == '') {
        document.getElementById('errore').style.display = 'block';
        return;
    }

    persone.push(newUtente);
    console.log(persone);

//creato l'array, devo mandarlo a schermo e svuotare gli input
    stampaUtente();
    svuotaForm();
});

//funzione che calcola eta
function calcolaEta(data){
    let vita = oggi.getFullYear() - data.getFullYear();
    if (oggi.getMonth() < data.getMonth() || 
        oggi.getMonth() == data.getMonth() && oggi.getDate() < data.getDate()) {
        vita--;
    }
    return vita;
};

//crea una table row con i dati inseriti nel form
function stampaUtente(){
    document.getElementById('errore').style.display = 'none';
    let lista = document.getElementById('lista');
    lista.innerHTML = '';
    persone.forEach((elemento) => {
        let eta = calcolaEta(elemento.data);
        lista.innerHTML += `<tr><td>${elemento.nome} ${elemento.cognome}</td><td>${eta}</td></tr>`
    });
};

function svuotaForm(){
    document.getElementById('nome').value = '';
    document.getElementById('cognome').value = '';
    document.getElementById('data').value = '';
};