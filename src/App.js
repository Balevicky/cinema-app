import React from "react";
// import the library
import { library } from "@fortawesome/fontawesome-svg-core";
// Mes icons gratuit
import { fas } from "@fortawesome/free-solid-svg-icons";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { far } from "@fortawesome/free-regular-svg-icons";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorite from "./pages/Favorite";
import WeekDisplay from "./pages/WeekDisplay";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favorite" element={<Favorite />} />
          <Route path="/weekdisplay" element={<WeekDisplay />} />
          <Route path="/*" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
library.add(fab, fas, far);
