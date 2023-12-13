import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ManageCategory from "./pages/ManageCategory.tsx";
import ManageItem from "./pages/ManageItem.tsx";
import ForgotPassword from "./pages/ForgotPassword.tsx";
import HomePage from "./pages/homePage.tsx";
import UserProfileView from "./pages/UserProfileView.tsx";
import OurMenu from "./pages/ourMenu.tsx";
import ReservationPage from "./pages/reservationPage.tsx";


function App(){
    return(
        <>
            <RouterProvider router={createBrowserRouter([
                {path:"/admindashboard",element:<AdminDashboard/>},
                {path:"/managecategory",element:<ManageCategory/>},
                {path:"/manageitem",element:<ManageItem/>},
                {path:"/ForgotPassword",element:<ForgotPassword/>},
                {path:"/",element:<HomePage/>},
                {path:"/ourmenu",element:<OurMenu/>},
                {path:"/reservationpage",element:<ReservationPage/>},
                {path:"/userprofileview",element:<UserProfileView/>},
            ])} />
        </>
    )
}

export default App
