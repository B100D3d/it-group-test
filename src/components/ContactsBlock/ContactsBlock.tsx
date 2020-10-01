import React, { useEffect, useState } from "react"
import styles from "components/ContactsBlock/contacts-block.module.sass"
import Block from "components/Block/Block"
import StyledInput from "components/StyledInput/StyledInput"
import StyledButton from "components/StyledButton/StyledButton"

import phone from "assets/phone.svg"
import mail from "assets/mail.svg"

const ContactsBlock = () => {
    const [name, setName] = useState("")
    const [lastName, setLastName] = useState("")
    const [message, setMessage] = useState("")

    useEffect(() => {
        console.log(name, lastName, message)
    }, [name, lastName, message])

    return (
        <Block id="contacts-block" className={styles.contactBlock}>
            <div className={styles.contactsContainer}>
                <div className={styles.contacts}>
                    <h1>Связь с нами</h1>
                    <span>
                        У вас остались вопросы? Напишите нам - мы ответим в
                        ближайшее время!
                    </span>
                    <div>
                        <span>
                            <img src={phone} alt="phone" />
                            +7 (111) 222-33-44
                        </span>
                        <span>
                            <img src={mail} alt="mail" />
                            order@bu-one.ru
                        </span>
                    </div>
                </div>
                <div className={styles.feedback}>
                    <form>
                        <StyledInput
                            className={styles.input}
                            label="Имя"
                            placeholder="Иван"
                            value={name}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setName(e.target.value)}
                        />
                        <StyledInput
                            className={styles.input}
                            label="Фамилия"
                            placeholder="Иванов"
                            value={lastName}
                            onChange={(
                                e: React.ChangeEvent<HTMLInputElement>
                            ) => setLastName(e.target.value)}
                        />
                        <StyledInput
                            className={styles.textarea}
                            mode="textarea"
                            label="Сообщение"
                            placeholder="Ваше сообщение"
                            rows={3}
                            value={message}
                            onChange={(
                                e: React.ChangeEvent<HTMLTextAreaElement>
                            ) => setMessage(e.target.value)}
                        />
                        <div className={styles.submitContainer}>
                            <StyledButton
                                onClick={() => {}}
                                className={styles.submit}
                            >
                                Отправить сообщение
                            </StyledButton>
                        </div>
                    </form>
                </div>
            </div>
        </Block>
    )
}

export default ContactsBlock
