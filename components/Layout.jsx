import React from 'react'
import { Children } from 'react/cjs/react.production.min'
import { Header } from '.'

const Layout = ({children}) => {
    return (
        <div>
            <Header/>
            {children}
        </div>
    )
}

export default Layout
