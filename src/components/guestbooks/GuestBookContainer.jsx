import React, {useContext, useState} from 'react'
import GuestBookHeader from './GuestBookHeader'
import GuestBookBody from './GuestBookBody'
import { dummyGuestBooks } from '../../constants/dummyGuestBooks'
import { GuestBookContextForData, GuestBookContextForMethod } from '../contexts/GuestBookContexts'
import { getCurrentDatetime } from '../../utils/getCurrentDatetime'


const GuestBookContainer = () => {
 
    const [guestbooks, setGuestbooks] = useState(dummyGuestBooks);


    const addGuestBookHandler = ({nickname,content}) => {
        console.log("여기서닉네임",nickname)
        const newGuestBook = {
            id : guestbooks.length + 1 ,
            nickname,
            content,
            datetime: getCurrentDatetime()
        }
        setGuestbooks ([...guestbooks, newGuestBook])
    }
   
  return (
    <section className='max-w-xl m-6 mx-auto border  border-gray-700 rounded-lg w-full my-[30px] p-[30px] bg-custom-blue'>
        <GuestBookContextForData.Provider value = {{guestbooks}}>
            <GuestBookContextForMethod.Provider value = {{addGuestBookHandler,setGuestbooks}} >
            <h1 className='text-center text-2xl font-bold mb-[24px]'>방명록</h1>
            <GuestBookHeader />
            <GuestBookBody />
            </GuestBookContextForMethod.Provider>
        </GuestBookContextForData.Provider>
    </section>
  )
}
export default GuestBookContainer