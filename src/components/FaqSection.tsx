import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

export const FaqSection: React.FC = () => {
  const { t } = useLanguage();
  const f = t.faqs;

  // First item open by default
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({
    'faq-1': true
  });

  const toggleItem = (id: string) => {
    setOpenItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  return (
    <section id="faq" className="w-full bg-white py-space-4xl border-t border-[#C7A46B]/25">
      <div className="max-w-[780px] mx-auto px-margin-mobile">
        <div className="text-center mb-space-3xl">
          <span className="text-[12px] font-bold text-[#EE295C] tracking-[0.2em] uppercase block mb-space-2xs">
            {f.badge}
          </span>
          <h2
            id="faq-title"
            className="font-serif text-[32px] md:text-[44px] text-[#201415] italic font-semibold tracking-tight"
          >
            {f.title}
          </h2>
          <p className="text-[15px] text-[#685354] mt-space-xs">
            {f.subtitle}
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-space-md" id="faq-container">
          {f.items.map((faq) => {
            const isOpen = !!openItems[faq.id];
            return (
              <div
                key={faq.id}
                id={faq.id}
                className="bg-[#F6F1EA] rounded-2xl overflow-hidden fine-border transition-all duration-300"
              >
                <button
                  id={`btn-${faq.id}`}
                  onClick={() => toggleItem(faq.id)}
                  className="w-full flex items-center justify-between p-space-lg text-left cursor-pointer select-none font-serif text-[17px] text-[#201415] font-semibold focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="pr-space-md">{faq.question}</span>
                  <span
                    className={`material-symbols-outlined text-[#FF6161] transition-transform duration-300 shrink-0 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  >
                    expand_more
                  </span>
                </button>

                {isOpen && (
                  <div className="px-space-lg pb-space-lg pt-0 text-[#685354] text-[14px] leading-relaxed border-t border-[#C7A46B]/20 animate-fadeIn">
                    {faq.answerLead && (
                      <p className="pt-space-sm font-semibold text-[#201415] mb-space-xs">
                        {faq.answerLead}
                      </p>
                    )}
                    <p className={!faq.answerLead ? 'pt-space-sm' : ''}>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
