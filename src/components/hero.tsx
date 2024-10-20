export default function Hero() {
  return (
    <main className="w-screen h-screen relative">
      <h1 className="font-semibold text-7xl text-center p-10 lg:px-24 pt-24 z-10 lg:text-left lg:w-[100px] lg:absolute lg:top-1/2 lg:left-0 lg:-translate-y-1/2 lg:text-[100px] leading-[.90]">
        ALL YOUR{" "}
        <span className="bg-black bg-clip-text text-primary/90">CRYPTO</span> IN{" "}
        <span className="bg-black bg-clip-text text-primary/90">ONE PLACE</span>
      </h1>
      <img
        src="/portfolio3.png"
        alt="Mobile app showcase"
        className="absolute left-1/2 -translate-x-1/2 lg:right-0 bottom-0 w-[510px] lg:w-[800px] lg:translate-x-0"
      />
    </main>
  );
}
