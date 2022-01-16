import React, { useState, useEffect } from 'react'
import { getCategories } from '../services'
import Link from 'next/link'

const Categories = () => {

    const [categories, setCategories] = useState([])

    useEffect(() => {
        getCategories()
            .then((newCategories) => setCategories(newCategories))

    }, [])
    return (
        <div className='p-8 mb-8 bg-white rounded-lg shadow-lg'>
            <h3 className='pb-4 mb-5 text-xl font-semibold border-b'>
                Categories
            </h3>
            {categories.map((category) => (
                <Link key={category.slug} href={`/category/${category.slug}`}>
                    <span className='block p-2 m-2 cursor-pointer'>
                        {category.name}
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default Categories
