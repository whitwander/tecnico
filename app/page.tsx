'use client'

import ClientCard from "@/components/ClientCard";
import SearchBar from "@/components/SearchBar";

import clients from '@/public/clients.json'
import { useState } from "react";

export default function Home() {
  const [resultados, setResultados] = useState(clients.clients);

  const handleSearch = (query: string) => {
    const termo = query.toLowerCase();

    const filtrados = clients.clients.filter(item =>
      item.name.toLowerCase().includes(termo)
    );

    setResultados(filtrados);
  };

  return (
    <div className="font-sans grid grid-rows-[20px_2fr_20px] items-center justify-items-center min-h-screen p-8 pb-5 gap-16 sm:p-5">
      <SearchBar onSearch={handleSearch} />
      <div className="grid gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {resultados.map((client) => (
          <ClientCard key={client.id} {...client} />
        ))}
      </div>
    </div>
  );
}
