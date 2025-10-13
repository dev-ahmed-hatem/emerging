import { StrictMode } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import routes from "./admin/app/routerConfig";
import { arEG } from "./admin/utils/locale";
import { ConfigProvider } from "antd";
import { Provider as ReduxProvider } from "react-redux";
import store from "./admin/app/redux/store";
import NotificationProvider from "./admin/providers/NotificationProvider";

import "./admin/styles/index.css";
import "./admin/styles/cairo.css";
import "./admin/styles/tables.css";
import "./admin/styles/add-form.css";
import { createRoot } from "react-dom/client";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: "#3b6f7f",
          fontSize: 16,
          fontFamily: "Cairo, ui-sans-serif, system-ui",
        },
        components: { Badge: { statusSize: 12 } },
      }}
      form={{
        scrollToFirstError: { behavior: "smooth", block: "center" },
      }}
      card={{
        styles: {
          header: {
            padding: "0px 20px",
            margin: 0,
            minHeight: "56px",
            overflow: "hidden",
            color: "white",
            backgroundColor: "#355c69",
          },
        },
      }}
      locale={arEG}
    >
      <ReduxProvider store={store}>
        <NotificationProvider>
          <RouterProvider router={createBrowserRouter(routes)} />
        </NotificationProvider>
      </ReduxProvider>
    </ConfigProvider>
  </StrictMode>
);
