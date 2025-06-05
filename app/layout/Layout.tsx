import {
    Links,
    Meta,
    Scripts,
    ScrollRestoration,
} from "react-router";
import NavbarCustom from "~/components/UI/Navbar.custom";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="es">
            <head>
                <meta charSet="utf-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/IconPage.svg" type="image/x-icon" />
                <Meta />
                <Links />
            </head>
            <body className="bg-Background text-mywhite">
                <NavbarCustom />
                {children}
                <ScrollRestoration />
                <Scripts />
            </body>
        </html>
    );
}