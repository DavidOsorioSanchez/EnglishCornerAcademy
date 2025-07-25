import { useState } from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/UI/navigation-menu';
import { List } from '@/utils/Arrays';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar"
import EnDesarrollo from '@/components/UI/EnDesarrollo';
import ResponsiveToolBar from '@/components/UI/ResponsiveToolbar';
import { Link } from 'react-router-dom';
import { Home, Login, Singup } from '@/utils/magicValues';
import ListItem from './ListItem';

interface NavbarCustomProps {
    retroceder: boolean;
    Logo: boolean;
    Cuenta: boolean;
    Paginas: boolean;
    responsivSettings: boolean;
}

export default function NavbarCustom(
    { retroceder, Logo, Cuenta, Paginas, responsivSettings }: NavbarCustomProps
) {
    const [open, setOpen] = useState(false);

    function FuncionToolBar() {
        setOpen(!open);
    }
    return (
        <nav className="bg-Items/20 flex justify-between items-center gap-2 px-8 py-2 shadow-md ">
            {retroceder && (
                <Link to={Home} className="hidden p-2 rounded-full bg-mywhite/20 hover:bg-mywhite/10 transition-all md:block">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                    </svg>

                </Link>
            )}
            {Logo && (
                <Link to={Home} className="flex text-nowrap items-center space-x-2 ">
                    <img src="/IconPage.svg" alt="logo" className="w-12 h-12 aspect-square object-contain" />
                    <p className="hidden font-bold text-xl underline underline-offset-1 underline-mywhite/50 sm:block">English Corner Academy.</p>
                </Link>
            )}
            <div className="flex flex-nowrap gap-10 text-lg">
                <NavigationMenu viewport={false} className='hidden md:block'>
                    <NavigationMenuList>
                        {Cuenta && (
                            <NavigationMenuItem className='bg-mywhite text-Background rounded-sm'>
                                <NavigationMenuTrigger>Cuenta</NavigationMenuTrigger>
                                <NavigationMenuContent className='bg-mywhite text-Background md:-translate-x-[20.8rem] lg:-translate-x-[27.11rem] z-50'>
                                    <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr] z-50">
                                        <li className="row-span-3">
                                            <NavigationMenuLink asChild className="bg-Lightblue/50 transition-all hover:bg-Lightblue/25">
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
                                            </NavigationMenuLink>
                                        </li>
                                        <ListItem href={Login} title="Inicio de sesión" className='bg-Lightblue/20 transition-all hover:bg-Lightblue/5'>
                                            Inicia sesion para poder aceder a los contenidos de nuestra pagina.
                                        </ListItem>
                                        <ListItem href={Singup} title="Registrarse" className='bg-Lightblue/20 transition-all hover:bg-Lightblue/5'>
                                            Regístrate para crear una cuenta y acceder a más funciones.
                                        </ListItem>
                                        <EnDesarrollo rounded>
                                            <ListItem href="/settings/user" title="Ajustes" className='bg-Lightblue/20 transition-all hover:bg-Lightblue/5'>
                                                Cierra sesión para proteger tu cuenta y datos personales.
                                            </ListItem>
                                        </EnDesarrollo>
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )}
                        {Paginas && (
                            <NavigationMenuItem className='bg-mywhite text-Background rounded-sm'>
                                <NavigationMenuTrigger>Paginas</NavigationMenuTrigger>
                                <NavigationMenuContent className=' bg-mywhite text-Background md:-translate-x-[18.18rem] lg:-translate-x-[24.50rem] z-50'>
                                    <ul className=" grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                        {List.map((item) => (
                                            <ListItem key={`#${item.href}`} href={`#${item.href}`} title={item.title} className='bg-Lightblue/20 hover:brightness-110 scroll-smooth '>
                                                {item.description}
                                            </ListItem>
                                        ))}
                                    </ul>
                                </NavigationMenuContent>
                            </NavigationMenuItem>
                        )}


                    </NavigationMenuList>
                </NavigationMenu>
                <div className="block min-[768px]:hidden">
                    <button className="w-10 h-10 p-2 bg-mywhite/20 rounded-full" onClick={FuncionToolBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
                        </svg>
                    </button>
                    {
                        open && <ResponsiveToolBar 
                            FuncionCerrar={FuncionToolBar} 
                            Cuenta={Cuenta} 
                            Paginas={Paginas}
                            retroceder={retroceder}
                            Logo={Logo}
                            responsivSettings={responsivSettings}
                        />
                    }
                </div>
            </div>
        </nav>
    );
}
