function clicou() {
    console.log(document.getElementById("agradecimento").innerHTML="<b>Obrigado por clicar!</b>");
}

function redirecionar() {
    window.open("https://digitalinnovation.one/");
    //window.location.href = "https://digitalinnovation.one/";
}

function trocar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Passe o mouse aqui!"
    //alert("trocar texto");
}

function voltar(elemento) {
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o mouse";
    elemento.innerHTML = "Obrigado por passar o mouse";
    //alert("trocar texto");
}

function load() {
    alert("Pagina carregada!");
}

function funcaoChange(elemento) {
    console.log(elemento.value)
}
/*


function soma(n1, n2) {
    return n1+n2;
}

/*

function setReplace(frase, nome, novo_nome) {
    return frase.replace(nome, novo_nome)
}

function validaIdade (idade) {
    var validar
    if (idade >= 18) {
        validar = true;
    } else {
        validar =  folse;
    };
    return validar;
};

var idade = prompt("Qual sua idade: ");
console.log(validaIdade(idade));

alert(soma(4, 5));
alert(setReplace("Vai Japão", "Japão", "Brasil"));

/*
var d = new Date();

console.log("Hoje é " + d.getDate() + "/" + (d.getMonth()+1))

//alert(d.getDay());
//alert(d.getHours());
//alert(d.getMinutes());


for (let count = 0; count <= 5; count++) {
    alert(count);
};

var count = 0;

while (count <= 5) {
    console.log(count);
    alert(count)
    count++;
};

var idade = prompt("Qual sua idade: ")

//var idade = 18;

if (idade >= 18) {
    alert("maior de idade")
} else {
    alert("menor de idade")
}
*/

/*
var frutas = [{nome: "maça", cor: "vermelha"}, {nome: "uva", cor: "roxa"}];
console.log(frutas);
alert(frutas[1].nome)

var fruta ={nome: "maça", cor: "vermelha"};
console.log(fruta.nome);
alert(fruta.cor)
var lista = ["maça", "pêra", "laranja"];
lista.push("uva");
//lista.pop();
console.log(lista);
console.log(lista.revers());
//alert(lista[3]);

var nome = "Andrio Campos";
var n = 5;
var n2 = 3;
var frase = "Japão é o melhor time do mundo";
//alert("Nome: " + nome + " " + idade + " Anos"); 
//alert(idade + idade2);
console.log(nome);
console.log(n * n2);
console.log(frase.replace("Japão", "Brasil"));
alert(frase.toLowerCase());
//alert(frase.toUpperCase());
//alert(frase.replace("Japão", "Brasil")) *///