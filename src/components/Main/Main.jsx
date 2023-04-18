import React from 'react'
import NavBar from '../NavBar/NavBar.jsx'
import { Outlet } from 'react-router-dom'

export default function Main() {
  return (
    <>
    <NavBar use={use} logout={logout}/>
    <Outlet/>
    </>
  )
}
