"use client"

import { useState } from "react"
import ClientCard from "@/components/ClientCard"
import SearchBar from "@/components/SearchBar"
import clients from "@/public/clients.json"
import { Frown, User } from "lucide-react"

export default function Home() {
  const [resultados, setResultados] = useState(clients.clients)
  const [selectedClient, setSelectedClient] = useState<any | null>(null)
  const [fade, setFade] = useState(false)

  const [notFound, setNotFound] = useState(false)

  const handleSearch = (query: string) => {
    const termo = query.toLowerCase()
    const filtrados = clients.clients.filter(item =>
      item.name.toLowerCase().includes(termo)
    )
    setResultados(filtrados)

    if (filtrados.length === 0) {
      setNotFound(true)
    } else {
      setNotFound(false)
    }
  }

  const handleCardClick = (id: string) => {
    setFade(true)
    const cliente = clients.clients.find(c => c.id === id)
    setSelectedClient(cliente || null)
    setTimeout(() => {
      const client = resultados.find(c => c.id === id)
      setSelectedClient(client)
      setFade(false)
    }, 200)
  }

  const handleBack = () => {
    setFade(true)
    setTimeout(() => {
      setSelectedClient(null)
      setFade(false)
    }, 200)
    setSelectedClient(null)
  }

  return (
    <div className="font-sans flex flex-col items-center justify-start min-h-screen p-8 pb-5 gap-8 sm:p-5">
      {!selectedClient && <SearchBar onSearch={handleSearch} />}

      {notFound && (
        <div className="flex gap-2 text-gray-400">
          <Frown />
          <h1>Cliente não encontrado em nossos dados.</h1>
        </div>
      )}

      <div className={`relative flex flex-col md:grid md:grid-cols-2 md:grid-rows-3 lg:grid lg:grid-cols-3 lg:grid-rows-2 w-[95%] lg:w-full lg:px-10 gap-4 items-center transition-all duration-300`}>
        {!selectedClient && (
          <div
            className={`transition-opacity duration-200 ${fade ? 'opacity-0' : 'opacity-100'} contents`}
          >
            {resultados.map((client) => (
              <ClientCard
                key={client.id}
                {...client}
                onClick={() => handleCardClick(client.id)}
              />
            ))}
          </div>
        )}

        {selectedClient && (
          <div
            className={`fixed inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm z-50
                    transition-all duration-300 ${fade ? 'opacity-0' : 'opacity-100'}`}
          >
            <div
              className={`border p-6 rounded-xl shadow-2xl w-[90%] sm:w-[500px] lg:w-[600px] bg-white
                      transition-all duration-300 transform ${fade ? 'scale-95 opacity-0' : 'scale-100 opacity-100'}`}
            >
              <div className="flex gap-2 items-center mb-4">
                <User />
                <h2 className="text-2xl font-semibold">{selectedClient.name}</h2>
              </div>
              <p className="mb-1"><strong>Email:</strong> {selectedClient.email}</p>
              <p className="mb-1"><strong>Empresa:</strong> {selectedClient.company}</p>
              <p className="mb-4"><strong>Telefone:</strong> {selectedClient.phone}</p>
              <div className="flex justify-end">
                <button
                  onClick={handleBack}
                  className="mt-2 px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200 cursor-pointer transition duration-300"
                >
                  Voltar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
