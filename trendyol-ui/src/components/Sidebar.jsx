"use client";
import React, { useState } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import { RiSearchLine, RiCheckboxCircleFill, RiShieldCheckFill, RiMedalFill, RiInformationLine } from "react-icons/ri";

// AÇILIP KAPANABİLİR BÖLÜM BİLEŞENİ
// Bu bileşen, başlık ve içerik alır. Başlığa tıklanınca aç/kapa yapar.
const CollapsibleSection = ({ title, children, defaultOpen = true, className = "" }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={`border-b border-gray-200 pb-4 ${className}`}>
      <div 
        className="flex items-center justify-between mb-3 cursor-pointer select-none group" 
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Başlık kısmı (String veya Component olabilir) */}
        <div className="font-bold text-sm text-gray-800 flex-1">
          {title}
        </div>
        
        {/* Ok İkonu: Açıkken yukarı, kapalıyken aşağı bakar */}
        <MdKeyboardArrowUp 
          size={20} 
          className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} 
        />
      </div>

      {/* İçerik: isOpen true ise gösterilir */}
      {isOpen && (
        <div className="animate-fadeIn">
          {children}
        </div>
      )}
    </div>
  );
};

const Sidebar = ({ isOpen, closeSidebar }) => {
  const sidebarContent = (
    <div className="pr-2 pt-4 flex flex-col gap-6">
      
      {/* 1. KATEGORİ BÖLÜMÜ */}
      <CollapsibleSection title="Kategori">
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col gap-2 custom-scrollbar">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" defaultChecked />
            <span className="text-[13px] text-orange-600 font-bold">Mobilya</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">Salon & Oturma Odası</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">Antre & Hol</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">Mutfak & Banyo</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">Çalışma Odası</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">Yatak Odası</span>
          </label>
        </div>
      </CollapsibleSection>

      {/* 2. MARKA BÖLÜMÜ */}
      <CollapsibleSection title="Marka">
        {/* Marka Arama Kutusu */}
        <div className="relative mb-3">
          <input 
            type="text" 
            placeholder="Marka Ara" 
            className="w-full bg-gray-50 border border-gray-200 rounded-md py-1.5 pl-8 pr-3 text-xs outline-none focus:border-orange-600"
          />
          <RiSearchLine className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
        </div>
        <div className="cursor-pointer flex flex-col items-center gap-1 mr-35 text-sm">
            <span>Popüler markalar</span>
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["IKEA", "Vivense", "Enza Home", "KOÇTAŞ", "Yataş", "Modalife"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>

          <div className="cursor-pointer flex flex-col items-center gap-1 mr-35 text-sm">
            <span>Tüm markalar</span>
          </div>

          <div className="flex flex-col gap-2">
            {["3A Mobilya", "3art Metal", "4 Baby", "Abre", "Acar", "Artex", "Ata Home", "Aura", "Begüsa", "Belde", "Çelik Ayna", "Depa"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </CollapsibleSection>

      {/* 3. AVANTAJLI ÜRÜNLER */}
      <CollapsibleSection title="Avantajlı Ürünler">
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">Süper Avantajlı Ürün</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">Çok Avantajlı Ürün</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">Avantajlı Ürün</span>
          </label>
        </div>
      </CollapsibleSection>

      {/* 4. YÜKSEKLİK */}
      <CollapsibleSection title="Yükseklik">
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">243 cm</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">210 cm</span>
          </label>
        </div>
      </CollapsibleSection>

       {/* 5. Ölçü */}
       <CollapsibleSection title="Ölçü">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Ölçü Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["160x200", "140x200", "120x200", "90x190", "60x120","150x200", "80x180","200x200",].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 6. Yükseklik (Arama Kutulu) */}
       <CollapsibleSection title="Yükseklik">
        {/* Marka Arama Kutusu */}
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Ölçü Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["100", "101 cm", "105 cm", "106 cm", "108 cm ","11 cm","110cm","111cm","115cm","12 cm"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 7. Ürün Puanı */}
       <CollapsibleSection title="Ürün Puanı">
        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">4.5 Yıldız ve Üzeri</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">4 Yıldız ve Üzeri</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">3 Yıldız ve Üzeri</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors"> 2 Yıldız ve Üzeri</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer group">
            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
            <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">1 Yıldız ve Üzeri</span>
          </label>
        </div>
      </CollapsibleSection>

      {/* 8. Genişlik */}
      <CollapsibleSection title="Genişlik">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Genişlik Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["100", "101 cm", "105 cm", "106 cm", "108 cm ","11 cm","110cm","111cm","115cm","12 cm"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>
        
       {/* 9. Materyal */}
       <CollapsibleSection title="Materyal">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Materyal Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Ahşap", "Alüminyum", "Belirtilmeiş", "Cam", "Demir","Deri","Endüstriyel Ahşap","Hasır","İp"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 10. Derinlik */}
       <CollapsibleSection title="Derinlik">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Derinlik Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["10 cm", "100 cm", "105 cm", "110 cm", "12 cm ","120 cm","14 cm","15 cm","16 cm","18 cm","20 cm"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 11. FİYAT */}
       <CollapsibleSection title="Fiyat">
        {/* Fiyat Inputları */}
        <div className="flex items-center gap-2 mb-3">
          <input type="text" placeholder="En Az" className="w-1/3 bg-gray-50 border border-gray-200 rounded px-2 py-1.5 text-xs outline-none focus:border-orange-600 text-gray-700" />
          <span className="text-gray-400">-</span>
          <input type="text" placeholder="En Çok" className="w-1/3 bg-gray-50 border border-gray-200 rounded px-2 py-1.5 text-xs outline-none focus:border-orange-600 text-gray-700" />
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded p-1.5 transition-colors">
            <RiSearchLine size={14} />
          </button>
        </div>

        {/* Fiyat Aralıkları (Radio Görünümlü) */}
        <div className="flex flex-col gap-2">
          {["0 TL - 350 TL", "350 TL - 2250 TL", "2250 TL - 7000 TL", "7000 TL - 15000 TL", "15000 TL - 50000 TL", "50000 TL - 1000000 TL"].map((range, index) => (
            <label key={index} className="flex items-center gap-2 cursor-pointer group">
              <input type="radio" name="price_range" className="w-4 h-4 accent-orange-600 cursor-pointer" />
              <span className="text-[13px] text-gray-700 group-hover:text-orange-600 transition-colors">{range}</span>
            </label>
          ))}
        </div>
      </CollapsibleSection>

      {/* 12. RENK BÖLÜMÜ */}
      <CollapsibleSection title="Renk">
        {/* Renk Izgarası (Grid) */}
        <div className="grid grid-cols-3 gap-y-4 gap-x-2">
          {[
            { name: "Altın", color: "bg-[#D4AF37]" },
            { name: "Bej", color: "bg-[#F5F5DC]" },
            { name: "Beyaz", color: "bg-white border-gray-200" },
            { name: "Bordo", color: "bg-[#800000]" },
            { name: "Ekru", color: "bg-[#C2B280]" },
            { name: "Gri", color: "bg-gray-400" },
            { name: "Gümüş", color: "bg-[#C0C0C0]" },
            { name: "Haki", color: "bg-[#F0E68C]" },
            { name: "Kahverengi", color: "bg-[#8B4513]" },
            { name: "Kırmızı", color: "bg-red-600" },
            { name: "Lacivert", color: "bg-blue-900" },
            { name: "Mavi", color: "bg-blue-400" },
            { name: "Metalik", color: "bg-gradient-to-br from-gray-200 to-gray-400" },
            { name: "Mor", color: "bg-purple-600" },
            { name: "Pembe", color: "bg-pink-300" },
            { name: "Sarı", color: "bg-yellow-400" },
            { name: "Siyah", color: "bg-black" },
            { name: "Turkuaz", color: "bg-teal-400" },
            { name: "Turuncu", color: "bg-orange-500" },
            { name: "Yeşil", color: "bg-green-500" },
            { name: "Çok Renkli", color: "bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-500" },
            { name: "Krem", color: "bg-[#FFFDD0]" }
          ].map((item) => (
            <div key={item.name} className="flex flex-col items-center cursor-pointer group">
              <div className={`w-8 h-8 rounded-full shadow-sm border border-gray-200 ${item.color} group-hover:ring-2 ring-orange-400 transition-all`}></div>
              <span className="text-[11px] text-gray-600 mt-1 group-hover:text-orange-600 text-center">{item.name}</span>
            </div>
          ))}
        </div>
      </CollapsibleSection>

      {/* 13. SATICI TİPİ (Tooltip Özellikli) - Başlık özelleştirildi */}
      <CollapsibleSection 
        className="overflow-visible z-20" // Tooltip taşabilsin diye
        title={
          <div className="flex items-center gap-2 relative group">
             <span>Satıcı Tipi</span>
             {/* Tooltip Tetikleyici Yazı */}
             <span className="text-[10px] text-orange-500 font-semibold underline cursor-help decoration-dotted" onClick={(e) => e.stopPropagation()}>
               Satıcı Tipi Nedir?
             </span>

             {/* --- TOOLTIP KUTUSU (Hover olunca görünür) --- */}
             <div className="hidden group-hover:block absolute left-0 top-6 w-72 bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] border border-gray-100 rounded-lg p-4 z-50 text-xs text-gray-600 leading-tight">
               {/* Ok İşareti */}
               <div className="absolute -top-2 left-10 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
               
               <div className="flex flex-col gap-3">
                 {/* Madde 1 */}
                 <div>
                   <div className="flex items-center gap-1 font-bold text-blue-500 mb-1">
                     <RiCheckboxCircleFill size={16} /> <span>Onaylanmış Satıcı</span>
                   </div>
                   <p>Türkiye’de veya uluslararası olarak yüksek bilinirliğe sahip markaların resmi satıcılarına “Onaylanmış Satıcı” rozeti verilir.</p>
                 </div>
                 {/* Madde 2 */}
                 <div>
                   <div className="flex items-center gap-1 font-bold text-red-500 mb-1">
                     <RiShieldCheckFill size={16} /> <span>Yetkili Satıcı</span>
                   </div>
                   <p>Onaylanmış markaların resmi satıcılarının satışa sunduğu, ilgili markanın ürünlerine “Yetkili Satıcı” rozeti verilir.</p>
                 </div>
                 {/* Madde 3 */}
                 <div>
                   <div className="flex items-center gap-1 font-bold text-orange-500 mb-1">
                     <RiMedalFill size={16} /> <span>Başarılı Satıcı</span>
                   </div>
                   <p>Trendyol’daki son 6 aylık performansıyla yüksek müşteri memnuniyeti sağlayan, kaliteli hizmet veren satıcılara verilir.</p>
                 </div>
               </div>
             </div>
           </div>
        }
      >
        <div className="flex flex-col gap-2">
          {["Onaylanmış Satıcı", "Başarılı Satıcı", "Yetkili Satıcı"].map((item) => (
            <label key={item} className="flex items-center gap-2 cursor-pointer group">
              <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
              <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{item}</span>
            </label>
          ))}
        </div>
      </CollapsibleSection>


      {/* 14. Fiyat Geçmişi */}
      <CollapsibleSection title="Fiyat Geçmişi">
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Son 10 Gün", "Son 14 Gün", "Son 30 Gün"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 15. Tema / Stil */}
       <CollapsibleSection title="Tema / Stil">
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Country", "İskandinav", "Klasik", "Modern","Retro"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

      {/* 16. FENOMENLERİN SEÇTİKLERİ (Toggle Switch - Zaten tek satır olduğu için Accordion yapılmadı) */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Fenomenlerin Seçtikleri
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

       {/* 17. Model */}
       <CollapsibleSection title="Model">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Model Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Açık Raf", "Alt Modül", "Bank", "Bar Sandalyesi", "Boyuna","Enine","Sandalye","Set","Standart"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 18. Kapak Sayısı */}
       <CollapsibleSection title="Kapak Sayısı">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Kapak Sayısı Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["1", "2", "3", "4", "5","6","7","8","Kapaksız","Sürgülü"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 19. Videolu Ürünler */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Videolu Ürünler
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

       {/* 20. Şekil */}
       <CollapsibleSection title="Şekil">
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Belirtilmemiş", "Dikdörtgen", "Geometrik", "Kare","Oval","Yuvarlak"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 21. Fonksiyon */}
       <CollapsibleSection title="Fonksiyon">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder=" Fonksiyon Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Açık Gardırop", "Açık Raflı", "Açılır Kapanır"," Akıllı", "Aynalı","Aynasız","Belirtilmemiş","Camlı Kapak","Çekmeceli","Kapaklı","Katlanır","Lavabolu","Mekanizmalı", "Raflı", "Sabit"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 22. Toplu Satışa Uygun */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Toplu Satışa Uygun
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

      {/* 23. Çok Al Az Öde */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Çok Al Az Öde
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

       {/* 24. Parça Sayısı */}
       <CollapsibleSection title="Parça Sayısı">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Parça Sayısı Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["1", "1 Parça", "2","3", "4", "6","Belirtilmemiş"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 25. Boyut/Ebat */}
       <CollapsibleSection title="Boyut/Ebat">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Boyut/Ebat Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["100x100", "100x180", "100x40", "100x50", "120x30","120x60","180x50","34x48","40x40","42x42","50x50","60x90","Tek Ebat","Yuvarlak"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 26 Kuponlu Ürünler */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Kuponlu Ürünler
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

      {/* 27. Fırsatlı Ürünler */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Fırsatlı Ürünler
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

      {/* 28. Hediye Paketi*/}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Hediye Paketi
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

       {/* 29. Gövde Materyali (Başlık orjinalinde Tema/Stil kalmış, düzeltildi veya olduğu gibi bırakıldı - Orjinal başlık Tema/Stil idi ama içerik materyal) */}
       <CollapsibleSection title="Gövde Materyali">
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Ahşap", "Kontroplak", "MDF", "Metal","Sünger","Suntalam"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 30. Ayak Malzemesi */}
       <CollapsibleSection title="Ayak Malzemesi">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder=" Ayak Malzemesi Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Ahşap", "Ayaksız", "Belirtilmemiş"," Krom", "Mdf","Metal","Plastik"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 31. Sandalye Kumaşı */}
       <CollapsibleSection title="Sandalye Kumaşı">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder=" Sandalye Kumaşı Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Baby Face", "Belirtilememiş", "Bukle"," Deri", "Diğer","Dokuma","Jerry"," Kadife","Keten"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 32. Kumaş */}
       <CollapsibleSection title="Kumaş">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="  Kumaş Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Baby Face", "Belirtilememiş", "Buklet"," Deri", "Dokuma","Keten"," Kadife","Koton","Kumaş yok"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 33. Sandalye ve Bank Sayısı */}
       <CollapsibleSection title="Sandalye ve Bank Sayısı">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder=" Sandalye ve Bank Sayısı Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["1", "2", "2+1"," 3", "4","4+1","6"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 34. Masa Fonksiyonu (Orjinal başlık Şekil idi, Şekil olarak bırakıldı ama içerik fonksiyon) */}
       <CollapsibleSection title="Masa Fonksiyonu">
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Açılır", "Katlanır", "Sabit", "Yuvarlak"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 35. Sandalye Sayısı (Orjinal başlık Şekil idi, Şekil olarak bırakıldı ama içerik sayı) */}
       <CollapsibleSection title="Sandalye Sayısı">
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["0", "1", "2", "4","6","8"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 36. Masa Ölçüsü */}
       <CollapsibleSection title="Masa Ölçüsü">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder="Masa Ölçüsü Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["100x100", "110x70", "120x70", "120x80", "130x80","160x90","168x90","60x60","60x90","70x110","70x70","80x80","Masasız"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 37. Tip (Orjinal başlık Şekil idi, Şekil olarak bırakıldı ama içerik yatak tipi) */}
       <CollapsibleSection title="Yatak Tipi">
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Bebek Yastığı", "Çift Kişilik", "Çocuk Yatağı", "Duvara Monte","Klasik","Tek Kişilik"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

        {/* 38. Raf Sayısı */}
        <CollapsibleSection title="Raf Sayısı">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder=" Raf Sayısı Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["1", "10", "12","2", "3","4","5","6","7","8"].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

        {/* 38. Sandalye Rengi (Numara tekrarı vardı, düzeltildi) */}
        <CollapsibleSection title="Sandalye Rengi">
        <div className="relative mb-3">
            <input
                type="text"
                placeholder=" Sandalye Rengi Ara"
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
            />
            <RiSearchLine 
                className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" 
                size={16} 
            />
        </div>
        
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
          <div className="flex flex-col gap-2 mb-2">
            {["Antrasit", "Bej", "Beyaz","Cappucine", "Çok Renkli","Gri","Kahverengi","Krem","Siyah",].map((brand) => (
              <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                <span className="text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
              </label>
            ))}
          </div>
        </div>
       </CollapsibleSection>

       {/* 39. Yeni Ürünler */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Yeni Ürünler
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

      {/* 40. Fotoğraflı Yorumlar */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Fotoğraflı Yorumlar
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

      {/* 41. Kampanyalı Ürünler */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Kampanyalı Ürünler
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

      {/* 42. Birlikte Al Kazan */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Birlikte Al Kazan
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

      {/* 43. Trendyol Plus */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Trendyol Plus
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

      {/* 44. Kurumsal Faturaya Uygun */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Kurumsal Faturaya Uygun
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

      {/* 45. Ek Hizmetler */}
      <div className="border-b border-gray-200 pb-4 pt-2">
        <label className="flex items-center justify-between cursor-pointer group">
          <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
            Ek Hizmetler
          </span>
          
          <div className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" className="sr-only peer" />
            <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
          </div>
        </label>
      </div>

      <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-md border border-gray-100 mt-4">
        <RiInformationLine size={16} className="text-gray-400 shrink-0 mt-0.5" />
        <p className="text-[11px] text-gray-500 leading-tight">
            Sponsorlu ürünler reklam niteliğinde olup satıcıları tarafından öne çıkartılmaktadır.
        </p>
      </div>
      
    </div>
  );

  return (
    <>
      {/* Mobile drawer (only on small screens) */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={closeSidebar} />
          <aside className="absolute left-0 top-0 bottom-0 w-80 bg-white p-4 overflow-auto shadow-lg">
            <div className="flex items-center justify-between mb-3">
              <h3 className="font-bold text-sm text-gray-800">Filtreler</h3>
              <button aria-label="Kapat" onClick={closeSidebar} className="text-gray-600 text-xl">×</button>
            </div>
            {sidebarContent}
          </aside>
        </div>
      )}

      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:w-64 shrink-0 pr-2 pt-4 flex-col gap-6">
        {sidebarContent}
      </aside>
    </>
  );
};

export default Sidebar;