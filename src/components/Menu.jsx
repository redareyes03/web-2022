import _ from 'lodash'
import Link from 'next/link'
import React, {useEffect, useState} from 'react'
import { Navbar, Text, Button } from '@nextui-org/react'


function Menu() {

    const items = [
        { tag: "Inicio", href: '/' },
        { tag: "Contacto", href: '/contacto' },
    ]

    const [activePage, setActivePage] = useState()

    useEffect(() => {
        setActivePage(getActivePage());
    }, [])


    return (
        <Navbar isCompact variant={"sticky"} css={{zIndex: '$max'}}>
            <Navbar.Brand>
                <Navbar.Toggle showIn="xs" />
                <Text hideIn="xs">ACME</Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="sm" variant="underline" enableCursorHighlight>
                {items.map(({ href, tag }, key) => (
                    <Navbar.Link key={key} href={href} isActive={activePage === href ? true : false}>
                        {tag}
                    </Navbar.Link>

                ))}
            </Navbar.Content>
            <Navbar.Collapse>
                {items.map(({ href, tag }, key) => (
                    <Navbar.CollapseItem key={key}>
                        <Link href={href}>{tag}</Link>
                    </Navbar.CollapseItem>

                ))}

            </Navbar.Collapse>
        </Navbar>
    )
}

function getActivePage(){
    return window.location.pathname
}

export default Menu