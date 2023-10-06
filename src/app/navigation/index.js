import Contact from "../pages/contact";
import Home from "../pages/home";
import MainSection from '../pages/home/views/main'
import AboutUsSection from '../pages/home/views/aboutUs'
import TeamsSection from '../pages/home/views/teams'
import GallerySection from '../pages/home/views/gallery'
import {
    Routes,
    Route,
    Navigate,
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
        <Route
            path="/contact"
            element={<Contact />}
        />
    </Routes>;
};
export default Navigation;
