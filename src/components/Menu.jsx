import _ from 'lodash'
import Link from 'next/link'
import React from 'react'



function Menu() {

    const links = ['inicio', 'contacto']

    return (
        <div className='flex flex-col md:flex-row  justify-between items-center py-3 px-8 shadow-md'>
            <Link passHref href={"/"} >
                <a className='text-gray-600' ><h1 className='m-0 text-3xl'>@RubenReyes</h1></a>
            </Link>
            <nav className='flex gap-8'>
                {links.map((element, index) => (
                    <Link
                        key={index}
                        href={`/${element === 'inicio' ? '/' : element}`}
                        passHref
                    >
                        <a
                            className='text-gray-600 text-lg '
                        >{_.capitalize(element)}</a>
                    </Link>
                ))}
            </nav>
        </div>
    )
}

export default Menu