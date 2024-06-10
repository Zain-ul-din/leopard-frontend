/* eslint-disable @next/next/no-img-element */
export default function Page() {
  return <section className="h-full w-full relative">
    <video autoPlay playsInline loop muted className="absolute object-cover top-0 left-0 right-0 w-full min-w-full h-auto">
      <source src="https://leopardleads.com/assets/hero-vid-1000.mp4" type="video/mp4" />
    </video>
    <main className="absolute w-full">
      <header className="p-2">
        <img
          src="/images/leopard_logo_yellow.png"
          alt="logo"
          className="w-24 h-auto sm:w-40 md:w-48 lg:w-48"
        />
      </header>
    </main>
  </section>
}


