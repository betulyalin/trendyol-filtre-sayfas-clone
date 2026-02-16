"use client";
import React from 'react';
import { RiHeartLine, RiStarFill, RiTruckFill, RiFireFill, RiCoupon3Fill, RiWallet3Fill, RiTimeFill } from "react-icons/ri";
import { TbBasketDiscount } from "react-icons/tb";

export const FURNITURE_IMAGES = [
  "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1567016432779-094069958ea5?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1592078615290-033ee584e267?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1505693314120-0d443867891c?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?auto=format&fit=crop&q=80&w=600",
  "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=600",
];

const ProductCard = ({ product }) => {
  const imageIndex = ((product.id - 1) % FURNITURE_IMAGES.length);
  const selectedImage = FURNITURE_IMAGES[imageIndex];

  return (
    <div className="group flex flex-col bg-white border border-transparent hover:border-gray-200 hover:shadow-xl rounded-lg p-2 transition-all duration-300 cursor-pointer h-full relative">
      
      <div className="relative w-full aspect-[2/3] rounded-md overflow-hidden bg-gray-100 mb-2">
        <img 
          src={selectedImage}
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />

        <button className="absolute top-2 right-2 w-7 h-7 bg-white rounded-full shadow-md flex items-center justify-center text-gray-400 hover:text-orange-600 transition-colors z-20">
            <RiHeartLine size={16} />
        </button>

        {product.badges.includes("Flaş Ürün") && (
             <div className="absolute top-2 left-2 w-10 h-10 bg-purple-600 text-white rounded-full flex flex-col items-center justify-center shadow-md z-10 border-2 border-white">
                <span className="text-[8px] font-bold leading-none">FLAŞ</span>
                <span className="text-[8px] font-bold leading-none">ÜRÜN</span>
             </div>
        )}
        {product.badges.includes("Avantajlı Ürün") && (
             <div className="absolute top-2 left-2 w-10 h-10 bg-green-600 text-white rounded-full flex flex-col items-center justify-center shadow-md z-10 border-2 border-white">
                <span className="text-[7px] font-bold leading-none text-center">AVANTAJLI</span>
                <span className="text-[8px] font-bold leading-none">ÜRÜN</span>
             </div>
        )}

        {product.bottomBarText && (
          <div className={`absolute bottom-0 left-0 right-0 py-1 px-2 flex items-center justify-center gap-1 text-[9px] font-bold text-white z-10 ${product.bottomBarColor === 'yellow' ? 'bg-yellow-500' : 'bg-orange-500'}`}>
             <RiTimeFill size={10} />
             <span className="truncate">{product.bottomBarText}</span>
          </div>
        )}
      </div>

      {/* --- 2. BİLGİ ALANI --- */}
      <div className="flex flex-col flex-1 px-1">
        
        {/* Başlık */}
        <div className="mb-1 h-8 overflow-hidden">
             <h3 className="text-xs text-gray-700 leading-tight line-clamp-2">
                <span className="font-bold text-gray-900 mr-1">{product.brand}</span>
                {product.title}
             </h3>
        </div>

        {product.socialProof && (
          <div className="flex items-center gap-1 mb-1.5">
            <RiFireFill className="text-red-500" size={12} />
            <span className="text-[10px] text-gray-500 font-medium">{product.socialProof}</span>
          </div>
        )}

        <div className="flex items-center gap-2 mb-2">
            <div className="flex items-center gap-0.5">
              <div className="flex text-yellow-400 text-[10px]">
                  <RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill /><RiStarFill className="text-gray-200" />
              </div>
              <span className="text-[9px] text-gray-400">({product.reviews})</span>
            </div>
            
            {product.badges.includes("Kargo Bedava") && (
              <div className="flex items-center gap-0.5 text-[9px] text-gray-600 font-semibold bg-gray-100 px-1 py-0.5 rounded">
                <RiTruckFill size={10} />
                <span>Kargo Bedava</span>
              </div>
            )}
        </div>

        {/* Fiyat Alanı */}
        <div className="mt-auto">
            <div className="flex flex-col gap-0.5 mb-1.5 min-h-[16px]">
              {product.campaigns && product.campaigns.map((camp, idx) => (
                <div key={idx} className={`flex items-center gap-1 text-[10px] font-bold ${camp.colorClass}`}>
                  {camp.icon}
                  <span>{camp.text}</span>
                </div>
              ))}
            </div>

            <div className="text-orange-600 font-bold text-lg leading-none">
                {product.price}
            </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;