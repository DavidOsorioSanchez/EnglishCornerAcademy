import NavbarCustom from "@/components/UI/Navbar.custom";

export default function Perfiles({ children }: { children: React.ReactNode }) {
    return (
        <main className="bg-Background text-mywhite overflow-x-hidden">
            <NavbarCustom />
            {children}
        </main>
    )
}