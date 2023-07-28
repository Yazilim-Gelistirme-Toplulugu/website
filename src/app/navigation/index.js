import Home from "../pages/home";
import {
    Routes,
    Route,
    Navigate
} from "react-router-dom";

const Navigation = () => {
    return <Routes>
        <Route
            path="/*"
            element={<Navigate to="/home" />}
        />
        <Route
            path="/"
            element={<Home />}
        />
        <Route
            path="/home"
            element={<Home />}
        />
    </Routes>;
};
export default Navigation;
