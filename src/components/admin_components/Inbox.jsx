import { Text } from "@nextui-org/react"

function Inbox() {

    const messages = [
        { folio: 123, nombre: "Ruben", correo: "ruben@correo.com", mensaje: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sit amet nisl in nisi cursus ullamcorper. Phasellus vitae sagittis nunc. Quisque pulvinar ipsum mi, non auctor sapien congue sit amet. Sed sed augue rutrum, varius sapien at, dignissim velit. Suspendisse sed erat ipsum. Mauris odio risus, faucibus lacinia semper eget, pharetra sit amet urna. Aliquam erat volutpat. Etiam posuere rutrum aliquam." },
        { folio: 123, nombre: "Ruben", correo: "ruben@correo.com", mensaje: "Hola este es mi mensaje" }
    ]


    return (
        <div>
            <Text size={24} weight="semibold">Inbox</Text>
            {messages.map((message, key) => (
                <div key={key} className="shadow-md rounded-lg p-3 my-4">
                    <div className="flex justify-between ">
                        <Text weight={"medium"} size={18}>{message.nombre} - {message.correo}</Text>
                        <Text weight={"thin"}>{message.folio}</Text>
                    </div>
                    <Text className="mt-4" >{message.mensaje}</Text>
                </div>
            ))}
        </div>
    )
}

export default Inbox