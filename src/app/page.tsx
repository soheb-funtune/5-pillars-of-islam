import AddonsCard from "@/components/addons-card/AddonsCard";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen  grid grid-cols-2 gap-5 ">
      <div className="min-w-[240px] col-start-0 col-end-1 shadow-lg bg-white p-3 rounded-r-lg ">
        <AddonsCard />
      </div>
      <div className="col-start-1 col-end-12 bg-red-300 p-3">app js</div>
    </main>
  );
}
