import { Outlet } from "react-router";
import Navbar from "../Components/Sharedpages/Navbar";

const Root: React.FC = () => {
    return (
        <div>
            <Navbar></Navbar>
           <Outlet></Outlet>
        </div>
    );
};

export default Root;
