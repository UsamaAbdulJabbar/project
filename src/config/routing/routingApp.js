import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from "react-router-dom";
import Dashboard from "../../screens/dashboard";
import AddStudentData from "../../screens/dashboardPages/addStudent";
import FeeVoucher from "../../screens/dashboardPages/feeVoucher";
import IdCardStudent from "../../screens/dashboardPages/idCardStudent";
import ViewStudentData from "../../screens/dashboardPages/viewStudentData";
import Login from "../../screens/login";
import Signup from "../../screens/signup";



function RoutingApp() {


    return (
        <Router>
            <Routes>
                <Route path="/signUp" element={<Signup />} />
                <Route path="/" element={<Login />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/addStudent" element={<AddStudentData />} />
                <Route path="/viewStudentData" element={<ViewStudentData />} />
                <Route path="/idCardStudent" element={<IdCardStudent/>} />
                <Route path="/feeVoucher" element={<FeeVoucher />} />

            </Routes>

        </Router>

    )
}



export default RoutingApp;