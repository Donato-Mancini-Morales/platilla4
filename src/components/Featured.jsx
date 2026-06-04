import { products, buildWhatsAppUrl, formatPrice } from '../data/products';
import ProductCard from './ProductCard';

export default function Featured() {
  const featured = products.filter(p => p.featured).slice(0, 4);

  return (
    <section className="py-24 relative bg-dark-800/50">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/10 to-transparent" />

      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-electric-500/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 bg-amber-500/10 border border-amber-500/20 rounded-full px-4 py-2">
              <span className="font-mono text-amber-400 text-xs uppercase tracking-wider">⭐ Selección especial</span>
            </div>
            <h2 className="section-title">
              Productos <span className="gradient-text">Destacados</span>
            </h2>
            <p className="section-subtitle max-w-md">
              Lo mejor de nuestro catálogo. Elegidos por calidad, precio y popularidad.
            </p>
          </div>
          <a href="#productos" className="btn-outline self-start md:self-auto whitespace-nowrap">
            Ver todo el catálogo →
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featured.map((product, i) => (
            <div
              key={product.id}
              className="animate-slide-up"
              style={{ animationDelay: `${i * 100}ms`, opacity: 0, animationFillMode: 'forwards' }}
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
