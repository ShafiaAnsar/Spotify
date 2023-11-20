'use client'
import {BounceLoader} from 'react-spinners'
import Box from '@/components/Box'
import React from 'react'

const Loading = () => {
  return (
    <Box className='flex h-full items-center justify-center'>
       <BounceLoader color="#22c55e" size= {40}/>
       </Box>
  )
}

export default Loading