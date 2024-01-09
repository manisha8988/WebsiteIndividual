import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import AdminDashboard from "./pages/AdminDashboard.tsx";
import ManageCategory from "./pages/ManageCategory.tsx";
import ManageItem from "./pages/ManageItem.tsx";
import HomePage from "./pages/homePage.tsx";
import UserProfileView from "./pages/UserProfileView.tsx";
import OurMenu from "./pages/ourMenu.tsx";
import ReservationPage from "./pages/reservation/reservationPage.tsx";
import Payment from "./pages/payment.tsx";
import ContactPage from "./pages/contactPage.tsx";
import Booking from "./pages/booking.tsx";
import EventsPage from "./pages/eventsPages/eventsPage.tsx";
import AnniversaryPage from "./pages/eventsPages/anniversaryPage.tsx";
import BirthdayPage from "./pages/eventsPages/birthdayPage.tsx";
import Reservation from "./pages/reservation/reserveTable.tsx";
import CustomizePizzaPage from "./pages/CustomizePizza/CustomizePizzaPage.tsx";
import Cart from "./pages/cart/Cart.tsx";
import EditCategory from "./pages/editCategory.tsx";
import RatingSection from "./pages/Rating/RatingSection.tsx";
import HomeDelivery from "./pages/homedelivery.tsx";
import Homedelivery from "./pages/homedelivery.tsx";
import HomeDelivery from "./pages/homedelivery.tsx";
import RatingSection from "./pages/Rating/RatingSection.tsx";
import EditCategory from "./pages/editCategory.tsx";
import Homedelivery from "./pages/homedelivery.tsx";


const queryClient = new QueryClient();

function App() {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <RouterProvider router={createBrowserRouter([
                    {path: "/AdminDashboard", element: <AdminDashboard/>},
                    {path: "/ManageCategory", element: <ManageCategory/>},
                    {path: "/EventsPage", element: <EventsPage/>},
                    {path: "/AnniversaryPage", element: <AnniversaryPage/>},
                    {path: "/BirthdayPage", element: <BirthdayPage/>},
                    {path: "/ManageCategory", element: <ManageCategory/>},
                    {path: "/edit/:pk_id", element: <EditCategory/>},
                    {path: "/ManageItem", element: <ManageItem/>},
                    {path: "/Booking", element: <Booking/>},
                    {path: "/", element: <HomePage/>},
                    {path: "/OurMenu", element: <OurMenu/>},
                    {path: "/ReservationPage", element: <ReservationPage/>},
                    {path: "/ContactPage", element: <ContactPage/>},
                    {path: "/UserProfileView", element: <UserProfileView/>},
                    {path: "/payment", element: <Payment/>},
                    {path: "/homedelivery", element: <Homedelivery/>},
                    {path: "/reservation", element: <Reservation/>},
                    {path: "/customizepizza", element: <CustomizePizzaPage/>},
                    {path: "/cart", element: <Cart/>},
                    {path: "/HomeDelivery", element: <HomeDelivery/>},
                    {path: "/Reservation", element: <Reservation/>},
                    {path: "/CustomizePizza", element: <CustomizePizzaPage/>},
                    {path:"/Rate",element:<RatingSection/>}
                ])} />
            </QueryClientProvider>
        </>
    )
}

export default App
