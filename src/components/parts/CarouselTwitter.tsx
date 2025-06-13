import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/UI/carousel"
import { reviews } from "@/utils/Arrays";
import TwitterCard from "@/components/UI/TwitterCard";

export default function CarouselTwitter() {
    return (
        <section className="w-full flex flex-col items-center gap-10 ">
            <div>
                <p className="text-center text-md font-semibold text-cyan-500">Opiniones</p>
                <h2 className="text-4xl font-bold">
                    Opiniones de nuestros usuarios. 🎖️
                </h2>
                <p className="text-mywhite/60">Comparte tus opiniones y comentarios con nosotros.</p>
            </div>
            <div className="h-auto my-2">
                <Carousel className="w-full max-w-3xl " opts={{
                    align: "center",
                    active: true,
                }}>
                    <CarouselContent className="">
                        {reviews.map((index) => (
                            <CarouselItem key={index.id}>
                                <TwitterCard 
                                    name={index.name}
                                    username={index.username}
                                    img={index.img}
                                    date={index.date}
                                    body={index.body}
                                    likes={index.likes}
                                    retweets={index.retweets}
                                    replies={index.replies}
                                    
                                />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </section>

    )
}