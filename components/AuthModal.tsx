'use client'
import {useEffect} from 'react'
import { useSessionContext, useSupabaseClient } from "@supabase/auth-helpers-react"
import Modal from "./Modal"
import { useRouter } from "next/navigation"
import { Auth } from "@supabase/auth-ui-react"
import { ThemeSupa } from "@supabase/auth-ui-shared"
import useAuthModal from "@/hooks/useAuthModal"
import toast from 'react-hot-toast'

const AuthModal = () => {
    const supabaseClient = useSupabaseClient()
    const router = useRouter()
    const {session} = useSessionContext()
    const {onClose ,isOpen} = useAuthModal()
    const onChange=(open:boolean)=>{
        if(!open){
            onClose()
            
        }
    }
    useEffect(() => {
      if(session){
        router.refresh()
        onClose()
        toast.success('Logged In')
       
      }
    }, [session,router,onClose])
    
  return (

    <Modal 
    title="Welcome back" 
    description="Login to your account." 
    isOpen={isOpen}
    onChange={onChange} 
  >
    <Auth
      supabaseClient={supabaseClient}
      magicLink={true}
      appearance={{
        theme: ThemeSupa,
        variables: {
          default: {
            colors: {
              brand: '#404040',
              brandAccent: '#22c55e'
            }
          }
        }
      }}
      theme="dark"
    />
  </Modal>
  )
}

export default AuthModal