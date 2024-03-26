import Link from "next/link";

const IslamCard = ({
  title,
  description,
  bgUrl,
  redirectionUrl,
}: {
  title: string;
  description: string;
  bgUrl: string;
  redirectionUrl: string;
}) => {
  return (
    <Link
      href={redirectionUrl || "/shahada"}
      style={{ backgroundImage: `url(${bgUrl})` }}
      className=" max-h-[250px]  cursor-pointer bg-white  rounded-3xl overflow-hidden shadow-lg  bg-no-repeat bg-right-bottom  bg-16 pb-20"
    >
      <div className="px-6 py-4">
        <div className="font-bold text-[17px] mb-2">{title}</div>
        <p className="text-gray-700 text-[15px]">{description}</p>
      </div>
    </Link>
  );
};

export default IslamCard;
