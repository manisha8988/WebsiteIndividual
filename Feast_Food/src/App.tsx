import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ManageCategory from "./pages/ManageCategory.tsx";
import ManageItem from "./pages/ManageItem.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import HomePage from "./pages/homePage.tsx";
import ForgotPass1 from "./pages/ForgotPass1.tsx";
import ForgotPass2 from "./pages/ForgotPass2.tsx";
import ForgotPass3 from "./pages/ForgotPass3.tsx";


function App(){
    return(
        <>
            <RouterProvider router={createBrowserRouter([
                {path:"/admindashboard",element:<AdminDashboard/>},
                {path:"/managecategory",element:<ManageCategory/>},
                {path:"/manageitem",element:<ManageItem/>},
                {path:"/LoginPage",element:<LoginPage/>},
                {path:"/RegistrationPage",element:<RegistrationPage/>},
                {path:"/forgot_pass1",element:<ForgotPass1/>},
                {path:"/forgot_pass2",element:<ForgotPass2/>},
                {path:"/forgot_pass3",element:<ForgotPass3/>},
                {path:"/",element:<HomePage/>},
            ])} />
        </>
    )
}

export default App
