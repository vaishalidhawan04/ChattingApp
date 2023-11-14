import React, { useState } from 'react'
import Input from "../../components/Input"
import Button from "../../components/Button"
const Form = ({
    isSignInPage = false,
}) => {
    const [data, setdata] = useState({
        ...(!isSignInPage && {
            fullName : ''
        }),
        email : '',
        password : ''
    })

    console.log('data :>> ', data);
  return (
    <div className='bg-white w-[500px] h-[600px] shadow-lg rounded-lg flex flex-col justify-center items-center'> 
        <div className='text-3xl font-bold'>Welcome {isSignInPage && 'Back'}</div>
        <div className='text-xl font-light mb-14'>{isSignInPage ? 'Sign in to explore' : 'Sign up now to get started'}</div>
        <form className='flex flex-col items-center w-full' onSubmit={() => console.log('Submitted')}>
            {!isSignInPage && <Input label='Full name' name='name' placeholder='Enter your full name' className='mb-6' value={data.fullName} onChange={(e) => setdata({ ...data, fullName: e.target.value })}/>}
            <Input label='Email Address' name='email' placeholder='Enter your email address' className='mb-6' value={data.email} onChange={(e) => setdata({ ...data, email: e.target.value })}/>
            <Input label='Password' type='password' name='password' placeholder='Enter your password' className='mb-14' value={data.password} onChange={(e) => setdata({ ...data, password: e.target.value })}/>
            <Button label={isSignInPage ? 'Sign in' : 'Sign Up'} className='w-[50%] mb-2 cursor-pointer text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ' type='submit'/>
        </form>
        <div>{isSignInPage ? "Didn't have an account?" : 'Already have an account?'} <span className='text-primary cursor-pointer underline'>{isSignInPage ? "Sign Up" : "Sign in"}</span></div>
    </div>
  )
}

export default Form