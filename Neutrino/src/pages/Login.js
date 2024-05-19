import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Perform login logic here

    // Redirect to home page
    navigate("/Home");
  };
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-row items-center justify-between pt-10 pb-[265px] pr-[88px] pl-20 box-border tracking-[normal] gap-[20px] text-center text-[33.6px] text-white font-inter mq800:pl-10 mq800:pr-11 mq800:box-border mq450:pr-5 mq450:box-border mq1300:flex-wrap">
      <div className="w-[621px] flex flex-col items-start justify-start gap-[130px_0px] min-w-[621px] max-w-full mq800:gap-[130px_0px] mq1125:min-w-full mq450:gap-[130px_0px] mq1300:flex-1">
        <div className="flex flex-row items-center justify-start gap-[0px_12px]">
          <div className="h-20 w-20 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-chocolate w-full h-full" />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/neutrino-logo-1@2x.png"
            />
          </div>
          <div className="relative tracking-[-0.22px] font-semibold mq800:text-[27px] mq450:text-[20px]">
            Neutrino
          </div>
        </div>
        <div className="self-stretch flex flex-row items-start justify-end max-w-full">
          <img
            className="h-[467.2px] w-[540.8px] relative max-w-full"
            loading="lazy"
            alt=""
            src="/page-design-svg.svg"
          />
        </div>
      </div>
      <div className="w-[492px] flex flex-col items-start justify-start pt-0 px-0 pb-3 box-border min-w-[492px] max-w-full mq800:min-w-full mq1300:flex-1">
        <div className="self-stretch flex flex-col items-end justify-start gap-[206px_0px] max-w-full mq800:gap-[206px_0px]">
          <div className="flex flex-row items-start justify-start py-0 pr-px pl-0 gap-[0px_12px]">
            <img
              className="h-[43.7px] w-[43.7px] relative min-h-[44px]"
              loading="lazy"
              alt=""
              src="/group-21.svg"
            />
            <img
              className="h-[43.7px] w-[43.7px] relative min-h-[44px]"
              loading="lazy"
              alt=""
              src="/group-20.svg"
            />
          </div>
          <div className="self-stretch flex flex-row items-start justify-start max-w-full">
            <form className="m-0 w-[392px] flex flex-col items-end justify-start gap-[9px_0px] max-w-full">
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border max-w-full">
                <div className="h-[52.8px] flex-1 relative text-[38.4px] font-inter text-center inline-block max-w-full mq800:text-[31px] mq450:text-[23px]">
                  <span className="text-white">{`Login to `}</span>
                  <span className="text-chocolate">Neutrino</span>
                </div>
              </div>
              <div className="w-[359px] rounded-[6.15px] bg-white box-border flex flex-row items-center justify-start pt-[15px] px-4 pb-3.5 max-w-full border-[1px] border-solid border-gray-scale-gray-100">
                <input
                  className="w-[350px] [border:none] [outline:none] font-poppins text-base-4 bg-[transparent] h-[21px] relative leading-[130%] text-gray-scale-gray-400 text-left inline-block"
                  placeholder="Enter your Email "
                  type="text"
                />
              </div>
              <div className="w-[359px] flex flex-row items-center justify-start py-0 pr-[18px] pl-0 box-border max-w-full">
                <div className="flex-1 rounded-[6.15px] bg-white box-border flex flex-row items-center justify-start pt-3.5 px-4 pb-[15px] max-w-[105%] shrink-0 border-[1px] border-solid border-gray-scale-gray-100">
                  <input
                    className="w-[79px] [border:none] [outline:none] font-poppins text-base-4 bg-[transparent] h-[21px] relative leading-[130%] text-gray-scale-gray-400 text-left inline-block"
                    placeholder="Password"
                    type="text"
                  />
                </div>
                <img
                  className="h-[21.5px] w-[25.1px] relative z-[1] ml-[-43px]"
                  alt=""
                  src="/forgot-password-link.svg"
                />
              </div>
              <div className="flex flex-row items-start justify-start pt-0 pb-[13px] pr-0.5 pl-0 box-border gap-[0px_42px] min-h-[33px] max-w-full mq450:flex-wrap mq450:gap-[0px_42px]">
                <div className="flex flex-row items-center justify-start gap-[0px_3px]">
                  <input
                    className="m-0 h-3 w-3 relative rounded box-border border-[0.8px] border-solid border-lightgray-100"
                    type="checkbox"
                  />
                  <div className="relative text-mini-4 leading-[130%] font-poppins text-gray-scale-gray-400 text-left">
                    Remember Password
                  </div>
                </div>
                <div className="relative text-mini-4 leading-[130%] font-poppins text-skyblue text-left">{`Forgot Password ? `}</div>
              </div>
              <div className="w-[283px] flex flex-row items-start justify-start pt-0 pb-[3px] px-0 box-border">
                <button className="cursor-pointer [border:none] py-3.5 pr-[50px] pl-[51px] bg-skyblue w-[205px] rounded-[10.25px] flex flex-row items-center justify-center box-border hover:bg-steelblue">
                  <div className="h-[51.3px] w-[205px] relative rounded-[10.25px] bg-skyblue hidden" />
                  <div className="flex-1 relative text-[20.5px] font-inter text-white text-center z-[1] mq450:text-[16px]" onClick={handleLogin}>
                    Login
                  </div>
                </button>
              </div>
              <div className="w-[283px] h-[26px] flex flex-row items-start justify-start pt-0 pb-[3px] px-0 box-border">
                <div className="h-[23.6px] relative text-[12.3px] font-inter text-center inline-block">
                  <span className="text-white">{`Don’t have an account ? `}</span>
                  <span className="text-skyblue">Register</span>
                </div>
              </div>
              <button className="cursor-pointer py-4 px-5 bg-[transparent] w-[359.5px] rounded-[10249.55px] box-border overflow-hidden flex flex-row items-start justify-center gap-[0px_14px] max-w-full border-[2.1px] border-solid border-aliceblue hover:bg-lightgray-300 hover:box-border hover:border-[2.1px] hover:border-solid hover:border-lightgray-200">
                <img
                  className="h-[24.6px] w-[24.6px] relative"
                  alt=""
                  src="/sso-icon.svg"
                />
                <div className="relative text-base-4 tracking-[-0.01em] leading-[24.6px] font-medium font-inter text-cornflowerblue text-left">
                  Sign in with Google
                </div>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
