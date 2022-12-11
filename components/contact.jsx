const Contact = () => {
  return (
    <div id="contact" className=" lg:py-32 pb-20">
     

 

      <div className="flex lg:justify-center ">
        <h2 className="text-xl">Get in Touch </h2>
        <div className="h-0.5 lg:w-[433px] lg:ml-4 mt-6 border border-[#F0F0F0] lg:visible invisible"></div>
      </div>



      <div className="flex text-white  flex-col text-center	lg:mx-auto m mt-14 ">
        <div className="lg:m-6 ">
          <input
            className="mr-4 lg:w-[255px] p-4 bg-[#0D1F3B] w-full mb-2 rounded-lg  outline-blue-500  border-[#143668] border"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <input
            className=" p-4 bg-[#0D1F3B]  lg:w-[255px] w-full mb-2 rounded-lg  outline-blue-500  border-[#143668] border"
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
        </div>
        <div className="lg:mx-6">
          <input
            className="lg:w-[530px] p-6  bg-[#0D1F3B] w-full mb-2 rounded-lg  outline-blue-500   border-[#143668] border"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="lg:m-6">
          <textarea
            className="lg:w-[530px] lg:min-h-[150px] w-full p-6 mb-2 rounded-lg   outline-blue-500  bg-[#0D1F3B] border-[#143668] border"
            id="subject"
            name="subject"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="lg:mx-6">
     
        <button className="border-[#02CA82] border rounded-lg lg:w-[530px]  p-4 w-full mt-2 text-[#02CA82] font-bold">Send </button>
      </div>
      </div>
    </div>
  );
};

export default Contact;
