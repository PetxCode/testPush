import { Button, Input } from 'antd'
import React,{useState, useEffect, useContext} from 'react'
import { app } from '../../base'
import { AuthContext } from '../AuthState'




const userData = app.firestore().collection("user")

const UpdateProfile = () => {

  const {current} = useContext(AuthContext)

  const [user, setUser] = useState("")
  const [email, setEmail] = useState("")
  const [avatar, setAvatar] = useState(null)


  const uploadImage = async(e) => {
    const file = e.target.files[0]
    const storageRef = app.storage().ref()
    const fileRef = storageRef.child(file.name)
    await fileRef.put(file)
    setAvatar(await fileRef.getDownloadURL())
  }

  const finalPush = async () => {
    const userFile = app.auth().currentUser

    if(userFile){
      await userData.doc(userFile.uid).update({
        user,
       pix: user.charAt(0),
        avatar
      })
    }
  }

  return (
    <div>
      <div style={{
        width:"300px",
        margin:"60px"
      }} >

        <Input placeholder="User Name"
        type="file"
        onChange={uploadImage}
        />
        

        <Input placeholder="User Name"
        value={user}
        onChange={(e)=>{
          setUser(e.target.value)
        }}
        />

       

        <Button onClick={finalPush} > Edit</Button>

      </div>
    </div>
  )
}

export default UpdateProfile
