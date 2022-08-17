import { Container, Text } from '@nextui-org/react'
import Form from '../src/components/Form'
import Menu from '../src/components/Menu'

function Contacto() {
    return (
        <>
            <Menu />
            <Container className='mt-8'>
                <div className="flex flex-col">
                    <h2 className="text-3xl">Contáctame</h2>
                    <Text size={18}>Llena este formulario con tu nombre, correo y asunto si quieres información específica, yo me pondré en contacto contigo a la brevedad</Text>
                    <Form />
                </div>
            </Container>
        </>
    )
}

export default Contacto