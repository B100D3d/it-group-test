import React from "react"
import styles from "./pagination.module.sass"
import { range } from "utils"
import classNames from "classnames"

type OnClick = (index: number) => void

interface PaginationProps {
    numOfPages: number
    activePage: number
    className?: string
    backgroundColor?: string
    activeBackgroundColor?: string
    onClick: OnClick
}

const Pagination: React.FunctionComponent<PaginationProps> = ({
    numOfPages,
    activePage,
    onClick,
    backgroundColor,
    activeBackgroundColor,
    className,
}) => (
    <div className={classNames(styles.pagination, className)}>
        {range(numOfPages).map((index) => (
            <div
                key={index}
                className={classNames(styles.dot, {
                    [styles["dot--active"]]: activePage === index,
                })}
                style={{
                    "--back-color": backgroundColor,
                    "--active-back-color": activeBackgroundColor,
                }}
                onClick={() => onClick(index)}
            />
        ))}
    </div>
)

export default Pagination
