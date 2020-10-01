import React, { useState } from "react"
import styles from "./menu.module.sass"
import Navigation from "components/Navigation/Navigation"
import classNames from "classnames"
import BurgerButton from "components/BurgerButton/BurgerButton"

const Menu = () => {
    const [isOpen, setOpen] = useState(false)

    return (
        <>
            <Navigation className={styles.navigation} />
            <div className={styles.mobileMenu}>
                <BurgerButton className={styles.burger} onClick={setOpen} />
                <div
                    className={classNames(styles.menu, {
                        [styles["menu--open"]]: isOpen,
                    })}
                >
                    <Navigation />
                </div>
            </div>
        </>
    )
}

export default Menu
