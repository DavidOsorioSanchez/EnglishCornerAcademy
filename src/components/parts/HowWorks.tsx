import Tittle from "@/components/standalone/Tittle";
import ButtonHowUse from "@/components/UI/ButtonHowUse";
import HowToUseExample1 from "@/assets/images/HowToUseExample1.webp";
import HowToUseExample2 from "@/assets/images/HowToUseExample2.webp";
import HowToUseExample3 from "@/assets/images/HowToUseExample3.webp";
import { useState } from "react";

export default function HowWorks() {
    const [fotoMostrar, setFotoMostrar] = useState<string>(HowToUseExample1);
    const [estado, setEstado] = useState<number>(1);
    // useEffect(() => {
    //     const handleFotoClick = (foto: string) => {
    //         setFotoMostrar(foto);
    //     };
    //     handleFotoClick(HowToUseExample1);
    // }, handleFotoClick());

    const handleFotoClick = (foto: string) => {
        if (foto === HowToUseExample1) {
            setEstado(1);
        } else if (foto === HowToUseExample2) {
            setEstado(2);
        } else if (foto === HowToUseExample3) {
            setEstado(3);
        }

        setFotoMostrar(foto);
    };

    return (
        <section className="w-full flex flex-col justify-center items-center gap-10">
            <Tittle
                SubTittleText="Como Funciona?"
                TittleText="Solo 3 pasos para empezar. ⚡"
                Descripcion={false}
            />
            <div className="flex flex-col justify-center items-center p-1 gap-5 md:p-2 md:flex-row">
                <div className="flex flex-col items-center gap-8">
                    <div className={`w-fit h-fit border-l-2 active:border-blue-500 hover:border-blue-500 focus:border-blue-500   hover:bg-blue-500/10 transition-colors ${estado === 1 ? "border-blue-500" : "border-mywhite/50"}`}>
                        <ButtonHowUse customOnClick={() => handleFotoClick(HowToUseExample1)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 bg-blue-500/90 rounded-full p-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" className="fill-mywhite/30" />
                            </svg>

                            <div className="flex flex-col gap-2 items-start ">
                                <p className="text-lg font-semibold text-mywhite">
                                    1. Crea tu cuenta
                                </p>
                                <p className="max-w-80 text-sm font-normal text-mywhite/85 text-pretty text-start">
                                    Ingresa a tu cuenta de <span className="font-semibold">Google</span> o <span className="font-semibold">Facebook</span> para poder acceder a tus datos.
                                </p>
                            </div>
                        </ButtonHowUse>
                    </div>
                    <div className={`w-fit h-fit border-l-2 active:border-blue-500 hover:border-blue-500 focus:border-blue-500   hover:bg-blue-500/10 transition-colors ${estado === 2 ? "border-blue-500" : "border-mywhite/50"}`}>
                        <ButtonHowUse customOnClick={() => handleFotoClick(HowToUseExample2)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 bg-blue-500/90 rounded-full p-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" className="fill-mywhite/30" />
                            </svg>

                            <div className="flex flex-col gap-2 items-start ">
                                <p className="text-lg font-semibold text-mywhite ">
                                    2. Asigna un dia y hora
                                </p>
                                <p className="max-w-80 text-sm font-normal text-mywhite/85 text-pretty text-start">
                                    Asigna en el calendario de nuestra pagina web el <span className="font-semibold">Dia y hora</span> en que quieres que asignemos la clase.
                                </p>
                            </div>
                        </ButtonHowUse>
                    </div>
                    <div className={`w-fit h-fit border-l-2 active:border-blue-500 hover:border-blue-500 focus:border-blue-500   hover:bg-blue-500/10 transition-colors ${estado === 3 ? "border-blue-500" : "border-mywhite/50"}`}>
                        <ButtonHowUse customOnClick={() => handleFotoClick(HowToUseExample3)}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 bg-blue-500/90 rounded-full p-2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" className="fill-mywhite/30" />
                            </svg>

                            <div className="flex flex-col gap-2 items-start ">
                                <p className="text-lg font-semibold text-mywhite">
                                    3. Disfruta de tu clase
                                </p>
                                <p className="max-w-80 text-sm font-normal text-mywhite/85 text-pretty text-start">
                                    La clase se realizara de manera <span className="font-semibold">particular</span> por la plataforma de <span className="font-semibold">Google Meet</span>.
                                </p>
                            </div>
                        </ButtonHowUse>
                    </div>
                    

                </div>
                <img src={fotoMostrar} alt="image" className="min-w-72 w-4/6 max-w-[40rem] rounded-md object-cover aspect-video md:w-[30rem] md:max-w-full" />
            </div>
        </section>
    )
}