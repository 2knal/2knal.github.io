import Clock from "./Clock";

export default function Day() {
  return (
    <div className="bg-[#6ebbff] relative h-full w-full bg-cover flex flex-col items-center justify-center group">
      <div className="absolute top-4 left-4 sm:top-10 sm:left-10 sm:text-2xl group-hover:scale-100">
        <div className="flex justify-items-center items-center gap-1">
          <div className="bg-cream-100 rounded-full w-2 h-2"></div>
          <Clock />
        </div>
      </div>
      <div className="w-36 h-36 rounded-full bg-[#FEEA9A] absolute left-1/3 top-1/3 duration-500 group-hover:scale-110 sm:w-44 sm:h-44 md:w-60 md:h-60">
      </div>
      <div className="w-40 h-40 rounded-full bg-[#FEEA9A]/40 absolute left-1/4 top-1/4 duration-500 group-hover:scale-110 sm:w-44 sm:h-44 md:w-72 md:h-72">
      </div>
    </div>
  );
}