export const WHATSAPP_NUMBER = '5491123456789';

export const categories = [
  { id: 'all', label: 'Todos', icon: '⚡' },
  { id: 'laptops', label: 'Laptops', icon: '💻' },
  { id: 'celulares', label: 'Celulares', icon: '📱' },
  { id: 'componentes', label: 'Componentes', icon: '🔧' },
  { id: 'accesorios', label: 'Accesorios', icon: '🎧' },
];

export const products = [
  // LAPTOPS
  {
    id: 1,
    slug: 'macbook-pro-14-m3-pro',
    name: 'MacBook Pro 14" M3 Pro',
    shortDescription: 'Chip M3 Pro, 18GB RAM unificada, SSD 512GB, pantalla Liquid Retina XDR. Autonomía de 18 horas.',
    description: `La MacBook Pro de 14 pulgadas con chip M3 Pro redefine lo que es posible en una laptop profesional. Con una CPU de 11 núcleos y una GPU de 14 núcleos, este equipo maneja sin esfuerzo las tareas más exigentes: edición de video en 4K, desarrollo de software complejo, diseño 3D y mucho más.

La pantalla Liquid Retina XDR de 14.2 pulgadas ofrece un brillo peak de 1600 nits en HDR, con soporte para ProMotion adaptativo de 120Hz y True Tone. Cada detalle luce espectacular, desde la edición de fotos hasta el trabajo con hojas de cálculo.

Con hasta 18 horas de duración de batería, podés trabajar todo el día sin buscar un enchufe. El sistema de enfriamiento activo mantiene el rendimiento máximo incluso bajo carga sostenida. El teclado Magic con retroiluminación, el Touch ID y el Force Touch trackpad completan una experiencia de uso sin igual.`,
    price: 2499999,
    oldPrice: 2799999,
    category: 'laptops',
    badge: 'Nuevo',
    badgeColor: 'electric',
    featured: true,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=800&q=80',
      'https://images.unsplash.com/photo-1611186871525-35cd28cf1ae1?w=800&q=80',
      'https://images.unsplash.com/photo-1593642632559-0c6d3fc62b89?w=800&q=80',
      'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?w=800&q=80',
    ],
    specs: ['M3 Pro', '18GB RAM', '512GB SSD', 'Retina XDR'],
    specSheet: [
      { label: 'Procesador', value: 'Apple M3 Pro (11C CPU / 14C GPU)' },
      { label: 'Memoria RAM', value: '18 GB RAM unificada' },
      { label: 'Almacenamiento', value: 'SSD 512 GB NVMe' },
      { label: 'Pantalla', value: '14.2" Liquid Retina XDR, 3024×1964, 120Hz' },
      { label: 'Brillo', value: '1000 nits sostenido / 1600 nits peak HDR' },
      { label: 'Batería', value: 'Hasta 18 horas' },
      { label: 'Conectividad', value: '3× Thunderbolt 4, HDMI, SD, MagSafe 3' },
      { label: 'Peso', value: '1.61 kg' },
      { label: 'Sistema operativo', value: 'macOS Sonoma' },
      { label: 'Color', value: 'Space Black / Silver' },
    ],
    highlights: [
      'Chip M3 Pro con aceleración de ray tracing por hardware',
      'Pantalla Liquid Retina XDR ProMotion 120Hz',
      '18 horas de autonomía real',
      'Carga MagSafe 3 + Thunderbolt 4',
      'Cámara FaceTime 1080p con Center Stage',
    ],
    relatedIds: [2, 3, 4],
    stock: 'Disponible',
    warranty: '1 año oficial Apple',
    sku: 'MBP14-M3PRO-512',
  },
  {
    id: 2,
    slug: 'asus-rog-zephyrus-g14',
    name: 'ASUS ROG Zephyrus G14',
    shortDescription: 'AMD Ryzen 9 7940HS, RTX 4060, 16GB DDR5, pantalla QHD 165Hz. Gaming de alto rendimiento.',
    description: `El ASUS ROG Zephyrus G14 es la laptop gaming más aclamada por su combinación única de rendimiento extremo y portabilidad real. Con apenas 1.65 kg, llevás una máquina gaming de competencia a cualquier lugar.

El procesador AMD Ryzen 9 7940HS con arquitectura Zen 4 entrega un rendimiento de CPU excepcional para gaming y creación de contenido. La NVIDIA GeForce RTX 4060 con 8GB GDDR6 maneja con fluidez todos los títulos modernos en alta calidad, e incluso soporta DLSS 3 para elevar las tasas de fotogramas.

La pantalla QHD de 2560×1600 con tasa de refresco de 165Hz y tiempo de respuesta de 3ms ofrece imágenes nítidas y movimiento ultra fluido. El panel Nebula Display con 100% DCI-P3 garantiza colores vibrantes tanto para gaming como para edición de video.

El innovador panel AniMe Matrix de la tapa con 1449 mini LEDs te permite personalizar animaciones y mostrar información del sistema de manera completamente única.`,
    price: 1899999,
    oldPrice: null,
    category: 'laptops',
    badge: 'Gaming',
    badgeColor: 'purple',
    featured: true,
    image: 'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800&q=80',
      'https://images.unsplash.com/photo-1593640408182-31c228f4ef7f?w=800&q=80',
      'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&q=80',
      'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=800&q=80',
    ],
    specs: ['Ryzen 9', 'RTX 4060', '16GB DDR5', '165Hz QHD'],
    specSheet: [
      { label: 'Procesador', value: 'AMD Ryzen 9 7940HS (8C/16T, hasta 5.2GHz)' },
      { label: 'GPU', value: 'NVIDIA GeForce RTX 4060 8GB GDDR6' },
      { label: 'Memoria RAM', value: '16 GB DDR5-4800 (expandible a 32GB)' },
      { label: 'Almacenamiento', value: 'SSD 1 TB NVMe PCIe 4.0' },
      { label: 'Pantalla', value: '14" QHD+ 2560×1600, IPS, 165Hz, 3ms' },
      { label: 'Color de pantalla', value: '100% DCI-P3, 500 nits' },
      { label: 'Batería', value: '73Wh, hasta 10 horas navegación' },
      { label: 'Conectividad', value: 'USB4, 2× USB-A 3.2, HDMI 2.1, 3.5mm' },
      { label: 'Audio', value: 'Dolby Atmos, 4 parlantes' },
      { label: 'Peso', value: '1.65 kg' },
    ],
    highlights: [
      'Panel AniMe Matrix con 1449 mini LEDs personalizable',
      'RTX 4060 con soporte DLSS 3 y ray tracing',
      'ROG Intelligent Cooling con liquid metal',
      'Pantalla Nebula QHD+ 165Hz 100% DCI-P3',
      'Carga rápida: 50% en 30 minutos',
    ],
    relatedIds: [1, 3, 9],
    stock: 'Disponible',
    warranty: '2 años ASUS',
    sku: 'ROG-G14-2024-RTX4060',
  },
  {
    id: 3,
    slug: 'dell-xps-15-oled',
    name: 'Dell XPS 15 OLED',
    shortDescription: 'Intel Core i7-13700H, 32GB LPDDR5, 1TB NVMe. Pantalla OLED 3.5K táctil para creativos exigentes.',
    description: `La Dell XPS 15 con pantalla OLED es el sueño de cualquier profesional creativo. Su pantalla OLED táctil de 3.5K (3456×2160) ofrece negros perfectos, contraste infinito y una reproducción de color que alcanza el 100% del espacio DCI-P3, esencial para trabajo profesional en fotografía, diseño y video.

El procesador Intel Core i7-13700H con 14 núcleos (6P+8E) y hasta 5.0GHz de boost combina rendimiento y eficiencia energética. Con 32GB de RAM LPDDR5 y un SSD NVMe de 1TB, la multitarea fluye sin interrupciones.

El diseño en aluminio mecanizado con fibra de carbono es delgado y resistente a la vez. La bisagra InfinityEdge elimina los bordes gruesos para una experiencia visual inmersiva. La batería de 86Wh con carga rápida de 130W te mantiene productivo todo el día.`,
    price: 2199999,
    oldPrice: 2499999,
    category: 'laptops',
    badge: 'Premium',
    badgeColor: 'gold',
    featured: false,
    image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
      'https://images.unsplash.com/photo-1611186871525-35cd28cf1ae1?w=800&q=80',
    ],
    specs: ['i7-13700H', '32GB RAM', '1TB NVMe', 'OLED 3.5K'],
    specSheet: [
      { label: 'Procesador', value: 'Intel Core i7-13700H (14C, hasta 5.0GHz)' },
      { label: 'GPU', value: 'NVIDIA GeForce RTX 4070 8GB + Intel Iris Xe' },
      { label: 'Memoria RAM', value: '32 GB LPDDR5-4800 (soldada)' },
      { label: 'Almacenamiento', value: 'SSD 1 TB NVMe PCIe 4.0' },
      { label: 'Pantalla', value: '15.6" OLED táctil 3456×2160, 60Hz' },
      { label: 'Color de pantalla', value: '100% DCI-P3, 400 nits, HDR500' },
      { label: 'Batería', value: '86Wh, hasta 13 horas' },
      { label: 'Conectividad', value: '2× Thunderbolt 4, USB-A 3.2, SD, HDMI' },
      { label: 'Cámara', value: '720p con IR para Windows Hello' },
      { label: 'Peso', value: '1.86 kg' },
    ],
    highlights: [
      'Pantalla OLED táctil 3.5K con negros perfectos',
      '100% DCI-P3 certificada para trabajo profesional',
      'Chasis aluminio + fibra de carbono premium',
      'Thunderbolt 4 para conectividad ultra rápida',
      'Carga rápida 130W: de 0% a 80% en 60 min',
    ],
    relatedIds: [1, 2, 4],
    stock: 'Últimas unidades',
    warranty: '1 año Dell Premium',
    sku: 'XPS15-9530-OLED-32',
  },
  {
    id: 4,
    slug: 'lenovo-thinkpad-x1-carbon',
    name: 'Lenovo ThinkPad X1 Carbon',
    shortDescription: 'Intel Core i7-1365U, 16GB LPDDR5, 512GB SSD. Solo 1.12kg con certificación militar MIL-SPEC.',
    description: `La ThinkPad X1 Carbon Gen 11 es la laptop empresarial más refinada del mercado. Con solo 1.12 kg, es increíblemente ligera sin sacrificar ni un ápice de robustez: supera 12 pruebas de certificación militar MIL-STD-810H, incluyendo resistencia a polvo, humedad, altitud y vibración.

El procesador Intel Core i7-1365U de 13ª generación con arquitectura híbrida ofrece excelente rendimiento para productividad empresarial, con una TDP de apenas 15W que se traduce en hasta 15 horas de autonomía real.

La pantalla IPS de 14 pulgadas con resolución 2.8K y brillo de 500 nits es perfectamente legible incluso bajo luz solar directa. El teclado ThinkPad, legendario por su calidad, cuenta con retroiluminación, teclas bien espaciadas y recorrido óptimo para mecanógrafos exigentes.

La seguridad está cubierta: lector de huella dactilar, cámara IR para reconocimiento facial (Windows Hello), obturador físico de privacidad para la webcam, y chip TPM 2.0.`,
    price: 1699999,
    oldPrice: 1899999,
    category: 'laptops',
    badge: 'Oferta',
    badgeColor: 'green',
    featured: false,
    image: 'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1541807084-5c52b6b3adef?w=800&q=80',
      'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&q=80',
      'https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?w=800&q=80',
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    ],
    specs: ['i7-1365U', '16GB RAM', '512GB SSD', '1.12kg'],
    specSheet: [
      { label: 'Procesador', value: 'Intel Core i7-1365U (10C, hasta 5.2GHz)' },
      { label: 'Memoria RAM', value: '16 GB LPDDR5-6400 (soldada)' },
      { label: 'Almacenamiento', value: 'SSD 512 GB NVMe PCIe 4.0' },
      { label: 'Pantalla', value: '14" IPS 2.8K 2880×1800, 60Hz, 500 nits' },
      { label: 'Batería', value: '57Wh, hasta 15 horas' },
      { label: 'Conectividad', value: '2× Thunderbolt 4, 2× USB-A 3.2, HDMI' },
      { label: 'Seguridad', value: 'Huella dactilar, IR facial, obturador webcam, TPM 2.0' },
      { label: 'Certificaciones', value: 'MIL-STD-810H (12 pruebas)' },
      { label: 'Peso', value: '1.12 kg' },
      { label: 'Sistema operativo', value: 'Windows 11 Pro' },
    ],
    highlights: [
      '1.12 kg — la laptop empresarial más liviana de su clase',
      'Certificación MIL-STD-810H para máxima durabilidad',
      'Hasta 15 horas de batería real',
      'Obturador físico de privacidad para webcam',
      'Teclado ThinkPad legendario con retroiluminación',
    ],
    relatedIds: [1, 2, 3],
    stock: 'Disponible',
    warranty: '3 años Lenovo Premier',
    sku: 'X1C-G11-I7-16-512',
  },

  // CELULARES
  {
    id: 5,
    slug: 'iphone-15-pro-max',
    name: 'iPhone 15 Pro Max',
    shortDescription: 'Chip A17 Pro, titanio aeroespacial, cámara 48MP con zoom óptico 5x, Dynamic Island.',
    description: `El iPhone 15 Pro Max es el smartphone más avanzado jamás fabricado por Apple. Su estructura de titanio de grado aeroespacial —el mismo material usado en misiones espaciales— lo hace increíblemente resistente y liviano al mismo tiempo. El acabado satinado en titanio natural es suave al tacto y elegante a la vista.

El chip A17 Pro, fabricado en proceso de 3nm, es el procesador móvil más rápido del mundo. Su GPU de 6 núcleos permite jugar títulos de consola directamente en el teléfono —como Resident Evil Village y Assassin's Creed Mirage— con gráficos y rendimiento inéditos en un smartphone.

El sistema de cámara Pro de triple lente es transformador: la cámara principal de 48MP con apertura ƒ/1.78 captura imágenes extraordinarias en cualquier condición lumínica. El nuevo teleobjetivo de 12MP con zoom óptico 5x y focal equivalente de 120mm permite capturar sujetos lejanos con detalle profesional. La cámara ultra gran angular de 12MP completa el trío.

El conector USB-C con velocidades USB 3 de hasta 20 Gbps permite transferir videos ProRes a una Mac o iPad en segundos. El botón de Acción personalizable reemplaza al silenciador tradicional y abre posibilidades ilimitadas.`,
    price: 1999999,
    oldPrice: null,
    category: 'celulares',
    badge: 'Top Ventas',
    badgeColor: 'electric',
    featured: true,
    image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=800&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80',
      'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=800&q=80',
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80',
    ],
    specs: ['A17 Pro', '48MP', '5x Zoom', 'USB-C'],
    specSheet: [
      { label: 'Procesador', value: 'Apple A17 Pro (3nm, 6C CPU / 6C GPU)' },
      { label: 'Pantalla', value: '6.7" Super Retina XDR OLED, 2796×1290, 120Hz' },
      { label: 'Cámara principal', value: '48MP, ƒ/1.78, OIS, sensor shift' },
      { label: 'Teleobjetivo', value: '12MP, ƒ/2.8, zoom óptico 5x (120mm eq.)' },
      { label: 'Ultra gran angular', value: '12MP, ƒ/2.2, 13mm equivalente' },
      { label: 'Cámara frontal', value: '12MP TrueDepth con autofocus' },
      { label: 'Almacenamiento', value: '256 GB / 512 GB / 1 TB' },
      { label: 'Batería', value: '4422 mAh, hasta 29 horas de video' },
      { label: 'Conectividad', value: 'USB-C USB 3 (20 Gbps), 5G, Wi-Fi 6E' },
      { label: 'Material', value: 'Titanio grado 5 + vidrio Ceramic Shield' },
    ],
    highlights: [
      'Chip A17 Pro en 3nm — el más poderoso en smartphone',
      'Zoom óptico 5x con focal 120mm equivalente',
      'Video ProRes 4K/60fps en USB-C',
      'Cuerpo de titanio aeroespacial ultraligero',
      'Botón de Acción personalizable',
    ],
    relatedIds: [6, 7, 8],
    stock: 'Disponible',
    warranty: '1 año oficial Apple',
    sku: 'IP15PM-256-TITANIO',
  },
  {
    id: 6,
    slug: 'samsung-galaxy-s24-ultra',
    name: 'Samsung Galaxy S24 Ultra',
    shortDescription: 'Snapdragon 8 Gen 3, cámara 200MP, S Pen integrado, AMOLED 6.8" 120Hz.',
    description: `El Samsung Galaxy S24 Ultra es la cúspide de la ingeniería de smartphones Android. Con el Snapdragon 8 Gen 3 específicamente optimizado para Galaxy —con hasta 3.39 GHz en su núcleo principal—, este teléfono destaca en todas las métricas de rendimiento.

El S Pen integrado, con latencia de 2.8ms, convierte al S24 Ultra en la herramienta más versátil para creativos y profesionales. Tomá notas, dibujá, firmá documentos o controlá la cámara remotamente con una precisión que ningun otro smartphone puede igualar.

El sistema cuádruple de cámara es simplemente el mejor en la industria: la principal de 200MP captura imágenes con una resolución sin precedentes. El teleobjetivo de 50MP con zoom óptico 5x y el teleobjetivo periscopio de 10MP con zoom óptico 10x (Space Zoom 100x) te acercan a cualquier sujeto. La Galaxy AI añade capacidades de edición generativa, Circle to Search, y transcripción en tiempo real.

La pantalla Dynamic AMOLED 2X de 6.8 pulgadas con Gorilla Glass Armor (anti-reflejos) es la más brillante del mercado: 2600 nits peak, perfectamente legible en exteriores.`,
    price: 1799999,
    oldPrice: 1999999,
    category: 'celulares',
    badge: 'Nuevo',
    badgeColor: 'electric',
    featured: true,
    image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80',
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    ],
    specs: ['SD 8 Gen 3', '200MP', 'S Pen', '5000mAh'],
    specSheet: [
      { label: 'Procesador', value: 'Snapdragon 8 Gen 3 for Galaxy (hasta 3.39 GHz)' },
      { label: 'RAM', value: '12 GB LPDDR5X' },
      { label: 'Almacenamiento', value: '256 GB / 512 GB / 1 TB UFS 4.0' },
      { label: 'Pantalla', value: '6.8" Dynamic AMOLED 2X, 3088×1440, 120Hz' },
      { label: 'Brillo', value: '2600 nits peak, Gorilla Glass Armor' },
      { label: 'Cámara principal', value: '200MP HP2, ƒ/1.7, OIS, PDAF' },
      { label: 'Teleobjetivos', value: '50MP (5x óptico) + 10MP (10x óptico / 100x Space Zoom)' },
      { label: 'Batería', value: '5000 mAh, carga 45W, inalámbrica 15W' },
      { label: 'S Pen', value: 'Integrado, latencia 2.8ms, Bluetooth' },
      { label: 'Resistencia', value: 'IP68 (agua y polvo)' },
    ],
    highlights: [
      'S Pen integrado con latencia 2.8ms',
      'Cámara principal de 200 megapíxeles',
      'Space Zoom 100x con teleobjetivo periscopio',
      'Galaxy AI: edición generativa, Circle to Search',
      'Pantalla 2600 nits — la más brillante del mercado',
    ],
    relatedIds: [5, 7, 8],
    stock: 'Disponible',
    warranty: '1 año oficial Samsung',
    sku: 'S24U-256-TITANBLK',
  },
  {
    id: 7,
    slug: 'google-pixel-8-pro',
    name: 'Google Pixel 8 Pro',
    shortDescription: 'Google Tensor G3, cámara Pro 50MP con IA avanzada, 7 años de actualizaciones garantizadas.',
    description: `El Google Pixel 8 Pro representa la visión de Google sobre lo que debe ser un smartphone: pura inteligencia artificial al servicio de la fotografía y la productividad. Con el chip Tensor G3 diseñado por Google, cada función de IA se ejecuta directamente en el dispositivo, sin depender de la nube.

La fotografía computacional del Pixel 8 Pro es simplemente asombrosa. El modo Astrofotografía captura la Vía Láctea sin equipo adicional. Borrador Mágico elimina personas u objetos no deseados de las fotos con precisión quirúrgica. Best Take elige las mejores expresiones de cada persona en fotos grupales. Y la nueva función Foto Editada detecta y revela manipulaciones en imágenes recibidas.

El compromiso de 7 años de actualizaciones de sistema operativo y seguridad —hasta 2030— es inédito en Android y garantiza que tu inversión tenga una vida útil extraordinaria.

La pantalla LTPO OLED de 6.7 pulgadas con tecnología de 1 a 120Hz adapta automáticamente la tasa de refresco para equilibrar fluidez y autonomía. El sensor de temperatura ambiental es una primicia mundial en smartphones.`,
    price: 1299999,
    oldPrice: null,
    category: 'celulares',
    badge: 'IA Avanzada',
    badgeColor: 'purple',
    featured: false,
    image: 'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
      'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=800&q=80',
      'https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=800&q=80',
    ],
    specs: ['Tensor G3', '50MP IA', '120Hz', '7 años soporte'],
    specSheet: [
      { label: 'Procesador', value: 'Google Tensor G3 + Titan M2 coprocessor' },
      { label: 'RAM', value: '12 GB LPDDR5' },
      { label: 'Almacenamiento', value: '128 GB / 256 GB / 1 TB UFS 3.1' },
      { label: 'Pantalla', value: '6.7" LTPO OLED, 2992×1344, 1–120Hz' },
      { label: 'Cámara principal', value: '50MP Octa PD, ƒ/1.68, OIS' },
      { label: 'Teleobjetivo', value: '48MP, zoom óptico 5x (113mm eq.)' },
      { label: 'Ultra gran angular', value: '48MP, ƒ/1.95, macro autofocus' },
      { label: 'Batería', value: '5050 mAh, carga 30W, inalámbrica 23W' },
      { label: 'Actualizaciones', value: '7 años de OS + seguridad (hasta 2030)' },
      { label: 'Resistencia', value: 'IP68' },
    ],
    highlights: [
      '7 años de actualizaciones de OS garantizadas',
      'Borrador Mágico, Best Take, Foto sin borrosidad con IA',
      'Sensor de temperatura ambiental único',
      'Astrofotografía y Video Nocturno mejorados',
      'Chip Titan M2 para máxima seguridad',
    ],
    relatedIds: [5, 6, 8],
    stock: 'Disponible',
    warranty: '1 año oficial Google',
    sku: 'PX8PRO-256-OBSIDIAN',
  },
  {
    id: 8,
    slug: 'xiaomi-14-ultra',
    name: 'Xiaomi 14 Ultra',
    shortDescription: 'Leica Summilux óptico 1" de 50MP, Snapdragon 8 Gen 3, carga inalámbrica 80W.',
    description: `El Xiaomi 14 Ultra es para los apasionados de la fotografía móvil. Desarrollado en colaboración profunda con Leica —no solo como licencia de marca— incorpora óptica Leica Summilux genuina con sensor de 1 pulgada, el más grande disponible en un smartphone.

El sensor LYT-900 de 1 pulgada con 50 megapíxeles captura una cantidad de luz incomparable: 4.3 veces más superficie que un sensor convencional. La apertura ƒ/1.63 variable mecánicamente (hasta ƒ/4.0) permite control creativo real sobre la profundidad de campo, igual que una cámara mirrorless. Los cuatro módulos de cámara son todos de 50MP, todos con óptica Leica Summilux.

El Snapdragon 8 Gen 3 con 16GB de RAM LPDDR5X garantiza que ningún proceso, por exigente que sea —incluyendo la edición de RAW en tiempo real— genere demoras.

La batería de 5000 mAh con carga por cable de 90W se recarga en apenas 37 minutos. La carga inalámbrica de 80W es la más rápida disponible sin cables. El Xiaomi 14 Ultra no es solo un teléfono; es un sistema de cámara que también hace llamadas.`,
    price: 1499999,
    oldPrice: null,
    category: 'celulares',
    badge: 'Leica',
    badgeColor: 'gold',
    featured: false,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=800&q=80',
      'https://images.unsplash.com/photo-1607936854279-55e8a4c64888?w=800&q=80',
      'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=800&q=80',
      'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=800&q=80',
    ],
    specs: ['SD 8 Gen 3', 'Leica 1"', '80W wireless', 'LTPO'],
    specSheet: [
      { label: 'Procesador', value: 'Snapdragon 8 Gen 3 (hasta 3.3GHz)' },
      { label: 'RAM', value: '16 GB LPDDR5X' },
      { label: 'Almacenamiento', value: '512 GB UFS 4.0' },
      { label: 'Pantalla', value: '6.73" LTPO AMOLED, 3200×1440, 1–120Hz' },
      { label: 'Cámara principal', value: '50MP, sensor 1", Leica Summilux ƒ/1.63' },
      { label: 'Teleobjetivos', value: '50MP 3.2x (ƒ/1.8) + 50MP 5x (ƒ/2.5)' },
      { label: 'Ultra gran angular', value: '50MP, ƒ/1.8, 122°' },
      { label: 'Batería', value: '5000 mAh, carga cable 90W, inalámbrica 80W' },
      { label: 'Carga cable', value: '0→100% en 37 minutos' },
      { label: 'Resistencia', value: 'IP68' },
    ],
    highlights: [
      'Sensor Leica de 1 pulgada — el mayor en smartphone',
      'Apertura mecánica variable ƒ/1.63 a ƒ/4.0',
      'Carga inalámbrica 80W — la más rápida del mercado',
      '4 cámaras de 50MP con óptica Leica Summilux',
      'Video en Leica Natural y Leica Vibrant',
    ],
    relatedIds: [5, 6, 7],
    stock: 'Disponible',
    warranty: '1 año oficial Xiaomi',
    sku: 'MI14U-512-TITAN',
  },

  // COMPONENTES
  {
    id: 9,
    slug: 'nvidia-rtx-4090-fe',
    name: 'NVIDIA RTX 4090 FE',
    shortDescription: '24GB GDDR6X, 16384 CUDA Cores, Ada Lovelace. La GPU más poderosa del mercado.',
    description: `La GeForce RTX 4090 Founders Edition es la tarjeta gráfica más poderosa disponible al público general. Con la arquitectura Ada Lovelace de NVIDIA y 24GB de memoria GDDR6X en bus de 384 bits, este monstruo gráfico redefine lo que es posible tanto en gaming como en cargas de trabajo profesionales de IA.

Los 16384 CUDA Cores —el doble que la RTX 3090 Ti— trabajan en conjunto con los 512 Tensor Cores de cuarta generación y los 128 RT Cores de tercera generación para ofrecer un rendimiento sin precedentes. DLSS 3 con Frame Generation prácticamente duplica las FPS en los títulos compatibles, empujando la RTX 4090 a territorios inalcanzables para cualquier otra GPU.

Para trabajo profesional, la RTX 4090 acelera aplicaciones de IA, rendering 3D, y procesamiento de video de manera dramática. Entrenamiento de redes neuronales, inferencia con modelos de lenguaje, y rendering en tiempo real con ray tracing completo son ahora completamente viables.

El cooler Flow-Through de la Founders Edition con su diseño de doble ventilador push-pull ofrece excelente refrigeración en un formato ATX doble slot relativamente compacto para una GPU de esta categoría.`,
    price: 2899999,
    oldPrice: null,
    category: 'componentes',
    badge: 'Ultra',
    badgeColor: 'green',
    featured: true,
    image: 'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80',
      'https://images.unsplash.com/photo-1555617778-02518510b9fa?w=800&q=80',
      'https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&q=80',
      'https://images.unsplash.com/photo-1597225244516-8b03bd4afae0?w=800&q=80',
    ],
    specs: ['24GB GDDR6X', '16384 CUDA', 'Ada Lovelace', '4K Ultra'],
    specSheet: [
      { label: 'Arquitectura', value: 'NVIDIA Ada Lovelace (TSMC 4N)' },
      { label: 'CUDA Cores', value: '16384' },
      { label: 'Tensor Cores', value: '512 (4ª gen)' },
      { label: 'RT Cores', value: '128 (3ª gen)' },
      { label: 'Memoria', value: '24 GB GDDR6X, 384-bit' },
      { label: 'Ancho de banda', value: '1008 GB/s' },
      { label: 'Clock boost', value: '2520 MHz' },
      { label: 'TDP', value: '450W (requiere PSU 850W+)' },
      { label: 'Conectores', value: '3× DisplayPort 1.4a, 1× HDMI 2.1a' },
      { label: 'Conector alimentación', value: '1× 16-pin (PCIe 5.0)' },
    ],
    highlights: [
      '16384 CUDA Cores — el doble que la RTX 3090 Ti',
      'DLSS 3 Frame Generation multiplica las FPS',
      '4K gaming con ray tracing al máximo',
      'Aceleración de IA y modelos de lenguaje',
      'Cooler Flow-Through exclusivo FE',
    ],
    relatedIds: [10, 11],
    stock: 'Disponible',
    warranty: '3 años NVIDIA',
    sku: 'RTX4090-FE-24G',
  },
  {
    id: 10,
    slug: 'amd-ryzen-9-7950x',
    name: 'AMD Ryzen 9 7950X',
    shortDescription: '16 núcleos / 32 hilos, hasta 5.7GHz boost, 80MB caché total. El CPU desktop más potente de AMD.',
    description: `El AMD Ryzen 9 7950X con arquitectura Zen 4 en proceso de fabricación de 5nm (TSMC) representa el pináculo del rendimiento de procesadores de escritorio para uso general. Con 16 núcleos y 32 hilos de procesamiento simultáneo, ninguna tarea —por compleja que sea— puede con él.

La frecuencia boost de hasta 5.7GHz es la más alta lograda por AMD en un procesador de escritorio, garantizando un rendimiento monohilo excepcional para aplicaciones que no se paralelizan bien. El PBO2 (Precision Boost Overdrive 2) permite al procesador ajustar dinámicamente frecuencias y voltajes para exprimir al máximo cada núcleo.

La caché total de 80MB (8MB L2 + 64MB L3) reduce drásticamente la latencia en accesos a datos frecuentes, beneficiando especialmente a aplicaciones de desarrollo, compilación, y gaming.

La compatibilidad con DDR5-5200 y PCIe 5.0 asegura que este procesador tenga headroom para trabajar con las memorias y tarjetas gráficas más rápidas disponibles. El socket AM5 garantiza compatibilidad futura con procesadores Zen 5 y posteriores.`,
    price: 699999,
    oldPrice: 849999,
    category: 'componentes',
    badge: 'CPU',
    badgeColor: 'electric',
    featured: false,
    image: 'https://images.unsplash.com/photo-1555617778-02518510b9fa?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1555617778-02518510b9fa?w=800&q=80',
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80',
      'https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&q=80',
      'https://images.unsplash.com/photo-1597225244516-8b03bd4afae0?w=800&q=80',
    ],
    specs: ['16C/32T', '5.7GHz', '80MB Cache', '5nm'],
    specSheet: [
      { label: 'Arquitectura', value: 'AMD Zen 4 (TSMC 5nm)' },
      { label: 'Núcleos / Hilos', value: '16C / 32T' },
      { label: 'Frecuencia base', value: '4.5 GHz' },
      { label: 'Frecuencia boost', value: 'Hasta 5.7 GHz' },
      { label: 'Caché L2', value: '16 MB (1MB por núcleo)' },
      { label: 'Caché L3', value: '64 MB' },
      { label: 'TDP base', value: '170W (PPT 230W)' },
      { label: 'Socket', value: 'AM5 (LGA1718)' },
      { label: 'Memoria soportada', value: 'DDR5-5200 dual channel' },
      { label: 'PCIe', value: 'PCIe 5.0 x16 + PCIe 4.0 x4' },
    ],
    highlights: [
      '16 núcleos Zen 4 con hasta 5.7 GHz boost',
      '80MB de caché total para latencia ultrarrápida',
      'Proceso TSMC 5nm para máxima eficiencia',
      'Compatible con DDR5 y PCIe 5.0',
      'Socket AM5 con soporte futuro para Zen 5',
    ],
    relatedIds: [9, 11],
    stock: 'Disponible',
    warranty: '3 años AMD',
    sku: 'R9-7950X-AM5',
  },
  {
    id: 11,
    slug: 'samsung-990-pro-2tb',
    name: 'Samsung 990 Pro 2TB NVMe',
    shortDescription: 'PCIe 4.0 x4, lectura 7450 MB/s, escritura 6900 MB/s. El SSD NVMe más rápido de Samsung.',
    description: `El Samsung 990 Pro es el SSD NVMe de mayor rendimiento de Samsung para el mercado de consumo y workstations. Con velocidades de lectura secuencial de 7450 MB/s y escritura de 6900 MB/s sobre interfaz PCIe 4.0 x4, es hasta 1.6 veces más rápido que el popular 980 Pro.

La tecnología TurboWrite de Samsung permite velocidades de escritura sostenida excepcionales incluso en archivos de gran tamaño, algo crítico para edición de video 4K/8K, backup de sistemas y transferencias de datos masivas. El controlador propietario de Samsung con triple núcleo gestiona inteligentemente la carga de trabajo para mantener el rendimiento sin throttling térmico.

El sistema de gestión térmica mejorado incluye un nuevo algoritmo de control térmico que reduce la temperatura hasta un 7°C respecto a generaciones anteriores, permitiendo rendimiento sostenido en cargas de trabajo prolongadas —ideal para renderizado, compilación de código y machine learning.

La capacidad de 2TB, combinada con la endurance de 1200 TBW (Terabytes Written), hace que este SSD sea tanto para uso intensivo profesional como para almacenamiento masivo de archivos multimedia.`,
    price: 229999,
    oldPrice: 279999,
    category: 'componentes',
    badge: 'NVMe Gen4',
    badgeColor: 'electric',
    featured: false,
    image: 'https://images.unsplash.com/photo-1597225244516-8b03bd4afae0?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1597225244516-8b03bd4afae0?w=800&q=80',
      'https://images.unsplash.com/photo-1562976540-1502c2145186?w=800&q=80',
      'https://images.unsplash.com/photo-1555617778-02518510b9fa?w=800&q=80',
      'https://images.unsplash.com/photo-1591488320449-011701bb6704?w=800&q=80',
    ],
    specs: ['PCIe 4.0', '7450 MB/s', '2TB', 'TurboWrite'],
    specSheet: [
      { label: 'Interfaz', value: 'PCIe 4.0 x4, NVMe 2.0' },
      { label: 'Factor de forma', value: 'M.2 2280' },
      { label: 'Capacidad', value: '2 TB' },
      { label: 'Lectura secuencial', value: '7450 MB/s' },
      { label: 'Escritura secuencial', value: '6900 MB/s' },
      { label: 'IOPS lectura aleatoria', value: '1.400.000 IOPS' },
      { label: 'IOPS escritura aleatoria', value: '1.550.000 IOPS' },
      { label: 'Endurance (TBW)', value: '1200 TBW' },
      { label: 'MTBF', value: '1.500.000 horas' },
      { label: 'Cifrado', value: 'AES 256-bit (TCG Opal 2.0)' },
    ],
    highlights: [
      '7450 MB/s de lectura — el más rápido en PCIe 4.0',
      'TurboWrite para escrituras sostenidas de gran tamaño',
      'Controlador Samsung triple-core propietario',
      'Cifrado AES 256-bit integrado en hardware',
      '5 años de garantía Samsung',
    ],
    relatedIds: [9, 10],
    stock: 'Disponible',
    warranty: '5 años Samsung',
    sku: 'MZ-V9P2T0BW',
  },

  // ACCESORIOS
  {
    id: 12,
    slug: 'sony-wh-1000xm5',
    name: 'Sony WH-1000XM5',
    shortDescription: 'ANC líder en la industria, audio Hi-Res, 30 horas de batería, carga rápida.',
    description: `Los Sony WH-1000XM5 son los auriculares inalámbricos con cancelación de ruido más aclamados del mercado por una razón simple: nadie lo hace mejor. Con ocho micrófonos (cuatro en cada auricular) y dos procesadores de audio dedicados, el sistema ANC analiza y cancela el ruido ambiental en tiempo real con una efectividad sin precedentes.

El nuevo driver de 30mm de alto rango desarrollado específicamente para los XM5 ofrece un sonido excepcionalmente detallado en todo el espectro de frecuencias. La tecnología LDAC permite transmitir audio a 990 kbps —tres veces más que el Bluetooth estándar— para disfrutar música Hi-Res Wireless con toda la calidad de los archivos originales.

El Adaptive Sound Control ajusta automáticamente el nivel de ANC y el modo Transparencia según tu actividad: si comenzás a caminar, activa transparencia; si llegás a un lugar ruidoso, maximiza la cancelación. Speak-to-Chat pausa la música cuando empezás a hablar y la reanuda cuando terminás la conversación.

La autonomía de 30 horas con ANC activo y la carga rápida de 3 minutos para 3 horas hacen que nunca te quedes sin música. El nuevo diseño con almohadillas de tela de mayor superficie y diadema acolchada garantiza comodidad en sesiones de escucha extendidas.`,
    price: 399999,
    oldPrice: 449999,
    category: 'accesorios',
    badge: 'ANC Pro',
    badgeColor: 'purple',
    featured: true,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
    ],
    specs: ['ANC Premium', '30h batería', 'Hi-Res Audio', 'Carga rápida'],
    specSheet: [
      { label: 'Tipo', value: 'Over-ear, cerrado, inalámbrico' },
      { label: 'Driver', value: '30mm, dynamic, high compliance' },
      { label: 'Respuesta en frecuencia', value: '4 Hz – 40.000 Hz (LDAC)' },
      { label: 'Cancelación de ruido', value: '8 micrófonos + 2 procesadores HD' },
      { label: 'Códecs', value: 'LDAC, AAC, SBC' },
      { label: 'Batería', value: '30 horas (ANC on) / 40 horas (ANC off)' },
      { label: 'Carga rápida', value: '3 min → 3 horas de uso' },
      { label: 'Conexión', value: 'Bluetooth 5.2, multipoint (2 dispositivos)' },
      { label: 'Peso', value: '250 g' },
      { label: 'Plegable', value: 'Sí, con estuche incluido' },
    ],
    highlights: [
      'ANC líder con 8 micrófonos y 2 procesadores HD',
      'LDAC Hi-Res Wireless a 990 kbps',
      'Adaptive Sound Control automático por contexto',
      'Speak-to-Chat: pausa y reanuda automáticamente',
      'Multipoint: conectado a 2 dispositivos al mismo tiempo',
    ],
    relatedIds: [13, 14, 15],
    stock: 'Disponible',
    warranty: '1 año Sony',
    sku: 'WH1000XM5-NEGRO',
  },
  {
    id: 13,
    slug: 'logitech-mx-keys-s',
    name: 'Logitech MX Keys S',
    shortDescription: 'Teclado inalámbrico premium, retroiluminación adaptativa, Easy-Switch 3 dispositivos.',
    description: `El Logitech MX Keys S es el teclado inalámbrico definitivo para profesionales que pasan horas frente a la pantalla. Cada tecla está esféricamente esculpida para coincidir perfectamente con la yema de tus dedos, reduciendo la fatiga y aumentando la precisión de tipeo.

La retroiluminación inteligente activada por proximidad se enciende cuando tus manos se acercan y se apaga cuando no estás presente, optimizando el consumo de batería. La intensidad se ajusta automáticamente según la luz ambiente del entorno.

Easy-Switch permite cambiar instantáneamente entre hasta tres dispositivos (Mac, PC, tablet) con un solo toque de tecla. Podés terminar un párrafo en tu laptop, cambiar al iPad para revisar notas, y volver a la PC en segundos. El software Logi Options+ permite asignar atajos personalizados a cualquier tecla y sincronizar la configuración entre dispositivos.

Compatible con Windows y macOS, las teclas tienen grabado los atajos de ambos sistemas. La recarga USB-C de la batería de 500 mAh proporciona hasta 10 días de uso con retroiluminación activa, o hasta 5 meses sin ella.`,
    price: 149999,
    oldPrice: 179999,
    category: 'accesorios',
    badge: 'Wireless',
    badgeColor: 'electric',
    featured: false,
    image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=800&q=80',
      'https://images.unsplash.com/photo-1541140532154-b024d705b90a?w=800&q=80',
      'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=800&q=80',
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    ],
    specs: ['Multi-device', 'Backlit', 'USB-C', 'Low profile'],
    specSheet: [
      { label: 'Tipo de switch', value: 'Scissor mecánico, perfil bajo' },
      { label: 'Recorrido de tecla', value: '1.8 mm' },
      { label: 'Conexión', value: 'Bluetooth / Logi Bolt USB 2.4GHz' },
      { label: 'Dispositivos simultáneos', value: '3 (Easy-Switch)' },
      { label: 'Retroiluminación', value: 'LED blanco, 8 niveles, adaptativa' },
      { label: 'Batería', value: '500 mAh recargable (10 días retroiluminado)' },
      { label: 'Carga', value: 'USB-C' },
      { label: 'Compatibilidad', value: 'Windows, macOS, Linux, iPadOS' },
      { label: 'Dimensiones', value: '430 × 132 × 20.5 mm' },
      { label: 'Peso', value: '810 g' },
    ],
    highlights: [
      'Teclas esféricamente esculpidas para menor fatiga',
      'Easy-Switch instantáneo entre 3 dispositivos',
      'Retroiluminación adaptativa a la luz ambiente',
      'Compatible con macOS y Windows (teclas duales)',
      'Software Logi Options+ para personalización total',
    ],
    relatedIds: [12, 14, 15],
    stock: 'Disponible',
    warranty: '1 año Logitech',
    sku: 'MX-KEYS-S-GRAFITO',
  },
  {
    id: 14,
    slug: 'lg-ultragear-27gp950',
    name: 'LG UltraGear 27GP950-B',
    shortDescription: 'Monitor 4K Nano IPS, 144Hz, 1ms GTG, G-Sync Compatible, DisplayHDR 600.',
    description: `El LG UltraGear 27GP950-B es el monitor que todo gamer serio y profesional creativo desea: la combinación perfecta de resolución 4K ultra nítida, alta tasa de refresco de 144Hz, y cobertura de color profesional en un mismo panel.

El panel Nano IPS de 27 pulgadas con resolución UHD 4K (3840×2160) ofrece una densidad de píxeles de 163 PPI, suficiente para que el texto y los gráficos sean perfectamente nítidos incluso en visión de cerca. La tecnología Nano IPS extiende el rango de color gracias a partículas de nano de tamaño uniforme que absorben el exceso de luz, logrando una cobertura del 98% DCI-P3.

Con G-Sync Compatible y AMD FreeSync Premium Pro, la sincronización adaptativa de refresco elimina el screen tearing y la inconsistencia de frames en todo el rango de 1 a 144Hz. El HDR VESA DisplayHDR 600 con 600 nits de brillo peak ofrece un salto visual notable en contenido HDR.

El tiempo de respuesta de 1ms GTG (gray-to-gray) hace que los objetos en movimiento rápido —en juegos de disparos o acción— luzcan perfectamente nítidos sin ghosting. La conectividad incluye dos puertos HDMI 2.1 y un DisplayPort 1.4, todos capaces de 4K/144Hz.`,
    price: 799999,
    oldPrice: 949999,
    category: 'accesorios',
    badge: '4K 144Hz',
    badgeColor: 'green',
    featured: true,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=800&q=80',
      'https://images.unsplash.com/photo-1593640408182-31c228f4ef7f?w=800&q=80',
      'https://images.unsplash.com/photo-1547082299-de196ea013d6?w=800&q=80',
      'https://images.unsplash.com/photo-1616763355548-1b606f439f86?w=800&q=80',
    ],
    specs: ['4K IPS', '144Hz', '1ms GTG', 'HDR600'],
    specSheet: [
      { label: 'Panel', value: 'Nano IPS, 27", 4K UHD 3840×2160' },
      { label: 'Tasa de refresco', value: '144Hz (overclockeable a 160Hz)' },
      { label: 'Tiempo de respuesta', value: '1ms GTG / 1ms MBR' },
      { label: 'Brillo típico', value: '350 nits' },
      { label: 'Brillo peak HDR', value: '600 nits (VESA DisplayHDR 600)' },
      { label: 'Cobertura de color', value: '98% DCI-P3' },
      { label: 'Sincronización', value: 'G-Sync Compatible + FreeSync Premium Pro' },
      { label: 'Rango VRR', value: '1 – 144 Hz' },
      { label: 'Conectividad', value: '2× HDMI 2.1, 1× DisplayPort 1.4, USB Hub' },
      { label: 'Soporte', value: 'Altura, pivote, giro y inclinación ajustable' },
    ],
    highlights: [
      'Panel Nano IPS 4K con 98% DCI-P3 certificado',
      'G-Sync Compatible + FreeSync Premium Pro dual',
      'HDMI 2.1 para 4K/144Hz desde consolas',
      'DisplayHDR 600 con 600 nits peak',
      'Soporte ergonómico con ajuste completo',
    ],
    relatedIds: [12, 13, 15],
    stock: 'Últimas unidades',
    warranty: '3 años LG',
    sku: '27GP950-B',
  },
  {
    id: 15,
    slug: 'airpods-pro-2da-gen',
    name: 'Apple AirPods Pro (2da Gen)',
    shortDescription: 'Chip H2, ANC adaptativa 2x más potente, audio espacial personalizado, MagSafe.',
    description: `Los AirPods Pro de segunda generación con chip H2 representan el mayor salto en cancelación de ruido activa de cualquier AirPod. El ANC es hasta 2 veces más efectivo que la generación anterior, gracias al chip H2 que procesa audio a velocidades incomparablemente rápidas.

El modo Transparencia adaptativa es una revolución en la experiencia de escucha cotidiana. Detecta ruidos repentinos e intensos —como bocinas, explosiones— y los atenúa en menos de un milisegundo, protegiendo tu audición mientras seguís escuchando el sonido ambiental natural. Es la primera vez que un dispositivo de audio puede actuar como protector auditivo inteligente.

El audio espacial personalizado utiliza el LiDAR y las cámaras del iPhone para escanear la forma única de tus orejas y crear un perfil de audio espacial personalizado. El sonido parece emanar del espacio a tu alrededor de manera que se adapta exactamente a tu anatomía.

El estuche recibe carga MagSafe (compatible con el ecosistema Apple) y también USB-C, lo que lo hace compatible con cualquier cargador moderno. El altavoz integrado en el estuche permite localizarlo con la app Buscar. La batería en los buds dura hasta 6 horas con ANC activo, y el estuche añade hasta 30 horas adicionales.`,
    price: 349999,
    oldPrice: 399999,
    category: 'accesorios',
    badge: 'MagSafe',
    badgeColor: 'electric',
    featured: false,
    image: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?w=800&q=80',
      'https://images.unsplash.com/photo-1546435770-a3e426bf472b?w=800&q=80',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=800&q=80',
    ],
    specs: ['Chip H2', 'ANC 2x', 'Audio Espacial', 'MagSafe'],
    specSheet: [
      { label: 'Chip', value: 'Apple H2' },
      { label: 'ANC', value: 'Adaptativa activa, 2x generación anterior' },
      { label: 'Modo Transparencia', value: 'Adaptativo con reducción de ruidos intensos' },
      { label: 'Audio espacial', value: 'Personalizado con cabeza y orejas (LiDAR)' },
      { label: 'Batería buds', value: '6 horas (ANC on) / 6 horas (ANC off)' },
      { label: 'Batería con estuche', value: '30 horas adicionales' },
      { label: 'Carga estuche', value: 'MagSafe, Qi inalámbrica, USB-C, Apple Watch' },
      { label: 'Resistencia', value: 'IPX4 buds, IP54 estuche' },
      { label: 'Conexión', value: 'Bluetooth 5.3, audio adaptativo' },
      { label: 'Controles', value: 'Tallo presionable, deslizar para volumen' },
    ],
    highlights: [
      'ANC adaptativa 2x más potente — la mejor en earbuds',
      'Modo Transparencia adaptativo protege tu audición',
      'Audio espacial personalizado con tu perfil único',
      'Estuche con altavoz y carga MagSafe/USB-C',
      'Sincronización instantánea con todos tus dispositivos Apple',
    ],
    relatedIds: [12, 13, 14],
    stock: 'Disponible',
    warranty: '1 año oficial Apple',
    sku: 'MTJV3LL/A',
  },
];

