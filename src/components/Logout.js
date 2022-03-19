import React from 'react'
import { useDispatch } from 'react-redux';
import { Navigate, Outlet } from "react-router-dom";
import {  SAVE_LOGOUT } from '../store/type';


function Logout() {
 const dispatch=useDispatch();
 const logout=()=>{
  dispatch({type:SAVE_LOGOUT})
 }


  return  [<Navigate to="/login" />,logout() ] 
}

export default Logout