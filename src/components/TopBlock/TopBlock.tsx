import React from "react"
import styles from "./top-block.module.sass"
import Container from "components/Container/Container"
import Slider from "components/Slider/Slider"
import { range } from "utils"
import StyledButton from "components/StyledButton/StyledButton"
import classNames from "classnames"
import Block from "components/Block/Block"

const mockData = range(4).map((i) => ({
    key: i,
    title: (
        <h1>
            Бухгалтерские услуги <br /> в Санкт-Петербурге
        </h1>
    ),
    buttonText: "Наша презентация",
    link: "#",
}))

const TopBlock = () => {
    return (
        <Block id="top-block" className={styles.topBlock}>
            <Slider className={styles.slider} interval={5000}>
                {mockData.map((item, i) => (
                    <div key={item.key} className={styles.content}>
                        {item.title}
                        <StyledButton
                            onClick={() => {}}
                            className={styles.button}
                        >
                            {item.buttonText}
                        </StyledButton>
                    </div>
                ))}
            </Slider>
        </Block>
    )
}

export default TopBlock
