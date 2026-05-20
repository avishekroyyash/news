"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const LoginPage = () => {

   const {register, handleSubmit, watch, formState: { errors },} = useForm();
   const handleLoginData = async(DATA)=>{
     console.log(DATA,'DATA from login page')

    const { data, error } = await authClient.signIn.email({
    email: DATA.email,
    password: DATA.password,
    rememberMe: true,
    callbackURL: "/",
});
console.log(data,error,'this is come from login page')
if(error){
    alert(`${error.message}`)
    return
}
else{
    alert('login succesfully ')
}

    } ;

    //password toggle 
    const [passwordToggole , setpasswordToggle] = useState(false)

//    console.log(errors,'there are register,handleSubmit,errors ')
    return (
        <div className='bg-gray-300 p-10 container mx-auto'>
           
                <fieldset className="fieldset bg-base-200  rounded-box w-xl border-3 border-amber-50  p-4 container mx-auto  ">
                 <h1 className='font-bold text-4xl text-center my-10'>Login your account</h1>
    
                <form onSubmit={handleSubmit(handleLoginData)} className=' relative flex flex-col justify-center mx-auto border-2
                 w-112.5 border-amber-50 space-y-3 p-4 '>
                     <label className="font-bold text-lg">Email</label>
                 <input type="email" className="input w-full bg-gray-200" placeholder="Enter your email"  {...register("email",{ required: "Email field is required" })} />
                 { errors.email && <p className='font-bold text-red-500'>{errors.email.message}</p>}
                

                 <label className="font-bold text-lg ">Password</label>
                <input type={passwordToggole ? 'text': 'password'} className="input w-full bg-gray-200" placeholder="Enter your password"  {...register("password",{ required: "password field is required" })} />
               { errors.password && <p className='font-bold text-red-500'>{errors.password.message}</p>}
                <span className='absolute top-40 right-10' onClick={()=>setpasswordToggle(!passwordToggole)}> {passwordToggole ? <FaEye /> : <FaEyeSlash/>} </span>

               <button className="btn btn-primary mt-4">Login</button>
              <p className='font-bold my-5 text-xl'>If you don't have account. <Link className='text-blue-600' href={'/resister'}> Sign up</Link></p>   
                </form>
          
               </fieldset>
       
        </div>
    );
};

export default LoginPage;