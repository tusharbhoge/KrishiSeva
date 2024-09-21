import React from 'react'
import authBgImage from '../../../assets/homeImage1.jpeg'
import logo from "../../../assets/appicon.png"
import Button from '../../Button'
import bgImage from "../../../assets/homeImage2.jpeg"


const Authentication1 = () => {

  const border = "w-full px-10 m-4 py-2 border border-green-600 text-green-700 bg-white rounded-[15px] hover:bg-green-700 hover:text-white ";
  return (<>
  <div className='h-auto w-screen bg-cover bg-center  flex justify-center items-center' style={{ backgroundImage:`url(${bgImage})`}}>
    <div className='w-screen h-auto flex justify-center items-center z-50   bg-black bg-opacity-75 '>
    <div className='authContainer h-[100vh] w-[50vw] bg-cover bg-center  flex justify-center items-center ' style={{ backgroundImage:`url(${authBgImage})`}}>
      <div className='h-full w-full bg-gray-300 bg-opacity-60 flex flex-col justify-center items-center'>
          <div className='h-[110px] w-[110px] bg-white rounded-full flex justify-center items-center   '>
            <img src={logo} alt="logo" className='bg-cover bg-center h-24 w-auto' />

          </div>
          <div className='flex flex-col justify-center items-center w-[75%] h-auto text-black  '>
            <h1 className='text-3xl font-bold p-3 text-green-800 m-6'>
              Login Here !
            </h1>
            <div className='w-[100%] h-auto flex flex-col p-4 border-2 border-gray-500 rounded-lg text-xl font-semibold bg-white '>
              <h1>Username :</h1>
              <input type='text'placeholder='Email' className=' w-full rounded-lg py-2 px-4 my-3 focus:outline-none bg-transparent border-2 border-gray-400 ' required/>
              <h1>Password :</h1>
              <input type='text' placeholder='Password' className=' w-full rounded-lg py-2 px-4 my-3 focus:outline-none bg-transparent border-2 border-gray-400' required/>
              <div className='w-full flex justify-center items-center my-6'>
              <Button title='Sign in ' to="#" className={border}/>
              </div>
              <div className='flex justify-between mx-6'>
              <h1>Don't have an account ?</h1>
              <Button title="Sign up" to="/signup" className={"text-green-600"}/>
              </div>
            </div>
          </div>
      </div>
    </div>
    </div>
    </div>
 </>   
  )
}

export default Authentication1