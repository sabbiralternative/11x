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
import UnSettledBets from "../pages/UnSettledBets/UnSettledBets";
import BettingProfitLoss from "../pages/BettingProfitLoss/BettingProfitLoss";
import SingleProfitLoss from "../pages/SingleProfitLoss/SingleProfitLoss";
import HorseRacing from "../pages/HorseRacing/HorseRacing";
import GreyhoundRacing from "../pages/GreyhoundRacing/GreyhoundRacing";
import DepositWithdrawReport from "../pages/DepositWithdrawReport/DepositWithdrawReport";
import MyBankDetails from "../pages/MyBankDetails/MyBankDetails";
import BonusStatement from "../pages/BonusStatement/BonusStatement";
import ReferralStatement from "../pages/ReferralStatement/ReferralStatement";
import Deposit from "../pages/Deposit/Deposit";
import Withdraw from "../pages/Withdraw/Withdraw";
import Affiliate from "../pages/Affiliate/Affiliate";
import Promotions from "../pages/Promotions/Promotions";
import LossBackClaims from "../pages/LossBackClaims/LossBackClaims";
import AppOnlyBonus from "../pages/AppOnlyBonus/AppOnlyBonus";

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
        {
          path: "/unsettled-bets",
          element: <UnSettledBets />,
        },
        {
          path: "/betting-profit-loss",
          element: <BettingProfitLoss />,
        },
        {
          path: "/betting-profit-loss/:marketId",
          element: <SingleProfitLoss />,
        },
        {
          path: "/horse-racing",
          element: <HorseRacing />,
        },
        {
          path: "/greyhound-racing",
          element: <GreyhoundRacing />,
        },
        {
          path: "/deposit-withdraw-report",
          element: <DepositWithdrawReport />,
        },
        {
          path: "/my-bank-details",
          element: <MyBankDetails />,
        },
        {
          path: "/bonus-statement",
          element: <BonusStatement />,
        },
        {
          path: "/referral-statement",
          element: <ReferralStatement />,
        },
        {
          path: "/deposit",
          element: <Deposit />,
        },
        {
          path: "/withdraw",
          element: <Withdraw />,
        },
        {
          path: "/affiliate",
          element: <Affiliate />,
        },
        {
          path: "/promotions",
          element: <Promotions />,
        },
        {
          path: "/lossback-bonus",
          element: <LossBackClaims />,
        },
        {
          path: "/app-only-bonus",
          element: <AppOnlyBonus />,
        },
      ],
    },

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
  },
);
