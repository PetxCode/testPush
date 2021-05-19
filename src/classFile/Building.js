import { Button, Input } from 'antd'
import React, {useState, useEffect} from 'react'

const Building = () => {
  const[name, setName] = useState("")
  const[id, setID] = useState("")
  const[viewData, setViewData] = useState([
    {id: "1", name:"Peter"},
    {id: "2", name:"Bukky"},
    {id: "3", name:"Lucky"},
  ])

  const addData = () => {
   
    // const infoData = {id, name}
    
    // viewData.push(infoData)
    const newData = [...viewData, {id, name}]
    setViewData(newData)
  }

  useEffect(()=>{
  const seeData =JSON.parse(  localStorage.getItem("localStore"))
  if(seeData){
    setViewData(seeData)
  }
  }, [])

  useEffect(()=>{
    localStorage.setItem("localStore", JSON.stringify(viewData))
  }, [viewData])



  


  return (
    <div style={{
      margin:"100px",
      width:"350px"
    }}>
      The Building File

      <div style={{
        marginTop:"20px"
      }}>
        <Input 
        placeholder="Name"
        value={name}
        onChange={(e)=>{
          setName(e.target.value)
        }}
        />
        <Input 
        placeholder="ID"
        value={id}
        onChange={(e)=>{
          setID(e.target.value)
        }}
        />
        <Button type="primary"
        style={{
          width:"100%",
          marginTop:"10px"
        }}
        onClick={()=>{
          // console.log(name)
          addData()
          console.log(viewData)
        }}
        >Add</Button>
      </div>

      <div 
      style={{
        marginTop:"40px"
      }}
      >
        <div
        style={{
          marginBottom:"20px",
          fontWeight:"bold"
        }}
        >View Data</div>
        
        <div>{
          viewData.map(({id, name})=>(
            <div key={id} > 
            <div> {name} </div>
             </div>
          ))
          }</div>
      </div>
    </div>
  )
}

export default Building
