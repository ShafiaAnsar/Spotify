'use client'
import {twMerge} from 'tailwind-merge'
import { useRouter } from "next/navigation"
import {RxCaretLeft, RxCaretRight} from 'react-icons/rx'
import { HiHome } from 'react-icons/hi'
import { BiSearch } from 'react-icons/bi'
import Button from './Button'
import useAuthModal from '@/hooks/useAuthModal'
import { useSupabaseClient } from '@supabase/auth-helpers-react'
import { useUser } from '@/hooks/useUser'
import { FaUserAlt } from 'react-icons/fa'
import toast from 'react-hot-toast'
interface HeaderProps{
  children:React.ReactNode
  className?:string
}
const Header:React.FC<HeaderProps> = ({children,className}) => {
  const router = useRouter()
  const authModal = useAuthModal()
  const supabaseClient = useSupabaseClient()
  const {user} = useUser()
  const handleLogout =  async()=>{

    const {error} = await supabaseClient.auth.signOut()
    router.refresh()

    if(error){
      toast.error(error.message)
    }
    else{
      toast.success('Logged out')
    }
  }

  return (
    <div className={twMerge(`h-fit bg-gradient-to-b  from-emerald-800 p-6`,className)}>
      <div className="w-full flex mb-4 items-center justify-between">
        <div className="hidden md:flex gap-x-2 items-center">
          <button onClick={()=> router.back()} className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
            <RxCaretLeft className='text-white' size={35}/>
          </button>
          <button onClick={()=> router.forward()} className='rounded-full bg-black flex items-center justify-center hover:opacity-75 transition'>
            <RxCaretRight className='text-white' size={35}/>
          </button>
        </div>
        <div className="flex md:hidden gap-x-2 items-center">
          <button onClick={()=> router.push('/')}  className='rounded-full bg-white flex items-center justify-center hover:opacity-75 transition p-2'>
            <HiHome className='text-black' size={20}/>
          </button>
          <button onClick={()=> router.push('/search')} className='rounded-full bg-white flex items-center justify-center hover:opacity-75 transition p-2'>
            <BiSearch   className='text-black' size={20}/>
          </button>
        </div>
        <div className="flex justify-between items-center gap-x-4 ">
          {user?(
            <div className=" flex gap-x-4 items-center">
              <Button className='bg-white px-6 py-2 ' onClick={handleLogout}>
                Logout
                </Button> 
                <Button onClick={()=>router.push('/account')} className='bg-white'>
                  <FaUserAlt/>
                </Button>
            </div>
          ):(
          <>
          <div className="">
            <Button onClick={authModal.onOpen}  className='bg-transparent text-neutral-300 font-medium'>
              Sign up
            </Button>
          </div>
          <div className="">
            <Button onClick={authModal.onOpen} className='bg-white px-6 py-2'>
              Login
            </Button>
          </div>
          </>)}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Header