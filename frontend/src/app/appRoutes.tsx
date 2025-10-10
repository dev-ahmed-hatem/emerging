import Base from "@/pages/Base";
import Error from "@/pages/Error";
import SectionView from "@/pages/SectionView";
import { FaUser } from "react-icons/fa";
import { SettingOutlined } from "@ant-design/icons";
import { RouteObject } from "react-router";
import LoginPage from "@/pages/LoginPage";
import AuthProvider from "@/providers/AuthProvider";
import SettingsPage from "@/pages/Settings";
import PermissionProvider from "@/providers/PermissionProvider";
import ApplicantsList from "@/pages/applicants/ApplicantsList";

export type AppRoute = RouteObject & {
  key?: string;
  label?: string;
  icon?: React.ReactNode;
  children?: AppRoute[];
};

export const appRoutes: AppRoute[] = [
  {
    path: "",
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
            parentUrl="/applicants"
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
    path: "login",
    element: <LoginPage />,
  },
  {
    path: "*",
    element: <Error notFound={true} />,
  },
];

export default appRoutes;
