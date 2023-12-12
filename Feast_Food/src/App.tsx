import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ManageCategory from "./pages/ManageCategory.tsx";
import ManageItem from "./pages/ManageItem.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";


function App(){
    return(
        <>
            <RouterProvider router={createBrowserRouter([
                {path:"/",element:<AdminDashboard/>},
                {path:"/managecategory",element:<ManageCategory/>},
                {path:"/manageitem",element:<ManageItem/>},
                {path:"/LoginPage",element:<LoginPage/>},
                {path:"/RegistrationPage",element:<RegistrationPage/>},
                {path:"/ForgotPassword",element:<ForgotPassword/>}

            ])} />
        </>
    )
}

export default App
