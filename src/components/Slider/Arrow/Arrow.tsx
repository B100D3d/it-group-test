import React from "react"
import styles from "./arrow.module.sass"
import classNames from "classnames"

type Direction = "left" | "right"

interface ArrowProps {
    direction: Direction
    onClick?: React.MouseEventHandler
}

const Arrow: React.FunctionComponent<ArrowProps> = ({ direction, onClick }) => {
    return (
        <div role="button" className={styles.arrowContainer} onClick={onClick}>
            <div
                className={classNames(
                    styles.arrow,
                    styles[`arrow--${direction}`]
                )}
            />
        </div>
    )
}

export default Arrow
