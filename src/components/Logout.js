import React from 'react'
import { Navigate, Outlet } from "react-router-dom";


function Logout({setIsLogged}) {
  return [localStorage.token = JSON.stringify(false), setIsLogged( JSON.parse(localStorage.token)), <Navigate to="/login" />] 
}

export default Logout