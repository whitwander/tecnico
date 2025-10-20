"use client"

import { useState } from "react"
import ClientCard from "@/components/ClientCard"
import SearchBar from "@/components/SearchBar"
import clients from "@/public/clients.json"
import { User } from "lucide-react"

export default function Home() {
  const [resultados, setResultados] = useState(clients.clients)
  const [selectedClient, setSelectedClient] = useState<any | null>(null)

  const handleSearch = (query: string) => {
    const termo = query.toLowerCase()
    const filtrados = clients.clients.filter(item =>
      item.name.toLowerCase().includes(termo)
    )
    setResultados(filtrados)
  }

  const handleCardClick = (id: string) => {
    const cliente = clients.clients.find(c => c.id === id)
    setSelectedClient(cliente || null)
  }

  const handleBack = () => {
    setSelectedClient(null)
  }

  return (
    <div className="font-sans flex flex-col items-center justify-start min-h-screen p-8 pb-5 gap-8 sm:p-5">

      {!selectedClient && <SearchBar onSearch={handleSearch} />}

      <div className="flex flex-col w-[95%] gap-4 items-center">
        {!selectedClient ? (
          resultados.map((client) => (
            <ClientCard
              key={client.id}
              {...client}
              onClick={() => handleCardClick(client.id)}
            />
          ))
        ) : (
          <div className="border p-4 rounded-lg shadow w-full max-w-md bg-white">
            <div className="flex gap-2">
              <User />
              <h2 className="text-xl font-semibold mb-2">{selectedClient.name}</h2>
            </div>
            <p><strong>Email:</strong> {selectedClient.email}</p>
            <p><strong>Empresa:</strong> {selectedClient.company}</p>
            <p><strong>Telefone:</strong> {selectedClient.phone}</p>

            <button
              onClick={handleBack}
              className="mt-4 px-3 py-1 border rounded bg-gray-100 hover:bg-gray-200"
            >
              Voltar
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
