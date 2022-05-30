// var xhr = new XMLHttpRequest();


// xhr.onreadystatechange = function (){
//     if(xhr.readyState == 4){
//         console.log(xhr);
//     }
// }

// xhr.open("GET", "http://localhost:8080/passagens/?dataInicio=2020-04-11&dataFim=2020-04-14");
// xhr.send();

// const button = document.querySelector(".button")

// button.addEventListener('submit', function (event){
//     event.preventDefault();//para não atualizar o form

//     xhr.send();
// });


const button = document.querySelector(".button")

const IdataInicio = document.querySelector(".dataIn")
const IdataFim = document.querySelector(".dataFi")
const forma = document.querySelector(".forma")




function verificarDisponibilidade(){

    forma.addEventListener("submit", function(event){
        event.preventDefault();

        let dados = {
           IdataInicio,
           IdataFim 
        };
        alert(dados);
    })  



    fetch("http://localhost:8080/passagens/?dataInicio=2020-04-11&dataFim=2020-04-14")
        .then(function (response) {
            return response.json();
        })
        .then(function (response) {
            console.log(response);
        })
};

button.addEventListener("click", function(){
    event.preventDefault();

    verificarDisponibilidade();
});

