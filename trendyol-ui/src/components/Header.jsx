"use client";

import React, { useState } from 'react';

import { RiSearchLine, RiUserLine, RiHeartLine, RiShoppingCartLine, RiMenuLine } from "react-icons/ri";
import { TbWoman, TbMan, TbBabyCarriage, TbHome2, TbBasket, TbPerfume, TbShoe, TbDeviceMobile, TbBallFootball, TbBook } from "react-icons/tb";

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
    title: "Ev & Mobilya",
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
      
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-8">
        
        {/* LOGO */}
        <div className="ml-0 md:-ml-20 text-2xl md:text-4xl font-bold text-black tracking-tight cursor-pointer">
          trendyol
        </div>

        {/* ARAMA ÇUBUĞU */}
        <div className="flex-1 max-w-3xl relative">
          <input 
            type="text" 
            placeholder="Aradığınız ürün, kategori veya markayı yazınız" 
            className="w-full bg-gray-100 text-sm px-4 py-3 rounded-md border-2 border-transparent focus:outline-none focus:bg-white focus:border-orange-600 transition-all text-gray-700 placeholder-gray-500"
          />
          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-orange-600 text-sm font-bold">
            <RiSearchLine size={24} />
          </button>
        </div>

        <div className="flex items-center gap-6 text-gray-1500 text-sm font-bold md:-mr-28 mr-0">
          
          {/* 1. GİRİŞ YAP (DROPDOWN MENÜLÜ) */}
          <div className="group relative cursor-pointer hover:text-orange-600 h-full flex items-center py-4">
            <div className="flex flex-col items-center gap-1">
               <RiUserLine size={20} />
               <span>Giriş Yap</span>
            </div>

            <div className="hidden group-hover:block absolute top-full right-0 w-48 pt-2 z-50">
               <div className="bg-white border border-gray-200 shadow-xl rounded-md p-3 flex flex-col gap-2 relative">
                  <div className="absolute -top-1.5 right-6 w-3 h-3 bg-white border-t border-l border-gray-200 rotate-45"></div>

                  <button className="w-full bg-orange-600 text-white font-bold py-1.5 rounded text-xs hover:bg-orange-700 hover:border-orange-700 transition-colors">
                    Giriş Yap
                  </button>

                  <button className="w-full bg-white border border-gray-300 text-gray-600 font-bold py-1.5 rounded text-xs hover:border-orange-600 hover:text-orange-600 hover:bg-gray-50 transition-colors">
                    Kayıt Ol
                  </button>
               </div>
            </div>
          </div>

          {/* 2. FAVORİLERİM */}
          <div className="cursor-pointer hover:text-orange-600 flex flex-col items-center gap-1">
              <RiHeartLine size={20} />
              <span>Favorilerim</span>
          </div>

          {/* 3. SEPETİM */}
          <div className="cursor-pointer hover:text-orange-600 flex flex-col items-center gap-1">
              <RiShoppingCartLine size={20} />
              <span>Sepetim</span>
          </div>

        </div>

      </div>

      <div className="border-t border-gray-200">
      <div className="container mx-auto px-4 h-10 flex items-center text-sm font-bold text-gray-700 relative md:ml-28 ml-0">
          
          <div className="group h-full flex items-center">
            
            <div className="mr-6 cursor-pointer hover:text-orange-600 flex items-center h-full">
              <span className="text-2xl mr-2"><RiMenuLine /></span> 
              Kategoriler 
              <span className="text-[9px] bg-red-600 text-white px-1.5 py-0.5 rounded-full ml-1">Yeni</span>
            </div>

            {/* --- MEGA MENÜNÜN KENDİSİ --- */}
            <div className="hidden group-hover:flex absolute top-full left-0 bg-white shadow-xl border border-gray-200 z-50" style={{ width: '100%', minHeight: '400px' }}>
              
              <div className="w-48 border-r border-gray-200 py-2 bg-white">
                {MENU_DATA.map((cat) => (
                  <div 
                    key={cat.id}
                    onMouseEnter={() => setActiveCategory(cat)} 
                    className={`
                      px-4 py-2.5 cursor-pointer text-[13px] font-semibold flex items-center justify-between
                      ${activeCategory.id === cat.id ? 'text-orange-600 bg-gray-50 border-l-4 border-orange-600' : 'text-gray-700 hover:bg-gray-50 hover:text-orange-600'}
                    `}
                  >
                    <div className="flex items-center gap-2">
                        {cat.icon}
                        <span>{cat.title}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="flex-1 p-8 bg-white">
                <div className="flex flex-row flex-wrap gap-x-12 gap-y-8 w-full content-start">
                   {activeCategory.columns.map((col, index) => (
                     <div key={index} className="flex flex-col gap-2 min-w-36">
                        <h3 className="font-bold text-orange-600 mb-1 text-[14px]">{col.title}</h3>
                        {col.items.map((item, i) => (
                          <a key={i} href="#" className="text-gray-500 hover:text-orange-600 hover:underline text-[12px] font-normal transition-colors">
                            {item}
                          </a>
                        ))}
                        <a href="#" className="text-gray-800 font-bold text-[12px] mt-1 hover:text-orange-600">
                          Daha Fazla Gör 
                        </a>
                     </div>
                   ))}
                </div>
              </div>

            </div>
          
          </div>

          <div className="flex items-center gap-6 ml-4 h-full">
            <a href="#" className="hover:text-orange-600 text-gray-700 font-bold text-sm">Kadın</a>
            <a href="#" className="hover:text-orange-600 text-gray-700 font-bold text-sm">Erkek</a>
            <a href="#" className="hover:text-orange-600 text-gray-700 font-bold text-sm">Anne & Çocuk</a>
            <a href="#" className="hover:text-orange-600 text-gray-700 font-bold text-sm">Ev & Yaşam</a>
            <a href="#" className="hover:text-orange-600 text-gray-700 font-bold text-sm">Süpermarket</a>
            <a href="#" className="hover:text-orange-600 text-gray-700 font-bold text-sm">Kozmetik</a>
            <a href="#" className="hover:text-orange-600 text-gray-700 font-bold text-sm">Ayakkabı & Çanta</a>
            <a href="#" className="hover:text-orange-600 text-gray-700 font-bold text-sm">Elektronik</a>
            <a href="#" className="hover:text-orange-600 text-gray-700 font-bold text-sm">Saat & Aksesuar</a>
            <a href="#" className="hover:text-orange-600 text-gray-700 font-bold text-sm">Spor & Outdoor</a>
            <a href="#" className="ml-auto flex items-center gap-3 text-sm font-bold text-gray-700">
               <span className="cursor-pointer hover:text-orange-600 whitespace-nowrap">Çok Satanlar <span className="bg-red-600 text-white px-1 rounded ml-1 text-[9px]">Yeni</span></span>
               <span className="cursor-pointer hover:text-orange-600 whitespace-nowrap">Flaş Ürünler <span className="bg-red-600 text-white px-1 rounded ml-1 text-[9px]">Yeni</span></span>
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Header;