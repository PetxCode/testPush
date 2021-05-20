import { Header } from 'antd/lib/layout/layout'
import React, { useContext } from 'react'
import { Link, useHistory } from 'react-router-dom'
import { app } from '../base'
import { AuthContext } from './AuthState'

const HeaderPage = () => {
  const hist = useHistory()
  const {current} = useContext(AuthContext)
  return (
    <div>
      <Header style={{
        display:"flex",
        justifyContent:"space-around"
      }}>

        <div >
          <Link
          style={{
            color:"white"
          }} 
          to="/"
          >
          Home</Link>
        </div>
        <div 
       
        >
         <Link
          style={{
            color:"white"
          }}
          to="/dashboard"
         >
         Deshbord</Link>
        </div>
        <div 
       
        >
         <Link
          style={{
            color:"white"
          }}
          to="/card"
         >
         Card</Link>
        </div>
        <div>
         {
           current ? (
            <Link
            style={{
              color:"white"
            }}
            onClick={()=>{
              app.auth().signOut()
              hist.push('/')
            }}
            >LogOut</Link>
           ):(
             <Link
             style={{
              color:"white"
            }}
            to="/"
             >Sign In</Link>
           )
         }
        </div>
      </Header>
    </div>
  )
}

export default HeaderPage
