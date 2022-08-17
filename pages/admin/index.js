import { Container, Text } from '@nextui-org/react'
import NavBar from '../../src/components/admin_components/NavBar'

function Home() {
  return (
    <div className='flex'>
      <NavBar />
      <div className='px-sm py-8'>
        <Text weight={'bold'} size={24}>Hola Ruben!</Text>
        <Text>Actualmente existen pocas opciones para agregar al dashboard</Text>
      </div>
    </div>
  )
}

export default Home