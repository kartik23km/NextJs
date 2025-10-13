import Image from "next/image";

interface HeroProps {
  imgURl: string;
  imgAlt: string;
  text: string;
}

const Hero = (props: HeroProps) => {
  return (
    <div className="relative h-screen">
      <div className="absolute -z-10 inset-0">
        <Image
          src={props.imgURl}
          alt={props.imgAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900" />
      </div>
      <div className="pt-48 flex justify-center items-center">
        <h1 className="text-white text-6xl">{props.text}</h1>
      </div>
    </div>
  );
};

export default Hero;
