import { NavigationMenuLink } from "@radix-ui/react-navigation-menu";

export default function ListItem({
    title,
    children,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    
    return (
        <li {...props}>
            <NavigationMenuLink asChild>
                <a href={`${href}`} className="h-16 flex flex-col gap-0 items-start justify-center ">
                    <div className="text-sm leading-none font-medium">{title}</div>
                    <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
                        {children}
                    </p>
                </a>
            </NavigationMenuLink>
        </li>
    )
}