import Link from "next/link";

export const Sunnat = () => {
  return (
    <Link className="text-orange-700" href={"namaz/sunnat"}>
      Sunnat
    </Link>
  );
};
export const Farz = () => {
  return (
    <Link className="text-red-700" href={"namaz/farz"}>
      Fard
    </Link>
  );
};
export const Nafeel = () => {
  return (
    <Link className="text-green-700" href={"namaz/nafeel"}>
      Nafl
    </Link>
  );
};
