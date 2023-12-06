import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ManageCategory from "./pages/ManageCategory.tsx";
import ManageItem from "./pages/ManageItem.tsx";
import LoginPage from "./pages/LoginPage.tsx";


function App(){
    return(
        <>
            <RouterProvider router={createBrowserRouter([
                {path:"/",element:<AdminDashboard/>},
                {path:"/managecategory",element:<ManageCategory/>},
                {path:"/manageitem",element:<ManageItem/>},
                {path:"/LoginPage",element:<LoginPage/>},

            ])} />
        </>
    )
}

export default App
