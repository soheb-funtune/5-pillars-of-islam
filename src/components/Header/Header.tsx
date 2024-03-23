// components/Header.js
import Image from "next/image";

const Header = () => {
  return (
    <header className="text-gray-800 bg-white py-4 px-4 ">
      <div className="container  flex justify-between items-center">
        {/* <h1 className="text-2xl font-bold">Your Website</h1> */}
        <Image
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEEbkeYvQut__nZNloWDZcleuxYcgUl_E683rP7mIoG65IwmVk5bp-6ROqjtld2zqK3MU&usqp=CAU"
          alt="Picture of the author"
          width={100}
          height={50}
        />
        <nav></nav>
      </div>
    </header>
  );
};

export default Header;
