"use client";

import React, { useState } from 'react';
import { RiSearchLine, RiUserLine, RiHeartLine, RiShoppingCartLine, RiMenuLine } from "react-icons/ri";
import { TbWoman, TbMan, TbBabyCarriage, TbHome2, TbBasket, TbPerfume, TbShoe, TbDeviceMobile, TbBallFootball, TbClock, TbBook } from "react-icons/tb";

const MENU_DATA = [
  {
    id: 1,
    title: "Kadın",
    icon: <TbWoman size={20} />,
    url: "/kadin",
    columns: [
      {
        title: "Giyim",
        items: ["Elbise", "Tişört", "Gömlek", "Kot Pantolon", "Ceket", "Mont", "Bluz", "Etek", "Şort"]
      },
      {
        title: "Ayakkabı",
        items: ["Topuklu Ayakkabı", "Sneaker", "Bot & Çizme", "Günlük Ayakkabı", "Babet", "Sandalet"]
      },
      {
        title: "Aksesuar & Çanta",
        items: ["Çanta", "Saat", "Takı", "Şapka", "Cüzdan", "Güneş Gözlüğü"]
      },
      {
        title: "İç Giyim",
        items: ["Pijama Takımı", "Gecelik", "Sütyen", "İç Çamaşırı", "Çorap"]
      },
      {
        title: "Kozmetik",
        items: ["Parfüm", "Göz Makyajı", "Cilt Bakımı", "Saç Bakımı"]
      },
      {
        title: "Spor & Outdoor",
        items: ["Sweatshirt", "Tişört", "Tayt", "Eşofman"]
      }
    ]
  },
  {
    id: 2,
    title: "Erkek",
    icon: <TbMan size={20} />,
    url: "/erkek",
    columns: [
      {
        title: "Giyim",
        items: ["Tişört", "Şort", "Gömlek", "Eşofman", "Pantolon", "Ceket", "Takım Elbise"]
      },
      {
        title: "Ayakkabı",
        items: ["Spor Ayakkabı", "Günlük Ayakkabı", "Klasik", "Bot", "Krampon"]
      },
      {
        title: "Kişisel Bakım",
        items: ["Parfüm", "Tıraş Sonrası", "Tıraş Bıçağı", "Deodorant"]
      },
      {
        title: "Saat & Aksesuar",
        items: ["Saat", "Güneş Gözlüğü", "Cüzdan", "Kemer", "Çanta"]
      }
    ]
  },
  {
    id: 3,
    title: "Anne & Çocuk",
    icon: <TbBabyCarriage size={20} />,
    url: "/anne-cocuk",
    columns: [
      {
        title: "Bebek",
        items: ["Bebek Takımları", "Ayakkabı", "Hastane Çıkışı", "Yenidoğan", "Tulum"]
      },
      {
        title: "Çocuk Giyim",
        items: ["Kız Çocuk Elbise", "Erkek Çocuk Sweatshirt", "Eşofman", "Spor Ayakkabı"]
      },
      {
        title: "Oyuncak",
        items: ["Eğitici Oyuncaklar", "Oyuncak Araba", "Bebek", "Kutu Oyunları"]
      },
      {
        title: "Bebek Bakım",
        items: ["Bebek Bezi", "Islak Mendil", "Bebek Şampuanı", "Biberon & Emzik"]
      }
    ]
  },
  {
    id: 4,
    title: "Ev & Yaşam",
    icon: <TbHome2 size={20} />,
    url: "/ev-yasam",
    columns: [
      {
        title: "Sofra & Mutfak",
        items: ["Yemek Takımı", "Tencere Seti", "Tava", "Çatal Kaşık Bıçak"]
      },
      {
        title: "Ev Tekstili",
        items: ["Nevresim Takımı", "Yastık & Yorgan", "Havlu", "Halı & Kilim", "Perde"]
      },
      {
        title: "Mobilya",
        items: ["Koltuk Takımı", "Yatak Odası", "Gardırop", "Çalışma Masası"]
      },
      {
        title: "Aydınlatma",
        items: ["Avize", "Lambader", "Masa Lambası", "Ampul"]
      }
    ]
  },
  {
    id: 5,
    title: "Süpermarket",
    icon: <TbBasket size={20} />,
    url: "/supermarket",
    columns: [
      { title: "Deterjan", items: ["Çamaşır Deterjanı", "Bulaşık Deterjanı"] },
      { title: "Gıda", items: ["Çay & Kahve", "Yağ", "Bakliyat", "Atıştırmalık"] },
      { title: "Bebek Bakım", items: ["Bebek Bezi", "Islak Mendil"] }
    ]
  },
  {
    id: 6,
    title: "Kozmetik",
    icon: <TbPerfume size={20} />,
    url: "/kozmetik",
    columns: [
      { title: "Makyaj", items: ["Göz Makyajı", "Ten Makyajı", "Ruj"] },
      { title: "Cilt Bakımı", items: ["Yüz Kremi", "Yüz Temizleme", "Maske"] },
      { title: "Parfüm", items: ["Kadın Parfüm", "Erkek Parfüm"] }
    ]
  },
  {
    id: 7,
    title: "Ayakkabı & Çanta",
    icon: <TbShoe size={20} />,
    url: "/ayakkabi-canta",
    columns: [
      { title: "Kadın Ayakkabı", items: ["Spor Ayakkabı", "Topuklu", "Bot"] },
      { title: "Erkek Ayakkabı", items: ["Spor Ayakkabı", "Klasik", "Bot"] },
      { title: "Çanta", items: ["Omuz Çantası", "Sırt Çantası", "Cüzdan"] }
    ]
  },
  {
    id: 8,
    title: "Elektronik",
    icon: <TbDeviceMobile size={20} />,
    url: "/elektronik",
    columns: [
      { title: "Bilgisayar", items: ["Laptop", "Tablet", "Monitör"] },
      { title: "Telefon", items: ["Cep Telefonu", "Akıllı Saat", "Kulaklık"] },
      { title: "Ev Aletleri", items: ["Süpürge", "Ütü", "Kahve Makinesi"] }
    ]
  },
  {
    id: 9,
    title: "Spor & Outdoor",
    icon: <TbBallFootball size={20} />,
    url: "/spor-outdoor",
    columns: [
      { title: "Giyim", items: ["Spor Tişört", "Eşofman Takımı", "Tayt"] },
      { title: "Ayakkabı", items: ["Sneaker", "Koşu Ayakkabısı", "Krampon"] },
      { title: "Ekipman", items: ["Pilates", "Kamp", "Bisiklet"] }
    ]
  },
  {
    id: 10,
    title: "Saat & Aksesuar",
    icon: <TbClock size={20} />,
    url: "/saat-aksesuar",
    columns: [
      { title: "Saat", items: ["Kol Saati", "Duvar Saati", "Aksesuar Saat"] },
      { title: "Takı", items: ["Kolye", "Küpe", "Yüzük", "Bileklik"] },
      { title: "Gözlük", items: ["Güneş Gözlüğü", "Numaralı Gözlük"] }
    ]
  },
  {
    id: 11,
    title: "Kitap & Kırtasiye",
    icon: <TbBook size={20} />,
    url: "/kitap",
    columns: [
      { title: "Kitap", items: ["Edebiyat", "Çocuk", "Sınav Hazırlık"] },
      { title: "Kırtasiye", items: ["Defter", "Kalem", "Çanta"] },
      { title: "Hobi", items: ["Puzzle", "Kutu Oyunları"] }
    ]
  }
];

