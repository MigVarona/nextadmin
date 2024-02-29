import { MdSupervisedUserCircle } from "react-icons/md";
import styles from "./card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={24} />
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>987</span>
        <span className={styles.detail}>
        <span className={styles.positive}> 20% </span>less than previous month</span>

        
        
      </div>
    </div>
  );
};

export default Card;