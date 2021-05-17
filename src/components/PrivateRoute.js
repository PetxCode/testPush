import React, { useContext } from 'react'
import {Redirect, Route} from "react-router-dom"
import { AuthContext } from './AuthState'

const PrivateRoute = ({component: RoutedComponent, ...rest}) => {
  const {current} = useContext(AuthContext)
  return (
    <Route  
      {...rest}
      render={(propsRoute) => {
        return(
          !!current ? <RoutedComponent {...propsRoute} /> : <Redirect to ="/register" />
        )
      }}

    />
  )
}

export default PrivateRoute
