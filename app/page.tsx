import React from "react";
import Header from "./_components/Header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import { Card, CardContent} from "./_components/ui/card";
import { SearchIcon } from "lucide-react";
import Image from "next/image";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";

const Home = async () => {
  return (
    <div>
      {/* HEADER */}
      <Header />
      <div className="p-5">
        <h2 className="text-xl font-bold">Olá, João!</h2>
        <p> Sábado, 21/06</p>

        {/* buscar */}
        <div className="flex items-center gap-2 mt-6">
          <Input placeholder="Busque seu serviço..." />
          <Button>
            <SearchIcon />
          </Button>
        </div>

        {/* banner */}
        <div className="relative w-full h-[150px] mt-6">
          <Image src="/banner-01.png" alt="Banner" fill className="object-cover rounded-xl"/>
        </div>

        {/* agendamento */}
        <Card className="mt-6">
          <CardContent className="flex justify-between p-0">
            {/* Esquerda */}
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit"> Confirmado </Badge>
              <h3 className="font-semibold">Corte de cabelo</h3>

              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                </Avatar>
                <p className="text-sm">Barbearia JF</p>
              </div>
            </div>

            {/* Direita */}
            <div className="flex flex-col justify-center items-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

      </div>
    </div>
  )
}

export default Home
