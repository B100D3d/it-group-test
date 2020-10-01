import React from "react"
import styles from "./services.module.sass"
import buhBackground from "assets/buh-background.webp"
import { range } from "utils"

const mockData = range(6).map((i) => ({
    key: i,
    title: "Бухгалтерское обслуживание",
    backgroundImage: buhBackground,
}))

const Services = () => {
    return (
        <div className={styles.servicesContainer}>
            <ul className={styles.services}>
                {mockData.map((item) => (
                    <li key={item.key}>
                        <img src={item.backgroundImage} alt="" />
                        <span>{item.title}</span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Services
