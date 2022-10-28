import Image from "next/image";

const DealOfferCard = ({ dealOffer,openImg }) => {
  return (
    <div onClick={()=>openImg(dealOffer)} className="w-[32%] shadow-xl rounded-tr-[30px] overflow-hidden border-b-[5px] border-[#b89535] cursor-pointer hover:brightness-[0.6]">
      <Image src={dealOffer} layout='responsive' />
    </div>
  );
};

export default DealOfferCard;
