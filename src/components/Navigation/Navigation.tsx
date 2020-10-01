import React from "react"
import styles from "./navigation.module.sass"

import { ReactComponent as Mobile } from "assets/phone.svg"
import { ReactComponent as Mail } from "assets/mail.svg"
import { ReactComponent as Clock } from "assets/clock.svg"
import { ReactComponent as Location } from "assets/location.svg"
import classNames from "classnames"

interface NavigationProps {
    className?: string
}

const Navigation: React.FunctionComponent<NavigationProps> = ({
    className,
}) => (
    <nav className={classNames(className)}>
        <ul className={styles.info}>
            <li>
                <Mobile />
                <span>8 (111) 222-33-44</span>
            </li>
            <li>
                <Clock />
                <span>Пн-Пт 10:00-18:00</span>
            </li>
            <li>
                <Mail />
                <span>order@buhone.ru</span>
            </li>
            <li>
                <Location />
                <span>Невский пр. 130</span>
            </li>
        </ul>
        <ul className={styles.links}>
            <li>
                <a href="#">Главная</a>
            </li>
            <li>
                <a href="#services-block">Услуги</a>
            </li>
            <li>
                <a href="#about-block">Кейсы</a>
            </li>
            <li>
                <a href="#clients-block">О компании</a>
            </li>
            <li>
                <a href="#contacts-block">Контакты</a>
            </li>
        </ul>
    </nav>
)

export default Navigation
