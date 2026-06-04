import { categories } from '../data/products';

export default function Categories({ active, onChange, counts }) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {categories.map(cat => {
        const count = cat.id === 'all'
          ? Object.values(counts).reduce((a, b) => a + b, 0)
          : (counts[cat.id] || 0);
        const isActive = active === cat.id;

        return (
          <button
            key={cat.id}
            onClick={() => onChange(cat.id)}
            className={`
              relative flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold font-body transition-all duration-300
              ${isActive
                ? 'bg-electric-500 text-white shadow-neon-sm scale-105'
                : 'bg-dark-700/60 text-slate-400 hover:text-white hover:bg-dark-600/80 border border-white/5 hover:border-white/10'
              }
            `}
          >
            <span className="text-base leading-none">{cat.icon}</span>
            <span>{cat.label}</span>
            <span className={`
              text-xs px-1.5 py-0.5 rounded-full font-mono
              ${isActive ? 'bg-white/20 text-white' : 'bg-white/5 text-slate-500'}
            `}>
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
