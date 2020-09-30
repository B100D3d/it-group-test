import React from "react"
import styles from "./block-name.module.sass"
import classNames from "classnames"

interface BlockNameProps {
    name: string
    className?: string
}

const BlockName: React.FunctionComponent<BlockNameProps> = ({
    name,
    className,
}) => <h2 className={classNames(styles.blockName, className)}>{name}</h2>

export default BlockName
