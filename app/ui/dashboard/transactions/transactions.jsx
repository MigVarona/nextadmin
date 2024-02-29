import styles from "./transactions.module.css"

const Transactions = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}></table>
        </div>
    )
}

export default Transactions