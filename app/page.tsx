import Button from 'components/button';
import Image from 'next/image';
import Link from 'next/link';
import deliverImg from './../public/images/deliver.png';

export default function Page() {
  return (
    <section className="-translate-y-72 relative w-full flex flex-col">
      <div className="flex flex-col items-center mb-10">
        <Image
          src={deliverImg}
          alt="Deliver image"
          placeholder="blur"
          className="w-full h-full"
        />
        <span className="bg-gradient-to-r from-transparent via-black to-transparent w-full mx-auto h-1 blur-sm" />
      </div>
      <div className=" text-medium px-6 mx-auto">
        <h4 className="font-bold text-6xl">
          <b className="font-bold text-transparent bg-gradient-to-r bg-clip-text from-medium to-primary">
            Aventureux
          </b>{' '}
          ou avisé ?
        </h4>
        <h4 className="font-bold text-right text-4xl">
          Découvrez notre{' '}
          <b className="font-bold text-transparent bg-gradient-to-r bg-clip-text  from-primary to-medium">
            selection
          </b>{' '}
          de repas
        </h4>
      </div>
      <div className="bg-primary text-medium drop-shadow-2xl flex flex-col max-w-xs mx-auto p-4 rounded-md mt-10">
        <input type="text" className="w-full" />
        <div className="flex justify-between gap-8 my-4">
          <Button fullSize>Maintenant</Button>
          <Button fullSize callToAction>
            Chercher
          </Button>
        </div>

        <p className="font-semibold text-sm">
          <Link href="/account" className="underline">
            Connectez-vous
          </Link>{' '}
          pour vos adresses récentes.
        </p>
      </div>
    </section>
  );
}
