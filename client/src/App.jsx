import React from "react"
import Home from "./components/Parent/Home"
import { Outlet } from "react-router-dom"
import Footer from "./components/Parent/Footer"

import Contract from "./components/Parent/Contract"
import Card from "./components/Parent/Card"
import Testimonial from "./components/Parent/Testimonial"

function App() {

  return (
    <>
   <Outlet/>
   <Contract/>
   <Card/>
   <Testimonial/>
   <Footer/>

   
  
    </>
  )
}
              
export default App
