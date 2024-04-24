import React, { useState } from 'react'
import Message from './Message'
import "./toggleBtn.css";
const Button = () => {
    const [alert,fnAlert] = useState(false);
    function handleToggle(){
        // if(alert){
        //     fnAlert(false)
        // }
        // else{
        //     fnAlert(true)
        // }
        fnAlert(!alert)
    }
  return (
    <>
        { alert ? <Message></Message> : null}
        <button onClick={handleToggle}>Send Message</button>
    </>
  )
}

export default Button