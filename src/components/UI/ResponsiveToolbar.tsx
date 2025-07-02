import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/UI/accordion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar"
import { Login, Singup, Home } from "@/utils/magicValues"
import { Link } from "react-router-dom"
import EnDesarrollo from "./EnDesarrollo"
import { List } from "@/utils/Arrays"

export default function ResponsiveToolbar({ FuncionCerrar }: { FuncionCerrar: () => void }) {
    return (
        <article className="w-full h-full fixed z-50 top-0 left-0 animate-ToolBarAparecer" >
            <div className="w-full h-full absolute bg-black/50 backdrop-blur-sm" onClick={FuncionCerrar}>

            </div>
            <section className="w-full h-auto bottom-0 absolute z-10 py-4 rounded-t-2xl bg-Background flex flex-col justify-center items-center gap-2 animate-ToolBarMenu">
                <Link to={Home} className="flex text-nowrap items-center space-x-2">
                    <img src="/IconPage.svg" alt="logo" className="w-12 h-12 aspect-square object-contain" />
                    <p className="block font-bold text-xl underline underline-offset-1 underline-mywhite/50 ">English Corner Academy.</p>
                </Link>
                <div className="w-full h-auto bg-mywhite/5 rounded-none p-4 flex flex-col gap-2 items-center">
                    <Accordion
                        type="single"
                        collapsible
                        className="w-full"
                        defaultValue="item-1"
                    >
                        <AccordionItem value="item-1">
                            <AccordionTrigger>
                                <div className="flex items-center gap-2">
                                    <Avatar className="w-8 h-8">
                                        <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
                                        <AvatarFallback>CN</AvatarFallback>
                                    </Avatar>
                                    <h2 className="text-lg">Usuario</h2>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="w-full flex gap-1 !justify-center ">
                                <div className=" flex flex-col gap-4 text-balance rounded-sm bg-Lightblue/25 transition-all hover:bg-Lightblue/25">
                                    <a
                                        className="from-muted/50 to-muted flex h-full w-full flex-col gap-4 justify-center items-center rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                        href={Login}
                                    >
                                        <Avatar>
                                            <AvatarImage src="https://avatars.githubusercontent.com/u/124599?v=4" />
                                            <AvatarFallback>CN</AvatarFallback>
                                        </Avatar>
                                        <div className="text-center flex flex-col gap-2.5">
                                            <div className="flex flex-col items-center justify-center gap-0">
                                                <p className="text-lg font-semibold text-nowrap">David Osorio</p>
                                                <p className="text-muted-foreground text-sm leading-tight border-t-[1px]">
                                                    Estudiante
                                                </p>
                                            </div>
                                        </div>
                                    </a>
                                </div>
                                <ul className=" flex flex-col gap-1 ">
                                    <Link to={Login} className="h-24 max-w-64 rounded-sm flex flex-col bg-Lightblue/25 p-2 gap-0 items-start justify-center ">
                                        <h3 className="text-sm leading-none font-medium">Inicio de sesión</h3>
                                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                            Inicia sesión para poder acceder a los contenidos de nuestra pagina.
                                        </p>
                                    </Link>
                                    <Link to={Singup} className="h-24 max-w-64 rounded-sm flex flex-col bg-Lightblue/25 p-2 gap-0 items-start justify-center ">
                                        <h3 className="text-sm leading-none font-medium">Registrarse</h3>
                                        <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                            Regístrate para crear una cuenta y acceder a más funciones.
                                        </p>
                                    </Link>
                                    {/* <ListItem href="/registration" title="Registrarse" className='bg-Lightblue/20 transition-all hover:bg-Lightblue/5'>
                                        Regístrate para crear una cuenta y acceder a más funciones.
                                    </ListItem> 
                                    <EnDesarrollo rounded>
                                        <ListItem href="/settings/user" title="Ajustes" className='bg-Lightblue/20 transition-all hover:bg-Lightblue/5'>
                                            Cierra sesión para proteger tu cuenta y datos personales.
                                        </ListItem>
                                    </EnDesarrollo>*/}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2">
                            <AccordionTrigger >
                                <div className="flex items-center gap-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                                    </svg>
                                    <h3 className="text-lg">Paginas</h3>
                                </div>
                            </AccordionTrigger>
                            <AccordionContent className="flex flex-col gap-4 text-balance">
                                <ul className="grid gap-2 grid-cols-1 overflow-y-visible min-[500px]:overflow-y-hidden min-[500px]:grid-cols-2 ">
                                    {List.map((item) => (
                                        <li className="bg-Lightblue/25 rounded-sm px-2 transition-all hover:bg-Lightblue/5" onClick={FuncionCerrar} key={item.href}>
                                            <a href={`#${item.href}`} className="h-16 flex flex-col gap-0 items-start justify-center ">
                                                <div className="text-sm leading-none font-medium">{item.title}</div>
                                                <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                                                    {item.description}
                                                </p>
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3">
                            <EnDesarrollo>
                                <AccordionTrigger>
                                    {/* <div className="flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                        </svg>

                                        <h3 className="text-lg">Ajustes</h3>
                                    </div> */}
                                </AccordionTrigger>
                                <AccordionContent className="flex flex-col gap-4 text-balance">
                                    <p>
                                        We stand behind our products with a comprehensive 30-day return
                                        policy. If you&apos;re not completely satisfied, simply return the
                                        item in its original condition.
                                    </p>
                                    <p>
                                        Our hassle-free return process includes free return shipping and
                                        full refunds processed within 48 hours of receiving the returned
                                        item.
                                    </p>
                                </AccordionContent>
                            </EnDesarrollo>

                        </AccordionItem>
                    </Accordion>
                </div>
            </section>
        </article>
    )
}