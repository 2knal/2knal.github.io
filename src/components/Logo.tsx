import ArrowCircleUp from "./icons/ArrowCircleUp";

interface ILogoProps {
  link: string,
  child: React.ReactNode
}

export default function Logo({ link, child }: ILogoProps) {
  return (
    <a href={link} target="_blank" rel="noreferrer">
      <small className="sr-only">Logo</small>
      <div className="h-full flex items-center justify-center group">
        <div className="w-16 md:w-24 lg:w-32 duration-200 group-hover:scale-105">
          {child}
        </div>
      </div>
      <ArrowCircleUp />
    </a>
  );
}
