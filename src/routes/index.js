import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home";
import MealListingPage from "../pages/meal-list-page";
import MealDetailPage from "../pages/meal-detail-page";
import Checkout from "../pages/checkout";
import Order from "../pages/order";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/meal-list-page",
    element: <MealListingPage />,
  },
  {
    path: "/meal-detail-page",
    element: <MealDetailPage />,
  },
  {
    path: "/checkout",
    element: <Checkout />,
  },
  {
    path: "/order",
    element: <Order />,
  },
]);
