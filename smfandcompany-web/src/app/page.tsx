

export default function Home() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden w-full">
        {/* Cinematic Video Background Placeholder */}
        <div className="absolute inset-0 z-0 bg-zinc-900 before:absolute before:inset-0 before:bg-black/60 before:z-10">
           {/* Simulate a video playing with an image map or just a block */}
           <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1536440136628-849c177e76a1?q=80&w=2825&auto=format&fit=crop')] bg-cover bg-center" />
        </div>
        
        <div className="relative z-20 text-center flex flex-col items-center px-4 w-full">
          <p className="text-accent uppercase tracking-[0.3em] text-sm md:text-base mb-4 font-semibold">smfandcompany</p>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-display uppercase tracking-wider text-foreground mb-6 leading-none">
            We tell stories
            <br />
            <span className="text-accent">through art</span>
          </h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mb-12 font-light">
            A team of creatives working for you. Elevating your brand with premium production.
          </p>
          <button className="bg-accent text-[#0A0A0A] font-bold px-10 py-5 rounded-sm uppercase tracking-[0.2em] hover:bg-[#b5952f] transition-all duration-300 hover:scale-105">
            Start a Project
          </button>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-32 px-6 md:px-12 bg-background flex flex-col items-center text-center">
        <p className="text-2xl md:text-4xl lg:text-5xl font-display tracking-wide max-w-4xl leading-tight text-foreground/90 mb-12">
          "From concept to final cut, we deliver cinematic visuals that elevate your brand and capture your audience."
        </p>
        <button className="text-accent uppercase tracking-[0.2em] border-b border-accent pb-1 hover:text-foreground hover:border-foreground transition-colors">
          Meet the Team
        </button>
      </section>

      {/* Services Overview */}
      <section className="py-24 px-6 md:px-12 bg-surface">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-6xl font-display uppercase tracking-wide text-foreground mb-16 text-center">
            Our Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service 1 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-zinc-800 rounded-md overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1589849221156-f44605178d65?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-display uppercase tracking-wide text-foreground mb-2 group-hover:text-accent transition-colors">Production & Cinematography</h3>
              <p className="text-foreground/70 font-light hidden md:block">Full-scale video production for commercials, music videos, and documentaries.</p>
            </div>
            {/* Service 2 */}
            <div className="group cursor-pointer mt-0 md:mt-12">
              <div className="aspect-[4/5] bg-zinc-800 rounded-md overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=2670&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-display uppercase tracking-wide text-foreground mb-2 group-hover:text-accent transition-colors">Portrait Photography</h3>
              <p className="text-foreground/70 font-light hidden md:block">Studio and on-location photography capturing the essence of your brand or persona.</p>
            </div>
            {/* Service 3 */}
            <div className="group cursor-pointer">
              <div className="aspect-[4/5] bg-zinc-800 rounded-md overflow-hidden mb-6 relative">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1626245363065-5c14b2fd5e1d?q=80&w=2787&auto=format&fit=crop')] bg-cover bg-center transition-transform duration-700 group-hover:scale-110" />
                 <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors duration-500" />
              </div>
              <h3 className="text-2xl font-display uppercase tracking-wide text-foreground mb-2 group-hover:text-accent transition-colors">Editing & Post</h3>
              <p className="text-foreground/70 font-light hidden md:block">Premium color grading, sound design, and narrative editing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Work / CTA block */}
      <section className="py-32 px-6 md:px-12 bg-background relative overflow-hidden">
        <div className="absolute inset-0 bg-accent/5" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-8xl font-display uppercase tracking-wider text-foreground mb-8">
            Ready to execute your vision?
          </h2>
          <button className="bg-transparent border border-accent text-accent hover:bg-accent hover:text-[#0A0A0A] font-bold px-12 py-5 rounded-sm uppercase tracking-[0.2em] transition-all duration-300">
            Contact Studio
          </button>
        </div>
      </section>
    </div>
  );
}
