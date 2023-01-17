import { Inter } from "@next/font/google";
import { DefaultLayout } from "@/components/layouts/DefaultLayout";
import Deliver from "@/components/images/deliver.png";

export default function Home() {
  console.log(Deliver);
  return (
    <DefaultLayout>
      <div className="shadow-bottom">
        <img
          className="mx-auto mt-moins10 shadow-img drop-shadow-2xl"
          src={Deliver.src}
          alt="Deliver"
        />
      </div>
    </DefaultLayout>
  );
}
