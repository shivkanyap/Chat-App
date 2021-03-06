import React from 'react'
// import '../InfoBar/infoBar.css'


import './Input.css'

const Input=({message,setMessage,sendMessage})=>(
   <form className="form">
       <input
       className="input"
       type="text"
       placeholder="Type your Message.."
       value={message}
    //    onChange={(event)=>setMessage(event.target.value)}
         onChange={({ target: { value } }) => setMessage(value)}
       onKeyPress={event=>event.key === 'Enter' ?sendMessage(event) : null}/>
         <button className="sendButton" onClick={(event)=>sendMessage(event)}>Send</button>
   </form>
  
)
export default Input