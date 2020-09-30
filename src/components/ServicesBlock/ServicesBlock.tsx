import React from "react"
import styles from "./services-block.module.sass"
import BlockName from "components/BlockName/BlockName"
import Services from "components/Services/Services"
import BlockTitle from "components/BlockTitle/BlockTitle"
import Block from "components/Block/Block"

const ServicesBlock = () => {
    return (
        <Block id="services-block" className={styles.servicesBlock}>
            <div className={styles.contentContainer}>
                <BlockName name="Наши услуги" />
                <BlockTitle>Мы специализируемся</BlockTitle>
                <Services />
            </div>
        </Block>
    )
}

export default ServicesBlock
