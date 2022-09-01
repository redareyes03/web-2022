import { Button, Checkbox, Grid, Input, Modal, Radio, Text } from '@nextui-org/react'
import axios from 'axios'
import { useState, useEffect } from 'react'
import validate, { validateBool } from '../services/valForm'

function ModalForm({ modalState, openHandler, titulo, planId }) {
    const [datos, setDatos] = useState({
        plan: '',
        planId: '',
        nombre: '',
        correo: '',
        telefono: '',
        contactar: '',
        date: Date.now()
    })

    const [status, setStatus] = useState(false);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        setDatos({ ...datos, plan: titulo, planId })


    }, [modalState])

    const resetFields = (datosObj) => {
        const obj = { ...datosObj }
        for (const key in obj) {
            obj[key] = ''
        }
        return obj
    }

    return (
        <Modal preventClose open={modalState} closeButton onClose={() => {
            openHandler(false);
            setStatus(false);
            setDatos(resetFields(datos))

        }}>
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
                    required label='Correo' clearable type={"email"} placeholder='Ingresa tu @ correo' />
                <Input
                    onInput={({ target }) => setDatos({ ...datos, telefono: target.value })}
                    aria-labelledby="Telefono"
                    required label='Telefono' clearable type={"tel"} placeholder='Ingresa tu # num telefónico' />
                <Radio.Group aria-labelledby="Contacto" onChange={(e) => setDatos({ ...datos, contactar: e })} size='xs' orientation='horizontal' label="Por dónde prefieres ser contactado">
                    <Radio value='correo' description="email proporcionado">Correo</Radio>
                    <Radio value='telefono' description="vía whatsap del tel proporcionado">Whatsap</Radio>
                </Radio.Group>
            </Modal.Body>
            <Modal.Footer justify='center'>
                <Button color={'gradient'} disabled={status} onPress={async () => {
                    const { nombre, contactar, correo, telefono } = datos
                    console.log(datos);
                    if (validateBool(nombre) && validateBool(contactar) && validateBool(correo) && validateBool(telefono)) {
                        setLoading(true)
                        const request = await axios.post('http://localhost:3001/requests', datos)
                        setLoading(false)
                        setStatus(true)
                    }
                }
                }>{loading ? 'Cargando' : (status ? 'Listo' : 'Enviar')}</Button>
            </Modal.Footer>
        </Modal >
    )
}

export default ModalForm