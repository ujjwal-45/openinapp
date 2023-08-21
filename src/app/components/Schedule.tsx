import { ChevronRight} from 'lucide-react'
import { Montserrat } from 'next/font/google'
import React from 'react'

type Props = {}

const mont = Montserrat({ weight: ['700'], subsets: ['latin'] })

const Schedule = (props: Props) => {
  return (
    <div className='lg:col-span-2 col-span-1 p-4 bg-white text-black mb-4 rounded-xl'>
          <div className='flex flex-row justify-between p-4' >
              <div className='flex justify-start'>
                 <h1 className={`${mont.className} text-xl `}>Today&apos;s schedule</h1>
              </div>
              <div className='flex justify-end items-center'>
                  <h1 className='text-sm text-[#858585]' >See All</h1>
                  <ChevronRight className='text-[#858585] w-6 h-4' />
              </div>

              
          </div>

          <div className='flex flex-col gap-4'>
             
              <div className='flex gap-2'>
                  <div className='bg-[#98D89E] w-2 ml-4'>
                            
                  </div>
                  <div className='flex flex-col gap-2 m-2'>
                      <h1 className={`${mont.className} text-lg text-[#666666]`}>Meetings with suppliers from Kuta Bali</h1>
                      <p className='text-sm text-[#999999]'>14.00-15.00</p>
                      <p className='text-sm text-[#999999]'>at Sunset Road, Kuta, Bali</p>
                  </div>
                </div>
                  <div className='flex gap-2'>
                  <div className='bg-[#6972C3] w-2 ml-4'>
                            
                  </div>
                  <div className='flex flex-col gap-2 m-2'>
                      <h1 className={`${mont.className} text-lg text-[#666666]`}>Check operation at Giga Factory 1</h1>
                      <p className='text-sm text-[#999999]'>18.00-20.00</p>
                      <p className='text-sm text-[#999999]'>at Central Jakarta</p>
                  </div>
                </div>
              </div>
      
     </div>
  )
}

export default Schedule