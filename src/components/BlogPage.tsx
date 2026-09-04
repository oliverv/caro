import React, { useState, useMemo } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { BLOG_POSTS } from '../data/blogData';
import { BlogPost } from '../types';

interface BlogPageProps {
  onNavigateHome: () => void;
  onOpenBookingModal: () => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({
  onNavigateHome,
  onOpenBookingModal
}) => {
  const { language } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>('Todos');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeArticle, setActiveArticle] = useState<BlogPost | null>(null);

  const categories = useMemo(() => {
    const cats = new Set(BLOG_POSTS.map((p) => p.category));
    return ['Todos', ...Array.from(cats)];
  }, []);

  const filteredPosts = useMemo(() => {
    return BLOG_POSTS.filter((post) => {
      const matchesCat =
        selectedCategory === 'Todos' || post.category === selectedCategory;
      const matchesSearch =
        searchQuery.trim() === '' ||
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCat && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <article id="blog-page" className="w-full bg-[#F6F1EA] text-[#201415] pb-24">
      {/* Breadcrumb Header */}
      <section className="border-b border-[#C7A46B]/20 bg-white/40 backdrop-blur-sm py-4">
        <div className="max-w-[1200px] mx-auto px-4 md:px-8 flex items-center justify-between text-[13px]">
          <nav className="flex items-center gap-2 text-[#685354]">
            <button
              onClick={onNavigateHome}
              className="hover:text-[#EE295C] transition-colors cursor-pointer flex items-center gap-1"
            >
              <span className="material-symbols-outlined text-[16px]">home</span>
              <span>{language === 'es' ? 'Inicio' : 'Home'}</span>
            </button>
            <span>/</span>
            <span className="text-[#201415] font-semibold">Blog</span>
            {activeArticle && (
              <>
                <span>/</span>
                <span className="text-[#EE295C] truncate max-w-[200px]">
                  {activeArticle.title}
                </span>
              </>
            )}
          </nav>
          <span className="text-[11px] uppercase tracking-widest text-[#C7A46B] font-bold hidden sm:inline-block">
            Biohacking & Longevidad 40+
          </span>
        </div>
      </section>

      {/* Hero Header */}
      {!activeArticle && (
        <header className="max-w-[1200px] mx-auto px-4 md:px-8 pt-12 md:pt-16 pb-8">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F8CFD5]/50 text-[#EE295C] text-[12px] font-bold tracking-widest uppercase mb-4 fine-border">
            <span>{language === 'es' ? 'Ciencia, Epigenética & Salud Femenina' : 'Science, Epigenetics & Women\'s Health'}</span>
          </div>

          <h1 className="font-serif text-3xl sm:text-5xl font-bold text-[#201415] tracking-tight">
            Biohacking Femenino 40+
          </h1>

          <p className="mt-4 text-[16px] sm:text-lg text-[#685354] max-w-3xl leading-relaxed">
            {language === 'es'
              ? 'Bienvenidos a mi blog, donde exploramos las últimas tendencias y perspectivas en biohacking, nutrición ortomolecular y medicina del estilo de vida. Información rigurosa para optimizar tu mente y tu biología.'
              : 'Welcome to my blog, where we explore the latest insights in biohacking, orthomolecular nutrition, and lifestyle medicine for women.'}
          </p>

          {/* Search & Category Filter */}
          <div className="mt-8 flex flex-col md:flex-row gap-4 justify-between items-stretch md:items-center">
            {/* Category Pills */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-[12px] font-bold tracking-wide whitespace-nowrap transition-all cursor-pointer ${
                    selectedCategory === cat
                      ? 'bg-[#EE295C] text-white shadow-sm'
                      : 'bg-white fine-border text-[#685354] hover:bg-[#F8CFD5]/30'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative min-w-[260px]">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={language === 'es' ? 'Buscar artículos...' : 'Search articles...'}
                className="w-full pl-9 pr-4 py-2 text-sm bg-white fine-border rounded-full focus:outline-none focus:ring-2 focus:ring-[#EE295C]/40 text-[#201415]"
              />
              <span className="material-symbols-outlined text-[18px] text-[#685354] absolute left-3 top-2.5">
                search
              </span>
            </div>
          </div>
        </header>
      )}

      {/* Main Grid View */}
      {!activeArticle && (
        <section className="max-w-[1200px] mx-auto px-4 md:px-8 mt-6">
          {filteredPosts.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-3xl fine-border p-8">
              <span className="material-symbols-outlined text-4xl text-[#C7A46B] mb-2">
                article
              </span>
              <p className="text-[#201415] font-serif text-lg font-bold">
                No se encontraron artículos
              </p>
              <p className="text-sm text-[#685354] mt-1">
                Intenta con otra categoría o término de búsqueda.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory('Todos');
                  setSearchQuery('');
                }}
                className="mt-4 px-4 py-2 rounded-full bg-[#EE295C] text-white text-xs font-bold"
              >
                Restablecer filtros
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <article
                  key={post.id}
                  onClick={() => {
                    setActiveArticle(post);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="bg-white rounded-3xl fine-border shadow-xs hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col cursor-pointer group hover:-translate-y-1"
                >
                  {/* Article Thumbnail */}
                  <div className="h-52 w-full overflow-hidden bg-[#201415] relative">
                    <img
                      src={post.imageUrl}
                      alt={post.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-3 left-3 bg-[#201415]/80 backdrop-blur-sm text-[#F8CFD5] text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      {post.category}
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-2 text-[11px] text-[#C7A46B] font-semibold mb-2">
                        <span>{post.date}</span>
                        <span>•</span>
                        <span>{post.readTime}</span>
                      </div>

                      <h2 className="font-serif text-[18px] font-bold text-[#201415] group-hover:text-[#EE295C] transition-colors line-clamp-2 leading-snug">
                        {post.title}
                      </h2>

                      <p className="text-[13px] text-[#685354] mt-2 line-clamp-3 leading-relaxed">
                        {post.excerpt}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-[#C7A46B]/15 flex items-center justify-between text-[12px] font-bold text-[#EE295C]">
                      <span>Leer artículo completo</span>
                      <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                        arrow_forward
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>
      )}

      {/* Single Article Reader View */}
      {activeArticle && (
        <section className="max-w-[840px] mx-auto px-4 md:px-8 pt-10">
          <button
            onClick={() => setActiveArticle(null)}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#EE295C] hover:text-[#201415] transition-colors mb-6 cursor-pointer"
          >
            <span className="material-symbols-outlined text-[18px]">arrow_back</span>
            <span>Volver a todos los artículos</span>
          </button>

          <header className="space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#F8CFD5]/50 text-[#EE295C] text-[11px] font-bold uppercase tracking-wider">
              {activeArticle.category}
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#201415] leading-tight">
              {activeArticle.title}
            </h1>

            <div className="flex items-center gap-3 text-xs text-[#685354] pb-4 border-b border-[#C7A46B]/20">
              <span className="font-bold text-[#201415]">Por Carolina Barcellona</span>
              <span>•</span>
              <span>{activeArticle.date}</span>
              <span>•</span>
              <span>{activeArticle.readTime}</span>
            </div>
          </header>

          {/* Featured Image */}
          <div className="my-8 rounded-3xl overflow-hidden fine-border shadow-lg bg-[#201415] max-h-[440px]">
            <img
              src={activeArticle.imageUrl}
              alt={activeArticle.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Key Takeaways Box */}
          <div className="bg-[#F8CFD5]/25 border border-[#EE295C]/20 rounded-2xl p-6 mb-8">
            <h3 className="font-serif text-[16px] font-bold text-[#201415] flex items-center gap-2 mb-3">
              <span className="material-symbols-outlined text-[#EE295C] text-[20px]">
                lightbulb
              </span>
              <span>Puntos Clave & Conclusiones</span>
            </h3>
            <ul className="space-y-2 text-[14px] text-[#201415]">
              {activeArticle.keyTakeaways.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-[#EE295C] font-bold mt-0.5">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Article Full Body */}
          <div className="space-y-6 text-[16px] text-[#201415] leading-relaxed font-light">
            {activeArticle.content.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          {/* Scientific Reference */}
          {activeArticle.scientificReference && (
            <div className="mt-10 p-4 rounded-xl bg-white fine-border text-xs text-[#685354]">
              <span className="font-bold text-[#201415] block mb-1">
                Referencia Científica / Publicación:
              </span>
              <cite className="italic">{activeArticle.scientificReference}</cite>
            </div>
          )}

          {/* Author Card & CTA */}
          <div className="mt-12 p-8 rounded-3xl bg-white fine-border shadow-md flex flex-col sm:flex-row items-center gap-6">
            <img
              src="https://carolinabarcellona.com/wp-content/uploads/2025/03/image00022-768x1152.jpeg"
              alt="Carolina Barcellona"
              referrerPolicy="no-referrer"
              className="w-20 h-20 rounded-full object-cover object-top fine-border shrink-0"
            />
            <div className="flex-1 text-center sm:text-left">
              <p className="font-serif text-lg font-bold text-[#201415]">
                Carolina Barcellona
              </p>
              <p className="text-xs text-[#EE295C] font-semibold">
                Medicina del Estilo de Vida (UCM) & Nutrición Ortomolecular (UCAM)
              </p>
              <p className="text-xs text-[#685354] mt-2">
                Acompaño a mujeres a descifrar su código biológico y vivir con energía desbordante.
              </p>
            </div>
            <button
              onClick={onOpenBookingModal}
              className="px-5 py-2.5 rounded-full bg-[#EE295C] text-white text-xs font-bold hover:bg-[#FF6161] transition-all cursor-pointer shrink-0"
            >
              Reservar Cita
            </button>
          </div>
        </section>
      )}
    </article>
  );
};
