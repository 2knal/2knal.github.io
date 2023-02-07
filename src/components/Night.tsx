import Clock from "./Clock";

export default function Night() {
  return (
    <div className="bg-night-sky relative h-full w-full bg-cover flex flex-col items-center justify-center group">
      <div className="absolute top-4 left-4 sm:top-10 sm:left-10 sm:text-2xl group-hover:scale-100">
        <div className="flex justify-items-center items-center gap-1">
          <div className="bg-cream-100 rounded-full w-2 h-2"></div>
          <Clock />
        </div>
      </div>
      <div className="w-36 h-36 rounded-full bg-[#DFDFDF] absolute left-1/3 top-1/3 duration-500 group-hover:scale-110 sm:w-44 sm:h-44 md:w-60 md:h-60">
        <div className="absolute w-2 h-2 top-4 left-8 rounded-full bg-[#C2C2C2] sm:top-6 sm:left-10 md:top-9 md:left-12" />
        <div className="absolute w-3 h-3 top-8 left-5 rounded-full bg-[#C2C2C2] sm:top-10 sm:left-6 md:top-14 md:left-8" />
        <div className="absolute w-4 h-4 top-8 left-10 rounded-full bg-[#C2C2C2] sm:top-10 sm:left-10 md:top-14 md:left-14" />
      </div>
    </div>
  );
}