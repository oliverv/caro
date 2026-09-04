import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const b = t.bookingModal;

  const [modality, setModality] = useState<'online' | 'inPerson' | 'express'>('online');
  const [selectedDate, setSelectedDate] = useState<string>('Mañana');
  const [selectedTime, setSelectedTime] = useState<string>('10:30');
  const [priority, setPriority] = useState<string>(b.priorityOptions[0]);
  const [hasLabs, setHasLabs] = useState<string>('yes');
  const [name, setName] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [confirmed, setConfirmed] = useState(false);

  if (!isOpen) return null;

  // Available dates for booking
  const dates = [
    { label: 'Jueves 12', val: 'Jueves 12' },
    { label: 'Viernes 13', val: 'Viernes 13' },
    { label: 'Lunes 16', val: 'Lunes 16' },
    { label: 'Martes 17', val: 'Martes 17' },
    { label: 'Miércoles 18', val: 'Miércoles 18' }
  ];

  const timeSlots = ['09:30', '10:30', '12:00', '16:00', '17:30', '19:00'];

  const handleConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      setConfirmed(true);
    }
  };

  const handleClose = () => {
    setConfirmed(false);
    setName('');
    setPhone('');
    onClose();
  };

  const shareConfirmedViaWhatsApp = () => {
    const text = encodeURIComponent(
      `Hola Carolina, he solicitado una consulta de valoración previa:\n• Nombre: ${name}\n• Modalidad: ${b.modalities[modality].title}\n• Fecha tentativa: ${selectedDate} a las ${selectedTime}\n• Prioridad: ${priority}\n• Analíticas recientes: ${b.recentLabsOptions[hasLabs as 'yes' | 'no' | 'inProgress']}`
    );
    window.open(`https://api.whatsapp.com/send/?phone=34601317959&text=${text}`, '_blank');
  };

  return (
    <div
      id="booking-modal-backdrop"
      onClick={handleClose}
      className="fixed inset-0 bg-[#201415]/75 backdrop-blur-md z-[115] flex items-center justify-center p-4 overflow-y-auto"
    >
      <div
        id="booking-modal-container"
        onClick={(e) => e.stopPropagation()}
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 fine-border shadow-2xl relative max-h-[90vh] overflow-y-auto"
      >
        <button
          id="btn-close-booking"
          onClick={handleClose}
          className="absolute top-5 right-5 w-9 h-9 rounded-full bg-[#F6F1EA] fine-border flex items-center justify-center text-[#685354] hover:text-[#201415] hover:bg-[#F8CFD5]/50 transition-colors"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>

        {!confirmed ? (
          <div>
            <div className="text-center pb-5 border-b border-[#C7A46B]/20 pr-6">
              <span className="px-3 py-1 rounded-full text-[10px] tracking-wider uppercase font-bold bg-[#F8CFD5] text-[#EE295C] inline-block mb-2">
                {b.badge}
              </span>
              <h3 className="font-serif text-[24px] sm:text-[28px] text-[#201415] font-bold">
                {b.title}
              </h3>
              <p className="text-[13px] text-[#685354] mt-1 max-w-md mx-auto">
                {b.subtitle}
              </p>
            </div>

            <form onSubmit={handleConfirm} className="space-y-4 pt-4">
              {/* Modality Selector */}
              <div>
                <label className="block text-[12px] font-bold text-[#201415] mb-2 uppercase tracking-wider">
                  {b.modalityLabel}
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {(['online', 'inPerson', 'express'] as const).map((m) => (
                    <button
                      key={m}
                      type="button"
                      onClick={() => setModality(m)}
                      className={`p-3 rounded-2xl text-left transition-all cursor-pointer ${
                        modality === m
                          ? 'bg-[#F8CFD5]/35 border-2 border-[#EE295C] text-[#201415]'
                          : 'bg-[#F6F1EA]/70 border border-[#C7A46B]/25 text-[#685354] hover:bg-[#F6F1EA]'
                      }`}
                    >
                      <p className="text-[12px] font-bold leading-tight mb-1">{b.modalities[m].title}</p>
                      <p className="text-[10px] text-[#685354] leading-tight">{b.modalities[m].desc}</p>
                    </button>
                  ))}
                </div>
              </div>

              {/* Date & Time Selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[12px] font-bold text-[#201415] mb-1.5 uppercase tracking-wider">
                    {b.dateLabel}
                  </label>
                  <select
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-[13px] text-[#201415] focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                  >
                    {dates.map((d) => (
                      <option key={d.val} value={d.val}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[12px] font-bold text-[#201415] mb-1.5 uppercase tracking-wider">
                    {b.timeLabel}
                  </label>
                  <select
                    value={selectedTime}
                    onChange={(e) => setSelectedTime(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-[13px] text-[#201415] focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                  >
                    {timeSlots.map((slot) => (
                      <option key={slot} value={slot}>
                        {slot} CET (Madrid)
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Primary Challenge */}
              <div>
                <label className="block text-[12px] font-bold text-[#201415] mb-1.5 uppercase tracking-wider">
                  {b.priorityLabel}
                </label>
                <select
                  value={priority}
                  onChange={(e) => setPriority(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-[12.5px] text-[#201415] focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                >
                  {b.priorityOptions.map((opt, i) => (
                    <option key={i} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Recent Labs Radio */}
              <div>
                <label className="block text-[12px] font-bold text-[#201415] mb-1.5 uppercase tracking-wider">
                  {b.recentLabsLabel}
                </label>
                <div className="flex flex-wrap gap-2 text-[12px]">
                  {(['yes', 'no', 'inProgress'] as const).map((optKey) => (
                    <label
                      key={optKey}
                      className={`px-3 py-1.5 rounded-xl fine-border cursor-pointer flex items-center gap-1.5 ${
                        hasLabs === optKey ? 'bg-[#F8CFD5]/50 border-[#EE295C] font-semibold text-[#201415]' : 'bg-[#F6F1EA]'
                      }`}
                    >
                      <input
                        type="radio"
                        name="hasLabs"
                        value={optKey}
                        checked={hasLabs === optKey}
                        onChange={() => setHasLabs(optKey)}
                        className="accent-[#EE295C]"
                      />
                      <span>{b.recentLabsOptions[optKey]}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Contact Information */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div>
                  <label className="block text-[12px] font-bold text-[#201415] mb-1">
                    {b.nameLabel}
                  </label>
                  <input
                    type="text"
                    required
                    placeholder={b.namePlaceholder}
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-[13px] text-[#201415] placeholder-[#685354]/50 focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                  />
                </div>
                <div>
                  <label className="block text-[12px] font-bold text-[#201415] mb-1">
                    {b.phoneLabel}
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder={b.phonePlaceholder}
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-[#F6F1EA] fine-border text-[13px] text-[#201415] placeholder-[#685354]/50 focus:outline-none focus:ring-1 focus:ring-[#EE295C]"
                  />
                </div>
              </div>

              {/* Submit CTA */}
              <div className="pt-3">
                <button
                  type="submit"
                  className="w-full py-3.5 bg-gradient-to-r from-[#FF6161] to-[#EE295C] text-white text-[14px] font-bold rounded-full shadow-lg hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{b.confirmBtn}</span>
                  <span className="material-symbols-outlined text-[18px]">calendar_today</span>
                </button>
              </div>
            </form>
          </div>
        ) : (
          /* Confirmation View */
          <div className="text-center py-6">
            <div className="w-16 h-16 rounded-full bg-[#F8CFD5] text-[#EE295C] mx-auto flex items-center justify-center mb-4">
              <span className="material-symbols-outlined text-[32px]">event_available</span>
            </div>
            <h3 className="font-serif text-[26px] text-[#201415] font-bold mb-2">
              {b.successTitle}
            </h3>
            <p className="text-[14px] text-[#685354] max-w-md mx-auto mb-6 leading-relaxed">
              {b.successDesc}
            </p>

            <div className="p-4 rounded-2xl bg-[#F6F1EA] fine-border text-left mb-6 text-[13px] space-y-1.5">
              <p>
                <strong>Nombre:</strong> {name}
              </p>
              <p>
                <strong>Modalidad:</strong> {b.modalities[modality].title}
              </p>
              <p>
                <strong>Fecha & Hora:</strong> {selectedDate} • {selectedTime} CET
              </p>
            </div>

            <div className="space-y-3">
              <button
                onClick={shareConfirmedViaWhatsApp}
                className="w-full py-3 bg-[#25D366] text-white text-[13px] font-bold rounded-full shadow-md hover:opacity-95 transition-opacity flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[18px]">chat</span>
                <span>{b.whatsappConfirmBtn}</span>
              </button>

              <button
                onClick={handleClose}
                className="w-full py-2.5 text-[12px] text-[#685354] hover:text-[#201415] font-semibold"
              >
                {b.closeBtn}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
