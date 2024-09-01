import React, { useEffect, useState } from 'react'
import Button  from '../Button'
import { Link } from 'react-router-dom'
import logo from "../../assets/Agrirental.png"

const Navbar = (props) => {
    const [scrollY,setScrollY]=useState(0);
    const [top,setTop]=useState("top-0");
    
    useEffect(()=>{
        const handleScroll=()=>{
            const currentScroll=window.scrollY;
            setScrollY(currentScroll);
            if(currentScroll>10){
                setTop("top-[-150px]");
            }
            else{
                setTop("top-0");
            }
        };


        window.addEventListener("scroll",handleScroll);
        return ()=>{window.removeEventListener("scroll",handleScroll)};

    } ,[scrollY]);

  return (
   
    <nav className={`w-full h-24 ${top} left-0 bg-white fixed flex justify-between px-14 items-center transition-all duration-300`}>
        <Link to="/"><img src={logo} alt="logo" className='h-20 w-auto p-3' /></Link>
        <Button title="Register" className="  text-xl flex justify-center text-green-700 items-center h-10 w-auto p-4 border font-bold border-green-500 rounded-[8px] hover:text-white hover:bg-green-600"/>

    </nav>
    
  )
}

export default Navbar
