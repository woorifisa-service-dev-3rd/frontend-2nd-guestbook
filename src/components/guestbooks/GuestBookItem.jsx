import IconButton from '@/components/ui/IconButton'
import { useContext, useState } from 'react'
import { GuestBookContextForMethod, GuestBookContextForData } from '../contexts/GuestBookContexts'
import { getCurrentDateTime } from './GuestBookContainer'

const GuestBookItem = ({guestbook}) => {
  const [updateToggle, setUpdateToggle] = useState(false)
  const [updatedContent, setUpdatedContent] = useState(guestbook.content)

  const {guestbooks} = useContext(GuestBookContextForData)
  const {setGuestbooks} = useContext(GuestBookContextForMethod)

  const deleteOnHandler = () =>{
    console.log("아이디",guestbook.id)
    setGuestbooks(guestbooks.filter(onebook => onebook.id !== guestbook.id))
  }

  const updateContentHandler = () => {
    setGuestbooks(
      guestbooks.map(onebook =>
        onebook.id === guestbook.id ? { ...onebook, content: updatedContent, datetime: getCurrentDateTime() } : onebook
      )
    )
    setUpdateToggle(false)
  }





  return (

    
   
      <div className='border border-gray-700 rounded-lg p-3 space-y-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-sm font-semibold'>{guestbook.nickname}</h2>
            <h3 className='text-sm text-gray-600'>{guestbook.datetime}</h3>
          </div>
          <div className='py-3 px-1 rounded-md relative'>
            {updateToggle === false && <div className='break-words'>{guestbook.content}</div>}
            {updateToggle === true && <input className='break-words ' type="text"  value={updatedContent}
              onChange={(e) => setUpdatedContent(e.target.value)}/>}

            {updateToggle === false &&   <div className='absolute bottom-2 right-2'>
              <IconButton  onClick={()=>setUpdateToggle(!updateToggle)} icon={'✏️'} />
              <IconButton textColor='text-gray-300' icon={'🗑'} onClick = {deleteOnHandler} />
            </div>} 
            {updateToggle === true &&   <div className='absolute bottom-2 right-2'> 
               <button onClick={updateContentHandler} >Update</button>
            </div>}
          
          
          </div>
      </div>
   

  )
}

export default GuestBookItem