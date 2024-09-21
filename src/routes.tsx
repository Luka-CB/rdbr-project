import { Route, Routes } from "react-router-dom";
import { AddListingView, HomeView, Listing } from "./views";
import { Layout } from "./components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
        <Route path="/add" element={<AddListingView />} />
        <Route path="/listing/:id" element={<Listing />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
