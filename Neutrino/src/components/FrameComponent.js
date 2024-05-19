const FrameComponent = () => {
    return (
      <form className="m-0 w-[392px] flex flex-col items-end justify-start gap-[17px_0px] max-w-full">
        <div className="self-stretch flex flex-row items-start justify-start py-0 pr-2.5 pl-0 box-border max-w-full">
          <div className="h-[52.8px] flex-1 relative text-19xl-4 font-inter text-center inline-block max-w-full mq800:text-12xl mq450:text-4xl">
            <span className="text-white">{`Register to `}</span>
            <span className="text-chocolate">Neutrino</span>
          </div>
        </div>
        <div className="w-96 flex flex-col items-start justify-start pt-0 pb-[5px] pr-px pl-0 box-border gap-[11px_0px] max-w-full">
          <div className="self-stretch rounded-[6.56px] bg-white flex flex-row items-center justify-start py-[15px] px-[17px] border-[1.1px] border-solid border-gray-scale-gray-100">
            <input
              className="w-[86px] [border:none] [outline:none] font-poppins text-mid-5 bg-[transparent] h-[23px] relative leading-[130%] text-gray-scale-gray-400 text-left inline-block"
              placeholder="Full name"
              type="text"
            />
          </div>
          <div className="self-stretch rounded-[6.56px] bg-white flex flex-row items-center justify-start py-[15px] px-[17px] border-[1.1px] border-solid border-gray-scale-gray-100">
            <input
              className="w-[194px] [border:none] [outline:none] font-poppins text-mid-5 bg-[transparent] h-[23px] relative leading-[130%] text-gray-scale-gray-400 text-left inline-block"
              placeholder="Email / Phone number"
              type="text"
            />
          </div>
          <div className="self-stretch rounded-[6.56px] bg-white flex flex-row items-center justify-start py-[15px] px-[17px] border-[1.1px] border-solid border-gray-scale-gray-100">
            <input
              className="w-[85px] [border:none] [outline:none] font-poppins text-mid-5 bg-[transparent] h-[23px] relative leading-[130%] text-gray-scale-gray-400 text-left inline-block"
              placeholder="Password"
              type="text"
            />
          </div>
          <div className="self-stretch rounded-[6.56px] bg-white flex flex-row items-center justify-start py-[15px] px-[17px] border-[1.1px] border-solid border-gray-scale-gray-100">
            <input
              className="w-40 [border:none] [outline:none] font-poppins text-mid-5 bg-[transparent] h-[23px] relative leading-[130%] text-gray-scale-gray-400 text-left inline-block"
              placeholder="Confirm Password"
              type="text"
            />
          </div>
        </div>
        <div className="w-[383px] flex flex-col items-center justify-start gap-[13px_0px] max-w-full">
          <div className="w-[222px] flex flex-row items-start justify-start py-0 pr-0 pl-[3px] box-border">
            <button className="cursor-pointer [border:none] pt-3.5 px-3.5 pb-[15px] bg-skyblue flex-1 rounded-[10.94px] flex flex-row items-center justify-center whitespace-nowrap hover:bg-steelblue">
              <div className="h-[54.7px] w-[218.8px] relative rounded-[10.94px] bg-skyblue hidden" />
              <div className="w-[110.5px] relative text-2xl-9 font-inter text-white text-center inline-block shrink-0 z-[1]">
                Sign Up
              </div>
            </button>
          </div>
          <div className="self-stretch flex flex-col items-center justify-start gap-[5px_0px]">
            <div className="w-[216px] flex flex-row items-start justify-start py-0 pr-0.5 pl-0 box-border">
              <div className="h-[25.2px] flex-1 relative text-sm-1 font-inter text-center inline-block shrink-0">
                <span className="text-white">{`Already have an account ? `}</span>
                <span className="text-skyblue">Login</span>
              </div>
            </div>
            <button className="cursor-pointer pt-[17px] pb-4 pr-5 pl-[21px] bg-[transparent] self-stretch rounded-[10938.67px] overflow-hidden flex flex-row items-start justify-center gap-[0px_17px] border-[2.2px] border-solid border-aliceblue hover:bg-lightgray-200 hover:box-border hover:border-[2.2px] hover:border-solid hover:border-lightgray-100">
              <img
                className="h-[26.3px] w-[26.3px] relative"
                alt=""
                src="/sso-icon.svg"
              />
              <div className="relative text-mid-5 tracking-[-0.01em] leading-[26.26px] font-medium font-inter text-cornflowerblue text-left">
                Sign in with Google
              </div>
            </button>
          </div>
        </div>
      </form>
    );
  };
  
  export default FrameComponent;
  