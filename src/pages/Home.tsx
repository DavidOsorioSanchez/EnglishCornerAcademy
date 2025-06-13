import Portada from "@/components/parts/Portada";
import Soluciones from "@/components/parts/Soluciones";
import CarouselTwitter from "@/components/parts/CarouselTwitter";

export default function Home() {
    return (
        <main className="min-h-screen h-auto flex flex-col items-center justify-start gap-16">
            <Portada />
            <Soluciones />
            <CarouselTwitter />
        </main>
    )
}
