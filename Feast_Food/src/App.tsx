import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ManageCategory from "./pages/ManageCategory.tsx";
import ManageItem from "./pages/ManageItem.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import RegistrationPage from "./pages/RegistrationPage.tsx";
import HomePage from "./pages/homePage.tsx";


function App(){
    return(
        <>
            <RouterProvider router={createBrowserRouter([
                {path:"/admindashboard",element:<AdminDashboard/>},
                {path:"/managecategory",element:<ManageCategory/>},
                {path:"/manageitem",element:<ManageItem/>},
                {path:"/LoginPage",element:<LoginPage/>},
                {path:"/RegistrationPage",element:<RegistrationPage/>},
                {path:"/",element:<HomePage/>},
            ])} />
        </>
    )
}

export default App
