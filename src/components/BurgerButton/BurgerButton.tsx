import React, { useState } from "react"
import styles from "./burger-button.module.sass"
import classNames from "classnames"

type OnClick = (isOpen: boolean) => void

interface BurgerButtonProps {
    onClick: OnClick
    className?: string
}

const BurgerButton: React.FunctionComponent<BurgerButtonProps> = ({
    onClick,
    className,
}) => {
    const [isOpen, setOpen] = useState(false)
    const handleOpen = () => {
        setOpen(!isOpen)
        onClick(!isOpen)
    }
    return (
        <div
            className={classNames(styles.burgerButton, className, {
                [styles.active]: isOpen,
                [styles.notActive]: !isOpen,
            })}
            role="button"
            onClick={handleOpen}
        >
            <span />
            <span />
            <span />
        </div>
    )
}

export default BurgerButton
