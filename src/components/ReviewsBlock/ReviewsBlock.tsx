import React from "react"
import styles from "./reviews-block.module.sass"
import Block from "components/Block/Block"
import BlockName from "components/BlockName/BlockName"
import BlockTitle from "components/BlockTitle/BlockTitle"
import { range } from "utils"

import avatar from "assets/avatar.png"
import Slider from "components/Slider/Slider"

const mockData = range(4).map((i) => ({
    key: i,
    review:
        'Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для текстов на латинице с начала XVI века. В то время некий безымянный печатник создал большую коллекцию размеров и форм шрифтов, используя Lorem Ipsum для распечатки образцов. Lorem Ipsum - это текст-"рыба", часто используемый в печати и вэб-дизайне. ',
    avatar,
    name: "Екатерина Иванова",
    company: "Директор ООО “Раз-два”",
}))

const ReviewsBlock = () => (
    <Block id="reviews-block">
        <div className={styles.contentContainer}>
            <BlockName name="Отзывы" />
            <BlockTitle>Ваши благодарности</BlockTitle>
            <Slider navigationColor="#005FA33d" navigationActiveColor="#005FA3">
                {mockData.map((item) => (
                    <div className={styles.reviewContainer} key={item.key}>
                        <span className={styles.review}>{item.review}</span>
                        <div className={styles.user}>
                            <img src={item.avatar} alt="avatar" />
                            <div className={styles.userInfo}>
                                <span className={styles.name}>{item.name}</span>
                                <span className={styles.company}>
                                    {item.company}
                                </span>
                            </div>
                        </div>
                    </div>
                ))}
            </Slider>
        </div>
    </Block>
)

export default ReviewsBlock
