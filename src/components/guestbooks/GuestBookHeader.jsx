import { useContext, useState } from "react"
import { GuestBookContextForMethod } from "../contexts/GuestBookContexts"
const GuestBookHeader = () => {
    const {addGuestBookHandler} = useContext(GuestBookContextForMethod)
    const [nickname, setnickname] = useState('')
    const [content, setcontent] = useState('')
    const onClick = () => {
        addGuestBookHandler({nickname,content})
    }
  return (
    <div className='w-full h-[50px]  mb-[24px] flex items-center justify-center'>
      <div className='flex space-x-4 items-center w-full'>
        <div className='flex-1'>
          <input
            id="nickname"
            type="text"
            placeholder="Enter your nickname"
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700'
            value = {nickname}
            onChange={event => setnickname(event.target.value)}
          />
        </div>
        <div className='flex-1'>
          <input
            id="content"
            type="text"
            placeholder="Enter your message"
            className='w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-700'
            value = {content}
            onChange={event => setcontent(event.target.value)}
          />
        </div>
        <button
          type="submit" onClick={onClick}
          className='py-2 px-4 bg-gray-700 text-white font-semibold rounded-md shadow-sm hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-green-500'
        >
          Add
        </button>
      </div>
    </div>
  )
}
export default GuestBookHeader