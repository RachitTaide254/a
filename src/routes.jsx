import {
  HomeIcon,
  TableCellsIcon,
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  UserIcon,
} from "@heroicons/react/24/solid";
import { Tables } from "@/pages/dashboard";
import { SignIn, SignUp } from "@/pages/auth";
import OrderPlaceList from "./pages/orderPlaceList";
import OrderPlace from "./pages/orderPlace";
import CommonComponent from "./pages/commonComponent";
import {FaChevronRight, FaMedal} from 'react-icons/fa'
import {GiPencilRuler} from 'react-icons/gi'
import {MdSettingsSuggest, MdCategory} from 'react-icons/md'
import PaginationTableExample from "./pages/paginationTableExample";
import Login from "./pages/loginPage";
import DesignDepartment from "./pages/designDepartment";

const icon = {
  className: "w-5 h-5 text-inherit",
};

export const routes = [
  {
    layout: "dashboard",
    pages: [
      {
        icon: <HomeIcon {...icon} />,
        name: "Common Component",
        path: "/dashboard/commonComponent",
        // element: <CommonComponent />,
      },
      {
        icon: <UserIcon {...icon} />,
        name: "Sales Department",
        path: "/dashboard/salesDepartment",
        // element: <OrderPlaceList />,
        nestedRoutes: [
          {
            icon: <FaChevronRight {...icon} />,
            name: "Order Place",
            path: "salesDepartment/orderPlaceForm",
            // element: <OrderPlace />,
          },
          {
            icon: <FaChevronRight {...icon} />,
            name: "@work order",
            path: "salesDepartment/WorkOrderList",
            // element: <OrderPlace />,
          },
        ]
      },
      {
        icon: <GiPencilRuler {...icon} />,
        name: "Design Department",
        path: "/dashboard/designDepartment",
        // element: <DesignDepartment />,
        nestedRoutes: [
          {
            icon: <FaChevronRight {...icon} />,
            name: "Order List",
            path: "designDepartment/OrderList",
            // element: <OrderPlace />,
          },
          {
            icon: <FaChevronRight {...icon} />,
            name: "Design Bomr",
            path: "designDepartment/designBom",
            // element: <OrderPlace />,
          },
          {
            icon: <FaChevronRight {...icon} />,
            name: "Work Order List",
            path: "designDepartment/WorkOrderList",
            // element: <OrderPlace />,
          }
        ]
      },
      {
        icon: <UserIcon {...icon} />,
        name: "Sales Co-ordinator",
        path: "/orderPlaceList123",
        // element: <OrderPlaceList />,
      },
      {
        icon: <MdSettingsSuggest {...icon} />,
        name: "Production Department",
        path: "/dashboard/ProductionDepartment",
        // element: <PaginationTableExample />,
      },
      {
        icon: <FaMedal {...icon} />,
        name: "Quality & dispatch department",
        path: "/tables",
        // element: <Tables />,
      },
      {
        icon: <MdCategory {...icon} />,
        name: "Inventory / Category",
        path: "/dashboard/InventryCategory",
        // element: <Tables />,
      },
      {
        icon: <TableCellsIcon {...icon} />,
        name: "login",
        path: "/login",
        element: <Login />,
      },
    ],
  },
  {
    title: "auth pages",
    layout: "auth",
    pages: [
      {
        icon: <ArrowRightOnRectangleIcon {...icon} />,
        name: "sign in",
        path: "/sign-in",
        element: <SignIn />,
      },
      {
        icon: <UserPlusIcon {...icon} />,
        name: "sign up",
        path: "/sign-up",
        element: <SignUp />,
      },
    ],
  },
];

export default routes;
