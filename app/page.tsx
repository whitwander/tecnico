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
    <div className="font-sans flex flex-col items-center justify-start min-h-screen p-8 pb-5 gap-8 sm:p-5">
      <SearchBar onSearch={handleSearch} />
      <div className="flex flex-col w-[90%] gap-4 items-center">
        {resultados.map((client) => (
          <ClientCard key={client.id} {...client} />
        ))}
      </div>
    </div>
  );
}
