import React, { useEffect, useState } from 'react'
import { useForm } from "react-hook-form"
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { useNavigate } from 'react-router';
const LoginForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) =>{
    console.log(errors)
    console.log(data)
    reset()
  }

    
  return (
    <>
    <div className='flex justify-center w-[1200px] shadow-lg mx-auto mt-16 '>
      <div className='w-1/2 h-[700px] '>
        <div>
          <img src="./assets/images/logo1.png" className='' alt="" />
        </div>
        <div className='flex flex-col items-center gap-8'>
         <div>
         <h1 className='text-[#C1C242] text-4xl font-bold'>Sign in to StarFills</h1>
         </div>
         <div className='flex gap-4'>
          <img src="./assets/images/facebook.png" className='object-contain' alt="" />
          <img src="./assets/images/google.png" className='object-contain' alt="" />
          <img src="./assets/images/linkendin.png" className='object-contain' alt="" />
         </div>
         <div>
          <p className='text-2xl font-light'>or use ur email account</p>
         </div>
         <div className=''>
         <form className='flex flex-col items-center gap-8' onSubmit={handleSubmit(onSubmit)}>
      
      <input type='email'  placeholder='Enter your Email' className={`w-[426px] pl-12 h-[72px] bg-[#CCCD214F]  rounded-md text-black font-medium outline-none ${errors.email && 'border-2 border-red-500'} `} {...register("email",{ required :true})} /> <MdOutlineMail className='absolute top-[420px] left-56 text-2xl'/>
       
      
      <input type='password' placeholder='Enter your Password' className={`w-[426px]  pl-12 h-[72px] bg-[#CCCD214F] rounded-md  text-black font-medium outline-none ${errors.password && 'border-2 border-red-500'}`} {...register("password", { required: true })} /> <RiLockPasswordFill className='absolute top-[520px] left-56 text-2xl'/>
     

      <button onClick={()=>navigate('/productpage')} className=' w-[274px] h-[72px] rounded-md bg-[#BDBE3E] text-black font-bold' type='submit'>Submit</button>
    </form>
    <div>
      <p className='text-2xl font-light text-center'>Forgot Password</p>
    </div>
         </div>
        </div>

      </div>
      <div>
        <div className='flex flex-col items-center'>
          <h1 className='absolute top-40 text-5xl text-white font-bold'>Welcome Back!</h1>
          <h1 className='absolute top-[70%] text-3xl text-white font-bold'>Don’t have an account?</h1>
          <button onClick={()=>navigate('/signup')}  className=' w-[274px] h-[72px] absolute top-[75%] rounded-md bg-white text-black font-bold' type='submit'>SignUp</button>
        </div>
        <img src="./assets/images/cover.png" className='object-cover  h-[700px]' alt="" />
      </div>
      
    </div>
    </>
  )
}

export default LoginForm



// ${validation.isemail ? 'border-2 border-red-500 duration-300 transition ease-in-out' : 'border-none'}`}
//  ${validation.ispassword ? 'border-2 border-red-500 duration-300 transition ease-in-out': 'border-none'}`}