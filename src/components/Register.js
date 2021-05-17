import { Button, Input } from 'antd'
import React,{useEffect, useState} from 'react'
import { useHistory } from 'react-router'
import { app } from '../base'


const userData = app.firestore().collection("user")

const Register = () => {
  const hist = useHistory()
  const[user, setUser] = useState("")
  const[email, setEmail] = useState("")
  const[password, setPassword] = useState("")
  const [avatar, setAvatar] = useState(null)
  const [open, setOpen] = useState(true)

  const toggle = () => {
    setOpen(!open)
  }

  const imageUpload = async(e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setAvatar(await fileRef.getDownloadURL())
  }

  const SignInNow = async() => {
   await app.auth().signInWithEmailAndPassword(email, password)

    

    hist.push('/')
  } 

  const SignUpNow = async() => {
    const register = await app.auth().createUserWithEmailAndPassword(email, password)

    await userData.doc(register.user.uid).set({
      user,
      email,
      password,
      pix: user.charAt(0),
      createdID: register.user.uid,
      avatar
    })


    hist.push('/')
  } 

  return (
    <div style={{
      width:"300px",
      display:'flex',
      flexDirection:"column",
      justifyContent:"center",
      alignSelf:"center",
      margin:"50px"
    }} >
     {
       open ? (<div>
         
         <Input 
        placeholder = "User Name"
        value={user}
        onChange={(e)=>{
          setUser(e.target.value)
        }}
        />
        <br/>
         <Input 
        placeholder = "Email"
        value={email}
        onChange={(e)=>{
          setEmail(e.target.value)
        }}
        />
        <br/>
        <Input 
        placeholder = "Password"
        value={password}
        onChange={(e)=>{
          setPassword(e.target.value)
        }}
        />
        <br/>
        <Button
        onClick={SignUpNow}
        >Sign Up</Button>
  
        <div
        style={{
          display:'flex',
               }}
        >
        <div>Don't have an account yet,</div>
        <div style={{
          marginLeft:"5px",
          cursor:'pointer'
        }} 
        onClick={()=>{
          toggle()
          console.log(open)
        }}
        >Please sign up here</div>
        </div></div> )
        :
        
        (<div> 
          <Input 
      placeholder = "Email"
      value={email}
      onChange={(e)=>{
        setEmail(e.target.value)
      }}
      />
      <br/>
      <Input 
      placeholder = "Password"
      value={password}
      onChange={(e)=>{
        setPassword(e.target.value)
      }}
      />
      <br/>
      <Button
      onClick={SignInNow}
      >Sign In</Button>

      <div
      style={{
        display:'flex',
             }}
      >
      <div>Don't have an account yet,</div>
      <div style={{
        marginLeft:"5px",
        cursor:'pointer'
      }} 
      onClick={()=>{
        toggle()
        console.log(open)
      }}
      >Please sign up here</div>
      </div>
      </div>)
     }
    </div>
  )
}

export default Register
