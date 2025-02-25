import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PrivateRoute from "./PrivateRoute";
import Home from "../pages/Home/Home";
import LoggedInHome from "../pages/LoggedInHome/LoggedInHome";
import EventDetails from "../pages/EventDetails/EventDetails";
import Casino from "../pages/Casino/Casino";
import IntCasino from "../pages/IntCasino/IntCasino";
import EditStake from "../pages/EditStake/EditStake";
import Profile from "../pages/Profile/Profile";
import CasinoIFrame from "../pages/CasinoIFrame/CasinoIFrame";
import SportsBook from "../pages/SportsBook/SportsBook";

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
        {
          path: "/casino",
          element: <Casino />,
        },

        {
          path: "/int-casino",
          element: <IntCasino />,
        },
        {
          path: "/edit-stake",
          element: <EditStake />,
        },
        {
          path: "/profile",
          element: <Profile />,
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
    {
      path: "/casino/:name/:gameId",
      element: <CasinoIFrame />,
    },
    {
      path: "/sports-book",
      element: <SportsBook />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL ?? "/",
  }
);
