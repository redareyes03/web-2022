import { Button, Input, Modal, Table, Text } from '@nextui-org/react'
import axios from 'axios'
import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'

function Requests({ requests }) {
    const [requestList, setRequestsList] = useState(requests)

    const columns = [
        { name: "Plan", uid: "plan" },
        { name: "Nombre", uid: "nombre" },
        { name: "Correo", uid: "correo" },
        { name: "Telefono", uid: "telefono" },
        { name: "Prefiere", uid: "contactar" },
        { name: "Fecha", uid: "date" },
    ]

    const renderCell = (user, columnKey) => {
        const cellVal = user[columnKey];

        switch (columnKey) {
            case 'contactar': return (cellVal === 'telefono' ? <BsFillTelephoneFill className="mx-auto flex fill-blue-400" /> : <MdAlternateEmail className="flex mx-auto fill-red-400" />)
            case 'date': return <Text className="text-center">{new Date(cellVal).toLocaleDateString()}</Text>
            default: return <Text className="text-center" >{cellVal}</Text>
        }
    };

    return (
        <>
            <Text size={24} weight="semibold">Requests</Text>
            <Table selectionMode="multiple" color="error">
                <Table.Header columns={columns}>
                    {(column) => (
                        <Table.Column align="center" key={column.uid}>{column.name}</Table.Column>
                    )}
                </Table.Header>
                <Table.Body items={requestList}>
                    {(item) => (
                        <Table.Row key={v4()} >
                            {(columnKey) => (
                                <Table.Cell css={{ p: 0 }}>{renderCell(item, columnKey)}</Table.Cell>
                            )}
                        </Table.Row>
                    )}
                </Table.Body>
            </Table>
        </>
    )
}


export default Requests