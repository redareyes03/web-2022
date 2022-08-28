import { Button, Input, Textarea, Popover, Text, Grid } from '@nextui-org/react'
import axios from 'axios'
import { useState } from 'react'
import { AiFillCheckCircle } from 'react-icons/ai'
import { MdError } from 'react-icons/md'
import validate from '../services/valForm'


function Form() {
  const [isOpen, setIsOpen] = useState(false)
  const [nameVal, setNameVal] = useState(' ');
  const [mailVal, setMailVal] = useState(' ');
  const [msgVal, setMsgVal] = useState(' ');
  const [error, setError] = useState(false);
  return (
    <form className='bg-gray-50 my-6 rounded w-fit py-4 px-8 flex flex-col gap-8 shadow-lg '>

      <Input
        status={validate(nameVal)} onClearClick={() => setNameVal('')}
        onInput={({ target }) => setNameVal(target.value)}
        aria-labelledby='Nombre' label='Nombre' clearable type={"text"} name='nombre' placeholder='Ingresa tu nombre(s)' />

      <Input
        status={validate(mailVal, [validateMail(mailVal)])} onClearClick={() => setMailVal('')}
        onInput={({ target }) => {
          setMailVal(target.value)
        }}
        aria-labelledby='Correo' label='Correo' clearable type={"email"} name='correo' placeholder='Ingresa tu @ correo' />

      <Textarea
        status={validate(msgVal)} onClearClick={() => setMsgVal('')}
        onInput={({ target }) => setMsgVal(target.value)}
        aria-labelledby='Mensaje' label='Mensaje' name='mensaje' placeholder='Ingresa tu mensaje o pregunta' />
      <Popover isOpen={isOpen} onOpenChange={() => setIsOpen(false)}>
        <Popover.Trigger>
          <Button shadow onClick={async () => {

            if (validateMail(mailVal) && nameVal.trim() != '' && msgVal.trim() != '' && mailVal.trim() != '') {
              const request = await axios.post('http://localhost:3001/inbox', {
                "nombre": nameVal,
                "correo": mailVal,
                "mensaje": msgVal,
                "date": Date.now()
              })
              setError(false)
            }
            else {
              setError(true)
            }

            setIsOpen(true)


          }}>Enviar</Button>
        </Popover.Trigger>
        <Popover.Content >
          <ContentPopover error={error} />
        </Popover.Content>
      </Popover>
    </form>

  )
}




function validateMail(mail) {
  const regex = new RegExp(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/, 'g');
  return mail.match(regex) && true;
}

function ContentPopover({ error }) {
  return (
    <div className="flex gap-3 items-center justify-center w-full px-3 py-2">
      <Text css={{ color: error ? "$error" : "$success" }} >{error ? 'Error' : 'Enviado'}</Text>
      {error ? <MdError className="fill-red-500" /> : <AiFillCheckCircle className="fill-lime-500" />}
    </div>
  )
}

export default Form