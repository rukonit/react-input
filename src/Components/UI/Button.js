import styles from './Button.module.css'

const Button = (props) => {

    return (
        <button className={styles.round} type={props.type} onClick={props.clickAction}>
            {props.text}
        </button>
    )
}

export default Button