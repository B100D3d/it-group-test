import React from "react"
import styles from "./header.module.sass"
import Container from "components/Container/Container"
import Logo from "components/Logo/Logo"

const Header = () => {
    return (
        <header>
            <Container>
                <div className={styles.header}>
                    <Logo />
                </div>
            </Container>
        </header>
    )
}

export default Header
