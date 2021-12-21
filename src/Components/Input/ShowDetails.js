import styles from './ShowDetails.module.css'
const ShowDetails = (props) => {

    return (
        <div className={styles.card}>
        <div className={styles.container}>
        <h2>{props.details.name} </h2>
        <h3>{props.details.age} </h3>
        </div>
        </div>
    )
}

export default ShowDetails