const Header = () => {
  const [activeCategory, setActiveCategory] = useState(MENU_DATA[0]);

  return (
    <div className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Mobile Header - visible only on small screens */}
      <div className="md:hidden flex items-center justify-between px-4 h-14 border-b">
        <div className="text-2xl font-bold text-black tracking-tight cursor-pointer">
          trendyol
        </div>
        <div className="flex items-center gap-4 text-gray-700">
          <RiSearchLine size={22} />
          <RiUserLine size={22} />
          <RiHeartLine size={22} />
          <div className="relative">
            <RiShoppingCartLine size={22} />
          </div>
        </div>
      </div>

      <div className="hidden md:block">
        {/* EN ÜST SATIR */}
        <div className="border-b border-transparent">
          <div className="max-w-[1600px] mx-auto px-3 md:px-4 py-1 flex justify-end items-center gap-4 text-[11px] text-gray-500">
            <a href="#" className="hover:text-[#f27a1a] transition-colors">İndirim Kuponlarım</a>
            <a href="#" className="hover:text-[#f27a1a] transition-colors">Trendyol'da Satış Yap</a>
            <a href="#" className="hover:text-[#f27a1a] transition-colors">Hakkımızda</a>
            <a href="#" className="hover:text-[#f27a1a] transition-colors">Yardım & Destek</a>
          </div>
        </div>

        {/* ÜST NAVBAR */}
        <div className="border-b border-transparent">
          <div className="max-w-[1600px] mx-auto px-3 md:px-4 h-20 flex items-center justify-between gap-8">
            <div className="text-2xl md:text-3xl font-bold text-black tracking-tight cursor-pointer whitespace-nowrap">
              trendyol
            </div>
            <div className="flex-[3] max-w-4xl relative">
              <button className="absolute left-3 top-1/2 -translate-y-1/2 text-[#f27a1a] hover:text-[#e06d0e] transition-colors">
                <RiSearchLine size={24} />
              </button>
              <input 
                type="text" 
                placeholder="Ürün, kategori veya marka ara" 
                className="w-full h-11 bg-[#f3f3f3] text-sm pl-12 pr-4 rounded-lg border border-transparent focus:outline-none focus:bg-white focus:border-[#f27a1a] transition-all text-gray-700 placeholder-gray-500"
              />
            </div>
            <div className="flex items-center gap-6 text-gray-700 font-semibold text-sm">
              <div className="group relative cursor-pointer hover:text-[#f27a1a]">
                <div className="flex flex-col items-center gap-1">
                  <RiUserLine size={22} />
                  <span className="text-[11px]">Hesabım</span>
                </div>
                <div className="hidden group-hover:block absolute top-full right-0 pt-2 z-50">
                  <div className="bg-white border border-gray-200 shadow-lg rounded-md p-4 w-56 relative">
                    <div className="absolute -top-1.5 right-6 w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45"></div>
                    <div className="text-xs text-gray-600 mb-3">Merhaba, giriş yapın veya hesap oluşturun!</div>
                    <button className="w-full bg-[#f27a1a] text-white font-bold py-2.5 rounded text-sm mb-2 hover:bg-[#e06d0e] transition-colors">Giriş Yap</button>
                    <button className="w-full border border-gray-300 text-gray-700 font-bold py-2.5 rounded text-sm hover:border-[#f27a1a] hover:text-[#f27a1a] transition-colors">Kayıt Ol</button>
                  </div>
                </div>
              </div>
              <div className="cursor-pointer hover:text-[#f27a1a] flex flex-col items-center gap-1">
                <RiHeartLine size={22} />
                <span className="text-[11px]">Favorilerim</span>
              </div>
              <div className="cursor-pointer hover:text-[#f27a1a] flex flex-col items-center gap-1 relative">
                <RiShoppingCartLine size={22} />
                <span className="text-[11px]">Sepetim</span>
              </div>
            </div>
          </div>
        </div>

        {/* ALT KATEGORİ MENÜSÜ */}
        <div className="bg-white">
          <div className="max-w-[1600px] mx-auto px-3 md:px-4 h-12 flex items-center text-sm font-semibold text-gray-700">
            <div className="group h-full flex items-center mr-8">
              <div className="cursor-pointer hover:text-[#f27a1a] flex items-center h-full gap-2 px-2">
                <RiMenuLine size={20} />
                <span className="font-bold">Kategoriler</span>
                <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded-full ml-1">Yeni</span>
              </div>
              <div className="hidden group-hover:flex absolute top-full left-0 right-0 bg-white shadow-xl border border-gray-200 z-50 max-w-[1400px] mx-auto" style={{ width: 'calc(100% - 2rem)' }}>
                <div className="w-56 border-r border-gray-200 py-3 bg-white">
                  {MENU_DATA.map((cat) => (
                    <div 
                      key={cat.id}
                      onMouseEnter={() => setActiveCategory(cat)} 
                      className={`px-4 py-2.5 cursor-pointer text-[13px] font-semibold flex items-center justify-between ${
                        activeCategory.id === cat.id ? 'text-[#f27a1a] bg-gray-50 border-l-4 border-[#f27a1a]' : 'text-gray-700 hover:bg-gray-50 hover:text-[#f27a1a]'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {cat.icon}
                        <span>{cat.title}</span>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="flex-1 p-6 bg-white">
                  <div className="grid grid-cols-4 gap-6">
                    {activeCategory.columns.map((col, index) => (
                      <div key={index} className="flex flex-col gap-2">
                        <h3 className="font-bold text-[#f27a1a] mb-1 text-[13px]">{col.title}</h3>
                        {col.items.slice(0, 5).map((item, i) => (
                          <a key={i} href="#" className="text-gray-600 hover:text-[#f27a1a] text-[12px] font-normal transition-colors">
                            {item}
                          </a>
                        ))}
                        {col.items.length > 5 && (
                          <a href="#" className="text-gray-800 font-bold text-[11px] mt-1 hover:text-[#f27a1a]">
                            +{col.items.length - 5} ürün daha
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-5 h-full overflow-x-auto hide-scrollbar">
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm">Kadın</a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm">Erkek</a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm">Anne & Çocuk</a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm">Ev & Yaşam</a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm">Süpermarket</a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm">Kozmetik</a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm">Ayakkabı & Çanta</a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm">Elektronik</a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm">Saat & Aksesuar</a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm">Spor & Outdoor</a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm flex items-center gap-1">
                Çok Satanlar
                <span className="bg-red-600 text-white px-1.5 py-0.5 rounded text-[9px]">Yeni</span>
              </a>
              <a href="#" className="whitespace-nowrap hover:text-[#f27a1a] text-gray-700 font-semibold text-sm flex items-center gap-1">
                Flaş Ürünler
                <span className="bg-red-600 text-white px-1.5 py-0.5 rounded text-[9px]">Yeni</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
};

export default Header;