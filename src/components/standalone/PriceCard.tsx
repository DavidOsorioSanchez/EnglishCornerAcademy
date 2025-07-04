interface PriceCardProps {
    Titulo: string;
    Descripcion: string;
    descuento: boolean;
    Izquierdo: boolean;
    Precios: number;
    puntosPlan: Array<string>;
}

export default function PriceCard({Titulo, Descripcion, descuento, Izquierdo, Precios, puntosPlan}: PriceCardProps) {
    return (
        <div className={`relative max-w-96 w-screen flex flex-col gap-4 rounded-md border-[1px] p-2 border-mywhite/30 bg-mywhite/15 ${Izquierdo ? "min-[795px]:rounded-r-none min-[795px]:rounded-l-md" : "min-[795px]:rounded-l-none min-[795px]:rounded-r-md"} `}>
            {descuento ? 
                (<div className={`absolute top-0 right-0 text-xs bg-blue-500 p-0.5 rounded-bl-md  ${Izquierdo ? "rounded-tr-none" : "rounded-tr-md"} `}>Promocion</div>)
                :
                (<></>)
            }
            
            <div className="my-5 mx-4 flex flex-col gap-8">
                <div className="flex flex-col gap-0">
                    <h2 className="text-xl font-semibold text-mywhite">{Titulo}</h2>
                    <p className="text-xs font-medium text-mywhite/50">
                        {Descripcion}
                    </p>
                </div>
                <p className="font-normal text-mywhite/85">
                    <p className="text-2xl">{Precios}<span className="!text-sm font-normal text-mywhite/50">.000</span><span className="text-base font-normal text-mywhite"> / Clase</span></p>
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
            <div className="w-full flex  justify-center">
                <div className="w-5/6 bg-mywhite/50 h-[1px]"></div>
            </div>
            <ul className="w-full mx-4">
                {puntosPlan.map((punto, index) => (
                    <li key={index}>✔️ {punto}</li>
                ))}
            </ul>
        </div>
    )
}