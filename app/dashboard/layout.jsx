import Navbar from "../ui/dashboard/navbar/page"
import Sidebar from "../ui/dashboard/sidebar/sidebar"

const Layout = ({ children }) => {
  return (
    <div>
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