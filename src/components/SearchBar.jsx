export default function SearchBar({ value, onChange, resultCount }) {
  return (
    <div className="relative max-w-xl mx-auto">
      <div className="relative group">
        {/* Glow effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-electric-500/20 to-cyan-500/20 rounded-2xl blur opacity-0 group-focus-within:opacity-100 transition-opacity duration-300" />

        <div className="relative flex items-center bg-dark-700/60 backdrop-blur border border-white/10 group-focus-within:border-electric-500/40 rounded-2xl transition-all duration-300">
          {/* Search icon */}
          <div className="pl-4 pr-3">
            <svg className="w-5 h-5 text-slate-500 group-focus-within:text-electric-400 transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>

          <input
            type="text"
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder="Buscar laptops, celulares, componentes..."
            className="flex-1 bg-transparent py-4 pr-4 text-white placeholder-slate-500 text-sm font-body outline-none"
          />

          {/* Clear button */}
          {value && (
            <button
              onClick={() => onChange('')}
              className="pr-4 text-slate-500 hover:text-white transition-colors"
              aria-label="Limpiar búsqueda"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}

          {/* Keyboard shortcut hint */}
          {!value && (
            <div className="hidden sm:flex items-center gap-1 pr-4">
              <kbd className="px-1.5 py-0.5 bg-white/5 border border-white/10 rounded text-slate-600 text-[10px] font-mono">⌘K</kbd>
            </div>
          )}
        </div>
      </div>

      {/* Result count */}
      {value && (
        <div className="absolute -bottom-7 left-0 text-slate-500 text-xs font-mono">
          {resultCount === 0 ? 'Sin resultados' : `${resultCount} producto${resultCount !== 1 ? 's' : ''} encontrado${resultCount !== 1 ? 's' : ''}`}
        </div>
      )}
    </div>
  );
}
