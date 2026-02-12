"use client";

import React, { useState } from 'react';
import { RiFlashlightFill, RiStarFill, RiStore3Fill, RiTruckFill, RiArrowUpDownLine, RiInformationLine } from "react-icons/ri";
import { BsBoxSeam } from "react-icons/bs";

// --- YENİ BİLEŞENLERİMİZİ BURAYA ÇAĞIRIYORUZ ---
import StoreWidget from './StoreWidget';
import ProductCard from './ProductCard';

const ProductList = ({ openFilter }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Önerilen Sıralama");

  // --- ÜRÜN VERİLERİ (Artık resim linki olsa da olmasa da gri kutu çıkacak) ---
  const products = [
    { 
      id: 1, 
      brand: "Royal", 
      title: "Elisa 4 Kişilik Mutfak Masası Takımı Teddy01", 
      price: "5.499 TL", 
      reviews: 1240, 
      badges: ["Kargo Bedava"] 
    },
    { 
      id: 2, 
      brand: "Kagu", 
      title: "Mdf Alvin Zigon - Orta Sehpa 3'lü", 
      price: "1.299 TL", 
      reviews: 850, 
      badges: ["En Çok Satan"] 
    },
    { 
      id: 3, 
      brand: "Jest Dekor", 
      title: "Miray Atlantik Çam 5 Katlı Kitaplık", 
      price: "899 TL", 
      reviews: 45, 
      badges: ["Flaş Ürün"] 
    },
    { 
      id: 4, 
      brand: "Modatte", 
      title: "ZENİTH TV ÜNİTESİ RGB LED IŞIKLI", 
      price: "3.450 TL", 
      reviews: 210, 
      badges: ["Kargo Bedava"] 
    },
    // Sayfa dolu görünsün diye aynı ürünleri tekrar ekliyorum
    { id: 5, brand: "Vivense", title: "Leke Tutmaz Kumaş Köşe Koltuk", price: "12.500 TL", reviews: 55, badges: [] },
    { id: 6, brand: "IKEA", title: "LINNMON Çalışma Masası Beyaz", price: "2.100 TL", reviews: 3300, badges: ["Kargo Bedava"] },
    { id: 7, brand: "Bellona", title: "Mavenna Yatak Odası Takımı", price: "24.000 TL", reviews: 12, badges: ["En Çok Satan"] },
    { id: 8, brand: "Kelebek", title: "Angelic Genç Odası Çalışma Masası", price: "4.250 TL", reviews: 89, badges: [] },
  ];
  
  const sortOptions = ["En Düşük Fiyat", "En Yüksek Fiyat", "En Yeniler", "En Çok Satan", "En Favoriler", "En Çok Değerlendirilen"];

  return (
    <div className="w-full p-4">
      
      {/* 1. BAŞLIK */}
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-xl font-bold text-gray-900">Mobilya</h1>
        <span className="text-sm text-gray-500 mt-1">100.000+ Ürün</span>
      </div>

      {/* 2. FİLTRELER VE SIRALAMA */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 z-30 relative">
        <div className="flex items-center gap-2">
          <button onClick={() => { console.log('openFilter clicked'); openFilter && openFilter(); }} className="md:hidden flex items-center gap-1 px-3 py-2 border rounded-md bg-orange-500 text-white text-sm shadow-sm hover:bg-orange-600 transition-colors">Filtreler</button>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide flex-1">
             <button className="flex items-center gap-1.5 border border-pink-200 bg-pink-50 text-pink-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap hover:bg-pink-100 transition-colors"><RiFlashlightFill size={14} /> Flaş Ürünler</button>
             <button className="flex items-center gap-1.5 border border-yellow-200 bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap hover:bg-yellow-100 transition-colors"><RiStarFill size={14} /> Yüksek Puanlı Ürünler</button>
             <button className="flex items-center gap-1.5 border border-blue-200 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap hover:bg-blue-100 transition-colors"><RiStore3Fill size={14} /> Yüksek Puanlı Satıcılar</button>
             <button className="flex items-center gap-1.5 border border-gray-200 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap hover:bg-gray-200 transition-colors"><BsBoxSeam size={14} /> Kargo Bedava</button>
             <button className="flex items-center gap-1.5 border border-green-200 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap hover:bg-green-100 transition-colors"><RiTruckFill size={14} /> Hızlı Teslimat</button>
        </div>

        {/* Sıralama Menüsü */}
        <div className="relative shrink-0">
            <div onClick={() => setIsSortOpen(!isSortOpen)} className={`flex items-center gap-2 border rounded-md px-3 py-2 cursor-pointer bg-white transition-colors min-w-40 justify-between ${isSortOpen ? 'border-orange-500' : 'border-gray-200 hover:border-orange-500'}`}>
                <span className="text-xs text-gray-600 font-medium">{selectedSort}</span>
                <RiArrowUpDownLine size={14} className="text-orange-500" />
            </div>
            {isSortOpen && (
                <>
                    <div className="fixed inset-0 z-40" onClick={() => setIsSortOpen(false)}></div>
                    <div className="absolute right-0 top-full mt-1 w-56 bg-white border border-gray-100 shadow-xl rounded-lg z-50 py-2 flex flex-col">
                        <div onClick={() => { setSelectedSort("Önerilen Sıralama"); setIsSortOpen(false); }} className="px-4 py-2.5 text-xs font-bold text-orange-500 flex items-center justify-between cursor-pointer bg-orange-50/50 hover:bg-orange-50"><span>Önerilen Sıralama</span><RiInformationLine size={14} /></div>
                        {sortOptions.map((option) => (<div key={option} onClick={() => { setSelectedSort(option); setIsSortOpen(false); }} className="px-4 py-2.5 text-xs text-gray-700 hover:text-orange-600 hover:bg-gray-50 cursor-pointer transition-colors font-medium">{option}</div>))}
                    </div>
                </>
            )}
        </div>
      </div>

      {/* 3. ÖNCEKİ ÜRÜNLERİ GÖSTER BUTONU */}
      <div className="w-full border border-gray-200 bg-white rounded-lg p-3 mb-6 flex justify-center items-center cursor-pointer group hover:border-orange-500 transition-colors duration-300">
        <span className="text-sm font-bold text-gray-700 group-hover:text-orange-500 transition-colors">Önceki Ürünleri Göster</span>
      </div>

      {/* 4. MAĞAZA WIDGET'I (Foamly) */}
      <StoreWidget />

      {/* 5. ÜRÜN KARTLARI GRID */}
      {/* grid-cols-2 (mobil) -> grid-cols-4 (geniş ekran) */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>

    </div>
  );
};

export default ProductList;