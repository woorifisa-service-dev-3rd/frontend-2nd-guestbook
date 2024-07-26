import GuestBookHeader from './GuestBookHeader'
import GuestBookBody from './GuestBookBody'
import { dummyGuestBooks } from '../../constants/dummyGuestBooks'
import { useState } from 'react'

const GuestBookContainer = () => {
  const [guestbooks, setGuestBooks] = useState(dummyGuestBooks)
  console.log(guestbooks)

  return (
    <section className='max-w-xl m-6 mx-auto border  border-gray-700 rounded-lg w-full my-[30px] p-[30px] bg-custom-blue'>
            <h1 className='text-center text-2xl font-bold mb-[24px]'>방명록</h1>
            
            <GuestBookHeader />
            <GuestBookBody guestbooks={guestbooks} />
    </section>

  )
}

export default GuestBookContainer