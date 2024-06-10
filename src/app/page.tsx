/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return <section className="h-full w-full relative">
    <video autoPlay playsInline loop muted className="absolute object-cover top-0 left-0 right-0 w-full min-w-full h-auto">
      <source src="https://leopardleads.com/assets/hero-vid-1000.mp4" type="video/mp4" />
    </video>
    <main className="absolute w-full z-10">
      <header className="p-2 flex items-center flex-wrap">
        <img
          src="/images/leopard_logo_yellow.png"
          alt="logo"
          className="w-24 h-auto sm:w-40 md:w-48 lg:w-48 -translate-y-2"
        />

        <ul className="flex gap-6 ml-auto flex-1 md:flex-initial mx-4 items-center">
          <li className="text-white font-normal text-xs md:text-lg hover:text-yellow-400">Home</li>
          <li className="text-white font-normal text-xs md:text-lg hover:text-yellow-400">Services</li>
          <li className="text-white font-normal text-xs md:text-lg hover:text-yellow-400">Case Studies</li>
          <li className="text-white font-normal text-xs md:text-lg hover:text-yellow-400">Career</li>
          <li className="text-white font-normal text-xs md:text-lg hover:text-yellow-400">Blog</li>
        </ul>
      </header>
    </main>
  </section>
}


