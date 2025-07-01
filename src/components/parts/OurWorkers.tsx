import Tittle from "@/components/standalone/Tittle";
import { workers } from "@/utils/Arrays";
import WorkerCard from "@/components/standalone/Workercard";
import { WorkersUrl } from "@/utils/magicValues";

export default function OurWorkers() {
    return (
        <section id={WorkersUrl} className="w-full flex flex-col justify-center items-center gap-6 ">
            <Tittle
                SubTittleText="Quienes Enseñamos?"
                TittleText="Quienes son nuestros profesores. 📖"
                Descripcion={false}
            />
            <div className="w-full flex flex-wrap !justify-center items-center gap-5 p-2 md:p-4 lg:p-8">
                {workers.map((worker) => (
                    <WorkerCard 
                        key={worker.id}
                        name={worker.name}
                        img={worker.img}
                        position={worker.position}
                        PaginaDescripcion={worker.PaginaDescripcion}
                        Horarios={worker.Horarios}
                        Dias={worker.Dias}
                    />
                ))}
            </div>
        </section>
    )
}