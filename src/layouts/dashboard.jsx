// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  Sidenav,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { RxHamburgerMenu } from 'react-icons/rx';
import OrderPlaceList from "../pages/orderPlaceList";
import OrderPlace from "../pages/orderPlace";

import CommonComponent from "../pages/commonComponent";
import DesignDepartment from "../pages/designDepartment";
import PaginationTableExample from "../pages/paginationTableExample";
import SalesDepartment from '@/pages/salesDepartment';
import WorkOrderList from '@/pages/workOrderList';
import OrderList from '@/pages/designDepartment/orderList';
import DesignWorkOrderList from '@/pages/designDepartment/designWorkOrderList';
import DesignBOM from '@/pages/designDepartment/designBOM';
import { ProductionDepartment } from '@/pages/productionDepartment/ProductionDepartment';
import InventryCategory from '@/pages/inventryCategory';
import { useState } from 'react';

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;
  const [isBurgerIconClick, setIsBurgerIconClick] = useState(false)

  const handleBurgerClick = () => {
    setIsBurgerIconClick(!isBurgerIconClick)
  }

  const generateRoutes = () => {
    return (
      <Switch>
        <Route exact path="/dashboard/commonComponent" component={CommonComponent} />
        <Route exact path="/dashboard/salesDepartment" component={SalesDepartment} />
        <Route exact path="/dashboard/salesDepartment/orderPlaceForm" component={OrderPlace} />
        <Route exact path="/dashboard/salesDepartment/workOrderList" component={WorkOrderList} />
        <Route exact path="/dashboard/designDepartment" component={DesignDepartment} />
        <Route exact path="/dashboard/designDepartment/orderList" component={OrderList} />
        <Route exact path="/dashboard/designDepartment/designBom" component={DesignBOM} />
        <Route exact path="/dashboard/designDepartment/WorkOrderList" component={DesignWorkOrderList} />
        <Route exact path="/dashboard/ProductionDepartment" component={ProductionDepartment} />
        <Route exact path="/dashboard/InventryCategory" component={InventryCategory} />
        <Route exact path="/dashboard/PaginationTableExample" component={PaginationTableExample} />
      </Switch>
    );
  };

  return (
    <div className="h-auto bg-[#E9ECF6]">
      {
        !isBurgerIconClick &&
        <Sidenav
          routes={routes}
          brandImg={
            sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
          }
          brandName={"ASL Enterprises LTD."}
        />
      }
      <div className={`h-4 border-2 flex flex-col h-auto w-auto ${!isBurgerIconClick ? "translate-x-0 ml-72 " : "-translate-x-40 ml-52 "}`}>
        <div className="row sticky bg-white h-12">
          <div className="border-1 w-20 p-1">
            <RxHamburgerMenu size={30} color='black' onClick={() => handleBurgerClick()} />
          </div>
        </div>
        <div id="main">
          {generateRoutes(routes)}
        </div>
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
