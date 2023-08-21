import React from 'react'
import { Montserrat } from 'next/font/google'
type Props = {}

const mont = Montserrat({ weight: ['700'], subsets: ['latin'] })

const Login = (props: Props) => {
  return (
      <div>
          <form className='mt-5'>
              <div className='bg-white rounded-[12px] px-6 py-5 '>
                       
                  <div className='flex flex-col mt-3 '>
                      <label className='mb-1'>Email address</label>
                      <input placeholder='johndoe@gmail.com' type="text" className='bg-[#F5F5F5] rounded-lg px-2 py-2'></input>
                  </div>

                  <div className='flex flex-col mt-3 '>
                      <label className='mb-1'>Password</label>
                      <input placeholder='●●●●●●●●●●●' type="text" className='bg-[#F5F5F5] rounded-lg px-2 py-2'></input>
                  </div>
                  <div className='mt-4'>
                      <h3 className='text-[#346BD4]'>Forgot password?</h3>
                  </div>
                  <div className={`${mont.className} mt-4 mb-3`}>
                      <button className='bg-black rounded-[12px] px-2 py-2 w-full text-white'>Sign In</button>
                      </div>
        
              </div>
          </form>
          <div className='flex items-center justify-center mt-4'>
              <h1 className='text-[#858585]'>
                  Don&apos;t have an account? <span className='text-[#346BD4]'>Register here</span>
              </h1>
              
          </div>
    </div>
  )
}

export default Login