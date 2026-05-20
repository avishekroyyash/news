"use client"
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEyeSlash } from 'react-icons/fa';
import { FaEye } from 'react-icons/fa6';

const ResisterPage = () => {

const {register, handleSubmit, watch, formState: { errors },} = useForm();

   const handleResisterData = async (DATA)=>{
    const{name,email,password} = DATA ;
     console.log(DATA,'DATA from Resister page')
     const { data, error } = await authClient.signUp.email({
    name: name,
    email: email,
    password: password,
    callbackURL: "/",
});
 
// console.log(data,error,'this is error of database from resister page')

 if(error) {
    return 
 }
 else {
    alert("Resister Successfully completed")
 }
 
    } ;

   //password toggle 
   const [passwordToggole , setpasswordToggle] = useState(false)

    return (
         <div className='bg-gray-300 p-10 container mx-auto'>
       
                <fieldset className="fieldset bg-base-200  rounded-box w-xl border-3 border-amber-50  p-4 container mx-auto  ">
                 <h1 className='font-bold text-4xl text-center my-10'>Resister your account</h1>
    
                <form onSubmit={handleSubmit(handleResisterData)} className='relative flex flex-col justify-center mx-auto border-2
                 w-112.5 border-amber-50 space-y-3 p-4 '>
                    
                 <label className="font-bold text-lg">Name</label>
                 <input type="text" className="input w-full bg-gray-200" placeholder="Enter your name" {...register("name",{ required: "Name is required" })} />
                  {errors.name && <p className='text-bold text-red-500' >{errors.name.message}</p>}

                     <label className="font-bold text-lg">Email</label>
                 <input type="email" className="input w-full bg-gray-200" placeholder="Enter your email" {...register("email",{ required: "Email is required" })} />
                  {errors.email && <p className='text-bold text-red-500'>{errors.email.message} </p>}

                
              <label className="font-bold text-lg ">Password</label>
              <input type={passwordToggole ? 'text': 'password'} className="input w-full bg-gray-200" placeholder="Enter your password"  {...register("password",{ required: "password field is required" })} />
               { errors.password && <p className='font-bold text-red-500'>{errors.password.message}</p>}
               <span className='absolute top-63 right-10' onClick={()=>setpasswordToggle(!passwordToggole)}> {passwordToggole ? <FaEye /> : <FaEyeSlash/>} </span>

               <button className="btn btn-primary mt-4">Resister Now</button>
              <p className='font-bold my-5 text-xl'>If you have account . please  <Link className='text-blue-600' href={'/login'}> Login</Link></p>   
                </form>
          
               </fieldset>
          
        </div>
    );
};

export default ResisterPage;