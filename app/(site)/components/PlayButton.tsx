'use client'

import Button from "@/components/Button"
import { FaPlay } from "react-icons/fa"

const PlayButton = () => {
  return (
    <Button className="transition opacity-0 rounded-full flex items-center bg-green-500 drop-shadow-md translate translate-y-1/4 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110">
        <FaPlay className="text-black"/>
    </Button>
  )
}

export default PlayButton