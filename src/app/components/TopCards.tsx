

import { cn } from '@/lib/utils';
import { DollarSign, Tags, ThumbsUp, Users2, Wallet2 } from 'lucide-react';
import React from 'react';

type Props = {};



const dummyData = [
    {
      index: 1,
    iconName: Wallet2,
    title: 'Total Revenues',
    value: '$1,234,567',
    bgColor: 'bg-[#DDEFE0]',
  },
    {
       index: 2,
    iconName: Tags,
    title: 'Total Transactions',
    value: '543',
    bgColor: 'bg-[#F4ECDD]',
  },
    {
       index: 3,
    iconName: ThumbsUp,
    title: 'Total Likes',
    value: '987',
    bgColor: 'bg-[#F4CEDD]',
  },
    {
       index: 4,
    iconName: Users2,
    title: 'Total Users',
    value: '1234',
    bgColor: 'bg-[#DEE0EF]',
  },
];



const TopCards = (props: Props) => {
  return (
    <div className='grid lg:grid-cols-4 gap-4 p-6 text-black'>
      {dummyData.map((card) => {
       
        return (
          <div
            key={card.index}
            className={cn("lg:col-span-1 col-span-1 flex flex-col justify-between w-full p-4 rounded-2xl", card.bgColor)}
          >
            <div className='flex  justify-end items-end'><card.iconName /></div>
            <div className='flex flex-col w-full p-4'>
              <p>{card.title}</p>
              <p className='font-extrabold'>{card.value}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default TopCards;

