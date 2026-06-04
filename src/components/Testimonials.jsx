import { testimonials } from '../data/products';

function StarRating({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < count ? 'text-amber-400' : 'text-slate-700'}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section id="opiniones" className="py-24 relative bg-dark-800/30">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      {/* Glow */}
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2">
            <span className="font-mono text-amber-400 text-xs uppercase tracking-wider">⭐ Opiniones reales</span>
          </div>
          <h2 className="section-title">
            Lo que dicen <span className="gradient-text">nuestros clientes</span>
          </h2>
          <p className="section-subtitle max-w-lg mx-auto">
            Más de 10.000 clientes confían en TechZone. Estas son sus experiencias.
          </p>

          {/* Overall rating */}
          <div className="inline-flex items-center gap-3 bg-dark-700/60 border border-white/5 rounded-2xl px-6 py-3">
            <div className="text-3xl font-display font-black text-white">4.9</div>
            <div className="space-y-1">
              <StarRating count={5} />
              <div className="text-slate-500 text-xs font-mono">+800 reseñas verificadas</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
          {testimonials.map((t, i) => (
            <div
              key={t.id}
              className="group relative flex flex-col bg-dark-700/40 border border-white/5 hover:border-white/10 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 hover:shadow-card"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {/* Quote icon */}
              <div className="absolute top-5 right-5 text-electric-500/10 text-5xl font-display font-black leading-none select-none">"</div>

              {/* Stars */}
              <StarRating count={t.rating} />

              {/* Text */}
              <blockquote className="flex-1 mt-4 text-slate-300 text-sm leading-relaxed font-body font-light line-clamp-5">
                "{t.text}"
              </blockquote>

              {/* Product tag */}
              <div className="mt-4 mb-5">
                <span className="text-[10px] font-mono text-electric-400/80 bg-electric-500/10 px-2 py-1 rounded-lg border border-electric-500/10">
                  {t.product}
                </span>
              </div>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                <div className={`w-9 h-9 rounded-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white text-xs font-bold font-display flex-shrink-0`}>
                  {t.avatar}
                </div>
                <div>
                  <div className="text-white text-sm font-semibold font-display">{t.name}</div>
                  <div className="text-slate-500 text-xs font-body">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
