import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Featured from './components/Featured';
import ProductGrid from './components/ProductGrid';
import Benefits from './components/Benefits';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import ProductDetail from './components/ProductDetail';
import { buildWhatsAppUrl } from './data/products';

// Scroll to top on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/5491123456789?text=Hola,%20quiero%20consultar%20sobre%20sus%20productos."
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-green-500 hover:bg-green-400 rounded-full flex items-center justify-center shadow-[0_4px_24px_rgba(34,197,94,0.5)] hover:shadow-[0_4px_32px_rgba(34,197,94,0.7)] transition-all duration-300 hover:scale-110 active:scale-95 group"
    >
      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
      </svg>
      <span className="absolute right-full mr-3 bg-dark-700 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none border border-white/10">
        ¿Necesitás ayuda?
      </span>
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-20" />
    </a>
  );
}

// Home page
function HomePage() {
  return (
    <main>
      <Hero />
      <Featured />
      <ProductGrid />
      <Benefits />
      <Testimonials />
    </main>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-dark-900 text-white">
        <Navbar />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/producto/:slug" element={<ProductDetail />} />
          {/* 404 */}
          <Route path="*" element={
            <div className="min-h-screen flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="text-8xl font-display font-black text-electric-500/20">404</div>
                <h2 className="font-display font-bold text-white text-2xl">Página no encontrada</h2>
                <a href="/" className="btn-primary inline-block">Volver al inicio</a>
              </div>
            </div>
          } />
        </Routes>
        <Footer />
        <WhatsAppFloat />
      </div>
    </BrowserRouter>
  );
}
