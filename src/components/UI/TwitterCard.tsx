import { EllipsisVertical, Heart, ChatBubbleLeft, ArrowPathRounded, ArrowUpTray } from "@/assets/icons/Icons";

interface TwitterCardProps {
    name: string;
    username: string;
    img: string;
    date: string;
    body: string;
    likes: number;
    retweets: number;
    replies: number;
}

export default function TwitterCard( { name, username, img, date, body, likes, retweets, replies }: TwitterCardProps) {
    return (
        <article className="w-full flex justify-center items-center">
            <div className="w-full max-w-[35rem] min-h-36 flex bg-black border-2 py-3 px-6 gap-4 border-white rounded-none">
                <img className="rounded-full size-16 aspect-square object-cover" alt="Foto perfil" src={img} />
                <div className="w-full flex flex-col gap-1">
                    <div className="h-fit inline-flex flex-nowrap items-center justify-between gap-3">
                        <div className="flex items-center gap-3">
                            <p className="text-xl font-semibold text-white">
                                {name}
                            </p>
                            <div className="flex items-center gap-1.5">
                                <p className="text-md font-medium text-white/40">{username}</p>
                                <p className="text-md font-medium text-white/40">•</p>
                                <p className="text-md font-medium text-white/40">{date}</p>
                            </div>
                        </div>
                        <EllipsisVertical />
                    </div>
                    <div className="text-pretty text-md">
                            {body}
                    </div>
                    <div className="h-full flex justify-start items-end gap-6">
                        <div className="flex items-center gap-2">
                            <Heart />
                            <p className="text-md font-medium text-white/40">{likes}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <ChatBubbleLeft />
                            <p className="text-md font-medium text-white/40">{replies}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <ArrowPathRounded />
                            <p className="text-md font-medium text-white/40">{retweets}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <ArrowUpTray />
                        </div>
                    </div>
                </div>
            </div>
        </article>
        
    );
}
{/* 
<article className="w-full h-96 flex flex-col items-center justify-center p-6 border-2">
    <img className="rounded-full" width="32" height="32" alt="" src={index.img} />
    <div className="flex flex-col">
        <figcaption className="text-sm font-medium dark:text-white">
            {index.name}
        </figcaption>
        <p className="text-xs font-medium dark:text-white/40">{index.username}</p>
    </div>

</article> 
*/}