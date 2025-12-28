import {WebSocketServer} from 'ws';

const wss=new WebSocketServer({port:8080});

//event handler --->like app.get("/users",{}); on express https
wss.on("connection",function(socket){
    console.log("user connectted");
    // setInterval(() => {
    //     socket.send("Curr price of zomato share is " + Math.random());
    // }, 500);

    //---NOW LETS BUILD A PING PONG APPICATION WHERE IF WE SEND PING IT WILL RETURN PONG
    socket.on("message",(e)=>{
        if(e.toString() === "ping"){
            socket.send("pong");
        }
    })

    
})