import React from "react"
import styles from "./styled-button.module.sass"
import classNames from "classnames"

interface StyledButton {
    onClick: React.MouseEventHandler
    className?: string
}

const StyledButton: React.FunctionComponent<StyledButton> = ({
    onClick,
    children,
    className,
}) => {
    return (
        <button
            onClick={onClick}
            className={classNames(styles.styledButton, className)}
        >
            {children}
        </button>
    )
}

export default StyledButton
