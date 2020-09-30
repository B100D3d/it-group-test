import React from "react"
import styles from "./about-block.module.sass"
import BlockName from "components/BlockName/BlockName"
import Cases from "components/Cases/Cases"
import BlockTitle from "components/BlockTitle/BlockTitle"
import Block from "components/Block/Block"

const AboutBlock = () => (
    <Block id="about-block">
        <div className={styles.contentContainer}>
            <div className={styles.textContainer}>
                <BlockName name="О нас" />
                <BlockTitle>
                    Компания <br /> <span>ИвановПром</span>
                </BlockTitle>
                <span className={styles.aboutText}>
                    Lorem Ipsum - это текст-"рыба", часто используемый в печати
                    и вэб-дизайне. Lorem Ipsum является стандартной "рыбой" для
                    текстов на латинице с начала XVI века. В то время некий
                    безымянный печатник создал большую коллекцию размеров и форм
                    шрифтов, используя Lorem Ipsum для распечатки образцов.
                    Lorem Ipsum не только успешно пережил без заметных изменений
                    пять веков, но и перешагнул в электронный дизайн.
                </span>
            </div>
            <div className={styles.casesContainer}>
                <Cases />
            </div>
        </div>
    </Block>
)

export default AboutBlock
