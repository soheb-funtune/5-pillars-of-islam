// components/IslamCard.js

const IslamCard = ({
  title,
  description,
  bgUrl,
}: {
  title: string;
  description: string;
  bgUrl: string;
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgUrl})` }}
      className=" max-h-[250px]  bg-white  rounded-3xl overflow-hidden shadow-lg  bg-no-repeat bg-right-bottom  bg-16 pb-20"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-[17px] mb-2">{title}</div>
        <p className="text-gray-700 text-[15px]">{description}</p>
      </div>
    </div>
  );
};

export default IslamCard;
