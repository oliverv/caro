import React, { useState } from 'react';

interface BlogPageProps {
  onNavigateHome: () => void;
  onOpenBookingModal: () => void;
}

const BLOG_POSTS_DATA = [
  {
    id: 1,
    category: 'menopausia',
    categoryLabel: 'Biología Comparada',
    date: 'Agosto 2026',
    readTime: '5 min de lectura',
    title: 'Menopausia en las orcas: ¿por qué las abuelas orca son tan importantes?',
    excerpt: 'Solo cinco especies en todo el planeta experimentan menopausia: los seres humanos y cuatro tipos de ballenas dentadas, incluidas las orcas. ¿Qué nos enseña la naturaleza sobre liderar en la madurez?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuByyXLghICTBB0TOA9qf5WH_wccyJjE1HJ9YRZNDYs9XywP0f_vO48dv7k2IYi9DHNDZXcOYQbaK895aiPP3Prjpd_6Pf-IQ8DkPX_tNjVxlVA3KgQqo8h4TaMAtQVxfp7Rf5a9oeWJb3-Sf0l1Pyjmrt0CJqNx1N3Jpe7VV56S_hD_npKwxeCKF1K4IJyuU78SQhNa1HYeW8XmiEcfQI7WzhCmTxG0ONzr1IEN2_3dJzccCt0PzwI_NQ',
  },
  {
    id: 2,
    category: 'menopausia',
    categoryLabel: 'Salud Femenina 40+',
    date: 'Julio 2026',
    readTime: '7 min de lectura',
    title: 'La menopausia no es el final: lo que la evolución nos dice sobre la segunda etapa de la vida femenina',
    excerpt: 'Hay una pregunta sobre la menopausia que rara vez nos hacemos. No es: ¿cómo elimino los sofocos?, sino: ¿qué mensaje celular me está transmitiendo mi organismo para resetear mis hábitos?',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBftbk5r7gkQj9ihvscg6tn9XIn2w9ZgJW1zfqmxXIEEAe4RO0t8KYKDN0UsrigV_ukDEkSdLRW47WbRQBqP3v5icy5DWR_1ZfGc4Scxd94nh7QCJ9UfTSo5klxzYUcdn5B1kCJcx4FR1iSY76dG5byPbDpyl4XZB9AiVS2FuV_dO6-HHWYLDZWj7MLqcwX0AaNvsIiny53_aH-kDKwAJL_VxgO4AXPRtBwrGqsAjk50D0Pzty1VOZOeg',
  },
  {
    id: 3,
    category: 'metabolismo',
    categoryLabel: 'Medio Ambiente & Epigenética',
    date: 'Mayo 2026',
    readTime: '5 min de lectura',
    title: 'El Ciclo Invisible del Agua: cómo los fármacos consumidos afectan la salud',
    excerpt: 'Los microplásticos y residuos farmacológicos que no se filtran en plantas depuradoras convencionales pueden actuar como disruptores endocrinos (xenoestrógenos) en el organismo.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDNPsAZlRa4EW2AOLBvRJ27lV5rmWDYy_yiA-DQ6jnSBYJz_ZYXY-Lm1jyX2b6WqMYF0fDxNIkBVTOeMCe3A-1mNAIWIYf-Zp2wGOf7eNk0DsiK4yBi5u_BKDxX3_nzyU7hVr_oo2mBPWvLwwLycE2MUKUPtKAkKdMHEGCzFjM-02hyDEBeaslMyThvKpKQDynfTahGXmgemG7oTlGMp3ruTDFsmQzRgMxcFLossJcgszKJgSSgBSrqlQ',
  },
  {
    id: 4,
    category: 'mente',
    categoryLabel: 'Salud Mental & Consciencia',
    date: 'Mayo 2026',
    readTime: '4 min de lectura',
    title: 'NO AL BULLYING… no podemos seguir normalizando la crueldad',
    excerpt: 'El impacto del estrés psicológico, la crítica social y el rechazo en la infancia y la edad adulta deja marcas biológicas duraderas en el sistema inmune y la respuesta inflamatoria.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDiFUmzrqCevdZcwQBCeYATKTHjip0VdoRw8NLZa9wRAqNCU7Nz5_rwGIDQNpocuMJ7aJYHiuzzE8gWk6FqOCP7iMufBvJPU5v5oqPIOTpCI4Gva2jQ5qO-WaIR2ILo60RqVneeFrDOI0gN8ffq-3f81C6ncPlIR0bipI42I59oFl_ltznz2usaCM0r3XcTrPvsA9eZzzHU62nNKDOcqqdnAIh_nODM-AEizzc2Wrqh09ON6l6GLwTkrg',
  },
  {
    id: 5,
    category: 'nutricion',
    categoryLabel: 'Epinutrición',
    date: 'Enero 2026',
    readTime: '5 min de lectura',
    title: '¿Qué plantea la nueva pirámide nutricional de Estados Unidos?',
    excerpt: 'Se reabre el debate global sobre las guías nutricionales: el desplazamiento de cereales refinados en favor de proteínas de alta biodisponibilidad, grasas saludables y vegetales ricos en polifenoles.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA-39pjMyTBw_GqVy2P99dcyBz2PY225G034Dn1aEuXSSZCt481TBnrNl5nz8ZXGBwtuJiw9FF9YwR6K4kJZCpeNYaZqejBzDy5fUKfe85629iMBhOIhl_Zz0w3CEhZWnnwQnDxAGzqRnGeKSKaEi-B-syHamH68XwJl7_xeVzthW3mKE0Is6TXE3NFN68cuqp7DT6qs_ECvO1t_HWRmGaNOJBPwKarlE_tmE_q1-NknzEtTkd4t4EFYA',
  },
  {
    id: 6,
    category: 'nutricion',
    categoryLabel: 'Nutrición Celular',
    date: 'Diciembre 2025',
    readTime: '6 min de lectura',
    title: 'Déficit de Omega-3 (y qué hacer al respecto) - Estudio 2025',
    excerpt: 'Los ácidos grasos Omega-3 (EPA y DHA) son componentes estructurales de todas las membranas celulares del cuerpo humano.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAZTGrPtAI-ZdXHhiPh-K5ztB9B-qavYinF9yGwqYPaHTUmpy3e5KN7sXxof3zAXhCOmIrB0yLZt2yWSU0IKtJ9w48ZJaBaE8Z-LXh0xsdAl6jnWQ4SNRrLnEcOGD29s_bRhs18CrEmqekpeTNqlnGAmHlLZCAZ3NXLPf7nEvQUfDsVhcczf-L4CATNpXHQqPb8hLp6L-8MOozSJt7WavdtmI82FGAt5qQp2YEkW_RKbRxDAOhz8tf89A',
  },
  {
    id: 7,
    category: 'metabolismo',
    categoryLabel: 'Metabolismo & Cerebro',
    date: 'Noviembre 2025',
    readTime: '8 min de lectura',
    title: 'Masa muscular, grasa visceral y salud cerebral: lo que dice la ciencia',
    excerpt: 'En los últimos años, la neurociencia y la endocrinología han confirmado algo crucial: tu músculo esquelético es un órgano endocrino que segrega mioquinas capaces de proteger tu memoria y reducir la inflamación cerebral.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCTWPqNv8moclP_Dgmt_4t4qlnyNKc4xrnWDylxnP3PcaTK3kgvMggj6bKnQL3IL7sUgqX3RymOQ1V6v60rZo6Mi_kxPGslMXhhbI8hMx9wQhJkXhcUp8iv9IuaS3GxOovNQoGwzaPDl4pFE4HcjKK61kLgyMNKxPsf5YphYmM4kZqmcOtCRYYOPyhCL6WbtyFUwzVBeC5Sks-1lIZ1O6HkfiPgXGgXOgmPxfBmCIRdlWzQGn_iohULiA',
  },
  {
    id: 8,
    category: 'hormonas',
    categoryLabel: 'Hormonas & Longevidad',
    date: 'Noviembre 2025',
    readTime: '7 min de lectura',
    title: 'Hábitos que equilibran tus hormonas: una guía basada en evidencia científica',
    excerpt: 'La epigenética demuestra que tus comportamientos diarios activan o silencian genes que regulan la síntesis de estrógenos, progesterona, tiroides y cortisol.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCUq8Lyb8yV2zPTcuR0euSl5J2EBnmhHedLfvHt6gmwvUtzyDgH7iprsv0a4Bu3nBhiV3naGuTA9jZB9lYOW3Z-o4BzpLoaFR-6sIvWEDBTJaHK8JD8KyEyYSiBkU5fDYgkOnGaejFwSaUCgLo0qUN5qgYKRtQW0drEHZgaoeHCzgoNr1Yx6o4Nhnz2yr-C6lb1qB4UsfkNxuUIe4xh_zTmbiymGXHt8CyE_9ohNT0rr-rJtXL0CCQoFg',
  },
  {
    id: 9,
    category: 'metabolismo',
    categoryLabel: 'Epigenética & Fuerza',
    date: 'Octubre 2025',
    readTime: '6 min de lectura',
    title: 'Cómo el ejercicio transforma tu epigenética: guía práctica para activar tu salud desde adentro',
    excerpt: 'Cada contracción muscular envía señales directas a tu ADN. Cambios epigenéticos —como la metilación y la acetilación de histonas— pueden silenciar genes inflamatorios en cuestión de semanas.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA1CKuvaW70GKKDvh209rTiudCMA4UWdQydfZNDbJoCTpNfOu_9HEAFpixXe5rVdp0ck04F2Z_8sbYDBH3RsAuTdxMSpqDb7vBvOxAK7H_uor144E27_Fx7xxKw98ZNLNCTHHnKYv2PIdlmV86R39SkN_TCBomipYRIvHxUSJjO1FTs926DkALyAgCWS8HWe-v2MaOD6_YaOyZBOKU1X9LBwgoJMYBfv6KkHDps6PCIkNHTjMXN5JWQuA',
  },
];

