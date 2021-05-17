import React from 'react'
import PostData from './Details/PostData'
import ViewPost from './Details/ViewPost'
import HeaderPage from './HeaderPage'

const HomeScreen = () => {
  return (
    <div
    style={{
      margin:"50px"
    }}
    >
      <div>
      <PostData />
      <ViewPost />
      </div>
     
    </div>
  )
}

export default HomeScreen
