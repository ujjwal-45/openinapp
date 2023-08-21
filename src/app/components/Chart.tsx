'use client'
import React from 'react'
import { Card, Title, LineChart } from "@tremor/react";
import { ChevronDown } from 'lucide-react';

type Props = {}

const chartdata = [
    {
        week: 1,
        "Guest": 100,
        "User": 50,
    },
    {
        week: 2,
        "Guest": 150,
        "User": 75,
    },
    {
        week: 3,
        "Guest": 170,
        "User": 110,
    },
    {
        week: 4,
        "Guest": 200,
        "User": 150,
    },
    {
        week: 5,
        "Guest": 180,
        "User": 220,
    },
    {
        week: 6,
        "Guest": 150,
        "User": 210,
    },
    {
        week: 7,
        "Guest": 180,
        "User": 200,
    },
    {
        week: 8,
        "Guest": 100,
        "User": 250,
    },
]

const dataFormatter = (number: number) => `${Intl.NumberFormat("us").format(number).toString()}%`;

const Chart = (props: Props) => {
  return (
      <div className='p-5 '>
            <Card className='bg-tremor-background-muted' >
              <Title>
                  <p>Activities</p>
                  <div className='flex items-center'>
                      <p className='text-[#858585] text-sm'>May - June 2023 </p>
                  <ChevronDown className='text-[#858585] w-6 h-4' />
                  </div>
                  
              </Title>
              <LineChart
               
                className="mt-6 bg-[#F5F5F5] rounded-xl p-2"
                data={chartdata}
                index="week"
                categories={["Guest", "User"]}
                colors={["rose", "emerald"]}
                valueFormatter={dataFormatter}
                  yAxisWidth={40}
                  
              />
             
          </Card>
          
          
    </div>
  )
}

export default Chart