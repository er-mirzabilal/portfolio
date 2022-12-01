const Blogs = () => {
  return (
    <div id="Blogs" className=" flex  flex-wrap  py-32">
      <div className="flex  h-fit w-full justify-center">
        <h2 className="font-extrabold text-3xl">BLogs </h2>
        <div className=" w-[433px] ml-4  border-b-2 border-[#F0F0F0] "></div>
      </div>

      <div className="grid grid-cols-3 relative gap-9 mt-10">
        <div className="flex flex-col bg-[url('../public/assets/nature.jpg')] justify-end px-6 pb-4 rounded-lg h-96">
          <div className=" ">
            <h5 className="text-sm font-bold">January 2, 2022</h5>
          </div>

          <div>
            <h2 className="text-2xl  text-white">
              A Conference Without Slides Meet SmashingConf
            </h2>
          </div>
          <div className="">
            {" "}
            <p className="text-lg underline underline-offset-1 cursor-pointer font-bold">View Details</p>{" "}
          </div>
        </div>

        <div className="flex flex-col bg-[url('../public/assets/nature.jpg')] justify-end px-6 pb-4 rounded-lg ">
          <div className=" ">
            <h5 className="text-sm font-bold">January 2, 2022</h5>
          </div>

          <div>
            <h2 className="text-2xl text-white">
            What is Front End Development
            </h2>
          </div>
          <div className="">
            {" "} 
            <p className="text-lg underline underline-offset-1 cursor-pointer font-bold">View Details</p>{" "}
          </div>
        </div>

        <div className="flex flex-col bg-[url('../public/assets/nature.jpg')] justify-end px-6 pb-4 rounded-lg ">
          <div className=" ">
            <h5 className="text-sm font-bold">January 2, 2022</h5>
          </div>

          <div>
            <h2 className="text-2xl  text-white">
              A Conference Without Slides Meet SmashingConf
            </h2>
          </div>
          <div className="">
            {" "}
            <p className="text-lg underline underline-offset-1 cursor-pointer font-bold">View Details</p>{" "}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
