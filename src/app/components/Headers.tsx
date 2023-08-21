import React from 'react'
import  { Bell, Search } from 'lucide-react'
import Image from 'next/image'
import { Avatar, AvatarFallback, AvatarImage } from './ui/Avatar'
import { Montserrat } from 'next/font/google'

type Props = {}

const mont = Montserrat({ weight: ['700'], subsets: ['latin'] })

const Headers = (props: Props) => {
  return (
      <div className='text-black flex justify-between items-center  lg:px-8 gap-2 pt-4 ml-4'>
          <h2 className={`${mont.className}`}>Dashboard</h2>
          <div className='flex flex-row gap-5 items-center'>
             
              
              <div className='bg-white flex items-center px-2 rounded-xl py-2 '>
                  <div>
                       <input  placeholder='Search...'></input>
                  </div>
                  <div>
                  <Search  className='text-gray-400' />
                      
                 </div>
              </div>
               <div>
                 <Bell  />
              </div>
              <div>
                  <Avatar>
                      <AvatarImage src="/p2.jpeg" />
                      <AvatarFallback>P2</AvatarFallback>
                  </Avatar>
          
              </div>
         </div>
    </div>
  )
}

export default Headers