import React from 'react'
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
    UilSunset,
  } from "@iconscout/react-unicons";

function Temperature() {
  return (
    <div>
        <div className='flex items-center justify-center py-6 text-xl text-cyan-300'>
            <p>cloudy</p>
        </div>

        <div className='flex items-center justify-between text-white py-3'>
            <img src='/' alt='' className='w-20'></img>
            <p className='text-5xl'>34°</p>

            <div className='flex flex-col space-y-2'>
                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTemperature size={18} className="mr-1"/>
                    Real feel:
                    <span className='font-medium ml-1'>32°</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilTear size={18} className="mr-1"/>
                    Humidity:
                    <span className='font-medium ml-1'>32%</span>
                </div>

                <div className='flex font-light text-sm items-center justify-center'>
                    <UilWind size={18} className="mr-1"/>
                    Wind:
                    <span className='font-medium ml-1'>10kmph</span>
                </div>

            </div>
        </div>

        <div className='flex items-center justify-center space-x-2 text-sm py-3 text-white'>
            <UilSun/>
            <p className='font-light'>Rise: 06:40 AM</p>
            <p className='font-light'>|</p>

            <UilSunset/>
            <p className='font-light'>Set: 06:40 PM</p>
            <p className='font-light'>|</p>

            <UilSun/>
            <p className='font-light'>High: 32°</p>
            <p className='font-light'>|</p>

            <UilSun/>
            <p className='font-light'>Low: 28°</p>
            <p className='font-light'>|</p>

        </div>
    </div>
  )
}

export default Temperature