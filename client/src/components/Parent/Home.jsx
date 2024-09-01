import React from 'react'
import logo from "../../assets/Agrirental.png"
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import bg from '../../assets/homeImage2.jpeg'
import Button from '../Button';

const HomeCard=()=>{
  return(
    <>
    <div className='h-[300px] w-[250px] bg-white'>

    </div>
    </>
  )
}

const Home = () => {
  return (
    <>
        <Navbar/>
      <div className='h-screen w-full bg-green-500 bg-cover bg-center flex justify-center items-center   ' style={{backgroundImage: `url(${bg})` }}>
       
       
        <div className='h-full w-full bg-black bg-opacity-60 flex  flex-col justify-center p-20 items-center pt-40'>
          <h1 className='text-white font-bold text-2xl p-6'>
            Namaste! Welcome to KrishiSeva.
          </h1>
          <h1 className='text-green-500 font-bold text-5xl'>
            KrishiSeva is a platform for Farmers
          </h1>
          <h1 className='text-white font-bold text-3xl p-8 '>
            Providing a seamless experience
          </h1>
          <Button title="Explore More" className="text-xl flex justify-center  items-center h-12 w-auto p-4 border font-bold border-white rounded-[8px] text-white bg-green-600 hover:bg-green-800 "/>
        </div> 
  

      </div>
 
    </>
  )
}

export default Home
