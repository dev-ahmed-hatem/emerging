import Navbar from "../components/Shared/Navbar";
import Hero from "../components/Shared/Hero";
import Footer from "../components/Shared/Footer";

import MembersSection2 from "../components/Home/MembersSection2";

import { Outlet, useMatch } from "react-router";

import { ConfigProvider } from "antd";

import "../App.css";
import "../portfolio-index.css"; 

function Members() { 

  return  (
    <>
      <Navbar />
      <Hero />

      <MembersSection2 />

      <Footer />
    </>
  ) ;
}

export default Members;
