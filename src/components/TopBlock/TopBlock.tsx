import React from "react"
import styles from "./top-block.module.sass"
import Container from "components/Container/Container"
import Slider from "components/Slider/Slider"
import { range } from "utils"
import StyledButton from "components/StyledButton/StyledButton"

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
        <div id="#top-block" className={styles.topBlock}>
            <Container>
                <Slider>
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
            </Container>
        </div>
    )
}

export default TopBlock
