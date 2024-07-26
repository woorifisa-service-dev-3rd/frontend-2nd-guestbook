import { useContext } from 'react'
import GuestBookItem from './GuestBookItem'
import { GuestBookContextForData } from '../contexts/GuestBookContexts'

const GuestBookBody = () => {
  const {guestbooks} = useContext(GuestBookContextForData)
  return (
    <div className='w-full space-y-[15px]'>
        {guestbooks.map((guestbook)=> <GuestBookItem key={guestbook.id}  />)}
    </div>
  )
}

export default GuestBookBody