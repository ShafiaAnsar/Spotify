'use client'

import { Song } from "@/types"
import MediaItem from "./MediaItem"
import LikeButton from "./LikeButton"
import{BsPauseFill,BsPlayFill} from 'react-icons/bs'
import { AiFillStepBackward, AiFillStepForward } from "react-icons/ai"
 interface PlayerContentProps{
    song:Song
    songUrl:string
 }
const PlayerContent:React.FC<PlayerContentProps> = ({song,songUrl}) => {
    const Icon = true? BsPauseFill : BsPlayFill
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 h-full">
        <div className="flex w-full justify-start ">
            <div className="flex items-center gap-x-4">
                <MediaItem data={song}/>
                <LikeButton songId={song.id}/>
            </div>
        </div>
        <div onClick={()=>{}} className="flex md:hidden col-auto w-full justify-end items-center ">
            <div className="h-10 w-10  rounded-full bg-white p-1 cursor-pointer justify-center flex items-center ">
                <Icon size={30} className="text-black"/>
            </div>
        </div>
        <div className="hidden h-full md:flex justify-center items-center w-full max-w-[722px] gap-x-6">
            <AiFillStepBackward size={30 } className="cursor-pointer text-neutral-400 hover:text-white transition" onClick={()=>{}}/>
            <div onClick={()=>{}} className="flex items-center justify-center h-10 w-10 rounded-full bg-white p-1 cursor-pointer ">
                <Icon size={30} className="text-black"/>
            </div>
            <AiFillStepForward onClick={()=>{}} size={30 } className="cursor-pointer text-neutral-400 hover:text-white transition-black"/>
        </div>
        </div>
  )
}

export default PlayerContent