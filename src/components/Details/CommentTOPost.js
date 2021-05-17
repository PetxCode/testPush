import { Button, Input } from 'antd'
import React, {useState, useEffect} from 'react'
import { app } from '../../base'



const commentPost = app.firestore().collection("post")

const CommentTOPost = ({createdBy, id}) => {
  const [comment, setComment] = useState('')

const makeComment = async() => {
  await commentPost.doc(id).collection("çomment").doc().set({
comment,
createdAt: Date.now().toLocaleString()
  })
  setComment("")
}

  return (
    <div style={{display:"flex"}}>
     <Input
        placeholder="what do you have to say??"
        value={comment}
        onChange={(e)=>{
          setComment(e.target.value)
        }}
     />
     <Button
     onClick={()=>{
       console.log(id)
       console.log(createdBy)
       console.log("Hello")
       makeComment(id)
     }}
     >comment Now</Button>
    </div>
  )
}

export default CommentTOPost
