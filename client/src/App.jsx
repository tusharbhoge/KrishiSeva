import React from "react"
import Home from "./components/Parent/Home"
import { Outlet } from "react-router-dom"
import Features from "./components/Features"
import Card from "./components/Card"
import Contract from "./components/Contract"

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
