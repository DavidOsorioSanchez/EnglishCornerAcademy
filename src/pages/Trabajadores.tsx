import { useParams } from "react-router-dom";
import { workers } from "@/utils/Arrays";
import Linkedin from "@/assets/icons/linkedin.svg";

export default function Trabajadores() {
    const { id } = useParams();
    const worker = workers.find(worker => worker.id === Number(id));

    if (!worker) {
        return <div>Trabajador no encontrado</div>;
    }

    return (
        <section className=" flex flex-col items-center justify-start">
            <div className="relative w-screen h-56">
                <img src={worker.vanderImg} alt="image" className=" top-0 left-0 w-screen h-56 object-cover border-b-2 border-mywhite/50" />
                <div className="absolute flex flex-col !items-center !justify-end gap-x-10 gap-y-2.5 px-10 h-96 top-0 left-0 w-screen z-10 min-[600px]:flex-row min-[600px]:!items-end min-[600px]:!justify-start min-[600px]:h-80" >
                    <img src={worker.img} alt="image" className="w-48 h-48 object-cover aspect-square rounded-full border-2 border-mywhite/50" />
                    <div className="w-full flex justify-between items-start">

                        <div className="w-full flex flex-col justify-end items-center pb-5 min-[600px]:items-start ">
                            <h2 className="text-4xl font-bold text-mywhite border-b-2 border-mywhite/50 text-nowrap">{worker.name}</h2>
                            <p className="text-lg text-mywhite/70">{worker.position.join(" - ")}</p>
                        </div>
                        <div className="flex gap-2">
                            <a href={worker.linkedin} target="_blank" rel="noopener noreferrer" className="hidden min-[700px]:block">
                                <img src={Linkedin} alt="Linkedin" className="w-12 h-12 p-1.5 object-contain aspect-square rounded-full bg-mywhite" />
                            </a>
                        </div>

                    </div>

                </div>
            </div>
            
            <main className="w-full flex justify-center  mt-40 min-[600px]:mt-28 ">
                <div className="w-full max-w-3xl flex flex-col bg-mywhite/10 p-4 rounded-md shadow-md gap-7 ">
                    <div className="w-full flex justify-between items-center gap-2">
                        <h2 className="text-2xl font-bold text-mywhite">Información del Trabajador</h2>
                        <a href={worker.linkedin} target="_blank" rel="noopener noreferrer" className="block min-[700px]:hidden">
                            <img src={Linkedin} alt="Linkedin" className="w-12 h-12 p-1.5 object-contain aspect-square rounded-full bg-mywhite" />
                        </a>
                    </div>

                    <p className="text-md mx-5">{worker.description}</p>
                    <ul className="flex flex-col text-lg gap-2 mx-10">
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                            </svg>
                            Edad: {worker.age}
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                            </svg>
                            Experiencia: {worker.experience} años
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 ">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            Horarios: {worker.Horarios}
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="!size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
                            </svg>
                            Días: {worker.Dias.join(" - ")}
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="!size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 1 0-2.636 6.364M16.5 12V8.25" />
                            </svg>
                            Email: <a href={`mailto:${worker.Email}`} className="text-blue-500 hover:underline">{worker.Email}</a>
                        </li>
                        <li className="flex items-center gap-2">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="!size-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                            </svg>
                            Teléfono: <a href={`tel:${worker.Telefono}`} className="text-blue-500 hover:underline">{worker.Telefono}</a>
                        </li>
                    </ul>

                </div>

            </main>
        </section>
    );
}