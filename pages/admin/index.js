import { Loading, Text } from '@nextui-org/react'
import Login from '../../src/components/admin_components/Login'
import NavBar from '../../src/components/admin_components/NavBar'
import { app } from '../../src/firebase'
import { getAuth,  } from 'firebase/auth'
import {useAuthState} from 'react-firebase-hooks/auth'

function Home() {
  return (
    <>
      <NavBar />
      <div className='flex justify-between'>
        <div className="w-1/6 px-6" />
        <div className='px-sm py-8 w-4/6 '>
          <Text weight={'bold'} size={24}>Hola Ruben!</Text>
          <Text>Actualmente existen pocas opciones para agregar al dashboard</Text>
        </div>
        <div className='w-1/6'></div>
      </div>
    </>
  )
}

function AdminHandler() {

  const auth = getAuth(app)
  const [user, loading] = useAuthState(auth)

  return (
    loading
      ?
      <div className='w-full h-screen flex items-center justify-center'>
        <Loading  />
      </div>
      :
      user ? <Home /> : <Login />
  )
}



export default AdminHandler