import { Button, Checkbox, Grid, Input, Modal, Radio, Text } from '@nextui-org/react'
import axios from 'axios'
import { useState } from 'react'
import validate, { validateBool } from '../services/valForm'

function ModalForm({ modalState, openHandler, titulo }) {
    const [datos, setDatos] = useState({
        plan: titulo,
        nombre: '',
        correo: '',
        telefono: '',
        contactar: '',
        date: Date.now()
    })
    const [status, setStatus] = useState(false)
    return (
        <Modal preventClose open={modalState} closeButton onClose={() => openHandler(false)}>
            <Modal.Header>
                <div className='flex flex-col'>
                    <Text size={20} weight={'bold'}>Plan {titulo}</Text>
                    <Text>Porfavor llena la siguiente información</Text>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Input
                    onInput={({ target }) => setDatos({ ...datos, nombre: target.value })} aria-label="Nombre"
                    required label='Nombre' clearable type={"text"} placeholder='Ingresa tu nombre(s)' />
                <Input
                    onInput={({ target }) => setDatos({ ...datos, correo: target.value })}
                    aria-labelledby="Correo"
                    required label='Correo' clearable type={"email"} name='correo' placeholder='Ingresa tu @ correo' />
                <Input
                    onInput={({ target }) => setDatos({ ...datos, telefono: target.value })}
                    aria-labelledby="Telefono"
                    required label='Telefono' clearable type={"tel"} name='telefono' placeholder='Ingresa tu # num telefónico' />
                <Radio.Group aria-labelledby="Contacto" onChange={(e) => setDatos({ ...datos, contactar: e })} size='xs' orientation='horizontal' label="Por dónde prefieres ser contactado">
                    <Radio value='correo' description="email proporcionado">Correo</Radio>
                    <Radio value='telefono' description="vía whatsap del tel proporcionado">Whatsap</Radio>
                </Radio.Group>
            </Modal.Body>
            <Modal.Footer justify='center'>
                <Button color={'gradient'} onPress={async () => {
                    const { nombre, contactar, correo, telefono } = datos
                    if (validateBool(nombre) && validateBool(contactar) && validateBool(correo) && validateBool(telefono)) {
                        const request = await axios.post('http://localhost:3001/requests', datos)
                        setStatus(true)
                    }
                }
                }>{status ? 'Listo' : 'Enviar'}</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default ModalForm