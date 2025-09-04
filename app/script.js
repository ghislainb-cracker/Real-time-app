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
    
    
})