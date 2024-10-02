import React from 'react'
import { useForm } from "react-hook-form"
import { MdOutlineMail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { useNavigate } from 'react-router';
const SignupForm = () => {
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset
  } = useForm()

  const onSubmit = (data) =>{
    console.log(data)
    reset()
    console.log(register)
  }
    
  return (
    <>
    <div className='flex justify-center w-[1200px] shadow-lg mx-auto mt-16 '>
      <div>
        <div className='flex flex-col items-center'>
            <img src="./assets/images/logo2.png" className='absolute left-32' alt="" />
          <h1 className='absolute top-40 text-5xl text-white font-bold'>Welcome Back!</h1>
          <h1 className='absolute top-[70%] text-3xl text-white font-bold'>Already Have An Account?</h1>
          <button onClick={()=>navigate('/signin')} className=' w-[274px] h-[72px] absolute top-[75%] rounded-md bg-white text-black font-bold' type='submit'>SignIn</button>
        </div>
        <img src="./assets/images/cover.png" className='object-cover  h-[700px]' alt="" />
      </div>
      <div className='w-1/2 h-[700px] '>
        <div>
          <img src="./assets/images/carbon_logo-slack.png" className='' alt="" />
        </div>
        <div className='flex flex-col items-center gap-4'>
         <div>
         <h1 className='text-[#C1C242] text-4xl font-bold'>Create Account</h1>
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
         <form className='flex flex-col items-center gap-6' onSubmit={handleSubmit(onSubmit)}>
      
      <input type='text'  placeholder='Enter your name' className={`w-[426px] pl-12 h-[72px] bg-[#CCCD214F]  rounded-md text-black font-medium outline-none ${errors.username && 'border-2 border-red-500'} `} {...register("username",{ required :true})} /> <FaUser className='absolute top-[270px] left-[52%] text-2xl'/>
       

      <input type='email'  placeholder='Enter your email' className={`w-[426px] pl-12 h-[72px] bg-[#CCCD214F]  rounded-md text-black font-medium outline-none ${errors.email && 'border-2 border-red-500'}`} {...register("email",{ required :true})} /> <MdOutlineMail className='absolute top-[365px] left-[52%] text-2xl'/>

      <input type='password' placeholder='Enter your password' className={`w-[426px]  pl-12 h-[72px] bg-[#CCCD214F] rounded-md  text-black font-medium outline-none ${errors.password && 'border-2 border-red-500'}`} {...register("password", { required: true })} /> <RiLockPasswordFill className='absolute top-[465px] left-[52%] text-2xl'/>
     
  

      <button onClick={()=>navigate('/signin')} className=' w-[274px] h-[72px] rounded-md bg-[#BDBE3E] text-black font-bold' type='submit'>Submit</button>
    </form>
    <div>
      <p className='text-2xl font-light text-center'>Forgot Password</p>
    </div>
         </div>
        </div>

      </div>
      
    </div>
    </>
  )
}

export default SignupForm