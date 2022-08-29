import { Container, Text } from '@nextui-org/react'
import NavBar from '../../src/components/admin_components/NavBar'

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

export default Home