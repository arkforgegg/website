import React from 'react'
import arrow from "../assets/img/down.png"
import main from "../assets/img/main.png"

export function Introduction() {
  return (
    <>
      <div className='bg-black h-screen '>
        <div className='flex flex-row mx-auto items-center justify-evenly w-full'>
          <div className='flex flex-col mx-auto'>
            <h1 className='montserrat font-bold text-5xl'>
              Empowering Influence, Creating Value. Become Asia’s Biggest Gamer Community
            </h1>
            <p className='airif text-[#6C6C6C] text-lg'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent bibendum vitae quam vitae volutpat. Cras ipsum mi, porttitor a aliquet sit amet, accumsan vel nulla.
            </p>
            <div className='flex flex-row gap-4'>
              <button type='button' className='border border-[#FF0000] hover:text-[#FF0000] hover:border-white rounded-md px-4 py-2'>CONTACT US</button>
              <button type='button' className='border border-white hover:border-[#FF0000] hover:bg-[#FF0000] rounded-md px-4 py-2 flex items-center gap-4'>
                DISCOVER NOW
                <img src={arrow} alt='arrow'/>
              </button>
            </div>
          </div>
          <div className='mx-auto'>
            <img src={main} alt='Arkforge'/>
          </div>
        </div>
      </div>
    </>
  )
}
