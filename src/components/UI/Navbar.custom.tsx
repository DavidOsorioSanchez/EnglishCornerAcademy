import React from 'react';
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger } from '@/components/UI/navigation-menu';
import { List } from '@/utils/Arrays';

export default function NavbarCustom() {
    return (
        <nav className="bg-Items/20 flex justify-between items-center gap-2 px-8 py-2 shadow-md ">
            <div className="flex text-nowrap items-center space-x-2">
                <img src="/IconPage.svg" alt="logo" className="w-12 h-12 aspect-square object-contain" />
                <p className="font-bold text-xl underline underline-offset-1 underline-mywhite/50">English Corner Academy.</p>
            </div>
            <div className="flex flex-nowrap gap-10 text-lg">
                <NavigationMenu viewport={false} className='hidden min-[768px]:block'>
                    <NavigationMenuList>
                        <NavigationMenuItem className='bg-mywhite text-Background rounded-sm'>
                            <NavigationMenuTrigger>Home</NavigationMenuTrigger>
                            <NavigationMenuContent className='bg-mywhite text-Background md:-translate-x-[20.8rem] lg:-translate-x-[27.11rem]'>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    <li className="row-span-3">
                                        <NavigationMenuLink asChild>
                                            <a
                                                className="from-muted/50 to-muted flex h-full w-full flex-col justify-end rounded-md bg-linear-to-b p-6 no-underline outline-hidden select-none focus:shadow-md"
                                                href="/"
                                            >
                                                <div className="mt-4 mb-2 text-lg font-medium">
                                                    shadcn/ui
                                                </div>
                                                <p className="text-muted-foreground text-sm leading-tight">
                                                    Beautifully designed components built with Tailwind CSS.
                                                </p>
                                            </a>
                                        </NavigationMenuLink>
                                    </li>
                                    <ListItem href="/docs" title="Introduction">
                                        Re-usable components built using Radix UI and Tailwind CSS.
                                    </ListItem>
                                    <ListItem href="/docs/installation" title="Installation">
                                        How to install dependencies and structure your app.
                                    </ListItem>
                                    <ListItem href="/docs/primitives/typography" title="Typography">
                                        Styles for headings, paragraphs, lists...etc
                                    </ListItem>
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className='bg-mywhite text-Background rounded-sm'>
                            <NavigationMenuTrigger>Components</NavigationMenuTrigger>
                            <NavigationMenuContent className=' bg-mywhite text-Background md:-translate-x-[18.18rem] lg:-translate-x-[24.50rem]'>
                                <ul className="grid gap-2 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                                    {List.map((item) => (
                                        <ListItem key={item.href} href={item.href} title={item.title}>
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