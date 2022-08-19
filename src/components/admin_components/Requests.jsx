import { Button, Text } from '@nextui-org/react'
import _ from 'lodash'
import React from 'react'

function Requests() {
    return (
        <div className="flex gap-4">
            <RequestCard type={"basico"} />
            <RequestCard type={"completo"} />
            <RequestCard type={"avanzado"} />
        </div>
    )
}

const RequestCard = ({ type }) => {
    const types = {
        "basico": ["bg-purple-600", "secondary"],
        "completo": ["bg-blue-500", "primary"],
        "avanzado": ["bg-amber-400", "warning"],
    }

    return (
        <div className={'rounded-lg w-fit px-4 py-2 ' + `${types[type][0]}`}>
            <Text weight="bold" color="white" size={18} >{_.capitalize(type)}</Text>
            <Button size="sm" flat color={`${types[type][1]}`}>Abrir</Button>
        </div >
    )
}


export default Requests