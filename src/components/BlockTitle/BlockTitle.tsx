import React from "react"
import styles from "./block-title.module.sass"

const BlockTitle: React.FunctionComponent = ({ children }) => (
    <h1 className={styles.blockTitle}>{children}</h1>
)

export default BlockTitle
