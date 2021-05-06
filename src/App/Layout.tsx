import React from 'react'

import TopBar from '../TopBar/index'

type Props = {
    children: React.ReactNode
}

const Layout = (props: Props) => <React.Fragment>
    <TopBar />
    {props.children}
</React.Fragment>

export default Layout
    