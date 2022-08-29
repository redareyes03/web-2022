import { Button, Text } from '@nextui-org/react'
import _ from 'lodash'
import React, { useState, useEffect } from 'react'

function Requests({ requests }) {
    const [requestList, setRequestsList] = useState(requests)

    // useEffect(() => {
    //     (async function () {
    //         const data = await getMsg();
    //         setList(data)
    //     })()
    // }, [])

    return (
        <>
            <Text size={24} weight="semibold">Requests</Text>
            <div className="flex gap-4">
                {requestList.map((data, key) => (
                    <RequestCard key={key} data={data} />
                ))}
            </div>
        </>
    )
}

const RequestCard = ({ data }) => {
    const types = {
        1: ["bg-purple-600", "secondary"],
        2: ["bg-blue-500", "primary"],
        3: ["bg-amber-400", "warning"],
    }

    const { planId, plan } = data


    return (
        <div className={'rounded-lg w-fit px-4 py-2 ' + `${types[planId][0]}`}>
            <Text weight="bold" color="white" size={18} >{_.capitalize(plan)}</Text>
            <Button size="sm" flat color={`${types[planId][1]}`}>Abrir</Button>
        </div >
    )
}


export default Requests