import React,{useContext, useState} from 'react'
import { AuthContext } from './components/AuthState'
import PrivateRoute from './components/PrivateRoute'
import SignIn from './components/Register'
import Register from './components/Register'


const Test = () => {
  const {mgs} = useContext(AuthContext)
  const [open, setOpen] = useState(false)
  const toggle = () => {
    setOpen(!open)
  }
  return (
    <div>
     {/* <Register /> */}
   <PrivateRoute/>
    
    </div>
  )
}

export default Test
