import AddonsCard from "@/components/addons-card/AddonsCard";
import IslamCard from "@/components/piller-card/PillerCard";
import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 relative ">
      <IslamCard
        title={`Profession of Faith (shahada)`}
        description={`The belief that "There is no god but God, and Muhammad is the Messenger of God".`}
        bgUrl="https://t3.ftcdn.net/jpg/05/43/40/22/240_F_543402289_FhTPkRzXjMwz73GbRMeAiTZx22pqnf1S.jpg"
        redirectionUrl={"/shahada"}
      />
      <IslamCard
        title={`Prayer (salat)`}
        description={`Muslims pray facing Mecca five times a day: at dawn, noon, mid-afternoon, sunset, and after dark. Prayer includes a recitation of the opening chapter (sura) of the Qur'an`}
        bgUrl="https://img.freepik.com/premium-vector/simple-flat-vector-illustration-muslim-family-praying-together_24381-1910.jpg"
        redirectionUrl={"/namaz"}
      />
      <IslamCard
        title="Fasting (Roza)"
        description={`During the daylight hours of Ramadan, all healthy adult Muslims are required to abstain from food and drink`}
        bgUrl="https://media.istockphoto.com/id/1304710913/vector/muslim-family-praying-before-having-iftar.jpg?s=612x612&w=0&k=20&c=eA-0NyRdMeWwIhHkiUqtiK_bP9W8gYsYKeBd_5n8hk0="
      />
      <IslamCard
        title="Zakat"
        description={`In accordance with Islamic law, Muslims donate a fixed portion of their income to community members in need.`}
        bgUrl="https://media.istockphoto.com/id/1314082816/vector/man-giving-alms-or-zakat-in-the-holy-month-of-ramadan.jpg?s=612x612&w=0&k=20&c=jsZZrRmwVmqs5fmOinl666X6Upqw9HnxwGIrdsmBgn8="
      />

      <IslamCard
        title="Hajj"
        description={`Every Muslim whose health and finances permit it must make at least one visit to the holy city of Mecca, in present-day Saudi Arabia.`}
        bgUrl="https://t4.ftcdn.net/jpg/05/87/59/71/240_F_587597172_K9eSMO6LHB0bbKtU9S6hROPFjr1Kv6O6.jpg"
      />
    </div>
  );
}
