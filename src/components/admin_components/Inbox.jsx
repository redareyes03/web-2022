import { Button, Text, Tooltip } from "@nextui-org/react"
import axios from "axios"
import { useEffect, useState } from "react"
import { getMsg } from "../../services/getMsg"

function Inbox({ messages }) {

    const [list, setList] = useState(messages)
    const [btnDelete, pressBtnDelete] = useState(false);

    useEffect(() => {
        (async function () {
            const data = await getMsg();
            setList(data)
        })()
    }, [btnDelete])

    return (
        <div>
            <Text size={24} weight="semibold">Inbox</Text>
            {list.map((message, key) => (
                <Tooltip key={key} className="w-full" placement="right" content={<TooltipContent message={message} pressBtnDelete={pressBtnDelete} btnState={btnDelete} />}>
                    <div className="shadow-md rounded-lg p-3 my-4" >
                        <div className="flex justify-between ">
                            <Text weight={"medium"} size={18}>{message.nombre} - {message.correo}</Text>
                            <Text weight={"thin"}>{message.folio}</Text>
                        </div>
                        <Text className="mt-4" >{message.mensaje}</Text>
                    </div>
                </Tooltip>
            ))}
        </div>
    )
}

const TooltipContent = ({ message, pressBtnDelete, btnState }) => (
    <div className="flex gap-3 p-4">
        <Button shadow size={"xs"} color={"primary"} onClick={() => { navigator.clipboard.writeText(message.correo) }}>Copy</Button>
        <Button shadow size={"xs"} color={"error"} onClick={async () => {
            try {
                pressBtnDelete(!btnState)
                await axios.delete(`http://localhost:3001/inbox/${message._id}`)
            } catch (error) {
                return error
            }
        }}>Delete</Button>
    </div>
)

export default Inbox