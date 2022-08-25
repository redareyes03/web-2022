import { Text } from '@nextui-org/react'
import axios from 'axios'
import Inbox from '../../src/components/admin_components/Inbox'
import NavBar from '../../src/components/admin_components/NavBar'
import Requests from '../../src/components/admin_components/Requests'
import { getMsg } from '../../src/services/getMsg'

function Home({ page, messages }) {
  return (
    <>
      <NavBar />
      <div className='flex justify-between'>
        <div className="w-1/6 px-6" />
        <div className='px-sm py-8 w-4/6 '>
          {page === 'inbox' ? <Inbox messages={messages} /> : <Requests />}
        </div>
        <div className='w-1/6'></div>
      </div>
    </>
  )
}

export function getStaticPaths() {

  return {
    paths: [
      { params: { dashboard: 'inbox' } },
      { params: { dashboard: 'requests' } }
    ],
    fallback: false
  }
}

export async function getStaticProps(ctx) {
  const page = ctx.params.dashboard === 'inbox' ? 'inbox' : 'requests'

  // Get all messages
  const messages = await getMsg();
  return {
    props: {
      page,
      messages
    }
  }
}

export default Home