import { Badge } from "@/components/UI/badge";

export default function Portada() {
    return (
        <section className="flex w-full min-h-[35rem] h-auto flex-wrap items-center justify-center gap-8">
            <div className="flex flex-col items-center py-4 justify-center min-[768px]:items-start min-[768px]:py-0">
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
                    <h1 className="text-6xl font-bold">
                        <span className="animate-Titulo-English">English</span>
                        <span className="animate-Titulo-Corner"> Corner</span>
                        <span className="animate-Titulo-Academy"> Academy</span>
                    </h1>
                </div>
                <p className="w-96 m-2 text-center text-lg text-pretty opacity-70 animate-Description-Portada">Una academia diseñada para aprender inglés de la formas mas facil posible.</p>
                <div className="w-full flex items-center justify-center gap-2 mt-4 animate-Buttons-Portada">
                    <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
                        Empezar ahora
                    </button>
                    <button className="bg-gray-200 text-gray-800 px-4 py-2 rounded hover:bg-gray-300 transition">
                        Saber más
                    </button>
                </div>
            </div>
            <iframe
                width="420"
                height="236"
                src="https://www.youtube.com/embed/KVakLLMBQxg?si=pB5WSh83P34pH5ZN"
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
            // className="animate-Video-Portada"
            >

            </iframe>
        </section>
    )
}