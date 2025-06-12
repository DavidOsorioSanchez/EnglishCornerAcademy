import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/UI/navigation-menu';
import { List } from '@/utils/Arrays';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/UI/avatar"
import EnDesarrollo from '@/components/UI/EnDesarrollo';

export default function NavbarCustom() {
    return (
        <nav className="bg-Items/20 flex justify-between items-center gap-2 px-8 py-2 shadow-md">
            <a href='/' className="flex text-nowrap items-center space-x-2">
                <img src="/IconPage.svg" alt="logo" className="w-12 h-12 aspect-square object-contain" />
                <p className="font-bold text-xl underline underline-offset-1 underline-mywhite/50">English Corner Academy.</p>
            </a>
            <div className="flex flex-nowrap gap-10 text-lg">
                <NavigationMenu viewport={false} className='hidden min-[768px]:block'>
                    <NavigationMenuList>
                        <NavigationMenuItem className='bg-mywhite text-Background rounded-sm'>
                            <NavigationMenuTrigger>Cuenta</NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-mywhite text-Background md:-translate-x-[20.8rem] lg:-translate-x-[27.11rem]'>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild className="bg-Lightblue/50 transition-all hover:bg-Lightblue/25">
                                            <a
                                                className="from-muted/50 to-muted flex h-full w-full flex-col gap-4 justify-center items-center rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                                href="/Login"
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
                                    <ListItem href="/Login" title="Inicio de sesión" className='bg-Lightblue/20 transition-all hover:bg-Lightblue/5'>
                                        Inicia sesion para poder aceder a los contenidos de nuestra pagina.
                                    </ListItem>
                                    <ListItem href="/registration" title="Registrarse" className='bg-Lightblue/20 transition-all hover:bg-Lightblue/5'>
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
                        <NavigationMenuItem className='bg-mywhite text-Background rounded-sm'>
                            <NavigationMenuTrigger>Paginas</NavigationMenuTrigger>
                            <NavigationMenuContent className=' bg-mywhite text-Background md:-translate-x-[18.18rem] lg:-translate-x-[24.50rem]'>
                                <ul className=" grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    {List.map((item) => (
                                        <ListItem key={item.href} href={item.href} title={item.title} className='bg-Lightblue/20 hover:brightness-110'>
                                            {item.description}
                                        </ListItem>
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
                <div className="block min-[768px]:hidden">
                    En Desarrollo...
                </div>
            </div>
        </nav>
    );
}

function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <a href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}