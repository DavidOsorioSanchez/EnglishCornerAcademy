import NavbarCustom from "@/components/UI/Navbar.custom";

export default function Auth( { children } : { children: React.ReactNode } ) {
    return (
        <main className="bg-Background text-mywhite overflow-x-hidden">
            <NavbarCustom
                retroceder={true}
                Logo={true}
                Cuenta={false}
                Paginas={false}
                responsivSettings={false}
            />
            {children}
        </main>
    )
}