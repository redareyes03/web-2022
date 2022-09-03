import { Loading } from '@nextui-org/react'
import { getAuth } from 'firebase/auth'
import { useAuthState } from 'react-firebase-hooks/auth'
import Inbox from '../../src/components/admin_components/Inbox'
import Login from '../../src/components/admin_components/Login'
import NavBar from '../../src/components/admin_components/NavBar'
import Requests from '../../src/components/admin_components/Requests'
import { app } from '../../src/firebase'
import { getMsg } from '../../src/services/getMsg'
import { getRqst } from '../../src/services/getRqst'

function Home({ page, messages, requests }) {
  return (
    <>
      <NavBar />
      <div className='flex justify-between'>
        <div className="w-1/6 px-6" />
        <div className='px-sm py-8 w-4/6 '>
          {page === 'inbox' ? <Inbox messages={messages} /> : <Requests requests={requests} />}
        </div>
        <div className='w-1/6'></div>
      </div>
    </>
  )
}

function AdminHandler({ page, messages, requests }) {

  const auth = getAuth(app)
  const [user, loading] = useAuthState(auth)

  return (
    loading
      ?
      <div className='w-full h-screen flex items-center justify-center'>
        <Loading  />
      </div>
      :
      user ? <Home page={page} messages={messages} requests={requests} /> : <Login />
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

  // Get all initial data
  const messages = await getMsg();
  const requests = await getRqst();

  return {
    props: {
      page,
      messages,
      requests
    }
  }
}

export default AdminHandler