import { Button, Input, Modal, Table, Text } from '@nextui-org/react'
import axios from 'axios'
import _ from 'lodash'
import React, { useState, useEffect } from 'react'
import { v4 } from 'uuid'
import { BsFillTelephoneFill } from 'react-icons/bs'
import { MdAlternateEmail } from 'react-icons/md'

function Requests({ requests }) {
    const [requestList, setRequestsList] = useState(requests)
    const [openModal, setOpenModal] = useState(false)
    const [modalData, setModalData] = useState({})
    // useEffect(() => {
    //     (async function () {
    //         const data = await getMsg();
    //         setList(data)
    //     })()
    // }, [])
    console.log(requestList);

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
            <div className="flex gap-3 justify-center">
                <div className="relative w-64">
                    <select className="w-full appearance-none px-3 py-2 rounded-md bg-gray-100/80 border-1 border-gray-200">
                        <option disabled selected value="">- Seleccione -</option>
                        <option value="">Plan</option>
                        <option value="">Nombre</option>
                        <option value="">Correo</option>
                        <option value="">Telefono</option>
                        <option value=""></option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                    </div>
                </div>
                <Input type="search"></Input>
            </div>
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