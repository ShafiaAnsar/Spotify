'use client'
import {twMerge} from 'tailwind-merge'
import Link from "next/link"
import { IconType } from "react-icons/lib"

interface SidebarItemProps{
icon:IconType
label: string 
active?: boolean
href: string
}
const SidebarItem:React.FC<SidebarItemProps> = ({icon:Icon,label,active,href}) => {
  return (
    <Link href={href} className={twMerge(`
    flex flex-row h-auto items-center w-full  gap-x-4 font-medium cursor-pointer transition text-neutral-400 hover:text-white  py-1
    `, active && 'text-white')}>
    <Icon size={26}/>
    <p className='truncate w-full'>{label}</p>
    </Link>
  )
}

export default SidebarItem