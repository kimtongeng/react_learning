import React, { useState } from 'react'
import User from './User'
import data from "./data.js";
const ListUser = () => {
  
  const [users,setUser] = useState(data);
  function getUserId(id){
    const filterUserData = users.filter(function(user){
      if(user.id !== id){
        return user;
      }
    })
    setUser(filterUserData)
  }
  function handleClear(){
    setUser([]);
  }
  return (
    <>
      <div className="listUser">
        {
          users.map((user)=>{
            return <User {...user} getId={getUserId} key={user.id}/>
          })
        }
        <button onClick={handleClear}>clear</button>
      </div>
        
    </>
  )
}

export default ListUser