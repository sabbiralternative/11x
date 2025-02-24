import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/Home";
import LoggedInHome from "../pages/LoggedInHome/LoggedInHome";
import EventDetails from "../pages/EventDetails/EventDetails";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PrivateRoute>
          <App />
        </PrivateRoute>
      ),
      children: [
        {
          index: true,
          element: <LoggedInHome />,
        },
        {
          path: "/event-details/:eventTypeId/:eventId",
          element: <EventDetails />,
        },
        // {
        //   path: "/casino",
        //   element: <Casino />,
        // },
        // {
        //   path: "/change-password",
        //   element: <ChangePassword />,
        // },
        // {
        //   path: "/change-btn-value",
        //   element: <ChangeButtonValue />,
        // },
        // {
        //   path: "/account-statement",
        //   element: <AccountStatement />,
        // },
        // {
        //   path: "/unsettled-bets",
        //   element: <UnSettledBets />,
        // },
        // {
        //   path: "/rules",
        //   element: <Rules />,
        // },
        // {
        //   path: "/other",
        //   element: <Other />,
        // },
      ],
    },
    // {
    //   path: "/login",
    //   element: <Login />,
    // },
    // {
    //   path: "/register",
    //   element: <Register />,
    // },
    // {
    //   path: "/change-password-login",
    //   element: <ChangePasswordLogin />,
    // },
    // {
    //   path: "/forgot-password",
    //   element: <ForgotPassword />,
    // },
    // {
    //   path: "/casino/:name/:gameId",
    //   element: <CasinoIFrame />,
    // },
    // {
    //   path: "/deposit",
    //   element: <Deposit />,
    // },
    // {
    //   path: "/withdraw",
    //   element: <Withdraw />,
    // },
    // {
    //   path: "/sports-book",
    //   element: <SportsBook />,
    // },
    {
      path: "/home",
      element: <Home />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
