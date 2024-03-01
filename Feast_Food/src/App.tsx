import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ManageCategory from "./pages/ManageCategory.tsx";
import ManageItem from "./pages/ManageItem.tsx";
import HomePage from "./pages/homePage.tsx";
import UserProfileView from "./pages/UserProfileView.tsx";
import OurMenu from "./pages/ourMenu.tsx";
import Cart from "./pages/cart/Cart.tsx";
import EditCategory from "./pages/editCategory.tsx";
import Homedelivery from "./pages/homedelivery.tsx";
import HomeDelivery from "./pages/homedelivery.tsx";
import CustomerPage from "./pages/customerPage.tsx";
import EditItem from "./pages/editItem.tsx";
import Carousel from "./pages/carousel.tsx";
import HomeNavbar from "./pages/Navbar&Modals/HomeNavbar"
const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={createBrowserRouter([
                    {path: "/AdminDashboard", element: <AdminDashboard/>},
                    {path: "/ManageCategory", element: <ManageCategory/>},
                    {path: "/ManageCategory", element: <ManageCategory/>},
                    {path: "/edit/:pk_id", element: <EditCategory/>},
                    {path: "/ManageItem", element: <ManageItem/>},
                    {path: "/editItem/:pk_id", element: <EditItem/>},
                    {path: "/CustomerPage", element: <CustomerPage/>},
                    {path: "/", element: <HomePage/>},
                    {path: "/products", element: <OurMenu/>},
                    {path: "/UserProfileView", element: <UserProfileView/>},
                    {path: "/homedelivery", element: <Homedelivery/>},
                    {path: "/cart/:parss", element: <Cart/>},
                    {path: "/cart", element: <Cart/>},
                    {path: "/HomeDelivery", element: <HomeDelivery/>},
                    {path:"/carousel",element:<Carousel/>},
                    {path:"/homenavbar",element:<HomeNavBar/>},
                ])} />
            </QueryClientProvider>
        </>
    )
}

export default App