import { Route, Routes } from "react-router-dom";
import { HomeView } from "./views";
import { Layout } from "./components";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomeView />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
