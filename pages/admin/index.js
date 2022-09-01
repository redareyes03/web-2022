import { async } from '@firebase/util'
import { Text } from '@nextui-org/react'
import { getAuth, onAuthStateChanged } from 'firebase/auth'
import { useEffect, useState } from 'react'
import Login from '../../src/components/admin_components/Login'
import NavBar from '../../src/components/admin_components/NavBar'
import { app } from '../../src/firebase'

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

export function AdminHandler() {

  const [loginState, setUserState] = useState(null)

  useState(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      setUserState(user)
    }, null)
  }, [])

  return (
    true ? <Home /> : <Login />
  )
}



export default AdminHandler