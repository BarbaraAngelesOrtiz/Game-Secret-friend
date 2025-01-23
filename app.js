// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let listaAmigos = [];
// Función para agregar un amigo a la lista
function agregarAmigo() {

    let input = document.getElementById("amigo");
    let nombre = input.value;
    nombre = nombre.trim();

    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }

    let nombreRepetido = false;
    for (let i = 0; i < listaAmigos.length; i++) {
        if (listaAmigos[i] === nombre) {
            nombreRepetido = true;
            break;
        }
    }

    if (nombreRepetido) {
        alert("Este nombre ya está en la lista.");
    } else {
      
        listaAmigos.push(nombre);
        actualizarLista();
        input.value = "";
    }
}
// Función para actualizar la lista de amigos en el HTML
function actualizarLista() {

    let listaElement = document.getElementById("listaAmigos");
    listaElement.innerHTML = "";

    for (let i = 0; i < listaAmigos.length; i++) {
        let li = document.createElement("li");
        let amigo = listaAmigos[i];
        li.textContent = amigo;
        let espacio = document.createTextNode(" ");
        li.appendChild(espacio);
        let botonEliminar = document.createElement("button");
        botonEliminar.textContent = "❌";
        botonEliminar.classList.add("btn-delete");

        botonEliminar.onclick = function () {
            eliminarAmigo(i);
        };
        li.appendChild(botonEliminar);
        listaElement.appendChild(li);
    }
}
// Función para eliminar un amigo de la lista
function eliminarAmigo(indice) {

    let nuevaLista = [];
    for (let i = 0; i < listaAmigos.length; i++) {
        if (i !== indice) {
            nuevaLista.push(listaAmigos[i]);
        }
    }
    listaAmigos = nuevaLista;
    actualizarLista();
}
// Función para sortear un amigo secreto
function sortearAmigo() {

    if (listaAmigos.length === 0) {
        alert("La lista está vacía. Agrega al menos un amigo antes de sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * listaAmigos.length);
    let amigoSecreto = listaAmigos[indiceAleatorio];
    let resultadoElement = document.getElementById("resultado");
    resultadoElement.innerHTML = "";

    let liResultado = document.createElement("li");
    liResultado.textContent = "🎉 Amigo Secreto: " + amigoSecreto + " 🎉";
    resultadoElement.appendChild(liResultado);
}
