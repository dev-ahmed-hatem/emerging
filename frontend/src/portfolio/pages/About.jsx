// export default function About() {
//   return (
//     <section className="py-10">
//       <div className="container">
//         <h1 className="text-3xl mb-4">عن الجمعية</h1>
//         <p>
//           تهدف اللجنة التنسيقية لجمعيات تحفيظ القرآن إلى دعم الجمعيات وتحسين جودة التعليم القرآني في المملكة.
//         </p>
//       </div>
//     </section>
//   );
// }


import Navbar from "../components/Shared/Navbar";
import Hero from "../components/Shared/Hero";
import Footer from "../components/Shared/Footer";
 import AboutSection2 from "../components/Home/AboutSection2";
 

import { Outlet, useMatch } from "react-router";

import { ConfigProvider } from "antd";

import "../App.css";
import "../portfolio-index.css"; 

function About() { 

  return  (
    <>
      <Navbar />
      <Hero />

      <AboutSection2 />

      <Footer />
    </>
  ) ;
}

export default About;
