import { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { products, formatPrice, buildWhatsAppUrl } from '../data/products';
import ProductCard from './ProductCard';

const badgeStyles = {
  electric: 'bg-electric-500/15 text-electric-400 border-electric-500/20',
  purple: 'bg-violet-500/15 text-violet-400 border-violet-500/20',
  gold: 'bg-amber-500/15 text-amber-400 border-amber-500/20',
  green: 'bg-green-500/15 text-green-400 border-green-500/20',
};

const stockColors = {
  'Disponible': 'text-green-400 bg-green-500/10 border-green-500/20',
  'Últimas unidades': 'text-amber-400 bg-amber-500/10 border-amber-500/20',
  'Sin stock': 'text-red-400 bg-red-500/10 border-red-500/20',
};

export default function ProductDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(0);
  const [activeTab, setActiveTab] = useState('descripcion');

  const product = products.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImage(0);
    setActiveTab('descripcion');
  }, [slug]);

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <div className="text-6xl">😕</div>
          <h2 className="font-display font-bold text-white text-2xl">Producto no encontrado</h2>
          <Link to="/" className="btn-primary inline-block">Volver al inicio</Link>
        </div>
      </div>
    );
  }

  const related = products.filter(p => product.relatedIds?.includes(p.id)).slice(0, 3);
  const whatsappUrl = buildWhatsAppUrl(product.name);
  const discount = product.oldPrice
    ? Math.round((1 - product.price / product.oldPrice) * 100)
    : null;

  return (
    <div className="min-h-screen pt-20">
      {/* Breadcrumb */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <nav className="flex items-center gap-2 text-sm font-mono text-slate-500">
          <Link to="/" className="hover:text-electric-400 transition-colors">Inicio</Link>
          <span>/</span>
          <Link to="/#productos" className="hover:text-electric-400 transition-colors capitalize">
            {product.category}
          </Link>
          <span>/</span>
          <span className="text-slate-300 truncate max-w-[200px]">{product.name}</span>
        </nav>
      </div>

      {/* Main content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-2 gap-10 xl:gap-16">

          {/* ─── LEFT: Image gallery ─── */}
          <div className="space-y-4">
            {/* Main image */}
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-dark-800 border border-white/5 group">
              <img
                key={activeImage}
                src={product.images?.[activeImage] || product.image}
                alt={`${product.name} — imagen ${activeImage + 1}`}
                className="w-full h-full object-cover animate-fade-in"
              />
              {/* Badges */}
              <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                {product.badge && (
                  <span className={`chip border text-sm px-3 py-1 ${badgeStyles[product.badgeColor] || badgeStyles.electric}`}>
                    {product.badge}
                  </span>
                )}
                {discount && (
                  <span className="chip bg-red-500/15 text-red-400 border border-red-500/20 text-sm px-3 py-1">
                    -{discount}%
                  </span>
                )}
              </div>
              {/* Image counter */}
              {product.images?.length > 1 && (
                <div className="absolute bottom-4 right-4 bg-dark-900/70 backdrop-blur text-slate-400 text-xs font-mono px-2.5 py-1.5 rounded-lg border border-white/10">
                  {activeImage + 1} / {product.images.length}
                </div>
              )}
              {/* Arrow navigation */}
              {product.images?.length > 1 && (
                <>
                  <button
                    onClick={() => setActiveImage(i => (i - 1 + product.images.length) % product.images.length)}
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-dark-900/70 hover:bg-dark-800 border border-white/10 rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button
                    onClick={() => setActiveImage(i => (i + 1) % product.images.length)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-dark-900/70 hover:bg-dark-800 border border-white/10 rounded-xl flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-200"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </>
              )}
            </div>

            {/* Thumbnails */}
            {product.images?.length > 1 && (
              <div className="grid grid-cols-4 gap-3">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveImage(i)}
                    className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-200 ${
                      activeImage === i
                        ? 'border-electric-500 shadow-neon-sm'
                        : 'border-white/5 hover:border-white/20'
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${product.name} thumbnail ${i + 1}`}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                    {activeImage === i && (
                      <div className="absolute inset-0 bg-electric-500/10" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* ─── RIGHT: Info ─── */}
          <div className="space-y-7">
            {/* Category + Stock */}
            <div className="flex items-center gap-3 flex-wrap">
              <span className="chip bg-dark-700 text-slate-400 border border-white/10 capitalize">
                {product.category}
              </span>
              {product.stock && (
                <span className={`chip border text-xs ${stockColors[product.stock] || stockColors['Disponible']}`}>
                  {product.stock === 'Disponible' ? '● ' : '◐ '}{product.stock}
                </span>
              )}
              {product.sku && (
                <span className="text-slate-600 text-[11px] font-mono ml-auto">SKU: {product.sku}</span>
              )}
            </div>

            {/* Name */}
            <div>
              <h1 className="font-display font-black text-3xl md:text-4xl text-white leading-tight tracking-tight">
                {product.name}
              </h1>
              {product.shortDescription && (
                <p className="mt-3 text-slate-400 text-lg font-body font-light leading-relaxed">
                  {product.shortDescription}
                </p>
              )}
            </div>

            {/* Specs chips */}
            {product.specs?.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {product.specs.map((s, i) => (
                  <span key={i} className="chip bg-electric-500/10 text-electric-400 border border-electric-500/20 text-sm px-3 py-1.5">
                    {s}
                  </span>
                ))}
              </div>
            )}

            {/* Price */}
            <div className="bg-dark-700/50 rounded-2xl p-5 border border-white/5 space-y-2">
              <div className="flex items-end gap-3">
                <span className="font-display font-black text-4xl text-white">{formatPrice(product.price)}</span>
                {product.oldPrice && (
                  <span className="text-slate-500 text-xl font-mono line-through mb-1">{formatPrice(product.oldPrice)}</span>
                )}
              </div>
              {product.oldPrice && (
                <p className="text-green-400 text-sm font-medium">
                  ✓ Ahorrás {formatPrice(product.oldPrice - product.price)} ({discount}% OFF)
                </p>
              )}
              <p className="text-slate-500 text-xs font-mono">Precio final en efectivo / transferencia</p>
            </div>

            {/* CTA buttons */}
            <div className="space-y-3">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-3 bg-green-500 hover:bg-green-400 text-white text-base font-bold py-4 px-6 rounded-2xl transition-all duration-300 hover:shadow-[0_0_30px_rgba(34,197,94,0.4)]"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                Consultar por WhatsApp
              </a>
              <button
                onClick={() => navigate(-1)}
                className="w-full flex items-center justify-center gap-2 btn-outline py-3"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
                Volver al catálogo
              </button>
            </div>

            {/* Warranty + meta */}
            {product.warranty && (
              <div className="flex items-center gap-2 text-slate-500 text-sm">
                <span className="text-green-400">🛡️</span>
                <span>{product.warranty}</span>
                <span className="text-slate-700">·</span>
                <span className="text-electric-400">⚡ Envío en 24-48h</span>
              </div>
            )}
          </div>
        </div>

        {/* ─── TABS section ─── */}
        <div className="mt-14">
          {/* Tab bar */}
          <div className="flex gap-1 border-b border-white/5 mb-8">
            {[
              { id: 'descripcion', label: 'Descripción' },
              { id: 'especificaciones', label: 'Ficha técnica' },
              { id: 'highlights', label: 'Lo mejor' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-5 py-3 text-sm font-semibold font-body transition-all duration-200 border-b-2 -mb-px ${
                  activeTab === tab.id
                    ? 'border-electric-500 text-electric-400'
                    : 'border-transparent text-slate-500 hover:text-slate-300'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab content */}
          <div className="animate-fade-in">
            {activeTab === 'descripcion' && (
              <div className="max-w-3xl">
                <div className="prose prose-invert prose-slate max-w-none">
                  {product.description?.split('\n\n').map((para, i) => (
                    <p key={i} className="text-slate-300 leading-relaxed font-body font-light mb-5 last:mb-0">
                      {para}
                    </p>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'especificaciones' && product.specSheet && (
              <div className="max-w-2xl">
                <div className="bg-dark-700/40 border border-white/5 rounded-2xl overflow-hidden">
                  {product.specSheet.map((row, i) => (
                    <div
                      key={i}
                      className={`flex gap-6 px-6 py-4 ${i % 2 === 0 ? 'bg-transparent' : 'bg-dark-800/30'} ${i !== 0 ? 'border-t border-white/5' : ''}`}
                    >
                      <span className="text-slate-500 text-sm font-mono w-40 flex-shrink-0">{row.label}</span>
                      <span className="text-slate-200 text-sm font-body">{row.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'highlights' && product.highlights && (
              <div className="max-w-2xl space-y-3">
                {product.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 bg-dark-700/30 border border-white/5 rounded-xl px-5 py-4">
                    <span className="text-electric-400 mt-0.5 flex-shrink-0">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span className="text-slate-200 text-sm font-body leading-relaxed">{h}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* ─── Related products ─── */}
        {related.length > 0 && (
          <div className="mt-20">
            <div className="flex items-end justify-between mb-8">
              <div>
                <h2 className="font-display font-bold text-2xl text-white">
                  También te puede interesar
                </h2>
                <p className="text-slate-500 text-sm mt-1 font-body">Productos relacionados seleccionados para vos</p>
              </div>
              <Link to="/#productos" className="text-electric-400 hover:text-electric-300 text-sm font-medium transition-colors">
                Ver todo →
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {related.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
