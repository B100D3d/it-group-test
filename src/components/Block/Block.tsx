import React from "react"
import styles from "./block.module.sass"
import classNames from "classnames"
import Container from "components/Container/Container"

interface BlockProps {
    id: string
    className?: string
}

const Block: React.FunctionComponent<BlockProps> = ({
    id,
    className,
    children,
}) => (
    <section id={id} className={classNames(styles.block, className)}>
        <Container>{children}</Container>
    </section>
)

export default Block
