export default function ResponsiveToolbar({ FuncionCerrar }: { FuncionCerrar: () => void }) {
    return (
        <article className={`w-full h-full fixed z-50 top-0 left-0`} >
            <div className="w-full h-full absolute bg-black/50 backdrop-blur-sm" onClick={FuncionCerrar}>

            </div>
            <section className="w-full h-48 bottom-0 absolute z-10 bg-Background flex flex-col justify-center items-center gap-10">
                <div className="w-full h-fit bg-mywhite/5 rounded-md p-4 flex flex-col gap-2 items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-12 bg-blue-500/90 rounded-full p-2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" className="fill-mywhite/30" />
                    </svg>
                    <p className="text-xl font-semibold text-mywhite">En construcción...</p>
                    <p className="text-sm font-normal text-mywhite/85">Pronto estará disponible esta sección.</p>
                </div>
            </section>
        </article>
    )
}