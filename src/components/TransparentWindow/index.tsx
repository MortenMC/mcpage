import React from 'react'

import styles from './index.module.scss'
import TransparentWindow from './TransparentWindow'


const WindowContainer = () => {
return (
    <div className={styles['window-container']}>
        <TransparentWindow />
    </div>
)
}

export default WindowContainer
