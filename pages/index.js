import { useState } from 'react'
import { Button, Container, Input, Modal, Table, Text } from "@nextui-org/react";
import Link from "next/link";
import Card from "../src/components/Card";
import Form from "../src/components/Form";
import Menu from "../src/components/Menu";
import ModalForm from '../src/components/ModalForm';

export default function Home() {

  const [modalForm, setVisibleModalForm] = useState(false)
  const [selectedPlan, setPlan] = useState('')

  const planes = [
    {
      key: 1,
      plan: "Básico",
      descripcion: ["Sitio estático", "1 página", "Dominio personalizado",],
      precio: 500,
      slug: "basico"
    },
    {
      key: 2,
      plan: "Completo",
      descripcion: ["Sitio dinámico", "5 páginas", "Envio de correos"],
      precio: 900,
      slug: "completo"
    },
    {
      key: 3,
      plan: "Avanzado",
      descripcion: ["Base de datos", "10 páginas", "Dashboard"],
      precio: 1200,
      slug: "avanzado"
    }
  ]


  return (
    <>
      <Menu />
      <Container style={{ marginTop: 10 }}>

        <div className="mt-8 mb-6 flex flex-col md:flex-row gap-12 justify-around items-center">
          <div >
            <h2 className="text-3xl font-bold mb-4">Arma tu sitio web a un precio accesible</h2>
            <Text>Los costos pueden variar dependiendo de los requerimientos que el proyecto en cuestión necesite.</Text>
            <Table cellPadding={10}>
              <Table.Header >
                <Table.Column>Plan</Table.Column>
                <Table.Column>Descripcion</Table.Column>
                <Table.Column>Precio</Table.Column>
                <Table.Column></Table.Column>
              </Table.Header>
              <Table.Body items={planes}>
                {(items, index) => (
                  <Table.Row >

                    <Table.Cell>{items.plan}</Table.Cell>
                    <Table.Cell css={{ maxWidth: 200 }}>{items.descripcion.map((desc, ix) => <li key={ix}>{desc}</li>)}</Table.Cell>
                    <Table.Cell>${items.precio} MXN</Table.Cell>
                    <Table.Cell>
                      <Button size={"xs"} onPress={() => { setVisibleModalForm(true), setPlan(items.plan) }} color="primary">Solicitar</Button>
                    </Table.Cell>
                  </Table.Row>
                )}
              </Table.Body>
            </Table>
          </div>
          <Card />
        </div>

        <div className="flex flex-col">
          <h2 className="text-3xl">Contáctame</h2>
          <Text size={18}>Llena este formulario con tu nombre, correo y asunto si quieres información específica, yo me pondré en contacto contigo a la brevedad</Text>
          <Form />
        </div>

        <ModalForm modalState={modalForm} titulo={selectedPlan} openHandler={setVisibleModalForm} />

      </Container>
    </>
  )
}
