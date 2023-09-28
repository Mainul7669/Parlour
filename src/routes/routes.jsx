import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layouts/Main";
import Login from "../components/pages/Login"
import Home from "../components/Home/Home";
import SignUp from "../components/pages/SignUp";
import NotFound from "../components/pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Layouts/Dashboard";
import Book from "../components/User/Book";
import BookingList from "../components/User/BookingList";
import Review from "../components/User/Review";
import AddService from "../components/Admin/AddService";
import MakeAdmin from "../components/Admin/MakeAdmin";
import OrderList from "../components/Admin/OrderList";


export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main/>,
      children: [
       {
        path: "/",
        element: <Home/>,
       },
       {
        path: "login",
        element: <Login></Login>,
       },
      {
        path: "signup",
        element: <SignUp/>,
       },

      ]
    },

    {
      path: "dashboard",
      element: <PrivateRoute><Dashboard/></PrivateRoute>,
      children: [

        {
          path: "book",
          element: <Book/>,
         },
        {
          path: "bookinglist",
          element: <BookingList/>,
         },
        {
          path: "review",
          element: <Review/>,
         },
        {
          path: "orderlist",
          element: <OrderList/>,
         },
        {
          path: "addservice",
          element: <AddService/>,
         },
        {
          path: "makeadmin",
          element: <MakeAdmin/>,
         },

        
      ]
     },


     {
      path: '*',
      element: <NotFound/>
  },


  ]);