import React from "react"
import styles from "./container.module.sass"

const Container: React.FunctionComponent = ({ children }) => {
    return <div className={styles.container}>{children}</div>
}

export default Container
