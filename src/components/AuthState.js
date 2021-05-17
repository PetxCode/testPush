import React, {createContext, useState, useEffect} from "react"
import {app} from '../base'

export const AuthContext = createContext()

export const AuthProvider = ({children}) => {

  const[current, setCurrent] =  useState([])

  useEffect(()=>{
    app.auth().onAuthStateChanged((user)=>{
      setCurrent(user)
    })

    },[])
  return (
    <AuthContext.Provider
    value={{current, mgs:"Hello"}}
    >{children}</AuthContext.Provider>
  )
};