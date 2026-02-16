"use client";

import React, { useState } from 'react';
import { 
  RiFlashlightFill, RiStarFill, RiStore3Fill, RiTruckFill, 
  RiArrowUpDownLine, RiInformationLine, RiFilter3Line, 
  RiArrowLeftSLine, RiArrowDownSLine, RiCloseLine 
} from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";
import ProductCard from './ProductCard';

const QUICK_FILTERS_DATA = {
  kategori: ["Mobilya", "Salon & Oturma Odası", "Yatak Odası", "Mutfak & Banyo", "Çalışma Odası"],
  marka: ["IKEA", "Vivense", "Bellona", "Enza Home", "Kelebek", "Mudo", "Yataş"],
  yukseklik: ["100 cm", "120 cm", "150 cm", "180 cm", "200 cm"],
  genislik: ["80 cm", "100 cm", "120 cm", "140 cm", "160 cm", "180 cm"]
};

const ProductList = ({ openFilter }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Önerilen Sıralama");
  
  const [activeBottomModal, setActiveBottomModal] = useState(null); // (kategori/marka...)

  const products = [
    {
      id: 1, 
      brand: "Vivense",
      title: "Zümrüt Yeşili Chester Üçlü Koltuk Kadife Dokulu",
      price: "15.499 TL",
      reviews: 124,
      badges: ["Kargo Bedava", "Flaş Ürün"],
      socialProof: "24 saatte 904 kişi inceledi!",
      bottomBarText: "En Çok Satan 10. Ürün",
      bottomBarColor: "yellow",
      campaigns: [
        { text: "Çok Al Az Öde", icon: null, colorClass: "text-orange-500" }
      ]
    },
    {
      id: 2, 
      brand: "Ikea",
      title: "Strandmon Tekli Koltuk Gri Nordvalla Modern",
      price: "6.299 TL",
      reviews: 85,
      badges: ["Kargo Bedava"],
      socialProof: "3.2B kişi favoriledi!",
      bottomBarText: "Flaş Ürün | 13:45:39",
      bottomBarColor: "orange",
      campaigns: []
    },
    {
      id: 3, 
      brand: "Mudo",
      title: "Doğal Ahşap Masif Yemek Sandalyesi Retro",
      price: "2.850 TL",
      reviews: 42,
      badges: ["Avantajlı Ürün"],
      socialProof: "Son 3 günde 1.4B kişi ekledi!",
      campaigns: [
        { text: "Sepette 2.700 TL", icon: null, colorClass: "text-green-600 font-extrabold" }
      ]
    },
    {
      id: 4, 
      brand: "Yataş",
      title: "Çift Kişilik Baza Başlık Yatak Seti Antrasit",
      price: "24.999 TL",
      reviews: 210,
      badges: ["Flaş Ürün"],
      bottomBarText: "En Çok Ziyaret Edilen 2. Ürün",
      bottomBarColor: "yellow",
      campaigns: []
    },
    {
      id: 5, 
      brand: "Kelebek",
      title: "Mermer Desenli Orta Sehpa Metal Ayaklı",
      price: "1.450 TL",
      reviews: 56,
      badges: ["Kargo Bedava"],
      campaigns: []
    },
    {
        id: 6, 
        brand: "Enza",
        title: "Krem Rengi Keten Köşe Koltuk Takımı L Tipi",
        price: "32.500 TL",
        reviews: 18,
        badges: ["Avantajlı Ürün", "Kargo Bedava"],
        bottomBarText: "Süper Fiyat",
        bottomBarColor: "orange",
        campaigns: []
      },
  ];
  
  const sortOptions = ["En Düşük Fiyat", "En Yüksek Fiyat", "En Yeniler", "En Çok Satan", "En Favoriler", "En Çok Değerlendirilen"];

  const closeBottomModal = () => setActiveBottomModal(null);

  return (
    <div className="w-full">
      
      {/* Mobile */}
      <div className="md:hidden flex flex-col bg-white">
        
        <div className="px-4 py-2 border-b border-gray-50">
          <div className="text-[11px] text-gray-400">
            Trendyol <span className="mx-1">&gt;</span> Ev ve Mobilya <span className="mx-1">&gt;</span> <span className="text-gray-800 font-semibold">Mobilya</span>
          </div>
        </div>

        {/* Header */}
        <div className="relative flex items-center justify-center h-12 border-b border-gray-100 px-4">
          {/* Back button */}
            <button 
                className="absolute left-4 text-gray-700 p-1 -ml-1" 
                onClick={() => window.history.back()}
            >
                <RiArrowLeftSLine size={28} />
            </button>

            {/* Title */}
            <div className="flex flex-col items-center">
                <h1 className="text-[15px] font-bold text-gray-900 leading-tight">Mobilya</h1>
                <span className="text-[10px] text-gray-500 font-medium">100.000+ Ürün</span>
            </div>
        </div>

        <div className="flex h-12 border-b border-gray-200">
          {/* Sort */}
            <button 
                onClick={() => setIsSortOpen(true)}
                className="flex-1 flex items-center justify-center gap-2 active:bg-gray-50 transition-colors"
            >
                <RiArrowUpDownLine className="text-orange-500" size={18} />
                <span className="text-[13px] font-semibold text-gray-700">{selectedSort === "Önerilen Sıralama" ? "Önerilen Sıralama" : selectedSort}</span>
            </button>

            <div className="w-[1px] bg-gray-200 h-full"></div>
            {/* Filter */}
            <button 
                onClick={openFilter} // Sidebar'ı açan fonksiyon
                className="flex-1 flex items-center justify-center gap-2 active:bg-gray-50 transition-colors"
            >
                <RiFilter3Line className="text-orange-500" size={18} />
                <span className="text-[13px] font-semibold text-gray-700">Filtrele</span>
                <span className="text-[13px] font-bold text-orange-500">(1)</span>
            </button>
        </div>

        <div className="py-3 pl-4 border-b border-gray-100 overflow-x-auto hide-scrollbar">
            <div className="flex items-center gap-2 pr-4">
                {/* Kategori */}
                <button 
                    onClick={() => setActiveBottomModal('kategori')}
                    className="flex items-center justify-between gap-1 px-3 py-1.5 rounded-full border border-gray-300 bg-white min-w-max"
                >
                    <span className="text-[12px] text-gray-700 font-medium">Kategori</span>
                    <RiArrowDownSLine size={14} className="text-gray-400" />
                </button>

                {/* Marka */}
                <button 
                    onClick={() => setActiveBottomModal('marka')}
                    className="flex items-center justify-between gap-1 px-3 py-1.5 rounded-full border border-gray-300 bg-white min-w-max"
                >
                    <span className="text-[12px] text-gray-700 font-medium">Marka</span>
                    <RiArrowDownSLine size={14} className="text-gray-400" />
                </button>

                {/* Yükseklik */}
                <button 
                    onClick={() => setActiveBottomModal('yukseklik')}
                    className="flex items-center justify-between gap-1 px-3 py-1.5 rounded-full border border-gray-300 bg-white min-w-max"
                >
                    <span className="text-[12px] text-gray-700 font-medium">Yükseklik</span>
                    <RiArrowDownSLine size={14} className="text-gray-400" />
                </button>

                {/* Genişlik */}
                <button 
                    onClick={() => setActiveBottomModal('genislik')}
                    className="flex items-center justify-between gap-1 px-3 py-1.5 rounded-full border border-gray-300 bg-white min-w-max"
                >
                    <span className="text-[12px] text-gray-700 font-medium">Genişlik</span>
                    <RiArrowDownSLine size={14} className="text-gray-400" />
                </button>
            </div>
        </div>
        
        <div className="px-4 pt-4 pb-2">
             <button className="w-full py-3 border border-gray-200 bg-gray-50 rounded-lg text-[13px] font-semibold text-gray-600 shadow-sm">
                Önceki Ürünleri Göster
            </button>
        </div>
      </div>

        <div className="hidden md:block p-4">
        <div className="flex items-center gap-2 mb-4">
          <h1 className="text-xl font-bold text-gray-900">Mobilya</h1>
          <span className="text-sm text-gray-500 mt-1">100.000+ Ürün</span>
        </div>
        
        {/* Desktop filters (summary) */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 z-30 relative">
             <div className="flex items-center gap-2">
                <button onClick={openFilter} className="md:hidden flex items-center gap-1 px-3 py-2 border rounded-md bg-orange-500 text-white text-sm shadow-sm">Filtreler</button>
             </div>
             <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide flex-1">
                <button className="flex items-center gap-1.5 border border-pink-200 bg-pink-50 text-pink-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"><RiFlashlightFill size={14} /> Flaş Ürünler</button>
                <button className="flex items-center gap-1.5 border border-yellow-200 bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"><RiStarFill size={14} /> Yüksek Puanlı Ürünler</button>
                <button className="flex items-center gap-1.5 border border-gray-200 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"><BsBoxSeam size={14} /> Kargo Bedava</button>
                <button className="flex items-center gap-1.5 border border-green-200 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap"><RiTruckFill size={14} /> Hızlı Teslimat</button>
             </div>
             <div className="relative shrink-0">
                <div onClick={() => setIsSortOpen(!isSortOpen)} className="flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer bg-white min-w-40 justify-between">
                  <span className="text-xs text-gray-600 font-medium">{selectedSort}</span>
                  <RiArrowUpDownLine size={14} className="text-orange-500" />
                </div>
            </div>
        </div>
      </div>

        <div className="bg-gray-50/50 p-2 md:p-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 md:gap-4">
            {products.map((product) => (
            <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>


        {/* Modals */}
      {isSortOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-50 transition-opacity" onClick={() => setIsSortOpen(false)}></div>
          <div className="fixed bottom-0 left-0 right-0 bg-white z-[60] rounded-t-xl shadow-[0_-5px_20px_rgba(0,0,0,0.1)] animate-fadeIn">
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <span className="font-bold text-gray-800">Sıralama</span>
                <button onClick={() => setIsSortOpen(false)}><RiCloseLine size={24} className="text-gray-500" /></button>
            </div>
            <div className="flex flex-col">
              <div 
                onClick={() => { setSelectedSort("Önerilen Sıralama"); setIsSortOpen(false); }} 
                className="px-4 py-3 text-sm font-bold text-orange-600 flex items-center justify-between cursor-pointer bg-orange-50/30 border-b border-gray-50"
              >
                <span>Önerilen Sıralama</span>
                <RiInformationLine size={16} />
              </div>
              {sortOptions.map((option) => (
                <div 
                    key={option} 
                    onClick={() => { setSelectedSort(option); setIsSortOpen(false); }} 
                    className={`px-4 py-3 text-sm cursor-pointer border-b border-gray-50 transition-colors ${selectedSort === option ? 'text-orange-600 font-bold' : 'text-gray-700 hover:bg-gray-50'}`}
                >
                  {option}
                </div>
              ))}
            </div>
          </div>
        </>
      )}

      {activeBottomModal && (
        <>
           <div className="fixed inset-0 bg-black/50 z-50 transition-opacity" onClick={closeBottomModal}></div>
           <div className="fixed bottom-0 left-0 right-0 bg-white z-[60] rounded-t-xl shadow-2xl h-[60vh] flex flex-col animate-fadeIn">
              <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
                 <h3 className="font-bold text-base capitalize">{activeBottomModal}</h3>
                 <button onClick={closeBottomModal} className="p-1"><RiCloseLine size={24} className="text-gray-600" /></button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 custom-scrollbar">
                  <div className="flex flex-col gap-3">
                     {/* Eğer QUICK_FILTERS_DATA içinde veri varsa onu basıyoruz */}
                     {QUICK_FILTERS_DATA[activeBottomModal] ? (
                        QUICK_FILTERS_DATA[activeBottomModal].map((item, idx) => (
                           <label key={idx} className="flex items-center gap-3 cursor-pointer group py-1">
                              <input type="checkbox" className="w-5 h-5 accent-orange-600 rounded border-gray-300" />
                              <span className="text-sm text-gray-700 group-hover:text-orange-600">{item}</span>
                           </label>
                        ))
                     ) : (
                        <div className="text-gray-500 text-sm text-center py-10">İçerik yükleniyor...</div>
                     )}
                  </div>
              </div>

              <div className="p-4 border-t border-gray-200 bg-white pb-6">
                 <button 
                    onClick={closeBottomModal}
                    className="w-full bg-orange-600 text-white font-bold py-3 rounded-lg hover:bg-orange-700 transition-colors"
                 >
                    Sonuçları Göster
                 </button>
              </div>
           </div>
        </>
      )}

    </div>
  );
};

export default ProductList;