import { PricesUrl, precioGrupoClasePorHora, precioIndividualClasePorHora, precioGrupoPlanAfiliadosMensuales, precioIndividualPlanAfiliadosMensuales } from "@/utils/magicValues";
import Tittle from "@/components/standalone/Tittle";
import { useState } from "react";

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
                    <div className="relative max-w-96 w-screen flex flex-col gap-2 rounded-md border-[1px] p-2 border-mywhite/30 bg-mywhite/15 min-[795px]:rounded-l-md min-[795px]:rounded-r-none">
                        {planIndividual ?(
                            // <div className="absolute top-o right-0 text-xs bg-blue-500 p-0.5 rounded-bl-md rounded-tr-md min-[795px]:rounded-tr-none"> Promocion</div>
                            <></>
                        ):(
                            <></>
                        )}
                        <div className="my-5 mx-4 flex flex-col gap-8">
                            <div className="flex flex-col gap-0">
                                <h2 className="text-xl text-start font-bold text-mywhite">{planIndividual ? "Precio por clase individual." : "Precio por clase grupal."}</h2>
                                <p className="text-xs font-medium text-mywhite/50">
                                    Las clases se pagan por hora.
                                </p>
                            </div>
                            <p className="font-semibold text-mywhite/85 mx-3">
                                <p className="text-2xl">{planIndividual ? precioIndividualClasePorHora : precioGrupoClasePorHora}<span className="!text-sm font-normal text-mywhite/50">.000</span> /Clase</p> 
                            </p>
                        </div>
                        <div className="w-full flex  justify-center">
                            <button className="w-4/6 h-12 rounded-md bg-blue-500 flex items-center justify-center gap-2 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                                <p className="text-white text-lg font">
                                    Comprar clases
                                </p>

                            </button>
                        </div>
                    </div>
                    <div className="relative max-w-96 w-screen flex flex-col gap-2 rounded-md border-[1px] p-2 border-mywhite/30 bg-mywhite/15 min-[795px]:rounded-l-none min-[795px]:rounded-r-md">
                        <div className="absolute top-0 right-0 text-xs bg-blue-500 p-0.5 rounded-bl-md rounded-tr-md "> Promocion</div>
                        <div className="my-5 mx-4 flex flex-col gap-8">
                            <div className="flex flex-col gap-0">
                                <h2 className="text-xl font-semibold text-mywhite">{planIndividual ? "Precio por subcripcion individual." : "Precio por subcripcion grupal."}</h2>
                                <p className="text-xs font-medium text-mywhite/50">
                                    Es el precio mensual para el precio de las clases.
                                </p>
                            </div>
                            <p className="font-normal text-mywhite/85">
                                <p className="text-2xl">{!planIndividual ? precioIndividualPlanAfiliadosMensuales : precioGrupoPlanAfiliadosMensuales}<span className="!text-sm font-normal text-mywhite/50">.000</span> /Clase</p>
                            </p>
                        </div>
                        <div className="w-full flex  justify-center">
                            <button className="w-4/6 h-12 rounded-md bg-blue-500 flex items-center justify-center gap-2 px-1">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0 1 15.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 0 1 3 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 0 0-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 0 1-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 0 0 3 15h-.75M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Zm3 0h.008v.008H18V10.5Zm-12 0h.008v.008H6V10.5Z" />
                                </svg>
                                <p className="text-white text-lg font">
                                    Comprar clases
                                </p>

                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}