"use client"
import { BookOpenText, Bot, Home, LayoutDashboard, Settings, SquareUser } from 'lucide-react'
import Image from 'next/image'
import { usePathname, useRouter } from 'next/navigation'
import React, { useEffect } from 'react'

const SideNav = () => {
    const router = useRouter();
    const path = usePathname();

    const MenuList =[
        {
            name: "Home",
            icon: Home,
            path:'/'
        },
        {
            name: "Dashboard",
            icon: LayoutDashboard,
            path:'/dashboard'
        },
        {
            name: "About",
            icon: Bot,
            path:'/about'
        },
        {
            name: "Service",
            icon: Settings,
            path:'/service'
        },
        {
            name: "FAQ",
            icon: BookOpenText,
            path:'/faq'
        },
        {
            name: "Contact",
            icon: SquareUser,
            path:'/contact-us'
        },
    ]

    // const path = usePathname();
    // useEffect(() => {
    //     console.log(path);
    // }, [])

    const handleMenuClick = (path: string) => {
        router.push(path);
    }

    useEffect(() => {
        console.log(path);
    }, [path])
    

  return (
    <>
    <div className="h-screen relative p-5 shadow-sm border bg-white">
        <div className="flex justify-center">
            <Image src={"/logo.svg"} alt="logo" width={40} height={100}/>
        </div>
        <hr className="my-6 border" />
        <div className="mt-3">
            {MenuList.map((menu, index)=>(
                <div key={index}
                onClick={() => handleMenuClick(menu.path)}
                 className={`flex gap-2 mb-2 p-3 hover:bg-primary hover:text-white rounded-lg cursor-pointer items-center
                    ${path==menu.path && 'bg-primary text-white'}
                `}>
                    <menu.icon className='h-6 w-6'/>
                    <h2 className="text-lg">{menu.name}</h2>
                </div>
            ))}
        </div>
    </div>
    </>
  )
}

export default SideNav
