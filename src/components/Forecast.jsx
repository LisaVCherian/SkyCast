import React from 'react'

function Forecast({title}) {
  return (
    <div>
        <div className=' flex items-center justify-center mt-6'>
            <p className='text-white font-medium uppercase'>{title}</p>
        </div>
        <hr className='my-2'></hr>

        <div className=' flex items-center justify-between text-white'>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src='/' alt='' className='w-12 my-1'></img>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src='/' alt='' className='w-12 my-1'></img>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src='/' alt='' className='w-12 my-1'></img>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src='/' alt='' className='w-12 my-1'></img>
                <p className='font-medium'>22°</p>
            </div>
            <div className='flex flex-col items-center justify-center'>
                <p className='font-light text-sm'>04:30 PM</p>
                <img src='/' alt='' className='w-12 my-1'></img>
                <p className='font-medium'>22°</p>
            </div>
        </div>
    </div>
  )
}

export default Forecast