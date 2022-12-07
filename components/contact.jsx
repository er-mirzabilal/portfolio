const Contact = () => {
  return (
    <div id="contact" className=" flex  flex-wrap py-32 bg-neutral-600">
      <div className="flex  h-fit w-full justify-center">
        <h2 className="font-extrabold text-3xl">Get in Touch </h2>
        <div className=" w-[433px] ml-4 mt-10  line"></div>
      </div>

      <div className="flex text-white  flex-col 	mx-auto mt-14 ">
        <div className="m-6 ">
          <input
            className="mr-4 w-[255px] p-4 bg-[#0D1F3B]  outline-blue-500  border-[#143668] border"
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />
          <input
            className=" p-4 bg-[#0D1F3B]  w-[255px] outline-blue-500  border-[#143668] border"
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />
        </div>
        <div className="mx-6">
          <input
            className="w-[530px] p-6  bg-[#0D1F3B]  outline-blue-500   border-[#143668] border"
            type="text"
            id="email"
            name="email"
            placeholder="Email"
          />
        </div>
        <div className="m-6">
          <textarea
            className="w-[530px] min-h-[150px] p-6  outline-blue-500  bg-[#0D1F3B] border-[#143668] border"
            id="subject"
            name="subject"
            placeholder="Message"
          ></textarea>
        </div>
        <div className="mx-6">
     
        <button className="border-[#02CA82] border p-4 w-full mt-2 text-[#02CA82] font-bold">Send </button>
      </div>
      </div>
    </div>
  );
};

export default Contact;
