import { Link } from "react-router-dom";
import ErrorNotFound from "@/assets/icons/404-error.webp";
import { Home } from "@/utils/magicValues";

export default function NotFound() {
    return (
        <main className="w-screen min-h-screen flex flex-wrap gap-10 items-center justify-center">
            <div className="flex flex-col items-center justify-center gap-3 text-center">
                <h1 className="text-4xl font-bold text-mywhite">404</h1>
                <p className="text-xl text-mywhite/70">La página que buscas no existe.</p>
                <Link to={Home} className="text-mywhite/70 underline underline-offset-1 hover:no-underline">Volver a la página de inicio</Link>
            </div>
            <img src={ErrorNotFound} alt="404 Not Found" className="size-40 aspect-square object-contain mt-10" />
        </main>
    )
}