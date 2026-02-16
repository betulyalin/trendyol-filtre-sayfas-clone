// page.jsx (unchanged)
"use client";
import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import ProductList from "@/components/ProductList";

export default function Home() {
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  return (
    <main className="w-full max-w-[1600px] mx-auto px-3 md:px-4 py-4 md:py-6 flex flex-col md:flex-row gap-4">
      <Sidebar 
        isOpen={isMobileFilterOpen} 
        closeSidebar={() => setIsMobileFilterOpen(false)} 
      />
      <section className="w-full md:flex-1 md:min-w-0">
        <ProductList openFilter={() => setIsMobileFilterOpen(true)} />
      </section>
    </main>
  );
}