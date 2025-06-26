import Portada from "@/components/parts/Portada";
import Soluciones from "@/components/parts/Soluciones";
import CarouselTwitter from "@/components/parts/CarouselTwitter";
import HowWorks from "@/components/parts/HowWorks";
import OurWorkers from "@/components/parts/OurWorkers";

export default function Home() {
    return (
        <main className="min-h-screen h-auto flex flex-col items-center justify-start gap-32">
            <Portada />
            <Soluciones />
            <CarouselTwitter />
            <HowWorks />
            <OurWorkers />
        </main>
    )
}
