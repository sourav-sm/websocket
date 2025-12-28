import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const [socket,setSocket]=useState();
  const inputRef=useRef();

  function sendMessage(){
    if(!socket)return;

    const message=inputRef.current.value;
    //@ts-ignore
    socket.send(message);
  }

  useEffect(()=>{
    const ws=new WebSocket("ws://localhost:8080");
    setSocket(ws);

    ws.onmessage=((e)=>{
      alert(e.data);
    })
  },[])//as we want to call this on every mount hence we have this []

  return (
    <div>
      <input ref={inputRef} type='text' placeholder='Enter a message'></input>
      <button onClick={sendMessage}>Send</button>
    </div>
  )
}

export default App
