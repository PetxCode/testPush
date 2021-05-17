import { Button } from 'antd'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { app } from '../base'


const userData = app.firestore().collection("user")
const Deshboard = () => {

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [file, setFile] = useState(null)

const readData = async() => {
  const readNow = await app.auth().currentUser;

  if(readNow){
    await userData.doc(readNow.uid).get().then((user)=>{
      setFile(user.data())
    })
  }
}

useEffect(()=>{
  readData()
},[])

  return (
    <div>
      <div>
      <Button>
        <Link to="edit_profile"> Edit Profile</Link>
        </Button>
      
      </div>

      <div>
<div
style={{
  backgroundColor:"tomato",
  width:"80px",
  height:"80px",
  borderRadius:"40px",
  display:"flex",
  justifyContent:"center",
  alignItems:"center"
}}
>
 {
   file ? (
    <img 
    alt={file && file.pix}
    src={file && file.avatar}
style={{
  width:"80px",
  height:"80px",
  borderRadius:"40px",
  objectFit:"cover"
}}
    />
   ): (
     
    <div
    style={{
      fontWeight:"bold"
    }}
    > {file && file.pix} </div>
   )
 }
</div>
        <div>
          {file && file.user}
        </div>
      </div>
    </div>
  )
}

export default Deshboard
