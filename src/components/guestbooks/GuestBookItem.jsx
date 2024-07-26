import IconButton from '@/components/ui/IconButton'
import { useContext } from 'react'
import { GuestBookContextForMethod, GuestBookContextForData } from '../contexts/GuestBookContexts'

const GuestBookItem = ({guestbook}) => {

  const {guestbooks} = useContext(GuestBookContextForData)
  const {setGuestbooks} = useContext(GuestBookContextForMethod)

  const deleteOnHandler = () =>{
    console.log("아이디",guestbook.id)
    setGuestbooks(guestbooks.filter(onebook => onebook.id !== guestbook.id))
  }


  return (

    
   
      <div className='border border-gray-700 rounded-lg p-3 space-y-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-sm font-semibold'>Nickname</h2>
            <h3 className='text-sm text-gray-600'>날짜</h3>
          </div>
          <div className='py-3 px-1 rounded-md relative'>
            <div className='break-words '>하이zzzzzzzzzz</div>
            <div className='absolute bottom-2 right-2'>
              <IconButton icon={'✏️'} />
              <IconButton textColor='text-gray-300' icon={'🗑'} onClick = {deleteOnHandler} />
            </div>
          </div>
      </div>
   

  )
}

export default GuestBookItem