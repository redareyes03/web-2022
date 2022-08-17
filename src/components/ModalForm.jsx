import { Button, Checkbox, Grid, Input, Modal, Radio, Text } from '@nextui-org/react'
function ModalForm({ modalState, openHandler, titulo }) {
    return (
        <Modal preventClose open={modalState} closeButton onClose={() => openHandler(false)}>
            <Modal.Header>
                <div className='flex flex-col'>
                    <Text size={20} weight={'bold'}>Plan {titulo}</Text>
                    <Text>Porfavor llena la siguiente información</Text>
                </div>
            </Modal.Header>
            <Modal.Body>
                <Input required label='Nombre' clearable type={"text"} name='nombre' placeholder='Ingresa tu nombre(s)' />
                <Input required label='Correo' clearable type={"email"} name='correo' placeholder='Ingresa tu @ correo' />
                <Input required label='Telefono' clearable type={"tel"} name='telefono' placeholder='Ingresa tu # num telefónico' />
                <Radio.Group size='xs' orientation='horizontal' label="Por dónde prefieres ser contactado">
                    <Radio value='correo' description="email proporcionado">Correo</Radio>
                    <Radio value='telefono' description="vía whatsap del tel proporcionado">Whatsap</Radio>
                </Radio.Group>
            </Modal.Body>
            <Modal.Footer justify='center'> 
                <Button color={'gradient'}>Listo</Button>
            </Modal.Footer>
        </Modal>
    )
}

export default ModalForm