import React from "react"
import styles from "./footer.module.sass"
import Container from "components/Container/Container"

const Footer = () => (
    <footer>
        <Container>
            <div className={styles.footer}>
                <span>2019 (с) Все права защищены. БухОне.ру</span>
                <span>Разработано: BuhOne</span>
            </div>
        </Container>
    </footer>
)

export default Footer
