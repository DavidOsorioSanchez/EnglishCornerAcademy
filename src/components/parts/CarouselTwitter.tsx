import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/UI/carousel"
import { reviews } from "@/utils/Arrays";
import TwitterCard from "@/components/UI/TwitterCard";
import Tittle from "@/components/standalone/Tittle";
import { OpinionesUrl } from "@/utils/magicValues";

export default function CarouselTwitter() {
    return (
        <section id={OpinionesUrl} className="w-full flex flex-col items-center gap-10 ">
            <Tittle
                SubTittleText="Opiniones"
                TittleText="Opiniones de nuestros usuarios. 🎖️"
                Descripcion={true}
                DescripcionText="Comparte tus opiniones y comentarios con nosotros."
            />
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