export const testimonials = [
  {
    id: 1,
    name: 'Martina García',
    role: 'Diseñadora UX',
    avatar: 'MG',
    avatarColor: 'from-violet-500 to-purple-600',
    rating: 5,
    text: 'Compré la MacBook Pro M3 y la experiencia fue increíble. Me asesoraron por WhatsApp en minutos, el envío fue rapidísimo y el producto llegó perfectamente embalado. TechZone es mi tienda de confianza.',
    product: 'MacBook Pro M3',
  },
  {
    id: 2,
    name: 'Santiago Rodríguez',
    role: 'Desarrollador Full Stack',
    avatar: 'SR',
    avatarColor: 'from-electric-400 to-cyan-500',
    rating: 5,
    text: 'Excelente atención al cliente. Tenía dudas sobre qué placa de video elegir para mi workstation y el equipo me explicó todo con detalle. Al final compré la RTX 4090 y no me arrepiento para nada.',
    product: 'NVIDIA RTX 4090',
  },
  {
    id: 3,
    name: 'Valentina López',
    role: 'Content Creator',
    avatar: 'VL',
    avatarColor: 'from-rose-400 to-pink-600',
    rating: 5,
    text: 'Pedí el Samsung S24 Ultra para mi trabajo de fotografía y superó todas mis expectativas. El proceso de consulta por WhatsApp fue muy fácil y recibí mi teléfono al día siguiente. ¡100% recomendable!',
    product: 'Samsung S24 Ultra',
  },
  {
    id: 4,
    name: 'Luciano Fernández',
    role: 'Gamer Profesional',
    avatar: 'LF',
    avatarColor: 'from-green-400 to-emerald-600',
    rating: 5,
    text: 'Armé mi setup completo con TechZone: monitor, teclado y auriculares. El precio fue el mejor que encontré y la calidad es impecable. El soporte post-venta también es excelente.',
    product: 'Setup Gaming Completo',
  },
];

