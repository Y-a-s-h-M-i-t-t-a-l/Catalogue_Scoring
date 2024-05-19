const ParentFrame = () => {
    return (
      <header className="self-stretch flex flex-row items-center justify-between gap-[20px] text-center text-14xl-6 text-white font-inter">
        <div className="flex flex-row items-center justify-start gap-[0px_12px]">
          <div className="h-20 w-20 relative">
            <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-chocolate-100 w-full h-full" />
            <img
              className="absolute top-[0px] left-[0px] w-full h-full object-cover z-[1]"
              loading="lazy"
              alt=""
              src="/neutrino-logo-1@2x.png"
            />
          </div>
          <div className="relative tracking-[-0.22px] font-semibold">
            Neutrino
          </div>
        </div>
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
      </header>
    );
  };
  
  export default ParentFrame;
  