/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Layout } from "./components/Layout";
import { Home } from "./pages/Home";
import { Meetings } from "./pages/Meetings";
import { Team } from "./pages/Team";
import { Join } from "./pages/Join";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="meetings" element={<Meetings />} />
          <Route path="team" element={<Team />} />
          <Route path="join" element={<Join />} />
        </Route>
      </Routes>
    </Router>
  );
}
