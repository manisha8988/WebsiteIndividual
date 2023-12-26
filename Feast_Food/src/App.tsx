import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ManageCategory from "./pages/ManageCategory.tsx";
import ManageItem from "./pages/ManageItem.tsx";
import HomePage from "./pages/homePage.tsx";
import UserProfileView from "./pages/UserProfileView.tsx";
import OurMenu from "./pages/ourMenu.tsx";
import ReservationPage from "./pages/reservation/reservationPage.tsx";
import Payment from "./pages/payment.tsx";
import Homedelivery from "./pages/homedelivery.tsx";
import ContactPage from "./pages/contactPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

const queryClient = new QueryClient();

function App(){
    return(
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={createBrowserRouter([
                    {path:"/AdminDashboard",element:<AdminDashboard/>},
                    {path:"ManageCategory",element:<ManageCategory/>},
                    {path:"/ManageItem",element:<ManageItem/>},
                    {path:"/",element:<HomePage/>},
                    {path:"/OurMenu",element:<OurMenu/>},
                    {path:"/ReservationPage",element:<ReservationPage/>},
                    {path:"/ContactPage",element:<ContactPage/>},
                    {path:"/userprofileview",element:<UserProfileView/>},
                    {path:"/Payment",element:<Payment/>},
                    {path:"/homedelivery",element:<Homedelivery/>},
                ])} />
            </QueryClientProvider>
        </>
    )
}

export default App
