import React from "react"
import Home from "./components/Parent/Home"
import { Outlet } from "react-router-dom"


import Contract from "./components/Parent/Contract"
import Card from "./components/Parent/Card"

function App() {

  return (
    <>
   <Outlet/>
   <Contract/>
   <Card/>
  
    </>
  )
}
              
export default App
