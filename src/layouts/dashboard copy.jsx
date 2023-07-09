// import { Routes, Route } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Cog6ToothIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { IconButton } from "@material-tailwind/react";
import {
  Sidenav,
  DashboardNavbar,
  Configurator,
  Footer,
} from "@/widgets/layout";
import routes from "@/routes";
import { useMaterialTailwindController, setOpenConfigurator } from "@/context";
import { RxHamburgerMenu } from 'react-icons/rx';

export function Dashboard() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  const generateRoutes = (routes) => {
    return routes.map((route, index) => {
      const { layout, pages, ...routeProps } = route;

      if (layout === 'dashboard') {
        return pages.map(({ path, element, nestedRoutes = [] }) => {
          const nestedRoutes1 = nestedRoutes.length > 0 && generateNestedRoutes(nestedRoutes)

          return (
            <Route
              key={index}
              path={path}
              component={element}
              {...routeProps}
              render={() => {
                return (
                  <Switch>
                    {nestedRoutes1}
                    <Route {...routeProps} />
                  </Switch>
                );
              }}
            />
          );
        });


      }

      if (layout === 'auth') {
        return (
          <Route key={index} {...routeProps} />
        );
      }

      return null;
    });
  };

  const generateNestedRoutes = (nestedRoutes) => {
    return nestedRoutes.map((nestedRoute, index) => {
      const { icon: NestedIcon, path, element, ...nestedRouteProps } = nestedRoute;

      return (
        <Route
          key={index}
          path={path}
          element={element}
          {...nestedRouteProps}
        />
      );
    });
  };

  return (
    <div className="h-auto bg-[#E9ECF6]">
      <Sidenav
        routes={routes}
        brandImg={
          sidenavType === "dark" ? "/img/logo-ct.png" : "/img/logo-ct-dark.png"
        }
        brandName={"ASL Enterprises LTD."}
      />
      <div className="ml-72 h-4 border-2 flex flex-col h-auto">
        <div className="row sticky bg-white h-12">
          <div className="border-1 w-20 p-1">
            <RxHamburgerMenu size={30} color='black' />

          </div>
        </div>
        {/* <Router>
          <Switch>
            {generateRoutes(routes)}
          </Switch>
        </Router> */}
        {/* {generateRoutes(routes)} */}
        {/* <Router>
          <Switch>
            {routes.map(({ layout, pages }) => {
              if (layout === "dashboard") {
                return pages.map(({ path, element, nestedRoutes = [] }) => (
                  <Route
                    path={path} // use wildcard character here
                    component={element}
                    key={path}
                  >
                    {nestedRoutes.map(({ path: nestedPath, element: nestedElement }) => (
                      <Route path={nestedPath} component={nestedElement} key={nestedPath} />
                    ))}
                  </Route>
                ));
              }
              return null;
            })}
          </Switch>
        </Router> */}

        {routes.map(({ layout, pages }) =>
          layout === "dashboard" &&
          pages.map((page) => (
            <Route key={page.name} path={page.path} component={page.element}>
              {/* {page.nestedRoutes && (
                <Routes>
                  {page.nestedRoutes.map((nestedRoute) => (
                    <Route
                      key={nestedRoute.name}
                      path={`${page.path}${nestedRoute.path}`}
                      element={nestedRoute.element}
                    />
                  ))}
                </Routes>
              )} */}
            </Route>
          ))
        )}

        {/* <div className="text-blue-gray-600">
          <Footer />
        </div> */}
      </div>
    </div>
  );
}

Dashboard.displayName = "/src/layout/dashboard.jsx";

export default Dashboard;
