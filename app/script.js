// const socket = new WebSocket("ws://localhost:3000");

// function sendMessage(e){
//     e.preventDefault();
//     const input = document.querySelector('#input');
//     if(input.value){
//         socket.send(input.value);
//         input.value = ""
//     }
//     input.focus();
// }

// document.querySelector('#form').addEventListener("submit", sendMessage);

// socket.addEventListener('message', ({ data }) => {
//     const li = document.createElement("li");
//     li.textContent = data
//     document.querySelector("#messages").appendChild(li)
// })    



const socket = new WebSocket("ws://localhost:3000");

document.querySelector("#form").addEventListener("submit", sendMessage);

function sendMessage(e){
    e.preventDefault();
    const input = document.querySelector("#input")
    if(input.value){
        socket.send(input.value);
        input.value = "";
    }
    input.focus();
}

socket.addEventListener("message", ({data}) => {
    const li = document.createElement("li");
    li.textContent = data;
    document.getElementById("messages").appendChild(li);
})