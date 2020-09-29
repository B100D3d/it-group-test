import React from "react"
import styles from "./pagination.module.sass"
import { range } from "utils"
import classNames from "classnames"

type OnClick = (index: number) => void

interface PaginationProps {
    numOfPages: number
    activePage: number
    onClick: OnClick
}

const Pagination: React.FunctionComponent<PaginationProps> = ({
    numOfPages,
    activePage,
    onClick,
}) => (
    <div className={styles.pagination}>
        {range(numOfPages).map((index) => (
            <div
                key={index}
                className={classNames(styles.dot, {
                    [styles["dot--active"]]: activePage === index,
                })}
                onClick={() => onClick(index)}
            />
        ))}
    </div>
)

export default Pagination
