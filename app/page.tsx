import Image from 'next/image';
import deliverImg from './../public/images/deliver.png';

export default function Page() {
  return (
    <div className="shadow-bottom">
      <Image
        src={deliverImg}
        alt="Deliver image"
        placeholder="blur"
        className="mx-auto mt-moins10 shadow-img drop-shadow-2xl"
      />
    </div>
  );
}
