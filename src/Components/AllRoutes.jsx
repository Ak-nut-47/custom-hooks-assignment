import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Throttling from "../Pages/Throttling";
import CustomHooks from "../Pages/CustomHooks";

const AllRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/throttling" element={<Throttling />} />
        <Route path="custom-hooks" element={<CustomHooks />} />
      </Routes>
    </div>
  );
};

export default AllRoutes;
