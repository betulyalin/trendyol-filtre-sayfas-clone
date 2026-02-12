"use client";
import React from 'react';
import { RiStore3Fill, RiImage2Line } from "react-icons/ri"; // RiImage2Line eklendi

const StoreWidget = () => {
  const products = [
    { id: 1, title: "Minimalist Yıkanabilir Kumaşlı Köşe Koltuk", price: "15.649 TL" },
    { id: 2, title: "İnci Fitilli Kadife Modüler Köşe Koltuk", price: "12.949 TL" },
    { id: 3, title: "PUZZLE Fitilli Kadife Modüler Çocuk Minderi", price: "7.168 TL" },
    { id: 4, title: "Modüler Çocuk Koltuğu - Fonksiyonel", price: "6.913 TL" }
  ];

  return (
    <div className="border border-gray-200 rounded-lg p-4 mb-6 bg-white shadow-sm">
      {/* Üst Başlık Kısmı */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
             <RiStore3Fill size={20} />
            </div>
            <div>
                <div className="flex items-center gap-2">
                    <span className="font-bold text-gray-800">foamly</span>
                    <span className="bg-green-500 text-white text-[10px] px-1 rounded font-bold">9.8</span>
                </div>
                <span className="text-xs text-green-600 flex items-center gap-1">
                    <RiStore3Fill size={10} /> Mağaza Puanı
                </span>
            </div>
        </div>
        
        <button className="text-orange-600 border border-orange-200 hover:bg-orange-50 px-3 py-1.5 rounded-md text-xs font-bold transition-colors">
            Mağazaya Git
        </button>
      </div>

      {/* Ürünler Listesi (Grid) */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map((item) => (
            <div key={item.id} className="group cursor-pointer">
                {/* --- RESİM YERİNE GRİ KUTU --- */}
                <div className="relative aspect-square rounded-md overflow-hidden mb-2 border border-gray-100 bg-gray-50 flex items-center justify-center group-hover:bg-gray-100 transition-colors">
                    <RiImage2Line className="text-gray-300" size={32} />
                </div>
                
                <h4 className="text-[11px] text-gray-700 font-medium line-clamp-2 leading-tight mb-1 group-hover:text-orange-600 transition-colors">
                    <span className="font-bold text-gray-900">foamly</span> {item.title}
                </h4>
                <div className="text-orange-600 font-bold text-sm">{item.price}</div>
            </div>
        ))}
      </div>
    </div>
  );
};

export default StoreWidget;