import GuestBookItem from './GuestBookItem'

const GuestBookBody = ({guestbooks}) => {

  return (
    <div className='w-full space-y-[15px]'>
      {guestbooks.map((guestbook)=> <GuestBookItem key={guestbook.id}  />)}
    </div>
  )
}

export default GuestBookBody