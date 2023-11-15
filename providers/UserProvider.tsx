'use client'
interface UserProviderProps{
    children:React.ReactNode
}

const UserProvider:React.FC<UserProviderProps> = ({children}) => {
  return (
    <div>UserProvider</div>
  )
}

export default UserProvider