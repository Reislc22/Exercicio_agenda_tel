const form = document.getElementById('formulario-telefone');
const inputNomeContato = document.getElementById('nome');
const inputTelContato = document.getElementById('tel');
const numeroRepete = [];

let linhas = ""

form.addEventListener('submit',function(e){
    e.preventDefault();

    adicionaLinha();

    atualizaTabela();
});

function adicionaLinha() {

    const inputNomeContato = document.getElementById('nome');
    const inputTelContato = document.getElementById('tel');
    
    if (numeroRepete.includes(inputTelContato.value)){
        alert (`o numero: ${inputTelContato.value} já existe`)
    }  else {

    numeroRepete.push(inputTelContato.value);
    
    let linha = '<tr>';
    linha += `<td>${inputNomeContato.value}</td>`;
    linha += `<td><a href="tel">${inputTelContato.value} </a>`;
    linha += '</tr>';
    linhas += linha;
    }
    inputNomeContato.value = '';
    inputTelContato.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
