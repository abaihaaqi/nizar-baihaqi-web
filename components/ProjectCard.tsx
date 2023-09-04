import Image, { StaticImageData } from "next/image";
import Link from "next/link";

export type ProjectCardProp = {
  title: string;
  desc: string;
  link: string;
  img: StaticImageData;
};

export default function ProjectCard({
  title,
  desc,
  link,
  img,
}: ProjectCardProp) {
  return (
    <a
      href={link}
      target="_blank"
      className="relative h-96 border-y md:border border-white max-w-screen-md md:w-[720px] lg:w-full md:mx-auto md:rounded-lg"
    >
      <div className="absolute inset-0 -z-10">
        <Image src={img} alt="Project Image" fill className="object-cover" />
      </div>
      <div className="absolute inset-0 bg-black/80 lg:hover:bg-black/60 lg::opacity-0 hover:opacity-100 transition-all flex flex-col justify-center items-center hover:underline">
        <h2 className="text-2xl mb-3 font-medium">{title}</h2>
        <p>{desc}</p>
      </div>
    </a>
  );
}
