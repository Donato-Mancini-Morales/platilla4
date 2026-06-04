import { useState, useMemo } from 'react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';
import SearchBar from './SearchBar';
import Categories from './Categories';

export default function ProductGrid() {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const categoryCounts = useMemo(() => {
    const counts = {};
    products.forEach(p => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const filtered = useMemo(() => {
    return products.filter(p => {
      const matchesCategory = activeCategory === 'all' || p.category === activeCategory;
      const q = search.toLowerCase();
      const matchesSearch = !q || (
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q) ||
        p.specs?.some(s => s.toLowerCase().includes(q))
      );
      return matchesCategory && matchesSearch;
    });
  }, [search, activeCategory]);

  const activeLabel = categories.find(c => c.id === activeCategory)?.label || '';

  return (
    <section id="productos" className="py-24 relative">
      {/* Section background */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/20 to-transparent" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 bg-electric-500/10 border border-electric-500/20 rounded-full px-4 py-2 mb-4">
            <span className="font-mono text-electric-400 text-xs uppercase tracking-wider">Catálogo completo</span>
          </div>
          <h2 className="section-title">
            Nuestros <span className="gradient-text">Productos</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            Explorá nuestra selección de tecnología premium. Precios competitivos y atención personalizada.
          </p>
        </div>

        {/* Search & Filter */}
        <div className="space-y-6 mb-10">
          <SearchBar
            value={search}
            onChange={setSearch}
            resultCount={filtered.length}
          />
          <div className="pt-4">
            <Categories
              active={activeCategory}
              onChange={setActiveCategory}
              counts={categoryCounts}
            />
          </div>
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <>
            {/* Results label */}
            <div className="flex items-center justify-between mb-6">
              <p className="text-slate-500 text-sm font-mono">
                {filtered.length} {filtered.length === 1 ? 'producto' : 'productos'}
                {activeCategory !== 'all' && ` en ${activeLabel}`}
                {search && ` para "${search}"`}
              </p>
              {(search || activeCategory !== 'all') && (
                <button
                  onClick={() => { setSearch(''); setActiveCategory('all'); }}
                  className="text-electric-400 hover:text-electric-300 text-sm font-medium flex items-center gap-1.5 transition-colors"
                >
                  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  Limpiar filtros
                </button>
              )}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {filtered.map((product, i) => (
                <div
                  key={product.id}
                  className="animate-slide-up"
                  style={{ animationDelay: `${i * 50}ms`, opacity: 0, animationFillMode: 'forwards' }}
                >
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
        ) : (
          /* Empty state */
          <div className="text-center py-20 space-y-4">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="font-display font-bold text-white text-xl">Sin resultados</h3>
            <p className="text-slate-400">
              No encontramos productos para{' '}
              <span className="text-electric-400">"{search}"</span>.
            </p>
            <button
              onClick={() => { setSearch(''); setActiveCategory('all'); }}
              className="btn-outline mt-4"
            >
              Ver todos los productos
            </button>
          </div>
        )}
      </div>
    </section>
  );
}
