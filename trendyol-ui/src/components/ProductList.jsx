"use client";

import React, { useState } from 'react';
import { RiFlashlightFill, RiStarFill, RiStore3Fill, RiTruckFill, RiArrowUpDownLine, RiInformationLine, RiCoupon3Fill, RiWallet3Fill } from "react-icons/ri";
import { TbBasketDiscount } from "react-icons/tb";
import { BsBoxSeam } from "react-icons/bs";
import ProductCard from './ProductCard';

const ProductList = ({ openFilter }) => {
  const [isSortOpen, setIsSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState("Önerilen Sıralama");

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
      bottomBarColor: "yellow", // Sarı şerit
      campaigns: [
        { text: "Çok Al Az Öde", icon: <RiWallet3Fill />, colorClass: "text-orange-500" },
        { text: "Sepette %10 İndirim", icon: <TbBasketDiscount />, colorClass: "text-green-600" }
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
      bottomBarText: "Flaş Ürün | 13:45:39", // Resim 2e8dee'deki gibi
      bottomBarColor: "orange", // Turuncu şerit
      campaigns: [
        { text: "200 TL Kupon", icon: <RiCoupon3Fill />, colorClass: "text-pink-600" }
      ]
    },
    {
      id: 3, 
      brand: "Mudo",
      title: "Doğal Ahşap Masif Yemek Sandalyesi Retro",
      price: "2.850 TL",
      reviews: 42,
      badges: ["Avantajlı Ürün"], // Yeşil yuvarlak rozet çıkacak
      socialProof: "Son 3 günde 1.4B kişi ekledi!",
      campaigns: [
        { text: "Sepette 2.700 TL", icon: null, colorClass: "text-green-600 font-extrabold" } // Sadece yeşil fiyat yazısı
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
      campaigns: [
        { text: "Çok Al Az Öde", icon: <RiWallet3Fill />, colorClass: "text-orange-500" }
      ]
    },
    {
      id: 5, 
      brand: "Kelebek",
      title: "Mermer Desenli Orta Sehpa Metal Ayaklı",
      price: "1.450 TL",
      reviews: 56,
      badges: ["Kargo Bedava"],
      campaigns: [
        { text: "Kupon Fırsatı", icon: <RiCoupon3Fill />, colorClass: "text-pink-600" }
      ]
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
    {
      id: 7, 
      brand: "Bellona",
      title: "Vienza 6 Kişilik Açılabilir Yemek Masası",
      price: "18.900 TL",
      reviews: 65,
      badges: [],
      socialProof: "Tükenmek üzere!",
      campaigns: [
        { text: "Sepette %5 İndirim", icon: <TbBasketDiscount />, colorClass: "text-green-600" }
      ]
    },
    {
      id: 8, 
      brand: "Adore",
      title: "Prestige 5 Raflı Kitaplık Metal Gövde",
      price: "3.150 TL",
      reviews: 210,
      badges: ["Flaş Ürün"],
      bottomBarText: "Günün Fırsatı",
      bottomBarColor: "yellow",
      campaigns: [
         { text: "300 TL Kupon", icon: <RiCoupon3Fill />, colorClass: "text-pink-600" },
         { text: "Çok Al Az Öde", icon: <RiWallet3Fill />, colorClass: "text-orange-500" }
      ]
    }
  ];
  
  const sortOptions = ["En Düşük Fiyat", "En Yüksek Fiyat", "En Yeniler", "En Çok Satan", "En Favoriler", "En Çok Değerlendirilen"];

  return (
    <div className="w-full p-4">
      {/* BAŞLIK */}
      <div className="flex items-center gap-2 mb-4">
        <h1 className="text-xl font-bold text-gray-900">Mobilya</h1>
        <span className="text-sm text-gray-500 mt-1">100.000+ Ürün</span>
      </div>

      {/* FİLTRELER */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 z-30 relative">
        <div className="flex items-center gap-2">
          <button onClick={() => { openFilter && openFilter(); }} className="md:hidden flex items-center gap-1 px-3 py-2 border rounded-md bg-orange-500 text-white text-sm shadow-sm hover:bg-orange-600 transition-colors">Filtreler</button>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-hide flex-1">
             <button className="flex items-center gap-1.5 border border-pink-200 bg-pink-50 text-pink-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap hover:bg-pink-100 transition-colors"><RiFlashlightFill size={14} /> Flaş Ürünler</button>
             <button className="flex items-center gap-1.5 border border-yellow-200 bg-yellow-50 text-yellow-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap hover:bg-yellow-100 transition-colors"><RiStarFill size={14} /> Yüksek Puanlı Ürünler</button>
             <button className="flex items-center gap-1.5 border border-blue-200 bg-blue-50 text-blue-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap hover:bg-blue-100 transition-colors"><RiStore3Fill size={14} /> Yüksek Puanlı Satıcılar</button>
             <button className="flex items-center gap-1.5 border border-gray-200 bg-gray-100 text-gray-700 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap hover:bg-gray-200 transition-colors"><BsBoxSeam size={14} /> Kargo Bedava</button>
             <button className="flex items-center gap-1.5 border border-green-200 bg-green-50 text-green-600 px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap hover:bg-green-100 transition-colors"><RiTruckFill size={14} /> Hızlı Teslimat</button>
        </div>
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

      {/* GRID */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
            <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default ProductList;