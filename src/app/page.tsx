/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return (
    <>
      <main className="relative h-screen w-full">
        <video
          autoPlay
          playsInline
          loop
          muted
          className="absolute object-cover top-0 left-0 w-full h-full"
        >
          <source
            src="https://leopardleads.com/assets/hero-vid-1000.mp4"
            type="video/mp4"
          />
        </video>
        <section className="absolute w-full z-10">
          <header className="p-2 flex items-center flex-wrap">
            <img
              src="/images/leopard_logo_black.png"
              alt="logo"
              className="w-24 h-auto sm:w-40 md:w-48 lg:w-48 -translate-y-2 p-2 pt-4"
            />
            <ul className="flex gap-6 ml-auto flex-1 md:flex-initial mx-4 items-center">
              <li className="text-white font-normal text-xs md:text-lg hover:text-yellow-400">
                Home
              </li>
              <li className="text-white font-normal text-xs md:text-lg hover:text-yellow-400">
                Services
              </li>
              <li className="text-white font-normal text-xs md:text-lg hover:text-yellow-400">
                Case Studies
              </li>
              <li className="text-white font-normal text-xs md:text-lg hover:text-yellow-400">
                Career
              </li>
              <li className="text-white font-normal text-xs md:text-lg hover:text-yellow-400">
                Blog
              </li>
            </ul>
          </header>
        </section>
      </main>
      <section className="relative bg-black py-24 z-10 border-t border-white">
        <h1
          className="text-7xl stroke-1 text-transparent stroke-white bg-clip-text bg-transparent px-4 py-2"
          style={{
            WebkitTextStroke: "1px white",
          }}
        >
          Services Section
        </h1>
      </section>
      <section className="relative bg-black py-24 z-10 border-t border-white">
        <h1
          style={{
            WebkitTextStroke: "1px white",
          }}
          className="text-7xl text-transparent stroke-white bg-clip-text bg-transparent px-4 py-2"
        >
          Our Work
        </h1>
      </section>
      <section className="relative bg-black py-24 z-10 border-t border-white">
        <h1
          style={{
            WebkitTextStroke: "1px white",
          }}
          className="text-7xl text-transparent stroke-white bg-clip-text bg-transparent px-4 py-2"
        >
          Testimonial
        </h1>
      </section>
      <section className="relative bg-black py-24 z-10 border-t border-white">
        <h1
          style={{
            WebkitTextStroke: "1px white",
          }}
          className="text-7xl text-transparent stroke-white bg-clip-text bg-transparent px-4 py-2"
        >
          Footer section
        </h1>
      </section>
    </>
  );
}
