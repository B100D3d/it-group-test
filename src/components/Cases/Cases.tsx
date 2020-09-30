import React from "react"
import styles from "./cases.module.sass"
import { range } from "utils"

const mockData = range(4).map((i) => ({
    key: i,
    count: 90,
    title: "Завершено крупных сделок",
}))

const Cases = () => (
    <ul className={styles.cases}>
        {mockData.map((item) => (
            <li key={item.key}>
                <div className={styles.contentContainer}>
                    <span className={styles.count}>{item.count}</span>
                    <span className={styles.title}>{item.title}</span>
                    <a href="#">Все кейсы</a>
                </div>
            </li>
        ))}
    </ul>
)

export default Cases
