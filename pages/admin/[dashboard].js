import { Text } from '@nextui-org/react'
import Inbox from '../../src/components/admin_components/Inbox'
import NavBar from '../../src/components/admin_components/NavBar'
import Requests from '../../src/components/admin_components/Requests'

function Home({ page }) {
  return (
    <div className='flex justify-between'>
      <NavBar />
      <div className='px-sm py-8 w-4/6'>
        {page === 'inbox' ? <Inbox /> : <Requests />}
      </div>
      <div className='w-1/6'></div>
    </div>
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

export function getStaticProps(ctx) {
  console.log(ctx)
  const page = ctx.params.dashboard === 'inbox' ? 'inbox' : 'requests'

  return {
    props: {
      page
    }
  }
}

export default Home