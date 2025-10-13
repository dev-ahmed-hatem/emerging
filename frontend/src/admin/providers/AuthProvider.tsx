import { axiosBaseQueryError } from "@/admin/app/api/axiosBaseQuery";
import { useGetAuthUserQuery } from "@/admin/app/api/endpoints/auth";
import { useAppDispatch, useAppSelector } from "@/admin/app/redux/hooks";
import { setUser } from "@/admin/app/slices/authSlice";
import Loading from "@/admin/components/Loading";
import Base from "@/admin/pages/Base";
import ErrorPage from "@/admin/pages/Error";
import { User } from "@/admin/types/user";
import { AxiosError } from "axios";
import React, { createContext, useContext, useEffect } from "react";
import { Navigate, useLocation } from "react-router";

interface ContextType {
  user: User | null; // in case passing user as a context value
}

const AuthContext = createContext<ContextType | null>(null);

const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  const dispatch = useAppDispatch();
  const { data, isFetching, isError, error, isSuccess } = useGetAuthUserQuery();

  const user = useAppSelector((state) => state.auth.user);

  useEffect(() => {
    if (data) {
      dispatch(setUser(data));
    }
  }, [data]);

  if (isFetching || (isSuccess && !user)) return <Loading />;
  if (isError) {
    const err = error as axiosBaseQueryError & AxiosError;
    const next =
      location.pathname !== "/admin"
        ? `/admin/login?next=${encodeURIComponent(
            location.pathname + location.search
          )}`
        : `/admin/login`;

    return err?.status == 401 ? (
      <Navigate to={next} />
    ) : err?.response ? (
      <Base error={true} />
    ) : (
      <ErrorPage />
    );
  }
  return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>;
};

export default AuthProvider;

export const useAuth = (): ContextType => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("user must login first");
  }
  return context;
};
