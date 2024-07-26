import React from 'react'
import GuestBookHeader from './GuestBookHeader'
import GuestBookBody from './GuestBookBody'


const GuestBookContainer = () => {
  return (
    <section className='max-w-xl m-6 mx-auto border  border-gray-700 rounded-lg w-full my-[30px] p-[30px] bg-custom-blue'>
            <h1 className='text-center text-2xl font-bold mb-[24px]'>방명록</h1>
            
            <GuestBookHeader />
            <GuestBookBody />
    </section>

  )
}

export default GuestBookContainer