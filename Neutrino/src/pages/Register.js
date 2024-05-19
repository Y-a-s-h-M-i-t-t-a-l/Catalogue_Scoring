import FrameComponent from "../components/FrameComponent";

const Register = () => {
  return (
    <div className="w-full relative bg-gray overflow-hidden flex flex-row items-end justify-between pt-10 pb-[243px] pr-[88px] pl-20 box-border tracking-[normal] gap-[20px] text-center text-[33.6px] text-white font-inter mq800:pl-10 mq800:pr-11 mq800:box-border mq450:pr-5 mq450:box-border mq1300:flex-wrap">
      <div className="w-[621px] flex flex-col items-start justify-start pt-0 px-0 pb-[13px] box-border min-w-[621px] max-w-full mq1125:min-w-full mq1300:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[139px_0px] max-w-full mq800:gap-[139px_0px] mq450:gap-[139px_0px]">
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
      </div>
      <div className="w-[492px] flex flex-col items-end justify-start gap-[143px_0px] min-w-[492px] max-w-full mq800:gap-[143px_0px] mq800:min-w-full mq1300:flex-1">
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
          <FrameComponent />
        </div>
      </div>
    </div>
  );
};

export default Register;
