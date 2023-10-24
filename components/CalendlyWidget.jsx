import React from "react";

const CalendlyWidget = () => {
  return (
    <>
      <div id="Calendly" className=" lg:pb-0 pb-10">
        <div className="flex  mb-10 ">
          <h2 className="text-xl">Calendly </h2>
          <div className=" lg:w-[433px] ml-4  border-b-2 border-[#F0F0F0] mb-4 "></div>
        </div>
        <div className="bg-[#02CA82] p-1 rounded-lg  shadow-lg shadow-cyan-500/50">
          <iframe
            title="Calendly Scheduling"
            width="100%"
            height="600"
            src="https://calendly.com/samhanjra"
            className="rounded-lg "
          />
        </div>
      </div>
    </>
  );
};

export default CalendlyWidget;
