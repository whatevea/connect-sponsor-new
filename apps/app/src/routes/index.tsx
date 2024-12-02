import { createBrowserRouter } from "react-router-dom";
import ProtectedLayout from "../components/layouts/ProtectedLayout";
import LoginPage from "../pages/auth/LoginPage";
import { ROUTE_PATHS } from "./paths";
import DashboardPage from "../pages/DashboardPage";
import PricePage from "../pages/PricePage";
import AccountPage from "../pages/AccountPage";
import TeamPage from "../pages/TeamPage";
import FaqPage from "../pages/FaqPage";
import ContactUsPage from "../pages/ContactUsPage";
import AffiliatePage from "../pages/AffiliatePage";
import ApiPage from "../pages/ApiPage";
import ResellerPage from "../pages/ResellerPage";
import StartupPlanPage from "../pages/StartupPlanPage";
import ProPlanPage from "../pages/ProPlanPage";
import FeaturedSponsorshipOpportunitiesPage from "../pages/FeaturedSponsorshipPage";
import FeaturedContentOpportunitesPage from "../pages/FeaturedContentOppotunities";
import PartnerAppsToolsCoursesPage from "../pages/PartnerAppsToolsCoursesPage";
import SuggestYoutubeChannelPage from "../pages/SuggestYoutubeChannel";
import ForgetPasswordPage from "../pages/auth/ForgetPasswordPage";
import CancellationPage from "../components/CancelComponent";
import ExtraComponents from "../components/ExtraComponents";
import BillingPage from "../pages/BillingPage";

export const router: ReturnType<typeof createBrowserRouter> =
    createBrowserRouter([
        { path: ROUTE_PATHS.LOGIN, element: <LoginPage /> },
        { path: ROUTE_PATHS.FORGET_PASSWORD, element: <ForgetPasswordPage /> },
        {
            path: "/",
            element: <ProtectedLayout />,
            children: [
                { index: true, element: <DashboardPage /> },
                { path: ROUTE_PATHS.STARTUP_PLAN, element: <StartupPlanPage /> },
                { path: ROUTE_PATHS.PRO_PLAN, element: <ProPlanPage /> },
                {
                    path: ROUTE_PATHS.FEATURED_SPONSORSHIP_OPPORTUNITIES,
                    element: <FeaturedSponsorshipOpportunitiesPage />,
                },
                {
                    path: ROUTE_PATHS.FEATURED_CONTENT_OPPORTUNITIES,
                    element: <FeaturedContentOpportunitesPage />,
                },
                {
                    path: ROUTE_PATHS.PARTNER_APPS_TOOLS_COURSES,
                    element: <PartnerAppsToolsCoursesPage />,
                },
                {
                    path: ROUTE_PATHS.SUGGEST_YOUTUBE_CHANNEL,
                    element: <SuggestYoutubeChannelPage />,
                },

                { path: ROUTE_PATHS.PRICE, element: <PricePage /> },
                { path: ROUTE_PATHS.ACCOUNT, element: <AccountPage /> },
                { path: ROUTE_PATHS.TEAM, element: <TeamPage /> },
                { path: ROUTE_PATHS.FAQ, element: <FaqPage /> },
                { path: ROUTE_PATHS.CONTACT_US, element: <ContactUsPage /> },
                { path: ROUTE_PATHS.AFFILIATE, element: <AffiliatePage /> },
                { path: ROUTE_PATHS.API, element: <ApiPage /> },
                { path: ROUTE_PATHS.RESELLER, element: <ResellerPage /> },
                //later to be removed
                { path: ROUTE_PATHS.CANCEL, element: <CancellationPage /> },
                { path: ROUTE_PATHS.EXTRA, element: <ExtraComponents /> },
                { path: ROUTE_PATHS.BILLING, element: <BillingPage /> },
            ],
        },
    ]);
