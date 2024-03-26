"use client";
import Image from "next/image";
import Link from "next/link";
import Language from "../language-select/Language";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  console.log({ pathname });
  return (
    <header className="text-gray-800 bg-white py-4 px-4 ">
      <div className="container  flex justify-between items-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEbkeYvQut__nZNloWDZcleuxYcgUl_E683rP7mIoG65IwmVk5bp-6ROqjtld2zqK3MU&usqp=CAU"
          alt="Picture of the author"
          width={100}
          height={50}
          className="w-80px sm:w-[100px]"
        />
        <nav className="flex items-center gap-[5px] sm:gap-5">
          <Link
            href="/"
            className="undeline-transition focus:text-red-500 drop-shadow-md text-[13px] pb-1 relative  before:absolute before:w-[5px] focus:before:w-full before:h-[2px] before:bg-red-500  before:bottom-0 before:left-0 before:rounded-[40px]"
          >
            Home
          </Link>
          <Link
            href="/hadees"
            className="undeline-transition focus:text-red-500 drop-shadow-md text-[13px] pb-1 relative  before:absolute before:w-[5px] focus:before:w-full before:h-[2px] before:bg-red-500  before:bottom-0 before:left-0 before:rounded-[40px]"
          >
            Hadees
          </Link>
          <Link
            href="/quran"
            className="undeline-transition focus:text-red-500 drop-shadow-md text-[13px] pb-1 relative  before:absolute before:w-[5px] focus:before:w-full before:h-[2px] before:bg-red-500  before:bottom-0 before:left-0 before:rounded-[40px]"
          >
            Quran
          </Link>
          {pathname.includes("/hadees") && <Language />}
        </nav>
      </div>
    </header>
  );
};

export default Header;
