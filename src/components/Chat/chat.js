import React,{useState,useEffect} from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import './chat.css'
import InfoBar from '../InfoBar/infoBar'
import Input from '../Input/Input'
let socket;

const Chat=({location})=>{
    const [name,setName]=useState('');
    const [room,setRoom]=useState('');
    const [message,setMessage]=useState('')
    const [messages,setMessages]=useState([])
    const ENDPOINT='localhost:5000';
    useEffect(()=>{
        const {name,room}=queryString.parse(location.search) //we will get a new 
        
        socket=io(ENDPOINT);
        setName(name)
        setRoom(room)
        console.log(socket)
        socket.emit('join',{name,room},(error)=>{
            if(error)
            {
                alert(error)
            }


        })
        //this will work as unmount  of comp lifecycle to discoonect the connection 
        return ()=>{
            socket.emit('disconnect')
            socket.off()
        }

        // console.log(name,room)
    },[ENDPOINT,location.search])
    //user message welcome
    useEffect(()=>{
        socket.on('message',(message)=>{
            setMessages([...messages,message])

        })
    },[messages])
    //function for sending messages
    const sendMessage=(event)=>{
         event.preventDefault()
        if(message)
        {
            socket.emit('sendMessage',message,()=>setMessage(' '))
        }
    }
    console.log(message,messages)
    return(
        <div className="outerContainer">
            <div className="container">
                <InfoBar room={room}/>
                <Input message={message} setMessage={setMessage} sendMessage={sendMessage}/>

                {/* <input value={message} 
                onChange={(event)=>setMessage(event.target.value)}
                onKeyPress={event=>event.key==='Enter'?sendMessage(event):null }
                /> */}
            </div>
        </div>
    )
}
export default Chat