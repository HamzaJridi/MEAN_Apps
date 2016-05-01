var socket = io.connect('http://localhost:8000', {'forceNew':true});
//listen to the emitted event 'messages' from the server
socket.on("messages", function(data){
    //the data is the array taht contains the messages
    console.log(data);
    var html = data.map(function (data) {
        return (`
            <div class='name'>
                ${data.userName}:
            </div>
            <a href=${data.content.link} class='message' target=blank>
                ${data.content.text}
            </a>
        `)
    }).join(" ");

    document.getElementById('messages').innerHTML = html;
});

function addMessage(e){
    var payload = {
        content:{
            text:document.getElementById("message").value,
            link:document.getElementById("linkAddress").value,
        },
        ts:Date.now()
    };

    socket.emit("new-message",payload)
    return false;
}