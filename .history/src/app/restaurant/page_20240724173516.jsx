import React from 'react'
import 
import Login from '@/app/_components/Login'
import Signup from '@/app/_components/Signup'
function page() {
    const [login,setLogin]= useState(true);
  return (
    <>
    <h1> Login/ Sign-Up page.</h1>

    <Login/>
    <Signup/>
    <button> This is button</button>
    </>
  )
}

export default page