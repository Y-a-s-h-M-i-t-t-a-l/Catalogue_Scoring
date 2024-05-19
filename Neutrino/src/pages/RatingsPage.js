const RatingsPage = () => {
    return (
      <>
        <div className="bg-#131314">
          <div className="absolute top-[40px] left-[80px] w-[232px] h-20 text-center text-[33.6px]">
            <div className="absolute top-[0px] left-[0px] w-20 h-20">
              <div className="absolute top-[0px] left-[0px] rounded-[50%] bg-chocolate w-20 h-20"></div>
              <img
                className="absolute top-[0px] left-[0px] w-20 h-20 object-cover"
                alt=""
                src="/neutrino-logo-1@2x.png"
              />
            </div>
            <div
              className="absolute top-[20px] left-[92px] tracking-[-0.22px] font-semibold"
              style={{ color: "white",  fontFamily: "Inter, sans-serif" }}
            >
              Neutrino
            </div>
          </div>
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

        {/* body of the ratings page here 
         */}

         <div className="flex flex-col justify-center items-center pt-48">
            <div className="text-white text-[56px]" style={{ fontFamily: "Inter, sans-serif" }}> The Catalog Rating is  : <span className="text-[#5FB7D3]">8</span> </div>
         </div>
      </>
    );
  };
  
  export default RatingsPage;
  