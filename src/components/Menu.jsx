import _ from 'lodash'
import Link from 'next/link'
import React from 'react'
import { Navbar, Text, Button } from '@nextui-org/react'


function Menu() {

    const items = [
        { tag: "Inicio", href: '/', active: true },
        { tag: "Contacto", href: '/contacto', active: false },
    ]

    return (
        <Navbar isCompact shouldHideOnScroll >
            <Navbar.Brand>
                <Navbar.Toggle showIn="sm" />
                <Text hideIn="sm">ACME</Text>
            </Navbar.Brand>
            <Navbar.Content hideIn="sm" variant="underline" enableCursorHighlight >
                <Navbar.Link href="/" isActive >Inicio</Navbar.Link>
                <Navbar.Link href="/contacto">Contacto</Navbar.Link>
            </Navbar.Content>
            <Navbar.Collapse>
                {items.map(({ href, tag }, key) => (
                    <Navbar.CollapseItem>
                        <Link key={key} href={href}>{tag}</Link>
                    </Navbar.CollapseItem>

                ))}

            </Navbar.Collapse>
        </Navbar>
    )
}

export default Menu