import React, { ChangeEventHandler } from "react"
import styles from "./styled-input.module.sass"
import classNames from "classnames"

type InputMode = "input" | "textarea"

type InputAttributes = React.InputHTMLAttributes<HTMLInputElement> &
    React.TextareaHTMLAttributes<HTMLTextAreaElement>
interface StyledInputProps extends InputAttributes {
    mode?: InputMode
    type?: string
    label: string
    className: string
    onChange: ChangeEventHandler
}

const StyledInput: React.FunctionComponent<StyledInputProps> = ({
    label,
    type = "text",
    mode = "input",
    className,
    onChange,
    ...props
}) => (
    <div className={classNames(styles.inputContainer, className)}>
        <span className={styles.label}>{label}</span>
        {mode === "input" ? (
            <input type={type} onChange={onChange} {...props} />
        ) : (
            <textarea onChange={onChange} {...props} />
        )}
    </div>
)

export default StyledInput
