import { RouteObject } from "react-router";
import appRoutes, { AppRoute } from "./appRoutes";
import ApplicantProfilePage from "@/pages/applicants/ApplicantProfilePage";
import ApplicantForm from "@/pages/applicants/ApplicantForm";
import ApplicantEdit from "@/pages/applicants/ApplicantEdit";

const alterRoute = function (
  appRoutes: AppRoute[],
  routePath: string,
  newRoute: RouteObject,
  parentPath?: string
): AppRoute[] {
  return appRoutes.map((route) => {
    const currentRoutePath = parentPath
      ? `${parentPath}/${route.path}`
      : route.path;

    if (currentRoutePath === routePath) {
      return { ...route, ...newRoute } as RouteObject;
    }

    if (route.children?.length) {
      return {
        ...route,
        children: alterRoute(
          route.children,
          routePath,
          newRoute,
          currentRoutePath
        ),
      };
    }

    return route;
  });
};

const addSubRoutes = (
  appRoutes: AppRoute[],
  subRoutes: { [key: string]: RouteObject[] },
  parentPath?: string
): AppRoute[] => {
  return appRoutes.map((route) => {
    const currentRoutePath = parentPath
      ? `${parentPath}/${route.path}`
      : route.path;

    const matchedChildren = subRoutes[currentRoutePath!];

    return {
      ...route,
      children: [
        ...(matchedChildren || []),
        ...(route.children
          ? addSubRoutes(route.children, subRoutes, currentRoutePath)
          : []),
      ],
    } as AppRoute;
  });
};

let routes: RouteObject[] = addSubRoutes(appRoutes, {
  applicants: [
    { path: "applicant-profile/:client_id", element: <ApplicantProfilePage /> },
    { path: "add", element: <ApplicantForm /> },
    { path: "edit/:client_id", element: <ApplicantEdit /> },
  ],
});

export default routes;
