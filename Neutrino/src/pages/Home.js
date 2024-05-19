import { useCallback } from "react";
import React from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleAddCatalog = () => {
    // Perform login logic here

    // Redirect to home page
    navigate("/addcatalog");
  };
  const onHomeContainerClick = useCallback(() => {
    // Please sync "Add_Product " to the project
  }, []);

  return (
    <div
      className="w-full relative bg-gray h-[982px] overflow-hidden cursor-pointer text-center text-9xl text-white font-inter"
      onClick={onHomeContainerClick}
    >
      <div className="absolute top-[250px] left-[198px] w-[1106px] h-[412px] text-29xl">
        <div className="absolute top-[89px] left-[0px]">
          <span>{`Hi, We are `}</span>
          <span className="text-skyblue">Neutrino</span>
        </div>
        <div className="absolute top-[0px] left-[662px]">
          <span>{`Quick `}</span>
          <span className="text-chocolate-200">Navigation</span>
          <span>{` ->`}</span>
        </div>
        <div className="absolute top-[172px] left-[0px] text-[26px] text-left inline-block w-[564px]">
          <p className="m-0 "> Our platform offers a seamless experience for browsing, managing, and showcasing catalogues of all kinds. Whether you're a buyer searching for the latest products or a seller looking to showcase your offerings, we've got you covered. Join us to explore a world of possibilities in catalogue management and discovery.</p>
        </div>
        <div className="absolute h-[16.5%] w-[30.92%] top-[24.51%] right-[9.22%] bottom-[58.98%] left-[59.86%] rounded-[13.67px] bg-skyblue" />
        <div className="absolute h-[16.5%] w-[30.92%] top-[44.17%] right-[9.22%] bottom-[39.32%] left-[59.86%] rounded-[13.67px] bg-skyblue" />
        <div className="absolute h-[16.5%] w-[30.92%] top-[63.83%] right-[9.22%] bottom-[19.66%] left-[59.86%] rounded-[13.67px] bg-skyblue" />
        <div className="absolute h-[16.5%] w-[30.92%] top-[83.5%] right-[9.22%] bottom-[0%] left-[59.86%] rounded-[13.67px] bg-skyblue" />
      </div>
      <div className="absolute h-[3.2%] w-[22%] top-[37.58%] left-[58.13%] inline-block">
        Previous Catalogs
      </div>
      <div className="absolute h-[3.2%] w-[22%] top-[45.82%] left-[58.13%] inline-block" onClick={handleAddCatalog}>
        Add New Catalog
      </div>
      <div className="absolute h-[3.2%] w-[22%] top-[54.07%] left-[58.13%] inline-block">
        Interact with Chatbot
      </div>
      <div className="absolute h-[3.2%] w-[22%] top-[62.32%] left-[58.13%] inline-block">
        Ideal Catalog Template
      </div>
{/* navbar logo and name  */}
<div class="absolute top-[40px] left-[80px] w-[232px] h-20 text-center text-[33.6px] font-inter"><div class="absolute top-[0px] left-[0px] w-20 h-20"><div class="absolute top-[0px] left-[0px] rounded-[50%] bg-chocolate w-20 h-20"></div><img class="absolute top-[0px] left-[0px] w-20 h-20 object-cover" alt="" src="/neutrino-logo-1@2x.png"/></div><div class="absolute top-[20px] left-[92px] tracking-[-0.22px] font-semibold">Neutrino</div></div>

{/* navbar logo and name ends here  */}
      <div className="absolute top-[58px] left-[1324px] w-[100px] h-[43.66px]">
        <img
          className="absolute top-[0px] left-[56.34px] w-[43.66px] h-[43.66px]"
          alt=""
          src="/group-20.svg"
        />
        <img
          className="absolute top-[0px] left-[0px] w-[43.66px] h-[43.66px]"
          alt=""
          src="/group-21.svg"
        />
      </div>
    </div>
  );
};

export default Home;
