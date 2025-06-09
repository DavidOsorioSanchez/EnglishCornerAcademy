import FooterCustom from "@/components/UI/Footer.custom";
import NavbarCustom from "@/components/UI/Navbar.custom";


export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-Background text-mywhite">
            <NavbarCustom />
            {children}
            <FooterCustom />
        </main>
    );
}