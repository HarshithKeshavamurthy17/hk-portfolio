import Marquee from 'react-fast-marquee';

const LOGOS = [
  { name: 'tietoevry_logo.png', alt: 'Tietoevry' },
  { name: 'uber.png', alt: 'Uber' },
  { name: 'nineleaps.png', alt: 'Nineleaps' },
  { name: 'nastech.png', alt: 'NASTECH' },
  { name: 'build_fellowship.png', alt: 'Build Fellowship' },
  { name: 'bu.png', alt: 'Boston University' },
] as const;

export default function TrustedBy() {
  return (
    <section className="mx-auto w-full max-w-[1080px] px-6">
      <div className="flex flex-col items-center gap-6 rounded-3xl border border-white/5 bg-gradient-to-br from-white/[0.06] to-white/[0.02] p-8 backdrop-blur-xl lg:flex-row lg:gap-8">
        <span className="text-sm font-semibold uppercase tracking-[0.35em] text-neutral-400">
          Built solutions for
        </span>
        <div className="flex-1 overflow-hidden">
          <Marquee gradient={false} speed={30} pauseOnHover>
            <div className="flex items-center gap-12 px-6">
              {LOGOS.map((logo) => (
                <img
                  key={logo.name}
                  src={`/logos/${logo.name}`}
                  alt={`${logo.alt} logo`}
                  className="h-12 w-auto opacity-60 grayscale transition duration-300 ease-out hover:opacity-100 hover:grayscale-0"
                  loading="lazy"
                  decoding="async"
                />
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

