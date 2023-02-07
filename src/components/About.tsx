export default function About() {
  return (
    <div className="p-6 h-full flex flex-col justify-center lg:py-0">
      <h1 className="font-clash-display font-semibold text-4xl">Hello! <span className="cursor-pointer text-3xl hover:animate-wave">👋</span></h1>
      <div className="text-xl">
        <p className="mt-6 lg:mt-10">I&apos;m <strong>Kunal Sonawane</strong>. I love building applications, right from wireframing designs to shipping them. I am thrilled by the process!</p>
        <p className="mt-4 lg:mt-6">I&apos;m also interested in distributed systems, anime and FPS games.</p>
      </div>
    </div>
  );
}
