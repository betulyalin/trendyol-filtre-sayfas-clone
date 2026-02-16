"use client";
import React, { useState } from 'react';
import { MdKeyboardArrowUp } from "react-icons/md";
import { 
  RiSearchLine, RiCheckboxCircleFill, RiShieldCheckFill, 
  RiMedalFill, RiInformationLine, RiCloseLine, 
  RiArrowRightSLine, RiArrowLeftSLine 
} from "react-icons/ri";

const CollapsibleSection = ({ title, children, defaultOpen = true, className = "" }) => {
    const [isOpen, setIsOpen] = useState(defaultOpen);

    return (
        <div className={`border-b border-gray-200 pb-2 ${className}`}>
            <div 
                className="flex items-center justify-between mb-1 cursor-pointer select-none group" 
                onClick={() => setIsOpen(!isOpen)}
            >
                <div className="font-bold text-base md:text-sm text-gray-800 flex-1">
                    {title}
                </div>
                <MdKeyboardArrowUp 
                    size={20} 
                    className={`text-gray-500 transition-transform duration-300 ${isOpen ? 'rotate-0' : 'rotate-180'}`} 
                />
            </div>
            {isOpen && (
                <div>
                    {children}
                </div>
            )}
        </div>
    );
};

const Sidebar = ({ isOpen, closeSidebar }) => {
  // Mobilde hangi sayfanın açık olduğunu tutan state
  const [activeMobileSection, setActiveMobileSection] = useState(null);

  // --- İÇERİK VERİLERİ ---
  const sections = [
    {
      id: 'kategori',
      title: 'Kategori',
      type: 'collapse',
      content: (
        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col gap-2 custom-scrollbar">
                    <label className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" defaultChecked />
                        <span className="text-base md:text-[13px] text-orange-600 font-bold">Mobilya</span>
                    </label>
          {["Salon & Oturma Odası", "Antre & Hol", "Mutfak & Banyo", "Çalışma Odası", "Yatak Odası"].map((item, i) => (
             <label key={i} className="flex items-center gap-2 cursor-pointer group">
               <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
               <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{item}</span>
             </label>
          ))}
        </div>
      )
    },
    {
      id: 'marka',
      title: 'Marka',
      type: 'collapse',
      content: (
        <>
            <div className="relative mb-3">
            <input 
                type="text" 
                placeholder="Marka Ara" 
                className="w-full bg-gray-50 border border-gray-200 rounded-md py-1.5 pl-8 pr-3 text-xs outline-none focus:border-orange-600"
            />
            <RiSearchLine className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400" size={14} />
            </div>
                        <div className="mt-2 mb-1 text-base md:text-sm text-gray-700 font-semibold">Popüler markalar</div>

                        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                            <div className="flex flex-col gap-2 mb-2">
                                {["IKEA", "Vivense", "Enza Home", "KOÇTAŞ", "Yataş", "Modalife"].map((brand) => (
                                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                                    </label>
                                ))}
                            </div>
                        </div>

                        <div className="mt-2 mb-2 text-base md:text-sm text-gray-700 font-semibold">Tüm markalar</div>

                        <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                            <div className="flex flex-col gap-2 mb-2">
                            {["3A Mobilya", "3art Metal", "4 Baby", "Abre", "Acar", "Artex", "Ata Home", "Aura", "Begüsa", "Belde", "Çelik Ayna", "Depa"].map((brand) => (
                                <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                                    <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                                    <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                                </label>
                            ))}
                            </div>
                        </div>
        </>
      )
    },
    {
        id: 'avantajli',
        title: 'Avantajlı Ürünler',
        type: 'collapse',
        content: (
            <div className="flex flex-col gap-2">
                {["Süper Avantajlı Ürün", "Çok Avantajlı Ürün", "Avantajlı Ürün"].map(item => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{item}</span>
                    </label>
                ))}
            </div>
        )
    },
    {
        id: 'yukseklik',
        title: 'Yükseklik',
        type: 'collapse',
        content: (
            <div className="flex flex-col gap-2">
                {["243 cm", "210 cm"].map(item => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{item}</span>
                    </label>
                ))}
            </div>
        )
    },
    {
        id: 'olcu',
        title: 'Ölçü',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="Ölçü Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["160x200", "140x200", "120x200", "90x190", "60x120","150x200", "80x180","200x200",].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                    </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'yukseklik2', // Unique ID
        title: 'Yükseklik',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="Ölçü Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["100", "101 cm", "105 cm", "106 cm", "108 cm ","11 cm","110cm","111cm","115cm","12 cm"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'urunpuani',
        title: 'Ürün Puanı',
        type: 'collapse',
        content: (
            <div className="flex flex-col gap-2">
                {["4.5 Yıldız ve Üzeri", "4 Yıldız ve Üzeri", "3 Yıldız ve Üzeri", " 2 Yıldız ve Üzeri", "1 Yıldız ve Üzeri"].map(item => (
                    <label key={item} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{item}</span>
                    </label>
                ))}
            </div>
        )
    },
    {
        id: 'genislik',
        title: 'Genişlik',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="Genişlik Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["100", "101 cm", "105 cm", "106 cm", "108 cm ","11 cm","110cm","111cm","115cm","12 cm"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'materyal',
        title: 'Materyal',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="Materyal Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["Ahşap", "Alüminyum", "Belirtilmeiş", "Cam", "Demir","Deri","Endüstriyel Ahşap","Hasır","İp"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'derinlik',
        title: 'Derinlik',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="Derinlik Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["10 cm", "100 cm", "105 cm", "110 cm", "12 cm ","120 cm","14 cm","15 cm","16 cm","18 cm","20 cm"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'fiyat',
        title: 'Fiyat',
        type: 'collapse',
        content: (
            <>
                <div className="flex items-center gap-2 mb-3">
                    <input type="text" placeholder="En Az" className="w-1/3 bg-gray-50 border border-gray-200 rounded px-2 py-1.5 text-xs outline-none focus:border-orange-600 text-gray-700" />
                    <span className="text-gray-400">-</span>
                    <input type="text" placeholder="En Çok" className="w-1/3 bg-gray-50 border border-gray-200 rounded px-2 py-1.5 text-xs outline-none focus:border-orange-600 text-gray-700" />
                    <button className="bg-orange-500 hover:bg-orange-600 text-white rounded p-1.5 transition-colors">
                        <RiSearchLine size={14} />
                    </button>
                </div>
                <div className="flex flex-col gap-2">
                    {["0 TL - 350 TL", "350 TL - 2250 TL", "2250 TL - 7000 TL", "7000 TL - 15000 TL", "15000 TL - 50000 TL", "50000 TL - 1000000 TL"].map((range, index) => (
                        <label key={index} className="flex items-center gap-2 cursor-pointer group">
                        <input type="radio" name="price_range" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-700 group-hover:text-orange-600 transition-colors">{range}</span>
                        </label>
                    ))}
                </div>
            </>
        )
    },
    {
        id: 'renk',
        title: 'Renk',
        type: 'collapse',
        content: (
            <div className="grid grid-cols-3 gap-y-4 gap-x-2">
                {[
                { name: "Altın", color: "bg-[#D4AF37]" }, { name: "Bej", color: "bg-[#F5F5DC]" }, { name: "Beyaz", color: "bg-white border-gray-200" },
                { name: "Bordo", color: "bg-[#800000]" }, { name: "Ekru", color: "bg-[#C2B280]" }, { name: "Gri", color: "bg-gray-400" },
                { name: "Gümüş", color: "bg-[#C0C0C0]" }, { name: "Haki", color: "bg-[#F0E68C]" }, { name: "Kahverengi", color: "bg-[#8B4513]" },
                { name: "Kırmızı", color: "bg-red-600" }, { name: "Lacivert", color: "bg-blue-900" }, { name: "Mavi", color: "bg-blue-400" },
                { name: "Metalik", color: "bg-gradient-to-br from-gray-200 to-gray-400" }, { name: "Mor", color: "bg-purple-600" }, { name: "Pembe", color: "bg-pink-300" },
                { name: "Sarı", color: "bg-yellow-400" }, { name: "Siyah", color: "bg-black" }, { name: "Turkuaz", color: "bg-teal-400" },
                { name: "Turuncu", color: "bg-orange-500" }, { name: "Yeşil", color: "bg-green-500" }, { name: "Çok Renkli", color: "bg-gradient-to-r from-blue-400 via-pink-500 to-yellow-500" },
                { name: "Krem", color: "bg-[#FFFDD0]" }
                ].map((item) => (
                <div key={item.name} className="flex flex-col items-center cursor-pointer group">
                    <div className={`w-8 h-8 rounded-full shadow-sm border border-gray-200 ${item.color} group-hover:ring-2 ring-orange-400 transition-all`}></div>
                    <span className="text-[11px] text-gray-600 mt-1 group-hover:text-orange-600 text-center">{item.name}</span>
                </div>
                ))}
            </div>
        )
    },
    {
        id: 'satici',
        title: <div className="flex items-center gap-2 relative group">
                <span>Satıcı Tipi</span>
                <span className="text-[10px] text-orange-500 font-semibold underline cursor-help decoration-dotted" onClick={(e) => e.stopPropagation()}>
                Satıcı Tipi Nedir?
                </span>
                <div className="hidden group-hover:block absolute left-0 top-6 w-72 bg-white shadow-[0_0_20px_rgba(0,0,0,0.2)] border border-gray-100 rounded-lg p-4 z-50 text-xs text-gray-600 leading-tight">
                <div className="absolute -top-2 left-10 w-4 h-4 bg-white rotate-45 border-t border-l border-gray-100"></div>
                <div className="flex flex-col gap-3">
                    <div>
                    <div className="flex items-center gap-1 font-bold text-blue-500 mb-1">
                        <RiCheckboxCircleFill size={16} /> <span>Onaylanmış Satıcı</span>
                    </div>
                    <p>Türkiye’de veya uluslararası olarak yüksek bilinirliğe sahip markaların resmi satıcılarına “Onaylanmış Satıcı” rozeti verilir.</p>
                    </div>
                    <div>
                    <div className="flex items-center gap-1 font-bold text-red-500 mb-1">
                        <RiShieldCheckFill size={16} /> <span>Yetkili Satıcı</span>
                    </div>
                    <p>Onaylanmış markaların resmi satıcılarının satışa sunduğu, ilgili markanın ürünlerine “Yetkili Satıcı” rozeti verilir.</p>
                    </div>
                    <div>
                    <div className="flex items-center gap-1 font-bold text-orange-500 mb-1">
                        <RiMedalFill size={16} /> <span>Başarılı Satıcı</span>
                    </div>
                    <p>Trendyol’daki son 6 aylık performansıyla yüksek müşteri memnuniyeti sağlayan, kaliteli hizmet veren satıcılara verilir.</p>
                    </div>
                </div>
                </div>
            </div>,
        type: 'collapse',
        className: "overflow-visible z-20",
        content: (
            <div className="flex flex-col gap-2">
                {["Onaylanmış Satıcı", "Başarılı Satıcı", "Yetkili Satıcı"].map((item) => (
                <label key={item} className="flex items-center gap-2 cursor-pointer group">
                    <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{item}</span>
                </label>
                ))}
            </div>
        )
    },
    {
        id: 'fiyatgecmisi',
        title: 'Fiyat Geçmişi',
        type: 'collapse',
        content: (
            <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                <div className="flex flex-col gap-2 mb-2">
                    {["Son 10 Gün", "Son 14 Gün", "Son 30 Gün"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                    </label>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 'tema',
        title: 'Tema / Stil',
        type: 'collapse',
        content: (
            <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                <div className="flex flex-col gap-2 mb-2">
                    {["Country", "İskandinav", "Klasik", "Modern","Retro"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                    </label>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 'fenomen',
        title: 'Fenomenlerin Seçtikleri',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Fenomenlerin Seçtikleri
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'model',
        title: 'Model',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="Model Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["Açık Raf", "Alt Modül", "Bank", "Bar Sandalyesi", "Boyuna","Enine","Sandalye","Set","Standart"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'kapak',
        title: 'Kapak Sayısı',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="Kapak Sayısı Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["1", "2", "3", "4", "5","6","7","8","Kapaksız","Sürgülü"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'videolu',
        title: 'Videolu Ürünler',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Videolu Ürünler
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'sekil',
        title: 'Şekil',
        type: 'collapse',
        content: (
            <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                <div className="flex flex-col gap-2 mb-2">
                    {["Belirtilmemiş", "Dikdörtgen", "Geometrik", "Kare","Oval","Yuvarlak"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                    </label>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 'fonksiyon',
        title: 'Fonksiyon',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder=" Fonksiyon Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["Açık Gardırop", "Açık Raflı", "Açılır Kapanır"," Akıllı", "Aynalı","Aynasız","Belirtilmemiş","Camlı Kapak","Çekmeceli","Kapaklı","Katlanır","Lavabolu","Mekanizmalı", "Raflı", "Sabit"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'toplusatis',
        title: 'Toplu Satışa Uygun',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Toplu Satışa Uygun
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'cokalaode',
        title: 'Çok Al Az Öde',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Çok Al Az Öde
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'parca',
        title: 'Parça Sayısı',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="Parça Sayısı Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["1", "1 Parça", "2","3", "4", "6","Belirtilmemiş"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'boyutebat',
        title: 'Boyut/Ebat',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="Boyut/Ebat Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["100x100", "100x180", "100x40", "100x50", "120x30","120x60","180x50","34x48","40x40","42x42","50x50","60x90","Tek Ebat","Yuvarlak"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'kuponlu',
        title: 'Kuponlu Ürünler',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Kuponlu Ürünler
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'firsatli',
        title: 'Fırsatlı Ürünler',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Fırsatlı Ürünler
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'hediye',
        title: 'Hediye Paketi',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Hediye Paketi
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'govde',
        title: 'Gövde Materyali',
        type: 'collapse',
        content: (
            <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                <div className="flex flex-col gap-2 mb-2">
                    {["Ahşap", "Kontroplak", "MDF", "Metal","Sünger","Suntalam"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                    </label>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 'ayak',
        title: 'Ayak Malzemesi',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder=" Ayak Malzemesi Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["Ahşap", "Ayaksız", "Belirtilmemiş"," Krom", "Mdf","Metal","Plastik"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'sandalyekumas',
        title: 'Sandalye Kumaşı',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder=" Sandalye Kumaşı Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["Baby Face", "Belirtilememiş", "Bukle"," Deri", "Diğer","Dokuma","Jerry"," Kadife","Keten"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'kumas',
        title: 'Kumaş',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="  Kumaş Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["Baby Face", "Belirtilememiş", "Buklet"," Deri", "Dokuma","Keten"," Kadife","Koton","Kumaş yok"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'sandalyevebank',
        title: 'Sandalye ve Bank Sayısı',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder=" Sandalye ve Bank Sayısı Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["1", "2", "2+1"," 3", "4","4+1","6"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'masafonksiyonu',
        title: 'Masa Fonksiyonu',
        type: 'collapse',
        content: (
            <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                <div className="flex flex-col gap-2 mb-2">
                    {["Açılır", "Katlanır", "Sabit", "Yuvarlak"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                    </label>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 'sandalyesayisi',
        title: 'Sandalye Sayısı',
        type: 'collapse',
        content: (
            <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                <div className="flex flex-col gap-2 mb-2">
                    {["0", "1", "2", "4","6","8"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                    </label>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 'masaolcusu',
        title: 'Masa Ölçüsü',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder="Masa Ölçüsü Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["100x100", "110x70", "120x70", "120x80", "130x80","160x90","168x90","60x60","60x90","70x110","70x70","80x80","Masasız"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'yataktipi',
        title: 'Yatak Tipi',
        type: 'collapse',
        content: (
            <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                <div className="flex flex-col gap-2 mb-2">
                    {["Bebek Yastığı", "Çift Kişilik", "Çocuk Yatağı", "Duvara Monte","Klasik","Tek Kişilik"].map((brand) => (
                    <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                        <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                        <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                    </label>
                    ))}
                </div>
            </div>
        )
    },
    {
        id: 'rafsayisi',
        title: 'Raf Sayısı',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder=" Raf Sayısı Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["1", "10", "12","2", "3","4","5","6","7","8"].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'sandalyerengi',
        title: 'Sandalye Rengi',
        type: 'collapse',
        content: (
            <>
                <div className="relative mb-3">
                    <input
                        type="text"
                        placeholder=" Sandalye Rengi Ara"
                        className="w-full bg-gray-50 border border-gray-200 rounded-md py-2 pl-9 pr-3 text-xs outline-none focus:border-orange-600 transition-colors"
                    />
                    <RiSearchLine className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={16} />
                </div>
                <div className="max-h-48 overflow-y-auto pr-2 flex flex-col custom-scrollbar border-b border-gray-100 pb-4">
                    <div className="flex flex-col gap-2 mb-2">
                        {["Antrasit", "Bej", "Beyaz","Cappucine", "Çok Renkli","Gri","Kahverengi","Krem","Siyah",].map((brand) => (
                        <label key={brand} className="flex items-center gap-2 cursor-pointer group">
                            <input type="checkbox" className="w-4 h-4 accent-orange-600 cursor-pointer" />
                            <span className="text-base md:text-[13px] text-gray-600 group-hover:text-orange-600 transition-colors">{brand}</span>
                        </label>
                        ))}
                    </div>
                </div>
            </>
        )
    },
    {
        id: 'yeniurunler',
        title: 'Yeni Ürünler',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Yeni Ürünler
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'fotografli',
        title: 'Fotoğraflı Yorumlar',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Fotoğraflı Yorumlar
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'kampanyali',
        title: 'Kampanyalı Ürünler',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Kampanyalı Ürünler
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'birliktealkazan',
        title: 'Birlikte Al Kazan',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Birlikte Al Kazan
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'trendyolplus',
        title: 'Trendyol Plus',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Trendyol Plus
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'kurumsal',
        title: 'Kurumsal Faturaya Uygun',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Kurumsal Faturaya Uygun
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    },
    {
        id: 'ekhizmetler',
        title: 'Ek Hizmetler',
        type: 'toggle',
        content: (
            <label className="flex items-center justify-between cursor-pointer group">
                <span className="font-bold text-sm text-gray-800 group-hover:text-orange-600 transition-colors">
                Ek Hizmetler
                </span>
                
                <div className="relative inline-flex items-center cursor-pointer">
                <input type="checkbox" className="sr-only peer" />
                <div className="w-9 h-5 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-green-600"></div>
                </div>
            </label>
        )
    }
  ];

  const activeSectionData = activeMobileSection ? sections.find(s => s.id === activeMobileSection) : null;

  return (
    <>
      {/* MOBİL GÖRÜNÜM*/}
      {isOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-white flex flex-col animate-fadeIn">
          
          <div className="flex items-center justify-between px-4 h-12 border-b border-gray-200 shrink-0">
             {activeMobileSection ? (
                 // DETAY SAYFASI HEADER
                 <>
                    <button onClick={() => setActiveMobileSection(null)} className="p-2 -ml-2 text-gray-700">
                        <RiArrowLeftSLine size={24} />
                    </button>
                    <h3 className="font-bold text-sm text-gray-900">{activeSectionData?.title}</h3>
                    <button onClick={() => setActiveMobileSection(null)} className="text-base md:text-[13px] font-semibold text-gray-500 hover:text-orange-600">Temizle</button>
                 </>
             ) : (
                 // ANA LİSTE HEADER (Kapat Butonlu)
                 <>
                    <button onClick={closeSidebar} className="p-2 -ml-2 text-gray-600">
                        <RiCloseLine size={24} />
                    </button>
                    <h3 className="font-bold text-base text-gray-900">Filtrele</h3>
                    <div className="w-8"></div> {/* Ortalama için boşluk */}
                 </>
             )}
          </div>

          {/* 2. İÇERİK KISMI (SCROLLABLE) */}
          <div className="flex-1 overflow-y-auto bg-white pb-24">
             
             {activeMobileSection ? (
                 <div className="p-4 h-full">
                     {activeSectionData?.content}
                 </div>
             ) : (
                 // --- ANA LİSTE GÖRÜNÜMÜ (MENÜ LİSTESİ) ---
                 <>
                    <div className="bg-gray-50 px-4 py-3 border-b border-gray-100 mb-2">
                        <div className="text-[11px] font-bold text-gray-800 mb-2">Seçilen Filtreler</div>
                        <div className="flex items-center gap-2 flex-wrap">
                            <div className="flex items-center gap-1 bg-white border border-gray-200 rounded-full pl-3 pr-2 py-1.5 shadow-sm">
                                <span className="text-[12px] font-medium text-gray-700">Mobilya</span>
                                <RiCloseLine size={16} className="text-gray-400 cursor-pointer" />
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {sections.map((section) => (
                            <div key={section.id} className="border-b border-gray-50 last:border-0">
                                {section.type === 'collapse' ? (
                                    <div 
                                        onClick={() => setActiveMobileSection(section.id)}
                                        className="flex items-center justify-between px-4 py-2 cursor-pointer active:bg-gray-50 transition-colors"
                                    >
                                        <span className="text-base md:text-[13px] font-medium text-gray-700">{section.title}</span>
                                        <RiArrowRightSLine size={18} className="text-gray-400" />
                                    </div>
                                ) : (
                                    // Row Öğeler -> Olduğu yerde durur
                                    <div className="px-4 py-3">
                                        {section.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                     {/* Bilgi Notu */}
                    <div className="flex items-start gap-2 bg-gray-50 p-3 mx-4 rounded-md border border-gray-100 mt-6 mb-4">
                        <RiInformationLine size={16} className="text-gray-400 shrink-0 mt-0.5" />
                        <p className="text-[11px] text-gray-500 leading-tight">
                            Sponsorlu ürünler reklam niteliğinde olup satıcıları tarafından öne çıkartılmaktadır.
                        </p>
                    </div>
                 </>
             )}
          </div>

          {/* 3. FOOTER BUTONU (SABİT) */}
          <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200 shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)] z-50">
             <button 
                onClick={activeMobileSection ? () => setActiveMobileSection(null) : closeSidebar}
                className="w-full bg-[#f27a1a] text-white font-bold text-[14px] py-3.5 rounded-lg hover:bg-[#d86b15] active:scale-[0.99] transition-all"
             >
                {activeMobileSection ? "Uygula" : "Tüm Sonuçları Listele (100.000)"}
             </button>
          </div>
        </div>
      )}

      {/* MASAÜSTÜ SIDEBAR  */}
        <aside className="hidden md:flex md:w-64 shrink-0 pr-2 pt-2 flex-col gap-3">
            <div className="pr-2 pt-2 flex flex-col gap-3">
            {sections.map((section) => (
                // Masaüstünde type='collapse' olanları CollapsibleSection ile, diğerlerini direkt div ile basıyoruz
                section.type === 'collapse' ? (
                    <CollapsibleSection 
                        key={section.id} 
                        title={section.title} 
                        className={section.className || ""}
                        defaultOpen={section.id === 'kategori'} // Sadece ilk kategori açık gelsin
                    >
                        {section.content}
                    </CollapsibleSection>
                ) : (
                     <div key={section.id} className="border-b border-gray-200 pb-4 pt-2">
                        {section.content}
                     </div>
                )
            ))}

            <div className="flex items-start gap-2 bg-gray-50 p-2 rounded-md border border-gray-100 mt-4">
                <RiInformationLine size={16} className="text-gray-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-gray-500 leading-tight">
                    Sponsorlu ürünler reklam niteliğinde olup satıcıları tarafından öne çıkartılmaktadır.
                </p>
            </div>
         </div>
      </aside>
    </>
  );
};

export default Sidebar;