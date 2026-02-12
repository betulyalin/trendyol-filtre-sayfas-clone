"use client";
import { useState } from "react"; // 1. useState ekledik
import Sidebar from "@/components/Sidebar";
import ProductList from "@/components/ProductList";

export default function Home() {
  // Filtre menüsü açık mı kapalı mı bilgisini tutan state
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <main className="container mx-auto px-4 py-6 flex gap-4 relative">
      
      <Sidebar 
        isOpen={isMobileFilterOpen} 
        closeSidebar={() => setIsMobileFilterOpen(false)} 
      />

      <section className="flex-1">
        <ProductList openFilter={() => setIsMobileFilterOpen(true)} />
      </section>

    </main>
  );
}