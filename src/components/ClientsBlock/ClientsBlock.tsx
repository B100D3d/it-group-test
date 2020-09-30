import React from "react"
import styles from "./clients-block.module.sass"
import classNames from "classnames"
import microsoftLogo from "assets/microsoft-logo.png"
import Container from "components/Container/Container"
import BlockName from "components/BlockName/BlockName"
import BlockTitle from "components/BlockTitle/BlockTitle"
import { range } from "utils"
import Slider from "components/Slider/Slider"
import Block from "components/Block/Block"

const mockData = range(4).map((i) => ({
    key: i,
    companiesLogos: range(4).map(() => microsoftLogo),
}))

const ClientsBlock = () => (
    <Block id="clients-block" className={styles.clientsBlock}>
        <div className={styles.contentContainer}>
            <BlockName name="Наши клиенты" />
            <BlockTitle>С нами работают</BlockTitle>
            <Slider navigationColor="#005FA33d" navigationActiveColor="#005FA3">
                {mockData.map((item) => (
                    <div className={styles.logoContainer}>
                        {item.companiesLogos.map((logo) => (
                            <img src={logo} alt="logo" />
                        ))}
                    </div>
                ))}
            </Slider>
        </div>
    </Block>
)

export default ClientsBlock
