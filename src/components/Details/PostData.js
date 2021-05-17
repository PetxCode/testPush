import { Button, Input } from 'antd'
import React, {useState, useEffect, useContext} from 'react'
import { app } from '../../base'
import { AuthContext } from '../AuthState'



const makeNewPost = app.firestore().collection("post")
const PostData = () => {
  const {current} = useContext(AuthContext)

  const[post, setPost] = useState('')
  const [img, setImg] = useState(null)

  const uploadImage = async(e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setImg(await fileRef.getDownloadURL())
  }


const makePost1 = async() => {
  const makingPost = app.auth().current

  if(makingPost){
    await makeNewPost.doc().set({
      post,
      img,
      createdBy: current.uid,
      createdAt: Date.now().toString()
    })
    // setImg(null)
    // setPost("")
  }
}
const makePost = async() => {
 
    await makeNewPost.doc().set({
      post,
      img,
      createdBy: current.uid,
      createdAt: Date.now().toString()
    })
    setImg(null)
    setPost("")
  
}


  return (
    <div>
      <div style={{
        width:"300px"
      }}>
        <Input
          type="file"
          onChange={uploadImage}
        />
        <br/>
        <Input 
          placeholder="What's on your mind"
          value={post}
          onChange={(e)=>{
            setPost(e.target.value)
          }}
        />
        <Button onClick={makePost} >Post</Button>
      </div>
    </div>
  )
}

export default PostData
