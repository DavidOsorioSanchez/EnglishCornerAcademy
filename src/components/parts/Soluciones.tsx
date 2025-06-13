import "../../style/index.css"
export default function Soluciones(){
    return(
        <section className="w-full flex flex-col items-center gap-10 ">
            <div>
                <p className="text-center text-md font-semibold text-cyan-500">Soluciones</p>
                <h2 className="text-4xl font-bold">Lo que te prometemos solucionar. ✨</h2>
            </div>
            <div className="flex flex-col flex-nowrap shrink justify-around items-center gap-10 w-full min-[818px]:flex-row">
                <div id="Target-Micro" className="max-w-96 p-6 flex flex-col gap-2 rounded-md bg-mywhite/5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 bg-blue-500/90 rounded-full p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" className="fill-mywhite/30" />
                    </svg>
                    <p className="text-xl font-semibold text-mywhite">Enfacis en el habla.</p>
                    <p className="text-sm font-normal text-mywhite/85 ">
                        Conecta tu micrófono para poder hablar con los trabajadores de nuestra pagina.
                    </p>
                </div>
                <div id="Target-Cap" className="max-w-96 px-6 flex flex-col gap-2 rounded-md py-6 bg-mywhite/5 min-[818px]:py-8">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 bg-blue-500/90 rounded-full p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.438 60.438 0 0 0-.491 6.347A48.62 48.62 0 0 1 12 20.904a48.62 48.62 0 0 1 8.232-4.41 60.46 60.46 0 0 0-.491-6.347m-15.482 0a50.636 50.636 0 0 0-2.658-.813A59.906 59.906 0 0 1 12 3.493a59.903 59.903 0 0 1 10.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.717 50.717 0 0 1 12 13.489a50.702 50.702 0 0 1 7.74-3.342M6.75 15a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 0v-3.675A55.378 55.378 0 0 1 12 8.443m-7.007 11.55A5.981 5.981 0 0 0 6.75 15.75v-1.5" className="fill-mywhite/30" />
                    </svg>
                    <p className="text-xl font-semibold text-mywhite">Material avalado por hablantes nativos.</p>
                    <p className="text-sm font-normal text-mywhite/85 ">
                        El material es avalado por la universidad de oxford, por lo que es muy fácil de entender y practicar.
                    </p>
                </div>
                <div id="Target-Incri" className="max-w-96 p-6 flex flex-col gap-2 rounded-md bg-mywhite/5">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 bg-blue-500/90 rounded-full p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
                    </svg>
                    <p className="text-xl font-semibold text-mywhite">Mejora constantes.</p>
                    <p className="text-sm font-normal text-mywhite/85 ">
                        Metodologia moldeada para que <span className="font-semibold">todos</span> puedan aprender.
                    </p>
                </div>
            </div>
        </section>
    )
}