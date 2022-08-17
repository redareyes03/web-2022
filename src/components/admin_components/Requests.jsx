import { Text } from '@nextui-org/react'
import React from 'react'

function Requests() {
    return (
        <div>
            <RequestCard type={""}/>
        </div>
    )
}

const RequestCard = ({ type }) => {
    const types = {
        "basico": "bg-purple-600",
        "completo": "bg-blue-500",
        "avanzado": "bg-amber-400",
    }

    return (
        <div className={'rounded-lg w-20 h-20  ' + `${types[type]}`}></div>
    )
}


export default Requests