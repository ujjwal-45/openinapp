'use client'

import { Calendar, LayoutDashboard, Settings, Tags, UserCircle } from 'lucide-react'
import React from 'react'
import {usePathname} from "next/navigation"
import { Montserrat } from 'next/font/google'
import Link from 'next/link'
import { cn } from '@/lib/utils'

type Props = {}

const mont = Montserrat({ weight: ['700'], subsets: ['latin'] })
const mont1 = Montserrat({ weight: ['400'], subsets: ['latin'] })



const routes = [
    {
        label: "Dashboard",
        icon: LayoutDashboard,
        href: "/dashboard",
    },
    {
        label: "Transactions",
        icon: Tags,
        href: "/dashboard",
    },
    {
        label: "Schedules",
        icon: Calendar,
        href: "/schedules",
    },
    {
        label: "Users",
        icon: UserCircle,
        href: "/users",
    },
    {
        label: "Settings",
        icon: Settings,
        href: "/settings",
    },

]

const Sidebar = (props: Props) => {
    const pathname = usePathname();
  return (
      <div className=" space-y-4  py-4 flex flex-col h-full text-white mb-7">
         
          <div className='px-3 py-2 flex-1 '>
              <div className='flex items-start justify-start px-8'>
                  <h1 className={`${mont.className} text-3xl`}>Board.</h1>
              </div>

              <div className={`${mont1.className} space-y-1 mt-10 px-4 `}>
                  {routes.map((route) => (
                      <Link href={route.href}
                          key={route.href}
                          className={cn("text-sm group flex p-3 w-full justify-center font-medium hover:text-white  hover:bg-white/10 rounded-lg transition",
                              pathname === route.href ? "text-white font-extrabold " : "text-white")}
                      >
                          <div className='flex items-center flex-1 text-white font-light'>
                              <route.icon className={cn("h-5 w-5 mr-3")} />
                              {route.label}
                          </div>
                      </Link>
                  ))}
                  
              </div>
              
              </div>
              
          <div className='flex flex-col px-9   '>
              <h3 className='mt-12'>Help</h3>
              <h3 className='mt-2'>Contact Us</h3>
              </div>
             
    </div>
  )
}

export default Sidebar