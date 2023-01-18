import Image from 'next/image';
import deliverImg from './../public/images/deliver.png';

export default function Page() {
  return (
    <section className="relative w-full">
      <div className="-translate-y-96 flex flex-col items-center">
        <Image
          src={deliverImg}
          alt="Deliver image"
          placeholder="blur"
          className="w-full h-full"
        />
        <span className="bg-gradient-to-r from-transparent via-black to-transparent w-full mx-auto h-1 blur-sm" />
      </div>
    </section>
  );
}
