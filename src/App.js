import React, { useState } from "react";
import CardsFilter from "./component/CardsFilter";
import CompanyLogos from "./component/CompanyLogos";
import Header from "./component/Header";
import Navbar from "./component/Navbar";
import Sidebar from "./component/Sidebar";
import SliderContainer from "./component/SliderContainer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopCollections from "./component/TopCollections";
import CreateAndSell from "./component/CreateAndSell";
import GettingStarted from "./component/GettingStarted";
import Footer from "./component/Footer";
import "aos/dist/aos.css";

const App = () => {
  const [sideBar, setSidebar] = useState(true);
  let menuBtns = ["Home", "Discover", "Collections", "Create", "Start"];

  return (
    <div className="content bg-black relativ h-scree ">
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Sidebar sideBar={sideBar} menuBtns={menuBtns} />

      <Navbar
        click={() => setSidebar(!sideBar)}
        menuBtns={menuBtns}
        sideBar={sideBar}
      />
      <Header />
      <CompanyLogos />
      <SliderContainer />
      <CardsFilter />
      <TopCollections />
      <CreateAndSell />
      <GettingStarted />
      <Footer />
    </div>
  );
};

export default App;
