import Welcome from "@/admin/components/home/Welcome";
import NavigationGrid from "../components/home/NavigationGrid";
import ClientStats from "@/admin/components/home/ApplciantsStats";
import { Divider } from "antd";

const Home = () => {
  return (
    <div className="font-bold text-xl padding-container pt-10">
      <Welcome />
      <Divider className="my-6" />
      <NavigationGrid />
      <Divider className="my-6" />
      <ClientStats />
    </div>
  );
};

export default Home;
