import { Button, Input } from 'antd'
import React, {useEffect, useState} from 'react'

const LetsBuild = () => {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [id, setId] = useState("")
  const [data, setData] = useState([
    {id:"1", name:"Peter", email:"peter@gmail.com"},
    {id:"2", name:"James", email:"james@gmail.com"},
    {id:"3", name:"Ndidi", email:"ndidi@gmail.com"}
  ])

  const addData = () => {
    const newData = [...data, {id, name, email}]

    setData(newData)

  }

  useEffect(()=>{
  const getAll = JSON.parse(  localStorage.getItem("localStore"))
  }, [])

  useEffect(()=>{
    localStorage.setItem("localStore", JSON.stringify(data))
  }, [data])

  return (
    <div
    style={{
      marginTop:"50px",
      marginLeft:"50px"
    }}
    >
      Let's Build
      <div
        style={{
          marginTop:"20px",
          // marginLeft:"50px"
          width:"300px"
        }}
      >
       <Input 
          placeholder="Enter your Name"
          value={name}
          onChange={(e)=>{
            setName(e.target.value)
          }}
       />
       <Input 
          placeholder="Enter your Email"
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }}
       />
       <Input 
       
          placeholder="Enter your ID"
          value={id}
          onChange={(e)=>{
            setId(e.target.value)
          }}
       />
       <Button
       type="primary"
       danger
       style={{
         width:"100%",
         marginTop:"10px"
         
       }}
       onClick={()=>{
        addData()
       }}
       >Enter</Button>
      </div>

      <div style={{
        marginTop:"20px"
      }}>
{
  data.map(({id, name, email})=>(
    <div key={id}> 
      <div> 
        {name}
         </div>
     </div>
  ))
}

      </div>
    </div>
  )
}

export default LetsBuild
