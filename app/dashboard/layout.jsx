import Navbar from "../ui/dashboard/navbar/page"
import Sidebar from "../ui/dashboard/sidebar/sidebar"
import styles from "../ui/dashboard/dashboard.module.css"

const Layout = ({ children }) => {
  return (
    <div className={styles.container}>
      <div>
        <Sidebar />
      </div>
      <div>
        <Navbar />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default Layout;