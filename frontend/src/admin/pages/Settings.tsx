import { Tabs } from "antd";
import UserSettingsTab from "@/admin/components/settings/users/UserSettingsTab";
import { useAppSelector } from "@/admin/app/redux/hooks";
import AccountSettingsTab from "@/admin/components/settings/account/AccountSettingsTab";

const SettingsPage = () => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div className="py-6 max-w-7xl mx-auto">
      <h1 className="mb-6 text-2xl font-bold">الإعدادات</h1>

      <Tabs
        renderTabBar={(props, DefaultTabBar) => (
          <DefaultTabBar {...props} className="md:ps-2" />
        )}
        direction="rtl"
        defaultActiveKey="account"
        items={[
          {
            key: "account",
            label: "الحساب",
            children: <AccountSettingsTab />,
          },
          ...(user?.role === "مدير"
            ? [
                {
                  key: "users",
                  label: "المستخدمين",
                  children: <UserSettingsTab />,
                },
              ]
            : []),
        ]}
      />
    </div>
  );
};

export default SettingsPage;
