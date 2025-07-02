import FooterCustom from "@/components/UI/Footer.custom";
import NavbarCustom from "@/components/UI/Navbar.custom";

export default function LandingPage({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-Background text-mywhite overflow-x-hidden">
            <NavbarCustom
                retroceder={false}
                Logo={true}
                Cuenta={true}
                Paginas={true}
                responsivSettings={true}
            />
            {children}
            <FooterCustom />
        </main>
    )
}