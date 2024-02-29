import Image from "next/image"
import styles from "./transactions.module.css"

const Transactions = () => {

    return (
        <div className={styles.container}>
            <h2 className={styles.title}>Latest Transactions</h2>
            <table className={styles.table}>
            <thead>
                <tr>
                <td>Name</td>
                <td>Status</td>
                <td>Date</td>
                <td>Amount</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <Image src="/noavatar.png" alt="" widht={40} height={40} className={styles.userImage} />

                    </td>
                    <td></td>
                    <td></td>
                    <td></td>
                </tr>
            </tbody>
            </table>
        </div>
    )
}

export default Transactions