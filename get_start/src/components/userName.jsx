import React from 'react'
const name = ["meng","meng Again","still meng"]

const showName = name.map(function(n){
    return <h1>{n}</h1>
})

const UserName = () => {
  return (
    <div>{name.map(n=><h1>{n}</h1>)}</div>
  )
}

export default UserName