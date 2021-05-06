import React from 'react'
import Menu from '../theme/logos/menu.png'
import styles from './index.module.scss'



const TopBar = () => {
    return <div className={styles['topbar-container']}>
        <div className={styles['topbar-hover-menu']}>
            <div className={styles['topbar-image']}>
                <img src={Menu} alt="menu" />
            </div>
            <ul className={styles['topbar-menu-options']}>
                <li>Erfaring</li>
                <li>Skills</li>
                <li>Uddannelser</li>
            </ul>
        </div>

    </div>

}

export default TopBar