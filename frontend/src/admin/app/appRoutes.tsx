import Base from "@/admin/pages/Base";
import Error from "@/admin/pages/Error";
import SectionView from "@/admin/pages/SectionView";
import { FaUser } from "react-icons/fa";
import { SettingOutlined } from "@ant-design/icons";
import { RouteObject } from "react-router";
import LoginPage from "@/admin/pages/LoginPage";
import AuthProvider from "@/admin/providers/AuthProvider";
import SettingsPage from "@/admin/pages/Settings";
import PermissionProvider from "@/admin/providers/PermissionProvider";
import ApplicantsList from "@/admin/pages/applicants/ApplicantsList";

export type AppRoute = RouteObject & {
  key?: string;
  label?: string;
  icon?: React.ReactNode;
  children?: AppRoute[];
};

export const appRoutes: AppRoute[] = [
  {
    path: "/admin",
    element: (
      <AuthProvider>
        <PermissionProvider>
          <Base />
        </PermissionProvider>
      </AuthProvider>
    ),
    errorElement: <Base error={true} />,
    children: [
      {
        path: "applicants",
        element: (
          <SectionView
            parentComponent={<ApplicantsList />}
            parentUrl="/admin/applicants"
          />
        ),
        icon: <FaUser />,
        label: "المتسابقين",
      },
      {
        path: "settings",
        element: <SettingsPage />,
        icon: <SettingOutlined />,
        label: "الإعدادات",
      },
    ],
  },
  {
    path: "/admin/login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Error notFound={true} />,
  },
];

export default appRoutes;
