// components/Header.js
import Image from "next/image";
import Link from "next/link";

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
        <nav className="flex items-center gap-2">
          <Link href="/hadees" className="focus:text-red-500">
            <span className="text-[13px]">Hadees</span>
          </Link>
          <Link href="/hadees" className="focus:text-red-500">
            <span className="text-[13px]">Quran</span>
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
