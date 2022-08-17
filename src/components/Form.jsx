import {Button, Input, Textarea} from '@nextui-org/react'

function Form() {
  return (
    <form className='bg-gray-50 my-6 rounded md:w-4/12 py-4 px-8 flex flex-col gap-8 shadow-lg '>
        <Input aria-labelledby='Nombre' label='Nombre' clearable type={"text"} name='nombre' placeholder='Ingresa tu nombre(s)'/>
        <Input aria-labelledby='Correo' label='Correo' clearable type={"email"} name='correo' placeholder='Ingresa tu @ correo'/>
        <Textarea aria-labelledby='Mensaje' label='Mensaje' name='mensaje' placeholder='Ingresa tu mensaje o pregunta'/>
        <Button as='button' type='submit'>Enviar</Button>
    </form>
  )
}

export default Form