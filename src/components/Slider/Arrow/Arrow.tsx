import React from "react"
import styles from "./arrow.module.sass"
import classNames from "classnames"

type Direction = "left" | "right"

interface ArrowProps {
    backgroundColor?: string
    activeBackgroundColor?: string
    direction: Direction
    onClick?: React.MouseEventHandler
}

const Arrow: React.FunctionComponent<ArrowProps> = ({
    direction,
    onClick,
    backgroundColor,
    activeBackgroundColor,
}) => {
    return (
        <div
            role="button"
            className={styles.arrowContainer}
            onClick={onClick}
            style={{
                "--back-color": backgroundColor,
                "--active-back-color": activeBackgroundColor,
            }}
        >
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
