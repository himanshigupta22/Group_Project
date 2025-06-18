import React from 'react'

export default  async function Fetched() {
  try{ 
    const url="localhost:8080/auth/fetch";
    
  }
  catch(err){
    console.log(err)
  }
    return (
    <div>Fetched</div>
  )
}
