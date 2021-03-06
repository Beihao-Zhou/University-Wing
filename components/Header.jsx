import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'

const Header = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))

    }, [])

    return (
        <div className='container px-10 mx-auto mb-8'>
            <div className='inline-block w-full py-8 border-b border-blue-400'>
                <div className='block md:float-left'>
                    <Link href="/">
                        <span className='text-4xl font-bold text-white cursor-pointer'>
                            University Wing
                        </span>
                    </Link>
                </div>
                <div className='hidden md:contents'>
                    {categories.map((category) => (
                        <Link key={category.slug} href={`/category/${category.slug}`}>
                            <span className='mt-2 ml-4 font-semibold text-white align-middle cursor-pointer md:float-right'>{category.name}</span>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Header
