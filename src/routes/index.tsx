import { Route, Routes as RouteLib } from "react-router-dom";
import { Home } from "../pages/Home";
import { History } from "../pages/History";
import { DefaultLayout } from "../layouts/DefaultLayout";

export function Routes() {
  return (
    <RouteLib>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
      </Route>
    </RouteLib>
  );
}
