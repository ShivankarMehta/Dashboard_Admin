import Sidebar from "./ui/dashboard/sidebar/sidebar";
import Navbar from "./ui/dashboard/navbar/navbar";
import Footer from "./ui/dashboard/footer/footer";
import styles from "../app/ui/dashboard/dashboard.module.css";
import Homepage from "../app/dashboard/page";
const Page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar />
        <Homepage />
        <Footer />
      </div>
    </div>
  );
};

export default Page;
