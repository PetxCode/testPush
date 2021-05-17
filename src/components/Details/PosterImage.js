import React, {useState, useEffect} from 'react'
import { app } from '../../base'
import moment from "moment"


const userData = app.firestore().collection('user')
const PosterImage = ({createdBy, createdAt}) => {
  const[poster, setPoster] = useState([])

  const posterFile = async() => {
    await userData.doc(createdBy).get().then(user => {
      setPoster(user.data())
    } )
  }

  useEffect(()=>{
    posterFile()
  },[])
  return (
    <div>
      <br/>
      {/* <div>{createdBy}</div> */}
      <div style={{
        display:"flex",
        flexDirection:"row"
      }}>

        
      
      
      <img  
alt={poster && poster.user}
src={poster && poster.avatar}
style={{
  width:"50px",
  height:"50px",
  borderRadius:"25px",
  objectFit:"cover",
  marginBottom:"10px",
  marginRight: "10px"
}}

/>
<div>

<div>{poster && poster.user}</div>
<div>{poster && poster.email}</div>
<div>{moment(createdAt).fromNow()}</div>
</div>
      </div>

    </div>
  )
}

export default PosterImage
