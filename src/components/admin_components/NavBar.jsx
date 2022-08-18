import { Avatar, Button, Text } from '@nextui-org/react'
import Link from 'next/link'
import { FaPaperPlane, FaInbox } from 'react-icons/fa'
import { BsCaretLeftFill } from 'react-icons/bs'

function NavBar() {
    return (
        <div className='bg-gray-100/50 blur w-1/6 h-screen px-6 py-8 flex flex-col justify-between'>
            <div>
                <div className='flex gap-3 mb-8'>
                    <Avatar src='https://res.cloudinary.com/dkvy71id6/image/upload/v1659936241/profile_xtd1t8.jpg' />
                    <div className='flex flex-col'>
                        <Text className='leading-tight' weight={"medium"} size={18}>Ruben Reyes</Text>
                        <Text className='leading-tight' weight={'light'} size={14}>Admin</Text>
                    </div>
                </div>

                <Text color='#343434' size={18} weight="medium" className='mb-2'>Menu</Text>
                <Link passHref href="/admin/inbox">
                    <div className='flex items-center gap-4 mb-2 pl-2 border-0 border-solid'>
                        <FaInbox className='fill-gray-500/80' />
                        <a className='text-gray-500/80'>Inbox</a>
                    </div>
                </Link>
                <Link passHref href="/admin/requests">
                    <div className='flex items-center gap-4 mb-2 pl-2'>
                        <FaPaperPlane className='fill-gray-500/80' />
                        <a className='text-gray-500/80'>Requests</a>
                    </div>
                </Link>
            </div>

            <Button as='a' href='/' color={'secondary'} shadow  size="sm" icon={<BsCaretLeftFill />}>Landing Page</Button>
        </div>
    )
}

export default NavBar