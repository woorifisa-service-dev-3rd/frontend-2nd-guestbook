import React, {useContext, useState} from 'react'
import GuestBookHeader from './GuestBookHeader'
import GuestBookBody from './GuestBookBody'
import { dummyGuestBooks } from '../../constants/dummyGuestBooks'
import { GuestBookContextForData, GuestBookContextForMethod } from '../contexts/GuestBookContexts'



const GuestBookContainer = () => {

  const [guestbooks, setGuestbooks] = useState(dummyGuestBooks);
  console.log(guestbooks)



  return (
    <section className='max-w-xl m-6 mx-auto border  border-gray-700 rounded-lg w-full my-[30px] p-[30px] bg-custom-blue'>

        <GuestBookContextForData.Provider value={{guestbooks}}>
            <GuestBookContextForMethod.Provider>
            <h1 className='text-center text-2xl font-bold mb-[24px]'>방명록</h1>
            <GuestBookHeader />
            <GuestBookBody />
            </GuestBookContextForMethod.Provider>
        </GuestBookContextForData.Provider>
            
    </section>

  )
}

export default GuestBookContainer