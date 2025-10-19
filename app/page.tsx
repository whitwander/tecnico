import ClientCard from "@/components/ClientCard";
import SearchBar from "@/components/SearchBar";

import clients from '@/public/clients.json'

export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_2fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <SearchBar />
      <div className="grid gap-4 justify-items-center sm:grid-cols-2 lg:grid-cols-3">
        {clients.clients.map((client) => (
          <ClientCard key={client.id} {...client} />
        ))}
      </div>
    </div>
  );
}
