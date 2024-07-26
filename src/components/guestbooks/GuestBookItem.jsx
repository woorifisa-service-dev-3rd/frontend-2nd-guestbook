import IconButton from '@/components/ui/IconButton'
import { useContext } from 'react'

const GuestBookItem = ({guestbook}) => {
  console.log(guestbook)
  return (
      <div className='border border-gray-700 rounded-lg p-3 space-y-2'>
          <div className='flex justify-between items-center'>
            <h2 className='text-sm font-semibold'>{guestbook.nickname}</h2>
            <h3 className='text-sm text-gray-600'>{guestbook.datetime}</h3>
          </div>
          <div className='py-3 px-1 rounded-md relative'>
            <div className='break-words'>{guestbook.content}</div>
            {/* <input className='break-words ' type="text" value={guestbook.content} /> */}
            <div className='absolute bottom-2 right-2'>
              <IconButton  icon={'✏️'} />
              <IconButton textColor='text-gray-300' icon={'🗑'}  />
            </div>
          </div>
      </div>
   

  )
}

export default GuestBookItem