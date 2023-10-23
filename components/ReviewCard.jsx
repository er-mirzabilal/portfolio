import Image from "next/image";

const ReviewCard = ({ review, reviewer, src }) => {
  return (
    <div className="bg-[#0C1C34] shadow-2xl rounded-md p-4 mb-4 hover:shadow-2xl   hover:drop-shadow-[0_2px_5px_rgb(0,128,0)] ">
      <div>
        <Image src={src} className="absolute    " alt="/" />
      </div>
      <div>
        <p className="font-bold mt-6 text-[#F0F0F0] lg:text-xl text-base">
          {review}
        </p>
      </div>
      <div>
        <p className="mt-4 font-medium text-[#F0F0F0]  text-sm">{reviewer}</p>
      </div>
    </div>
  );
};

export default ReviewCard;
