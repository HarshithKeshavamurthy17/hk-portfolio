import Marquee from 'react-fast-marquee';

const LOGOS = ['tietoevry', 'nineleaps', 'nastech', 'quantumventura', 'bu'] as const;

export default function TrustedBy() {
  return (
    <section className="mx-auto w-full max-w-[1080px] px-6">
      <div className="flex flex-col items-center gap-4 rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur lg:flex-row lg:gap-6">
        <span className="text-xs font-semibold uppercase tracking-[0.4em] text-neutral-500">
          Trusted by
        </span>
        <div className="flex-1 overflow-hidden">
          <Marquee gradient={false} speed={40} pauseOnHover>
            <div className="flex items-center gap-10">
              {LOGOS.map((logo) => (
                <img
                  key={logo}
                  src={`/logos/${logo}.svg`}
                  alt={`${logo} logo`}
                  className="size-10 opacity-55 transition duration-200 ease-out hover:opacity-95"
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

