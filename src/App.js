import { Route, Routes } from "react-router-dom";

import "./assets/css/font.css";
import "react-phone-number-input/style.css";
import ThemeCustomization from "./theme";
import SignIn from "./page/auth/sign-in";
import SignUp from "./page/auth/sign-up";
import Store from "./page/store/index";

import SperThread from "./page/store/store-supperhead";
import Industry from "./page/store/industry";
import Loader from "./page/loader";

function App() {
  return (
    <ThemeCustomization>
      <Routes>
        <Route path="/" element={<SignIn />}></Route>
        <Route path="/sign-up" element={<SignUp />}></Route>

        <Route path="/store" element={<Store />}></Route>
        <Route path="/superthread" element={<SperThread />}></Route>
        <Route path="/industry" element={<Industry />}></Route>
        <Route path="/loader" element={<Loader />}></Route>
      </Routes>
    </ThemeCustomization>
  );
}

export default App;
