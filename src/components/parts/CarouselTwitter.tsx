import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/UI/carousel"
import { reviews } from "@/utils/Arrays";

export default function CarouselTwitter() {
    return (
        <div className="h-auto my-2">
                        <Carousel className="w-full flex items-center " opts={{
                            align: "start",
                        }}>
                            <CarouselContent className="">
                                {reviews.map((index) => (
                                    <CarouselItem key={index.id}>
                                        <article className="w-full h-96 flex flex-col items-center justify-center p-6 border-2">
                                            <img className="rounded-full" width="32" height="32" alt="" src={index.img} />
                                            <div className="flex flex-col">
                                                <figcaption className="text-sm font-medium dark:text-white">
                                                    {index.name}
                                                </figcaption>
                                                <p className="text-xs font-medium dark:text-white/40">{index.username}</p>
                                            </div>
        
                                        </article>
                                    </CarouselItem>
                                ))}
                            </CarouselContent>
                            <CarouselPrevious />
                            <CarouselNext />
                        </Carousel>
                    </div>
    )
}