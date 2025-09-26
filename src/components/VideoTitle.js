import React from 'react'

const VideoTitle = ({overview,original_title}) => {
  return (
    <div className= 'text-white pt-[20%] px-24 absolute bg-gradient-to-r from-black w-screen aspect-video'  >
      <h1 className='text-4xl font-bold '>{original_title}</h1>
      <p className='py-6  w-1/4'>{overview}</p>
      <div>
        <button className='bg-white hover:bg-opacity-80 rounded-lg text-black text-xl  p-2 px-6'>▷ Play</button>
        <button className='bg-gray-500 bg-opacity-50 rounded-lg text-white text-xl  p-2 px-6 mx-2'> ⨀ More Info</button>
      </div>

    </div>
  )
}

export default VideoTitle
