import React, {useContext, useState} from 'react'
import GuestBookHeader from './GuestBookHeader'
import GuestBookBody from './GuestBookBody'
import { dummyGuestBooks } from '../../constants/dummyGuestBooks'
import { GuestBookContextForData, GuestBookContextForMethod } from '../contexts/GuestBookContexts'



const GuestBookContainer = () => {

    const [guestbooks, setGuestbooks] = useState(dummyGuestBooks);
    console.log("게스트북", guestbooks);


    const dummyguestbooks = dummyGuestBooks

    const getCurrentDateTime = () => {
        const now = new Date();
      
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); 
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');

        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
      }

    const addGuestBookHandler = ({nickname,content}) => {

        console.log("여기서닉네임",nickname)
    
        const newGuestBook = {
            id : self.crypto.randomUUID(),
            nickname,
            content,
            dateTime: getCurrentDateTime()
        }

        setGuestbooks ([...guestbooks, newGuestBook])


    }
   



  return (
    <section className='max-w-xl m-6 mx-auto border  border-gray-700 rounded-lg w-full my-[30px] p-[30px] bg-custom-blue'>

        <GuestBookContextForData.Provider value = {guestbooks}>
            <GuestBookContextForMethod.Provider value = {{addGuestBookHandler}}>
            <h1 className='text-center text-2xl font-bold mb-[24px]'>방명록</h1>
            <GuestBookHeader />
            <GuestBookBody />
            </GuestBookContextForMethod.Provider>
        </GuestBookContextForData.Provider>
            
    </section>

  )
}

export default GuestBookContainer