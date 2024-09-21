import { Outlet } from "react-router-dom";
import styles from "./Layout.module.scss";
import Header from "../header/Header";
import { useContext, useEffect } from "react";
import { FiltersContext } from "../../context/filters";
import { FormSelectContext } from "../../context/formSelectContext";
import AddAgentModal from "../addAgent/AddAgentModal";
import { AgentContext } from "../../context/agentContext";
import { ListingContext } from "../../context/listingContext";

const Layout: React.FC = () => {
  const { isModalOpen, isAgentDropdownOpen, toggleAgentDropdown } =
    useContext(AgentContext);

  const { isDelModalOpen } = useContext(ListingContext);

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

  const {
    isRegionSelectActive,
    toggleRegionSelect,
    isCitySelectActive,
    toggleCitySelect,
  } = useContext(FormSelectContext);

  const handleClosePopups = () => {
    if (
      isRegionDropdownOpen ||
      isPriceDropdownOpen ||
      isAreaDropdownOpen ||
      isbedroomDropdownOpen ||
      isRegionSelectActive ||
      isCitySelectActive ||
      isAgentDropdownOpen
    ) {
      toggleRegionDropdown(false);
      togglePriceDropdown(false);
      toggleAreaDropdown(false);
      toggleBedroomDropdown(false);
      toggleRegionSelect(false);
      toggleCitySelect(false);
      toggleAgentDropdown(false);
    }
  };

  useEffect(() => {
    if (isModalOpen || isDelModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isModalOpen, isDelModalOpen]);

  return (
    <main className={styles.container} onClick={handleClosePopups}>
      {isModalOpen ? <AddAgentModal /> : null}
      <Header />
      <Outlet />
    </main>
  );
};

export default Layout;
