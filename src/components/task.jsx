import React from 'react'
import { BiDotsVerticalRounded } from 'react-icons/bi'

const Task = ({ data }) => {
    console.log(data);
  return (
    <div className='p-3 border-[1px] rounded-md bg-white shadow-sm hover:shadow-md cursor-grab transition'>
        <div className='mb-2 flex justify-between'>
            <div>
              <p className='text-xs mx-1 border-[1px] inline px-1 py-[2px] rounded-md text-indigo-500 border-indigo-500'>UI Design</p>
            </div>
            <div className='hover:cursor-pointer hover:bg-slate-200 h-6 w-6 rounded-full flex items-center justify-center'>
              <BiDotsVerticalRounded />
            </div>
        </div>
        {/* <div className=' my-3'>
            <img src={'./public/dummy.jpg'} className='rounded-md' />
        </div> */}
        <h2 className='font-medium text-base'>{ data.name }</h2>
        <p className='mt-1 text-sm text-slate-600'>{ data.description }</p>
        <p className='mt-2 text-xs text-slate-600'>Due { data.date }</p>
    </div>
  )
}

export default Task