export const benefits = [
  {
    icon: '🛡️',
    title: 'Garantía Oficial',
    description: 'Todos nuestros productos tienen garantía oficial del fabricante. Tu inversión está protegida.',
  },
  {
    icon: '⚡',
    title: 'Envío Express',
    description: 'Despacho en 24-48 horas a todo el país. Recibís tu tecnología cuando la necesitás.',
  },
  {
    icon: '💬',
    title: 'Atención Personalizada',
    description: 'Nuestros especialistas te asesoran por WhatsApp para encontrar el producto perfecto para vos.',
  },
  {
    icon: '💳',
    title: 'Financiación Sin Interés',
    description: 'Hasta 12 cuotas sin interés con las principales tarjetas. Llevate lo que querés hoy.',
  },
  {
    icon: '🔄',
    title: 'Cambios y Devoluciones',
    description: '30 días para cambios sin preguntas. Si no te convence, lo solucionamos sin problemas.',
  },
  {
    icon: '🏆',
    title: 'Productos Originales',
    description: 'Solo vendemos productos 100% originales con factura y documentación completa.',
  },
];

export function formatPrice(price) {
  return new Intl.NumberFormat('es-AR', {
    style: 'currency',
    currency: 'ARS',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  }).format(price);
}

export function buildWhatsAppUrl(productName) {
  const text = encodeURIComponent(
    `Hola, me interesa el producto ${productName}. ¿Podrían darme más información?`
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
