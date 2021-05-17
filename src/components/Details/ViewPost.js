import React, {useEffect, useState} from 'react'
import { app } from '../../base'
import CommentTOPost from './CommentTOPost'
import PosterImage from './PosterImage'


const postedData = app.firestore().collection("post")
const ViewPost = () => {
  const [view, setView] = useState([])

  const viewPostData = async() => {
    await postedData.onSnapshot((Snapshot)=>{
      const r = []
      Snapshot.forEach(doc => {
        r.push({...doc.data(), id: doc.id})
      })
      setView(r)
    })
  }

  useEffect(()=>{
    viewPostData()
    console.log(view)
  },[])

  return (
    <div>
      {
        view.map(({post, id, img, createdBy, createdAt})=>(
          <div key={id} > 
          <PosterImage createdBy={createdBy} createdAt={createdAt}  />
         <div>  {
            img ? <img 
            alt="pix"
            src={img}
            style={{
              width:"300px",
              height:"160px",
              objectFit:"cover",
              borderRadius:"5px"
            }}
          />: null
          }
          </div>
            <div> {post} </div>
            <div>
               <CommentTOPost createdBy={createdBy} createdAt={createdAt} id={id} />  
               </div>
          </div>
        ))
        
      }
    </div>
  )
}

export default ViewPost