const CATEGORIES = [
  { key: 'all', label: 'Todos' },
  { key: 'menopausia', label: 'Menopausia & Climaterio' },
  { key: 'metabolismo', label: 'Metabolismo & Fuerza' },
  { key: 'nutricion', label: 'Nutrición' },
  { key: 'hormonas', label: 'Hormonas & Hábitos' },
  { key: 'mente', label: 'Mente & Consciencia' },
];

const FEATURED_POST = {
  image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBLDqzyB5czbSh1bSGUyhl_bATgXquYay0zZfyXBq5AeRZEGSrnHrIX0F37no6IW9pqrGLdjEfGiL3k6Bw4ugV3SO3Jqk9oCbD7oBoQdY6-yq0nCpZGBvnYeGgD_WHK_ELpti4TvfZFGFZ7nfTlGsGBuGcrFiGipWELomvBU3h8zO525DOptpai02dIRZKh1BSEYKNgyhR06G4KeG38dUBm-kOqDtMQ43nqnfNqSgx22GgTvZyj4-G0i6h_DFIRgopAkXE',
  category: 'Menopausia & Evolución',
  date: 'Agosto 2026',
  readTime: '6 min de lectura',
  title: 'La hipótesis de la abuela: ¿por qué la evolución mantendría vivas a las mujeres después de la menopausia?',
  excerpt: '¿Por qué las mujeres dejamos de reproducirnos mientras todavía nos quedan muchas décadas de vida por delante? La lógica evolutiva detrás de la longevidad posmenopáusica y el fitness inclusivo.',
};

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigateHome }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS_DATA.filter((post) => {
    const matchesCat = activeCategory === 'all' || post.category === activeCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesSearch =
      q === '' ||
      post.title.toLowerCase().includes(q) ||
      post.excerpt.toLowerCase().includes(q) ||
      post.categoryLabel.toLowerCase().includes(q);
    return matchesCat && matchesSearch;
  });

  return (
    <div className="w-full bg-surface min-h-screen text-on-surface">
      {/* SECTION 1: HEADER */}
      <section className="w-full py-16 px-gutter flex flex-col items-center text-center relative overflow-hidden">
        <div className="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[340px] bg-gradient-to-b from-primary-fixed/30 via-tertiary-fixed/15 to-transparent blur-3xl pointer-events-none -z-10 rounded-full" />
        <nav aria-label="Breadcrumb" className="mb-4">
          <ol className="flex items-center gap-2 font-label-sm text-label-sm tracking-widest uppercase text-tertiary">
            <li>
              <button onClick={onNavigateHome} className="hover:text-primary transition-colors cursor-pointer">
                Inicio
              </button>
            </li>
            <li className="text-outline-variant font-light">/</li>
            <li aria-current="page" className="text-primary font-bold">Blog</li>
          </ol>
        </nav>
        <div className="flex flex-col items-center gap-3 mb-4">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-tertiary font-bold">
            BIOHACKING & LONGEVIDAD 40+
          </span>
          <span className="inline-flex items-center px-4 py-1 rounded-full font-label-md text-label-md bg-surface-variant text-on-surface-variant shadow-sm">
            Ciencia, Epigenética & Salud Femenina
          </span>
        </div>
        <h1 className="font-headline-lg text-headline-lg lg:text-display-lg lg:font-display-lg text-on-surface tracking-tight mb-5 max-w-3xl">
          Biohacking Femenino 40+
        </h1>
        <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">
          Bienvenidos a mi blog, donde exploramos las últimas tendencias y perspectivas en biohacking, nutrición ortomolecular y medicina del estilo de vida. Información rigurosa para optimizar tu mente y tu biología.
        </p>
      </section>

      {/* SECTION 2: FEATURED ARTICLE */}
      <section className="w-full max-w-[1120px] mx-auto px-gutter mb-16">
        <article className="bg-surface-container-lowest rounded-lg shadow-[0_8px_30px_-4px_rgba(104,83,84,0.07),0_2px_6px_-1px_rgba(32,20,21,0.04)] overflow-hidden transition-all duration-300 hover:shadow-[0_16px_40px_-6px_rgba(104,83,84,0.12)]">
          <div className="flex flex-col lg:flex-row">
            {/* Photo */}
            <div className="lg:w-[55%] relative min-h-[360px] lg:min-h-[440px] overflow-hidden bg-surface-container">
              <img
                alt="Carolina Barcellona - Biohacking y longevidad femenina"
                className="absolute inset-0 w-full h-full object-cover object-top transition-transform duration-700 hover:scale-105"
                src={FEATURED_POST.image}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-on-surface/40 via-transparent to-transparent lg:hidden" />
              <div className="absolute top-4 left-4 lg:hidden flex gap-2">
                <span className="px-3.5 py-1 rounded-full font-label-sm text-label-sm bg-primary text-on-primary shadow-sm font-semibold tracking-wider uppercase">
                  Destacado
                </span>
              </div>
            </div>
            {/* Content */}
            <div className="lg:w-[45%] p-8 lg:p-10 flex flex-col justify-between bg-surface-container-lowest">
              <div>
                <div className="hidden lg:flex items-center gap-2 mb-4">
                  <span className="px-3.5 py-1 rounded-full font-label-sm text-label-sm bg-primary text-on-primary shadow-[0_2px_8px_rgba(185,0,64,0.25)] font-semibold tracking-wider uppercase">
                    Destacado
                  </span>
                  <span className="px-3.5 py-1 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-medium tracking-wide">
                    {FEATURED_POST.category}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-tertiary mb-3 uppercase tracking-wider">
                  <span className="material-symbols-outlined text-[16px]">schedule</span>
                  <span>{FEATURED_POST.date} • {FEATURED_POST.readTime}</span>
                </div>
                <h2 className="font-headline-md text-headline-md text-on-surface font-semibold hover:text-primary transition-colors leading-tight mb-4">
                  {FEATURED_POST.title}
                </h2>
                <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6">
                  {FEATURED_POST.excerpt}
                </p>
              </div>
              <div className="pt-4 flex items-center justify-between">
                <a className="group inline-flex items-center gap-2 font-title-md text-title-md text-primary hover:text-primary-container transition-all" href="#">
                  <span className="font-semibold">Leer artículo completo</span>
                  <span className="material-symbols-outlined text-[20px] transition-transform group-hover:translate-x-1.5">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </section>

      {/* SECTION 3: FILTER BAR & SEARCH */}
      <section className="w-full max-w-[1120px] mx-auto px-gutter mb-12" id="filtro-articulos">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 pb-6 shadow-[0_1px_0_0_rgba(199,164,107,0.25)]">
          {/* Category Chips */}
          <div className="flex flex-wrap items-center gap-2.5" role="tablist" aria-label="Filtro de categorías">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveCategory(cat.key)}
                className={`px-5 py-2.5 rounded-full font-title-md text-body-md font-semibold transition-all shadow-sm focus:outline-none ${
                  activeCategory === cat.key
                    ? 'bg-on-surface text-on-primary hover:opacity-90'
                    : 'font-medium text-on-surface-variant bg-surface-container-lowest hover:bg-surface-variant hover:text-on-surface'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
          {/* Search */}
          <div className="relative w-full lg:w-72">
            <label className="sr-only" htmlFor="search-input">Buscar artículos</label>
            <div className="flex items-center gap-2 bg-surface-container-lowest rounded-full px-4 py-2.5 shadow-[0_2px_10px_rgba(104,83,84,0.06)] focus-within:shadow-[0_0_0_2px_rgba(185,0,64,0.3)] transition-all">
              <span className="material-symbols-outlined text-tertiary text-[20px]">search</span>
              <input
                className="w-full bg-transparent font-body-md text-body-md text-on-surface placeholder:text-outline focus:outline-none"
                id="search-input"
                placeholder="Buscar artículos..."
                type="search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: ARTICLE GRID */}
      <section aria-label="Catálogo de Artículos" className="w-full max-w-[1120px] mx-auto px-gutter mb-20">
        {filteredPosts.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mx-auto mb-6 text-primary">
              <span className="material-symbols-outlined text-[40px]" style={{ fontVariationSettings: "'wght' 200" }}>article</span>
            </div>
            <h2 className="font-headline-md text-headline-md text-on-surface mb-3">No se encontraron artículos</h2>
            <p className="font-body-md text-body-md text-on-surface-variant mb-8 max-w-sm mx-auto">
              Intenta con otra categoría o término de búsqueda.
            </p>
            <button
              onClick={() => { setActiveCategory('all'); setSearchQuery(''); }}
              className="inline-flex items-center gap-2 bg-on-surface text-surface-container-lowest hover:bg-on-surface-variant px-7 py-3 rounded-full font-title-md text-title-md transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[18px]">filter_alt_off</span>
              Restablecer filtros
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <article
                key={post.id}
                className="bg-surface-container-lowest rounded-lg overflow-hidden shadow-[0_8px_30px_-4px_rgba(104,83,84,0.07)] hover:shadow-[0_16px_36px_-6px_rgba(104,83,84,0.12)] hover:-translate-y-1 transition-all duration-300 flex flex-col group"
              >
                <div className="relative aspect-video overflow-hidden bg-surface-container">
                  <img
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    src={post.image}
                    alt={post.title}
                  />
                  <div className="absolute top-3 left-3">
                    <span className="px-3 py-1 rounded-full font-label-sm text-label-sm bg-surface-variant/95 text-on-surface font-semibold shadow-sm backdrop-blur-sm">
                      {post.categoryLabel}
                    </span>
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <div className="font-label-sm text-label-sm uppercase tracking-wider text-tertiary font-semibold mb-2 flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                    <span>{post.date} • {post.readTime}</span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface leading-snug mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                    <a href="#">{post.title}</a>
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed mb-6 line-clamp-2">
                    {post.excerpt}
                  </p>
                  <a className="mt-auto inline-flex items-center gap-1 font-title-md text-body-md text-primary font-semibold group/btn" href="#">
                    <span>Leer artículo completo</span>
                    <span className="material-symbols-outlined text-[18px] transition-transform group-hover/btn:translate-x-1">arrow_forward</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        )}
      </section>

      {/* SECTION 5: NEWSLETTER BAND */}
      <section className="w-full bg-surface-container-high/60 py-16 px-gutter text-center shadow-[inset_0_1px_0_0_rgba(199,164,107,0.25),inset_0_-1px_0_0_rgba(199,164,107,0.25)] relative overflow-hidden">
        <div className="max-w-2xl mx-auto flex flex-col items-center">
          <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-tertiary font-bold mb-3">
            NEWSLETTER CELULAR 40+
          </span>
          <h3 className="font-headline-md text-headline-md text-on-surface font-medium mb-3 max-w-xl">
            Píldoras semanales de ciencia epigenética, cronobiología y recetas funcionales para potenciar tu metabolismo.
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant mb-6">
            Únete a una comunidad de mujeres comprometidas con su longevidad inteligente.
          </p>
          <form className="w-full max-w-md flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
            <input
              className="flex-1 w-full font-body-md text-body-md px-5 py-3 rounded-full bg-surface-container-lowest text-on-surface placeholder:text-outline shadow-[0_2px_8px_rgba(104,83,84,0.06)] focus:outline-none focus:shadow-[0_0_0_2px_rgba(185,0,64,0.3)] transition-all"
              placeholder="Tu correo electrónico"
              required
              type="email"
            />
            <button
              className="inline-flex items-center justify-center font-title-md text-title-md text-on-primary bg-gradient-to-r from-secondary-container to-primary px-7 py-3 rounded-full shadow-[0_8px_24px_-2px_rgba(238,41,92,0.35)] hover:shadow-[0_12px_28px_rgba(238,41,92,0.45)] hover:scale-[1.02] active:scale-[0.98] transition-all whitespace-nowrap"
              type="submit"
            >
              Suscribirme
            </button>
          </form>
          <p className="font-body-sm text-body-sm text-on-surface-variant mt-4">
            Tus datos están seguros y nunca serán cedidos a terceros.
          </p>
        </div>
      </section>

      {/* SECTION 6: FINAL CTA BAND */}
      <section className="w-full bg-inverse-surface py-20 px-gutter text-center text-on-primary relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-gradient-to-b from-primary/30 via-secondary-container/20 to-transparent blur-3xl pointer-events-none rounded-full" />
        <div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
          <span className="font-script-accent text-script-accent text-tertiary-fixed mb-2 block">
            Tu nueva etapa biológica
          </span>
          <h2 className="font-headline-lg text-headline-lg lg:text-display-lg font-normal text-on-primary mb-4 leading-tight">
            Deja de adivinar. Empieza por entender tu cuerpo.
          </h2>
          <p className="font-body-lg text-body-lg text-surface-container-highest max-w-xl mx-auto mb-8">
            El Método Código Diosa combina análisis metabólico de precisión con crononutrición adaptada para devolverte la energía que creías haber perdido.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full max-w-md mx-auto">
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center font-title-md text-title-md text-on-surface bg-surface-container-lowest px-8 py-3.5 rounded-full shadow-lg hover:bg-surface-bright hover:scale-[1.02] active:scale-[0.98] transition-all"
              href="#"
            >
              Aplicar al Método
            </a>
            <a
              className="w-full sm:w-auto inline-flex items-center justify-center font-title-md text-title-md text-on-primary bg-surface-container-lowest/10 hover:bg-surface-container-lowest/20 px-8 py-3.5 rounded-full transition-all duration-200"
              href="https://api.whatsapp.com/send/?phone=34601317959"
              target="_blank"
              rel="noopener noreferrer"
            >
              Reservar llamada de 20 min
            </a>
          </div>
          <div className="flex items-center gap-2 mt-6 font-label-sm text-label-sm text-tertiary-fixed-dim uppercase tracking-wider">
            <span className="material-symbols-outlined text-[16px]">verified</span>
            <span>Sin compromiso al aplicar • Cupos mensuales limitados</span>
          </div>
        </div>
      </section>
    </div>
  );
};
