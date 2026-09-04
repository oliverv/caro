import React from 'react';
import { useLanguage } from '../context/LanguageContext';

export const Testimonials: React.FC = () => {
  const { t } = useLanguage();
  const tm = t.testimonials;

  return (
    <section id="testimonios" className="w-full bg-[#F6F1EA] py-space-4xl">
      <div className="max-w-[1200px] mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-space-3xl gap-space-md">
          <div>
            <span className="text-[12px] font-bold text-[#FF6161] tracking-[0.2em] uppercase block mb-space-2xs">
              {tm.badge}
            </span>
            <h2
              id="testimonials-title"
              className="font-serif text-[32px] md:text-[44px] text-[#201415] italic font-semibold"
            >
              {tm.title}
            </h2>
            <p className="text-[15px] text-[#685354]">
              {tm.subtitle}
            </p>
          </div>

          <a
            id="google-reviews-link"
            href="https://www.google.com/maps/place/Biolifestyle+Studio+by+Carolina+B.+(Health+%26+Wellness+Coach+%7C+%7C+Biohacker)/@40.463279,-3.803412,17z/data=!3m1!4b1!4m6!3m5!1s0xd41870d8044157f:0x937709a17be439cd!8m2!3d40.463279!4d-3.803412!16s%2Fg%2F11rxnlwt1g"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-[13px] font-bold text-[#EE295C] hover:underline"
          >
            <span>{tm.googleLink}</span>
            <span className="text-[#F69C05] tracking-widest text-base">★★★★★</span>
          </a>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-lg">
          {tm.items.map((item) => (
            <div
              key={item.id}
              id={item.id}
              className="bg-white p-space-xl rounded-2xl fine-border crisp-shadow flex flex-col justify-between hover:crisp-shadow-elevated hover:border-[#F8CFD5] transition-all group"
            >
              <div>
                <div className="flex items-center justify-between mb-space-md">
                  <div className="flex text-[#F69C05] text-[15px] tracking-wider">
                    {'★'.repeat(item.rating)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full bg-[#F8CFD5]/50 text-[10px] text-[#EE295C] uppercase tracking-wider font-bold">
                    {item.program}
                  </span>
                </div>
                <p className="font-serif italic text-[14px] text-[#2B1D1E] mb-space-md leading-relaxed">
                  {item.text}
                </p>
              </div>

              <div className="flex items-center gap-space-sm pt-space-md border-t border-[#C7A46B]/20">
                <div className="w-10 h-10 rounded-full bg-[#F8CFD5] text-[#EE295C] flex items-center justify-center font-bold text-sm">
                  {item.initials}
                </div>
                <div>
                  <p className="font-serif text-[15px] text-[#201415] font-bold">{item.name}</p>
                  <p className="text-[11px] text-[#685354]">{item.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
