import Transactions from "@/app/ui/transactions/transactions";
import styles from "@/app/ui/transactions/transactions.module.css";
const Transactionspage = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
      <Transactions/>
      </div>
    </div>
  )
}

export default Transactionspage;
