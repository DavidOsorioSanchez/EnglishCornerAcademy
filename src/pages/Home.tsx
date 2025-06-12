import { Badge } from "@/components/UI/badge";

export default function Home() {
    return (
        <main className="h-screen flex flex-col items-center justify-start pt-16 gap-4">
            <div className="flex w-full flex-wrap items-center justify-center gap-8">
                <div className="flex flex-col items-center justify-center  min-[550px]:items-start">
                    <Badge
                        variant="secondary"
                        className="bg-blue-500 rounded-full py-0.5 px-1.5 text-sm font-medium animate-Badge-Portada"
                    >
                        <div className="bg-mywhite text-Background rounded-full py-0.5 px-1">
                            🎉 Pagina oficial
                        </div>
                        Apertura Oficial de la pagina
                    </Badge>
                    <div className="container mx-auto text-center">
                        <h1 className="text-5xl font-bold">
                            <span className="animate-Titulo-English">English</span>
                            <span className="animate-Titulo-Corner"> Corner</span>
                            <span className="animate-Titulo-Academy"> Academy</span>
                        </h1>
                    </div>
                    <p className="w-96 m-2 text-center text-pretty opacity-70 animate-Description-Portada">Una academia diseñada para aprender inglés de la formas mas facil posible.</p>
                </div>
                <iframe 
                    width="420" 
                    height="236" 
                    src="https://www.youtube.com/embed/KVakLLMBQxg?si=pB5WSh83P34pH5ZN" 
                    title="YouTube video player" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                    className="animate-Video-Portada"
                >

                </iframe>
            </div>


        </main>
    )
}
