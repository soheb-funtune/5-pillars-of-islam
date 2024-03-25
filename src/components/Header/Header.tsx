import Image from "next/image";
import Link from "next/link";
import Language from "../language-select/Language";

const Header = () => {
  return (
    <header className="text-gray-800 bg-white py-4 px-4 ">
      <div className="container  flex justify-between items-center">
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEbkeYvQut__nZNloWDZcleuxYcgUl_E683rP7mIoG65IwmVk5bp-6ROqjtld2zqK3MU&usqp=CAU"
          alt="Picture of the author"
          width={100}
          height={50}
        />
        <nav className="flex items-center gap-5">
          <Link
            href="/hadees"
            className="focus:text-red-500 drop-shadow-md text-[13px] relative pl-3 focus:before:absolute focus:before:w-1 focus:before:h-full focus:before:bg-red-500 focus:before:top-0 focus:before:bottom-0 focus:before:left-0 focus:before:rounded-[40px]"
          >
            Hadees
          </Link>
          <Link
            href="/hadees"
            className="focus:text-red-500 drop-shadow-md text-[13px] relative pl-3 focus:before:absolute focus:before:w-1 focus:before:h-full focus:before:bg-red-500 focus:before:top-0 focus:before:bottom-0 focus:before:left-0 focus:before:rounded-[40px]"
          >
            Quran
          </Link>
          <Language />
        </nav>
      </div>
    </header>
  );
};

export default Header;
