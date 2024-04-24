import React from 'react'
const User = (props) => {
  const {id ,name,age,img ,getId} = props;
  function handleGetId(){
    getId(id);
  }
  return (
    <div className="user">
        <div className='image'><img src={img} alt="" /></div>
        <h2>{name}</h2>
        <h2>{age}</h2>
        <button onClick={handleGetId}>Remove</button>
    </div>
  )
}

export default User