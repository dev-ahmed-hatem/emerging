import { useGetPermissionsListQuery } from "@/admin/app/api/endpoints/users";
import { useAppDispatch, useAppSelector } from "@/admin/app/redux/hooks";
import { setPermissions } from "@/admin/app/slices/authSlice";
import Loading from "@/admin/components/Loading";
import ErrorPage from "@/admin/pages/Error";
import React, { ReactNode, useContext, useEffect } from "react";

type PermissionContextType = {
  can: (permission: string) => boolean;
  hasModulePermission: (mod: string) => boolean;
};

const PermissionContext = React.createContext<PermissionContextType>({
  can: () => false,
  hasModulePermission: () => false,
});

const PermissionProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const dispatch = useAppDispatch();
  const permissions = useAppSelector((state) => state.auth.permissions);
  const user = useAppSelector((state) => state.auth.user);

  const {
    data: permissionsList,
    isLoading,
    isError,
  } = useGetPermissionsListQuery(user!.id);

  const can = (permission: string) =>
    permissions.includes(permission) || user?.role === "مدير";

  const hasModulePermission = (mod: string) =>
    permissions.some((perm) => perm.startsWith(mod)) || user?.role === "مدير";

  useEffect(() => {
    if (permissionsList) dispatch(setPermissions(permissionsList));
  }, [permissionsList]);

  if (isLoading) return <Loading />;
  if (isError)
    return (
      <ErrorPage
        title="تعذّر تحميل الصلاحيات"
        subtitle="يرجى المحاولة مرة أخرى. إذا استمرت المشكلة، تواصل مع الدعم."
        reload={true}
      />
    );
  return (
    <PermissionContext.Provider value={{ can, hasModulePermission }}>
      {children}
    </PermissionContext.Provider>
  );
};

export const usePermission = () => useContext(PermissionContext);

export default PermissionProvider;
