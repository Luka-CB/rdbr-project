import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "../header/Header";
import { useContext } from "react";
import { FiltersContext } from "../../context/filters";

const Layout: React.FC = () => {
  const {
    isRegionDropdownOpen,
    toggleRegionDropdown,
    isPriceDropdownOpen,
    togglePriceDropdown,
    isAreaDropdownOpen,
    toggleAreaDropdown,
    isbedroomDropdownOpen,
    toggleBedroomDropdown,
  } = useContext(FiltersContext);

  const handleClosePopups = () => {
    if (
      isRegionDropdownOpen ||
      isPriceDropdownOpen ||
      isAreaDropdownOpen ||
      isbedroomDropdownOpen
    ) {
      toggleRegionDropdown(false);
      togglePriceDropdown(false);
      toggleAreaDropdown(false);
      toggleBedroomDropdown(false);
    }
  };

  return (
    <main className={styles.container} onClick={handleClosePopups}>
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
