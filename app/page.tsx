import React from "react"
import Header from "./_components/Header"
import { Input } from "./_components/ui/input"
import { Button } from "./_components/ui/button"
import { SearchIcon } from "lucide-react"
import Image from "next/image";

const Home = async () => {
  return (
    <div>
      {/* HEADER */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, João!</h2>
        <p> Sábado, 21/06</p>

        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Busque seu serviço..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image src="/banner-01.png" alt="Banner" fill className="object-cover rounded-xl"/>
        </div>
      </div>
    </div>
  )
}

export default Home
