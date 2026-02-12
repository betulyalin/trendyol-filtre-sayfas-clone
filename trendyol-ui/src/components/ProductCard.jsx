"use client";
import React from 'react';
import { RiHeartLine, RiStarFill, RiTruckFill, RiImage2Line } from "react-icons/ri"; // RiImage2Line eklendi

const ProductCard = ({ product }) => {
  return (
    <div className="group relative bg-white border border-gray-200 rounded-lg p-2 hover:shadow-lg transition-all duration-300 cursor-pointer">
      
      {/* --- GÖRSEL ALANI YERİNE GRİ KUTU --- */}
      <div className="relative md:w-39.5 mb-3 overflow-hidden rounded-md bg-gray-100 flex items-center justify-center group-hover:bg-gray-200 transition-colors">
        
        {/* Ortadaki Resim Yok İkonu */}
        <div className="flex flex-col items-center gap-2 text-gray-300">
            <RiImage2Line size={48} />
        </div>
        
        {/* Kalp (Favori) Butonu */}
        <button className="absolute top-2 right-2 w-8 h-8 bg-white rounded-full shadow-sm flex items-center justify-center text-gray-400 hover:text-orange-500 hover:scale-110 transition-all z-10">
            <RiHeartLine size={18} />
        </button>

        {/* Sol Üst Rozetler (Flaş Ürün vb.) */}
        {product.badges && product.badges.includes("Flaş Ürün") && (
             <div className="absolute top-2 left-2 bg-purple-600 text-white text-[10px] font-bold px-2 py-1 rounded-full flex flex-col items-center leading-tight shadow-md z-10">
                <span>FLAŞ</span>
                <span>ÜRÜN</span>
             </div>
        )}
        
        {/* Kargo Bedava Etiketi */}
        {product.badges && product.badges.includes("Kargo Bedava") && (
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-gray-900/80 text-white text-[10px] px-2 py-0.5 rounded flex items-center gap-1 w-max">
                <RiTruckFill /> Kargo Bedava
            </div>
        )}
      </div>

      {/* Bilgi Alanı */}
      <div className="px-1">
        <h3 className="text-xs text-gray-700 leading-tight mb-2 line-clamp-2 h-8">
            <span className="font-bold text-gray-900 mr-1">{product.brand}</span>
            {product.title}
        </h3>

        {/* Yıldızlar ve Değerlendirme */}
        <div className="flex items-center gap-1 mb-2">
            <div className="flex text-yellow-400 text-xs">
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill />
                <RiStarFill className="text-gray-300" />
            </div>
            <span className="text-[10px] text-gray-500">({product.reviews})</span>
        </div>

        {/* Fiyat */}
        <div className="text-orange-600 font-bold text-lg">{product.price}</div>
        
        {/* Kupon / İndirim Etiketi */}
        <div className="mt-2 flex items-center gap-1">
             <span className="text-[9px] text-red-600 border border-red-200 bg-red-50 px-1 rounded">200 TL Kupon</span>
             <span className="text-[9px] text-green-600 border border-green-200 bg-green-50 px-1 rounded">Çok Al Az Öde</span>
        </div>

      </div>

      <button className="w-full mt-3 bg-orange-600 text-white text-xs font-bold py-2 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hidden md:block">
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;