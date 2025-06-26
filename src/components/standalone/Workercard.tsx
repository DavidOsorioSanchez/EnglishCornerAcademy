import '../../style/index.css';
// name: "Jill",
// img: "https://avatar.vercel.sh/jill",
// position: ["Profesor de Matemáticas", "Profesor de Física"],
// PaginaDescripcion: "https://www.linkedin.com/in/jack/",
// Horarios: "Lunes a Viernes de 9:00 a 18:00",
// Dias:["Lunes", "Martes", "Miércoles", "Jueves", "Viernes"],

interface WorkerCardProps {
    name: string;
    img: string;
    position: string[];
    PaginaDescripcion: string;
    Horarios: string;
    Dias: string[];
}

export default function WorkerCard({ name, img, position, PaginaDescripcion, Horarios, Dias }: WorkerCardProps) {
    console.log("WorkerCard rendered with:", { name, img, position, PaginaDescripcion, Horarios, Dias });

    return (
        <article id='workersMainContainers'>
            <img src={img} alt={name} id='workersMainImage' />
            <a href={PaginaDescripcion} id="workersInformation" className="flex flex-col justify-center items-start gap-2 ">
                <div className="flex flex-col">
                    <p className="text-black text-xl font-semibold text-start text-nowwrap border-b-[1px] border-black/50">{name}</p>
                    <p className="text-black/75 font-light text-sm text-start text-nowwrap">{position.join(" - ")}</p>
                </div>
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="size-6 ">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                    <p className="text-black text-sm text-nowwrap">{Horarios}</p>
                </div>
                <div className="flex items-center gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#000000" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                    </svg>
                    <p className="text-black text-sm text-nowwrap ">{Dias.join(" - ")}</p>   
                </div>
                
            </a>
        </article>
    )
}