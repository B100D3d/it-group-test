import React from "react"
import styles from "./logo.module.sass"

import logoImg from "assets/logo.svg"

const Logo = () => (
    <div className={styles.logo}>
        <img src={logoImg} alt="" />
        <span>BuhOne</span>
    </div>
)

export default Logo
