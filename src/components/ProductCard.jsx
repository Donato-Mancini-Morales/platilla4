import { Link } from 'react-router-dom';
import { formatPrice, buildWhatsAppUrl } from '../data/products';

const badgeStyles = {
  electric: 'bg-electric-500/15 text-electric-400 border-electric-500/20',
  purple: 'bg-violet-500/15 text-violet-400 border-violet-500/20',
  gold: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  green: 'bg-green-500/15 text-green-400 border-green-500/20',
};

const categoryLabels = {
  laptops: 'Laptop',
  celulares: 'Celular',
  componentes: 'Componente',
  accesorios: 'Accesorio',
};

export default function ProductCard({ product }) {
  const { slug, name, shortDescription, description, price, oldPrice, category, badge, badgeColor, image, specs, featured, stock } = product;
  const whatsappUrl = buildWhatsAppUrl(name);
  const displayDescription = shortDescription || description;

  return (
    <article className="group relative flex flex-col bg-dark-700/50 border border-white/5 hover:border-electric-500/20 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-[0_8px_40px_rgba(14,165,233,0.15)] hover:-translate-y-1">
      {featured && (
        <div className="absolute inset-0 bg-gradient-to-br from-electric-500/3 to-transparent pointer-events-none rounded-2xl" />
      )}

      {/* Image — clickeable */}
      <Link to={`/producto/${slug}`} className="relative overflow-hidden aspect-[4/3] bg-dark-800 block">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-800/80 via-transparent to-transparent" />

        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          {badge && (
            <span className={`chip border ${badgeStyles[badgeColor] || badgeStyles.electric}`}>
              {badge}
            </span>
          )}
          {featured && (
            <span className="chip bg-amber-500/15 text-amber-400 border border-amber-500/20">
              ⭐ Destacado
            </span>
          )}
        </div>

        <div className="absolute top-3 right-3">
          <span className="chip bg-dark-900/80 text-slate-400 border border-white/10 backdrop-blur-sm text-[10px]">
            {categoryLabels[category] || category}
          </span>
        </div>

        {/* Ver detalle overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <span className="bg-dark-900/80 backdrop-blur border border-electric-500/30 text-electric-400 text-xs font-semibold px-3 py-1.5 rounded-xl">
            Ver detalle →
          </span>
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-5 gap-4">
        <div className="space-y-2 flex-1">
          <Link to={`/producto/${slug}`}>
            <h3 className="font-display font-bold text-white text-lg leading-tight hover:text-electric-400 transition-colors duration-300 line-clamp-2">
              {name}
            </h3>
          </Link>
          <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 font-body font-light">
            {displayDescription}
          </p>
        </div>

        {specs && specs.length > 0 && (
          <div className="flex flex-wrap gap-1.5">
            {specs.map((spec, i) => (
              <span key={i} className="text-[10px] font-mono px-2 py-1 bg-dark-600/80 text-slate-500 rounded-lg border border-white/5">
                {spec}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-3 border-t border-white/5">
          <div>
            <div className="text-slate-500 text-[10px] font-mono uppercase tracking-wider">Precio</div>
            <div className="font-display font-bold text-xl text-white">
              {formatPrice(price)}
            </div>
            {oldPrice && (
              <div className="text-slate-600 text-xs line-through font-mono">{formatPrice(oldPrice)}</div>
            )}
          </div>

          <div className="flex flex-col gap-2 items-end">
            <Link
              to={`/producto/${slug}`}
              className="text-electric-400 hover:text-electric-300 text-xs font-medium transition-colors underline underline-offset-2"
            >
              Ver más
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-green-500 hover:bg-green-400 active:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,197,94,0.35)]"
              title={`Consultar por WhatsApp: ${name}`}
            >
              <svg className="w-4 h-4 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              <span className="hidden sm:inline">Consultar</span>
            </a>
          </div>
        </div>
      </div>
    </article>
  );
}
