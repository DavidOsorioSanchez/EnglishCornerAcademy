import { PricesUrl, precioGrupoClasePorHora, precioIndividualClasePorHora, precioGrupoPlanAfiliadosMensuales, precioIndividualPlanAfiliadosMensuales } from "@/utils/magicValues";
import Tittle from "@/components/standalone/Tittle";
import { useState } from "react";
import PriceCard from "../standalone/PriceCard";

export default function Precios() {
    const[planIndividual, setPlanIndividual] = useState(true);

    function CambioPlanes(plan: boolean) {
        setPlanIndividual(plan);
    }

    return(
        <section id={PricesUrl} className="w-full flex flex-col items-center gap-10 ">
            <Tittle 
                SubTittleText="Precios"
                TittleText="Nuestro plan de precios. 💲"
                Descripcion={true}
                DescripcionText="Los planes vienen por el precios de las horas."
            />
            <div className="flex flex-col gap-10 w-full items-center">
                <div className="flex bg-mywhite/5 p-2 rounded-lg">
                    <button onClick={() => CambioPlanes(true)} className={`w-36 h-12 rounded-md ${planIndividual ? "bg-mywhite/20": ""} flex items-center justify-center gap-2 px-1`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                        </svg>
                        <p className="text-sm">Plan individual</p>
                    </button>
                    <button onClick={() => CambioPlanes(false)} className={`w-36 h-12 rounded-md ${!planIndividual ? "bg-mywhite/20": ""} flex items-center justify-center gap-2 px-1`}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 0 0 3.741-.479 3 3 0 0 0-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0 1 12 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 0 1 6 18.719m12 0a5.971 5.971 0 0 0-.941-3.197m0 0A5.995 5.995 0 0 0 12 12.75a5.995 5.995 0 0 0-5.058 2.772m0 0a3 3 0 0 0-4.681 2.72 8.986 8.986 0 0 0 3.74.477m.94-3.197a5.971 5.971 0 0 0-.94 3.197M15 6.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm6 3a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Zm-13.5 0a2.25 2.25 0 1 1-4.5 0 2.25 2.25 0 0 1 4.5 0Z" />
                        </svg>
                        <p>Plan Grupal</p>
                    </button>
                </div>
                <div className="flex flex-col bg-mywhite/0 p-2 rounded-lg gap-x-0.5 gap-y-2 min-[795px]:flex-row min-[795px]:bg-mywhite/5">
                    {planIndividual ? 
                        (
                            <>
                                <PriceCard
                                    Titulo="Precio por clase individual."
                                    Descripcion="Las clases se pagan por hora."
                                    descuento={false}
                                    Izquierdo={true}
                                    Precios={precioIndividualClasePorHora}
                                    puntosPlan={[
                                        "No te cobraremos por no tener clases.", 
                                        "No te cobraremos por no tener clases.", 
                                        "Si no te cobraremos por no tener clases."
                                    ]}
                                />
                                <PriceCard
                                    Titulo="Precio por subcripcion individual."
                                    Descripcion="Es el precio mensual para el precio de las clases."
                                    descuento={false}
                                    Izquierdo={false}
                                    Precios={precioIndividualPlanAfiliadosMensuales}
                                    puntosPlan={[
                                        "No te cobraremos por no tener clases.", 
                                        "No te cobraremos por no tener clases.", 
                                        "Si no te cobraremos por no tener clases."
                                    ]}
                                />
                            </>
                        )
                        :
                        (
                            <>
                                <PriceCard
                                    Titulo="Precio por clase grupal."
                                    Descripcion="Las clases se pagan por hora."
                                    descuento={false}
                                    Izquierdo={true}
                                    Precios={precioGrupoClasePorHora}
                                    puntosPlan={[
                                        "No te cobraremos por no tener clases.", 
                                        "No te cobraremos por no tener clases.", 
                                        "Si no te cobraremos por no tener clases."
                                    ]}
                                />
                                <PriceCard
                                    Titulo="Precio por subcripcion grupal."
                                    Descripcion="Es el precio mensual para el precio de las clases."
                                    descuento={true}
                                    Izquierdo={false}
                                    Precios={precioGrupoPlanAfiliadosMensuales}
                                    puntosPlan={[
                                        "No te cobraremos por no tener clases.", 
                                        "No te cobraremos por no tener clases.", 
                                        "Si no te cobraremos por no tener clases."
                                    ]}
                                />
                            
                            </>
                            
                        )
                    }
                </div>
            </div>
        </section>
    )
}