'use client'

import { ChevronDown, Dot } from 'lucide-react'
import { Montserrat } from 'next/font/google'
import React from 'react'

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


const mont = Montserrat({ weight: ['700'], subsets: ['latin'] })

type Props = {}

const Products = (props: Props) => {

    const data = {
        //labels: ['Basic Tees ', 'Custom Short Pants', 'Super Hoodies'],
        datasets: [
            {
                data: [3, 2, 5],
                backgroundColor: ['#F6DC7D', ' #EE8484', ' #98D89E'],
                borderWidth: 0,
            }
        ]
    };

  return (
      <div className='lg:col-span-2 col-span-1 p-4 bg-white text-black mb-4 rounded-xl'>
          <div className='flex flex-row justify-between p-4 ' >
              <div className='flex justify-start'>
                 <h1 className={`${mont.className} text-xl `}>Top products</h1>
              </div>
              <div className='flex justify-end items-center'>
                  <h1 className='text-sm text-[#858585]' >May - June 2023</h1>
                  <ChevronDown className='text-[#858585] w-6 h-4' />
              </div>

              
          </div>
          <div className='flex flex-row gap-6'>
              <div className='w-56 h-56 p-4' >
                  <Pie data={data} />
                      
                  </div>

              <div className='flex  flex-col items-start mt-6 justify-start'>
                  <div className='flex  items-center'>
                      <Dot className='text-[#98D89E] w-16 h-16' />
                        <div className='flex flex-col  justify-items-start'>
                            <p className={`${mont.className} mt-4`}>Basic Tees</p>
                            <p className='text-sm  '>55%</p>
                       </div>
                    
                  </div>
                  <div className='flex items-center '>
                      <Dot className='text-[#F6DC7D] w-16 h-16' />
                   <div className='flex flex-col  justify-items-start'>
                            <p className={`${mont.className} mt-4`}>Custom Short Pants</p>
                            <p className='text-sm  '>31%</p>
                       </div>
                  </div>
                  <div className='flex items-center'>
                      <Dot className='text-[#EE8484] w-16 h-16' />
                  <div className='flex flex-col  justify-items-start'>
                            <p className={`${mont.className} mt-4`}>Super Hoodies</p>
                            <p className='text-sm  '>14%</p>
                       </div>
                  </div>
                  
                  </div>
                  
              </div>
    </div>
  )
}

export default Products